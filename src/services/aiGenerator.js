import { getAuthToken } from './auth'

export const AI_BASE_URL = 'https://shiteru.id/v1'
export const VERCEL_FALLBACK_URL = 'https://tugas-kuliah-razaan.vercel.app/v1/chat/completions'

/**
 * Generate structured academic blog article from PDF text using AI (Gemini via shiteru.id)
 * @param {string} pdfText
 * @param {object} metadata { courseName, courseId, defaultClassName, defaultProgram, model }
 */
export async function generateAssignmentFromPdf(pdfText, metadata = {}) {
  const chosenModel = metadata.model || 'gemini-3.8-flash'

  // Clean and condense PDF text to speed up processing
  const cleanPdfText = (pdfText || '')
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .slice(0, 8500)

  const prompt = `Anda adalah asisten AI akademik universitas. Analisis teks dokumen tugas kuliah berikut:
---
${cleanPdfText}
---

Mata Kuliah: ${metadata.courseName || 'Kecerdasan Buatan'}
Kelas: ${metadata.defaultClassName || '17.5A.01'}
Program Studi: ${metadata.defaultProgram || 'Teknologi Informasi'}

INSTRUKSI PENTING:
1. Kembalikan HANYA format JSON valid, dimulai langsung dengan karakter { dan diakhiri }. Jangan menambahkan teks pengantar, penutup, atau markdown apapun di luar objek JSON.
2. Setiap soal dalam dokumen harus dijawab secara analitis, tajam, komprehensif, dan to-the-point berstandar akademik.
3. Struktur JSON yang WAJIB dipatuhi:
{
  "title": "Judul Lengkap Tugas",
  "shortTitle": "Judul Singkat Tugas",
  "slug": "slug-url-ramah-seo",
  "courseId": "${metadata.courseId || 'ai'}",
  "courseName": "${metadata.courseName || 'Kecerdasan Buatan'}",
  "topic": "Topik Utama Tugas",
  "badge": "Kategori",
  "readingTime": "15 Menit Baca",
  "summary": "Ringkasan komprehensif isi tugas dalam 2-3 kalimat ilmiah.",
  "instructions": [
    "1. Kerjakan secara Kelompok",
    "2. Unggah jawaban ke portal MyBest"
  ],
  "identity": {
    "className": "${metadata.defaultClassName || '17.5A.01'}",
    "studyProgram": "${metadata.defaultProgram || 'Teknologi Informasi'}",
    "institution": "Universitas Bina Sarana Informatika (UBSI)"
  },
  "sections": [
    {
      "number": 1,
      "badge": "Soal 1",
      "title": "SOAL 1: JUDUL SOAL DALAM HURUF BESAR",
      "question": "Teks lengkap pertanyaan soal...",
      "answer": "Jawaban lengkap dan analisa terstruktur akademik...",
      "keyPoints": [
        "Poin penting 1",
        "Poin penting 2"
      ]
    }
  ],
  "references": [
    "Russell, S., & Norvig, P. (2020). Artificial Intelligence: A Modern Approach (4th ed.). Pearson."
  ]
}`

  const payload = {
    model: chosenModel,
    messages: [
      {
        role: 'system',
        content: 'Anda adalah asisten pembuatan artikel blog ilmiah universitas. Hasilkan respons JSON murni yang valid tanpa teks pengantar.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.2,
    max_tokens: 3600
  }

  let response = null
  let errorMessage = ''

  const authToken = getAuthToken()
  const authHeaders = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${authToken}`
  }

  // 1. Try local dev proxy endpoint /v1/chat/completions (matching Base URL https://shiteru.id/v1)
  try {
    const res = await fetch('/v1/chat/completions', {
      method: 'POST',
      headers: authHeaders,
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      response = res
    } else {
      const errBody = await res.text()
      errorMessage = `/v1/chat/completions status ${res.status}: ${errBody}`
    }
  } catch (err) {
    errorMessage = `Local proxy error: ${err.message}`
  }

  // 2. Try alternative /api/chat if /v1/chat/completions didn't catch
  if (!response) {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        response = res
      }
    } catch (e) {
      // continue to fallback
    }
  }

  // 3. Fallback to Vercel production serverless proxy
  if (!response) {
    try {
      const vercelRes = await fetch(VERCEL_FALLBACK_URL, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(payload)
      })
      if (vercelRes.ok) {
        response = vercelRes
      } else {
        const vText = await vercelRes.text()
        errorMessage += ` | Vercel fallback HTTP ${vercelRes.status}: ${vText}`
      }
    } catch (vErr) {
      errorMessage += ` | Vercel fallback error: ${vErr.message}`
    }
  }

  if (!response) {
    throw new Error(`Gagal menghubungi server AI (https://shiteru.id/v1). ${errorMessage}`)
  }

  const result = await response.json()
  const rawContent = result.choices?.[0]?.message?.content || ''

  // Clean JSON string: strip markdown blocks or leading conversational text
  let cleaned = rawContent.trim()
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '')
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '')
  }

  // If there is still conversational text before the opening brace, extract the JSON block
  const jsonMatch = cleaned.match(/\{[\s\S]*\}/)
  if (jsonMatch) {
    cleaned = jsonMatch[0]
  }

  try {
    const parsed = JSON.parse(cleaned)
    // Guarantee fallback slug if missing
    if (!parsed.slug) {
      parsed.slug = `tugas-${Date.now()}`
    }
    return parsed
  } catch (err) {
    console.error('Failed to parse AI JSON:', cleaned)
    throw new Error('Format JSON dari AI tidak valid. Silakan coba lagi.')
  }
}
