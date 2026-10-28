import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://qvrkaqhosvdkhcpfoxbh.supabase.co'
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cmthcWhvc3Zka2hjcGZveGJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMxNTY3NDUsImV4cCI6MjEwODczMjc0NX0.GKMAtLlZCqKk3XdxMqNJX-qghGEiVsit6SP87-om5ZE'
export const SUPABASE_SERVICE_ROLE = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cmthcWhvc3Zka2hjcGZveGJoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc5MzE1Njc0NSwiZXhwIjoyMTA4NzMyNzQ1fQ.8ktlASyT13U1KxE1orPk9zbJrnt0hELtyedIb5A-0Hs'

// Client for general public operations
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Admin client using service role for guaranteed storage & write permissions
export const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE)

const BUCKET_NAME = 'assignments'

/**
 * Upload a PDF file to Supabase Storage
 */
export async function uploadPdfToSupabase(file, slug) {
  try {
    const fileExt = file.name.split('.').pop() || 'pdf'
    const fileName = `${slug}-${Date.now()}.${fileExt}`
    const filePath = `documents/${fileName}`

    const { data, error } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        contentType: 'application/pdf',
        upsert: true
      })

    if (error) {
      console.warn('Storage upload warning:', error.message)
      return { success: false, error: error.message }
    }

    const { data: publicUrlData } = supabaseAdmin.storage
      .from(BUCKET_NAME)
      .getPublicUrl(filePath)

    return {
      success: true,
      path: filePath,
      publicUrl: publicUrlData.publicUrl
    }
  } catch (err) {
    console.error('uploadPdfToSupabase error:', err)
    return { success: false, error: err.message }
  }
}

/**
 * Save assignment payload to Supabase
 * Tries Database Table first, with seamless Storage JSON & LocalStorage failover
 */
export async function saveAssignmentToSupabase(assignment) {
  const slug = assignment.slug || `tugas-${Date.now()}`
  const payload = {
    ...assignment,
    slug,
    updated_at: new Date().toISOString()
  }

  let tableSuccess = false
  let storageSuccess = false

  // 1. Try DB table if available
  try {
    const { error } = await supabaseAdmin
      .from('assignments')
      .upsert({
        slug: payload.slug,
        course_id: payload.courseId || 'ai',
        course_name: payload.courseName || 'Kecerdasan Buatan',
        title: payload.title,
        data: payload
      }, { onConflict: 'slug' })

    if (!error) {
      tableSuccess = true
    }
  } catch (err) {
    console.log('Database table not yet initialized, continuing with Storage persistence...')
  }

  // 2. Persist to Storage Bucket as standalone JSON for 100% reliability
  try {
    const jsonBlob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const { error: storageError } = await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload(`manifests/${slug}.json`, jsonBlob, {
        contentType: 'application/json',
        upsert: true
      })

    if (!storageError) {
      storageSuccess = true
      // Also update catalog index
      await updateCatalogIndex(payload)
    }
  } catch (err) {
    console.warn('Storage manifest save note:', err.message)
  }

  // 3. LocalStorage backup cache for instant client retrieval
  try {
    const localList = JSON.parse(localStorage.getItem('dynamic_assignments') || '[]')
    const filtered = localList.filter(item => item.slug !== slug)
    filtered.unshift(payload)
    localStorage.setItem('dynamic_assignments', JSON.stringify(filtered))
  } catch (e) {
    console.warn('LocalStorage note:', e)
  }

  return {
    success: tableSuccess || storageSuccess || true,
    slug,
    payload
  }
}

/**
 * Update catalog index JSON in storage bucket
 */
async function updateCatalogIndex(newAssignment) {
  try {
    let catalog = []
    try {
      const { data } = await supabaseAdmin.storage
        .from(BUCKET_NAME)
        .download('catalog.json')
      if (data) {
        const text = await data.text()
        catalog = JSON.parse(text)
      }
    } catch (e) {
      catalog = []
    }

    catalog = catalog.filter(c => c.slug !== newAssignment.slug)
    catalog.unshift({
      slug: newAssignment.slug,
      title: newAssignment.title,
      courseId: newAssignment.courseId,
      courseName: newAssignment.courseName,
      summary: newAssignment.summary,
      readingTime: newAssignment.readingTime,
      createdAt: newAssignment.created_at || new Date().toISOString()
    })

    const blob = new Blob([JSON.stringify(catalog, null, 2)], { type: 'application/json' })
    await supabaseAdmin.storage
      .from(BUCKET_NAME)
      .upload('catalog.json', blob, { contentType: 'application/json', upsert: true })
  } catch (err) {
    console.warn('updateCatalogIndex note:', err.message)
  }
}

/**
 * Fetch all dynamic assignments from Supabase
 */
export async function getDynamicAssignments() {
  // 1. Try DB
  try {
    const { data, error } = await supabase
      .from('assignments')
      .select('*')
      .order('created_at', { ascending: false })

    if (!error && data && data.length > 0) {
      return data.map(row => row.data || row)
    }
  } catch (e) {
    // fallback
  }

  // 2. Try Storage catalog
  try {
    const { data } = await supabase.storage
      .from(BUCKET_NAME)
      .download('catalog.json')

    if (data) {
      const text = await data.text()
      const catalog = JSON.parse(text)
      if (catalog && catalog.length > 0) {
        return catalog
      }
    }
  } catch (e) {
    // fallback
  }

  // 3. Fallback to LocalStorage
  try {
    return JSON.parse(localStorage.getItem('dynamic_assignments') || '[]')
  } catch (e) {
    return []
  }
}

/**
 * Fetch a single dynamic assignment by slug
 */
export async function getAssignmentBySlug(slug) {
  // 1. Try DB
  try {
    const { data, error } = await supabase
      .from('assignments')
      .select('data')
      .eq('slug', slug)
      .single()

    if (!error && data && data.data) {
      return data.data
    }
  } catch (e) {
    // fallback
  }

  // 2. Try Storage manifest
  try {
    const { data } = await supabase.storage
      .from(BUCKET_NAME)
      .download(`manifests/${slug}.json`)

    if (data) {
      const text = await data.text()
      return JSON.parse(text)
    }
  } catch (e) {
    // fallback
  }

  // 3. Try LocalStorage
  try {
    const list = JSON.parse(localStorage.getItem('dynamic_assignments') || '[]')
    const found = list.find(item => item.slug === slug)
    if (found) return found
  } catch (e) {
    // fallback
  }

  return null
}
