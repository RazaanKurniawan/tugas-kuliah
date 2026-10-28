import * as pdfjsLib from 'pdfjs-dist'

// Configure worker using official Cloudflare CDN matching the library version
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`
}

/**
 * Extracts text from an uploaded File or ArrayBuffer
 * @param {File|Blob|ArrayBuffer} file
 * @returns {Promise<{ text: string, numPages: number }>}
 */
export async function extractTextFromPdf(file) {
  try {
    let arrayBuffer
    if (file instanceof ArrayBuffer) {
      arrayBuffer = file
    } else {
      arrayBuffer = await file.arrayBuffer()
    }

    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer })
    const pdfDocument = await loadingTask.promise
    const numPages = pdfDocument.numPages

    const pageTexts = []

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum)
      const textContent = await page.getTextContent()

      const strings = textContent.items
        .map(item => item.str)
        .filter(str => str && str.trim().length > 0)

      pageTexts.push(`--- Halaman ${pageNum} ---\n` + strings.join(' '))
    }

    const fullText = pageTexts.join('\n\n')

    if (!fullText || fullText.trim().length === 0) {
      throw new Error('PDF tidak memiliki layer teks (kemungkinan hasil scan gambar).')
    }

    return {
      text: fullText,
      numPages
    }
  } catch (error) {
    console.error('Gagal mengekstrak teks PDF dengan pdfjs:', error)
    throw error
  }
}
