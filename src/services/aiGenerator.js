const AI_BASE_URL = 'https://shiteru.id/v1'
const AI_API_KEY = 'sk_live_71Bj_fbjVVkCRLJY99vhZvBMlBVHfoyX4NEIk0Kg0HI'

/**
 * Generate structured academic blog article from PDF text using AI
 * @param {string} pdfText
 * @param {object} metadata { courseName, courseId, defaultClassName, defaultProgram }
 */
export async function generateAssignmentFromPdf(pdfText, metadata = {}) {
  const prompt = `Anda adalah asisten AI akademik tingkat lanjut. Tugas Anda adalah menganalisis teks tugas kuliah yang diekstrak dari dokumen PDF, lalu menghasilkan struktur data artikel blog akademik yang sangat rapi, mendalam, dan terstruktur.

Berikut adalah teks dokumen PDF:
---
${pdfText.slice(0, 18000)}
---

Mata Kuliah: ${metadata.courseName || 'Kecerdasan Buatan'}
Kelas: ${metadata.defaultClassName || '17.5A.01'}
Program Studi: ${metadata.defaultProgram || 'Teknologi Informasi'}

INSTRUKSI FORMAT OUTPUT:
Kembalikan HANYA format JSON valid tanpa teks pengantar atau penutup apapun (jangan gunakan markdown di luar blok JSON).
Format JSON yang harus dipatuhi:
{
  "title": "Judul Lengkap Tugas (contoh: Tugas 3 : Analisis Arsitektur Sistem)",
  "shortTitle": "Judul Singkat (contoh: Tugas 3: Arsitektur Sistem)",
  "slug": "slug-url-ramah-seo (contoh: tugas-3-arsitektur-sistem)",
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

  const response = await fetch(`${AI_BASE_URL}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${AI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gemini-3.8-flash',
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
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`AI API Error (${response.status}): ${errorText}`)
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
