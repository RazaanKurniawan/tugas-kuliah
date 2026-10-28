const VERCEL_FALLBACK_URL = 'https://tugas-kuliah-razaan.vercel.app/api/chat'

/**
 * Generate structured academic blog article from PDF text using AI
 * @param {string} pdfText
 * @param {object} metadata { courseName, courseId, defaultClassName, defaultProgram, model }
 */
export async function generateAssignmentFromPdf(pdfText, metadata = {}) {
  const chosenModel = metadata.model || 'gemini-3.8-flash'

  const prompt = `Anda adalah asisten AI akademik tingkat lanjut. Tugas Anda adalah menganalisis teks tugas kuliah yang diekstrak dari dokumen PDF, lalu menghasilkan struktur data artikel blog akademik yang sangat rapi, mendalam, dan terstruktur.

Berikut adalah teks dokumen PDF:
---
${pdfText.slice(0, 18000)}
---

Mata Kuliah: ${metadata.courseName || 'Kecerdasan Buatan'}
Kelas: ${metadata.defaultClassName || '17.5A.01'}
Program Studi: ${metadata.defaultProgram || 'Teknologi Informasi'}

INSTRUKSI FORMAT OUTPUT:
Kembalikan HANYA format JSON valid tanpa teks pengantar atau penutup apapun (jangan sertakan markdown atau teks di luar blok JSON).
Format JSON yang harus dipatuhi:
{
  "title": "Judul Lengkap Tugas (contoh: Tugas 2 : Penerapan Algoritma Pencarian & Optimasi)",
  "shortTitle": "Judul Singkat (contoh: Tugas 2: Algoritma Pencarian)",
  "slug": "slug-url-ramah-seo (contoh: tugas-2-algoritma-pencarian)",
  "courseId": "${metadata.courseId || 'ai'}",
  "courseName": "${metadata.courseName || 'Kecerdasan Buatan'}",
  "topic": "Topik Utama Tugas",
  "badge": "Label Kategori",
  "readingTime": "15 Menit Baca",
  "summary": "Ringkasan komprehensif isi tugas dalam 2-3 kalimat",
  "instructions": [
    "1. Kerjakan secara Kelompok",
    "2. ..."
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
      "title": "SOAL 1: JUDUL SOAL DENGAN HURUF KAPITAL",
      "question": "Teks lengkap pertanyaan soal...",
      "answer": "Teks lengkap dan analisa terstruktur jawaban...",
      "keyPoints": [
        "Poin penting 1",
        "Poin penting 2"
      ]
    }
  ],
  "references": [
    "Daftar pustaka atau referensi akademik format baku APA..."
  ]
}`

  const payload = {
    model: chosenModel,
    messages: [
      {
        role: 'system',
        content: 'Anda adalah asisten pembuatan artikel blog ilmiah universitas. Hasilkan respons JSON yang valid dan lengkap sesuai instruksi pengguna.'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.3,
    max_tokens: 8192
  }

  let response = null
  let errorMessage = ''

  // 1. Try local dev middleware or relative /api/chat (works locally & on Vercel)
  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    if (res.ok) {
      response = res
    } else {
      const errBody = await res.text()
      errorMessage = `Proxy /api/chat HTTP ${res.status}: ${errBody}`
    }
  } catch (err) {
    errorMessage = `Local /api/chat network error: ${err.message}`
  }

  // 2. If relative /api/chat wasn't available, fall back to Vercel production serverless proxy
  if (!response) {
    try {
      const vercelRes = await fetch(VERCEL_FALLBACK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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
    throw new Error(`Gagal menghubungi server AI. ${errorMessage}`)
  }

  const result = await response.json()
  const rawContent = result.choices?.[0]?.message?.content || ''

  // Clean JSON string if wrapped in markdown
  let cleaned = rawContent.trim()
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.replace(/^```json\s*/, '').replace(/\s*```$/, '')
  } else if (cleaned.startsWith('```')) {
    cleaned = cleaned.replace(/^```\s*/, '').replace(/\s*```$/, '')
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
