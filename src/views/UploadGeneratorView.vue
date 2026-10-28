<template>
  <div class="generator-page">
    <div class="container container-narrow">
      <nav class="breadcrumb-nav">
        <router-link to="/">Beranda</router-link>
        <span>/</span>
        <span class="breadcrumb-current">AI Studio: Upload PDF & Generator</span>
      </nav>

      <div class="generator-header">
        <span class="badge badge-primary">AI Automation & Supabase Integration</span>
        <h1 class="generator-title">
          Generator Artikel Tugas <span class="gradient-text">Otomatis AI</span>
        </h1>
        <p class="generator-sub">
          Unggah dokumen PDF soal atau materi tugas kuliah Anda. AI akan mengekstrak teks, menyusun struktur essay & jawaban analitis berstandar akademik, lalu menyimpannya langsung ke database Supabase.
        </p>
      </div>

      <!-- Main Generator Card -->
      <div class="glass-card generator-card">
        <!-- Step 1: Form & File Input -->
        <div v-if="!isProcessing && !generatedResult" class="upload-section">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">Pilih Mata Kuliah:</label>
              <select v-model="selectedCourseId" class="form-select">
                <option v-for="c in courses" :key="c.id" :value="c.id">
                  {{ c.name }} ({{ c.code }})
                </option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label">Model AI:</label>
              <select v-model="selectedModel" class="form-select">
                <option value="gemini-3.8-flash">Gemini 3.8 Flash (High Context - Direkomendasikan)</option>
                <option value="deepseek-v4.1-flash">Deepseek V4.1 Flash</option>
              </select>
            </div>
          </div>

          <!-- File Drop Zone -->
          <div
            :class="['dropzone', { 'dropzone-active': isDragging }]"
            @dragover.prevent="isDragging = true"
            @dragleave.prevent="isDragging = false"
            @drop.prevent="handleDrop"
            @click="triggerFileInput"
          >
            <input
              type="file"
              ref="fileInputRef"
              accept=".pdf"
              class="hidden-file-input"
              @change="handleFileSelect"
            />

            <div class="dropzone-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="18" x2="12" y2="12"></line>
                <polyline points="9 15 12 12 15 15"></polyline>
              </svg>
            </div>

            <div v-if="!selectedFile" class="dropzone-text">
              <h4>Pilih atau Drag & Drop File PDF Tugas di Sini</h4>
              <p>Mendukung format <code>.pdf</code> (Soal Essay, Tugas Kelompok, Kisi-kisi, Laporan)</p>
              <button type="button" class="btn btn-secondary btn-sm">Pilih File PDF</button>
            </div>

            <div v-else class="file-preview-pill" @click.stop>
              <div class="file-info-col">
                <span class="file-name">📄 {{ selectedFile.name }}</span>
                <span class="file-size">Ukuran: {{ (selectedFile.size / 1024).toFixed(1) }} KB</span>
              </div>
              <button type="button" class="remove-file-btn" @click.stop="selectedFile = null">✕</button>
            </div>
          </div>

          <!-- Action Button -->
          <div class="generate-action-bar">
            <button
              class="btn btn-primary btn-lg"
              :disabled="!selectedFile"
              @click="startGeneration"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Mulai Analisis & Generate Artikel Blog (AI)</span>
            </button>
          </div>
        </div>

        <!-- Step 2: Processing Live Status -->
        <div v-if="isProcessing" class="processing-section">
          <div class="pulse-loader">
            <div class="loader-ring"></div>
            <div class="loader-icon">✨</div>
          </div>

          <div class="live-target-badge">
            <span class="live-pulse-dot"></span>
            <span>Target AI: <strong>https://shiteru.id/v1</strong> • Model: <strong>{{ selectedModel }}</strong></span>
          </div>

          <h3 class="processing-title">{{ currentStepText }}</h3>
          <p class="processing-sub">
            AI sedang menganalisis dokumen dan menyusun artikel akademik lengkap. Mohon tunggu sekitar 15-25 detik.
          </p>

          <div class="progress-bar-container">
            <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
          </div>
          <div class="progress-percent-label">{{ Math.round(progressPercent) }}% • {{ elapsedSeconds }} detik berjalan</div>

          <div class="progress-steps-list">
            <div :class="['prog-step', { done: stepProgress > 1, active: stepProgress === 1 }]">
              <span class="step-dot"></span>
              <span>1. Ekstraksi teks & struktur soal dari file PDF</span>
            </div>
            <div :class="['prog-step', { done: stepProgress > 2, active: stepProgress === 2 }]">
              <span class="step-dot"></span>
              <span>2. Analisis analitis & formulasi jawaban essay dengan Gemini Flash</span>
            </div>
            <div :class="['prog-step', { done: stepProgress > 3, active: stepProgress === 3 }]">
              <span class="step-dot"></span>
              <span>3. Unggah file PDF asli ke Supabase Storage (Bucket assignments)</span>
            </div>
            <div :class="['prog-step', { done: stepProgress > 4, active: stepProgress === 4 }]">
              <span class="step-dot"></span>
              <span>4. Menyimpan data artikel ke Database Supabase</span>
            </div>
          </div>
        </div>

        <!-- Step 3: Success Result & Preview -->
        <div v-if="generatedResult" class="result-section">
          <div class="result-success-badge">
            <span class="success-icon">✓</span>
            <div>
              <h3>Artikel Tugas Berhasil Dibuat & Disimpan ke Supabase!</h3>
              <p>Tugas Anda sekarang sudah aktif dan dapat diakses publik via tautan resmi.</p>
            </div>
          </div>

          <!-- Quick Link Box -->
          <div class="result-link-box">
            <div class="link-label">Tautan Publik Siap Dikirim ke MyBest:</div>
            <div class="link-input-group">
              <input type="text" readonly :value="generatedUrl" class="link-input" />
              <CopyLinkBtn
                :target-path="`/tugas/${generatedResult.slug}`"
                task-name="Tugas Baru"
                label="Salin Link MyBest"
                btn-class="btn-primary"
              />
            </div>
          </div>

          <!-- Generated Article Overview Preview -->
          <div class="preview-card glass-card">
            <div class="preview-header">
              <span class="badge badge-emerald">{{ generatedResult.courseName }}</span>
              <span class="badge badge-cyan">{{ generatedResult.readingTime || '15 Menit Baca' }}</span>
            </div>
            <h2 class="preview-title">{{ generatedResult.title }}</h2>
            <p class="preview-summary">{{ generatedResult.summary }}</p>

            <div class="preview-sections-summary">
              <h4>Daftar Soal & Analisis Terstruktur yang Dihasilkan ({{ generatedResult.sections?.length || 0 }} Soal):</h4>
              <ul class="preview-soal-list">
                <li v-for="(sec, idx) in generatedResult.sections" :key="idx">
                  <strong>{{ sec.title || `Soal ${idx + 1}` }}</strong>
                  <p class="soal-preview-text">{{ sec.question?.slice(0, 140) }}...</p>
                </li>
              </ul>
            </div>

            <div class="preview-actions">
              <router-link :to="`/tugas/${generatedResult.slug}`" class="btn btn-primary">
                <span>Buka Halaman Tugas Lengkap</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </router-link>

              <button class="btn btn-secondary" @click="resetGenerator">
                + Upload & Generate Tugas Lain
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { COURSES, PORTAL_INFO } from '@/data/courseData'
import { extractTextFromPdf } from '@/utils/pdfExtractor'
import { generateAssignmentFromPdf } from '@/services/aiGenerator'
import { uploadPdfToSupabase, saveAssignmentToSupabase } from '@/services/supabase'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'
import { useToast } from '@/composables/useToast'
import confetti from 'canvas-confetti'

const courses = COURSES
const selectedCourseId = ref('ai')
const selectedModel = ref('gemini-3.8-flash')
const fileInputRef = ref(null)
const selectedFile = ref(null)
const isDragging = ref(false)

const isProcessing = ref(false)
const stepProgress = ref(0)
const currentStepText = ref('')
const elapsedSeconds = ref(0)
const progressPercent = ref(10)
const generatedResult = ref(null)
const generatedUrl = ref('')
let timerInterval = null

const { showToast } = useToast()

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const handleFileSelect = (e) => {
  const file = e.target.files?.[0]
  if (file) {
    selectedFile.value = file
  }
}

const handleDrop = (e) => {
  isDragging.value = false
  const file = e.dataTransfer.files?.[0]
  if (file && file.type === 'application/pdf') {
    selectedFile.value = file
  } else {
    showToast('Harap pilih file dokumen berformat PDF.', 'info')
  }
}

const startGeneration = async () => {
  if (!selectedFile.value) return

  isProcessing.value = true
  stepProgress.value = 1
  elapsedSeconds.value = 0
  progressPercent.value = 10
  currentStepText.value = 'Mengekstrak teks & struktur soal dari dokumen PDF...'

  // Live timer & progressive stages
  if (timerInterval) clearInterval(timerInterval)
  timerInterval = setInterval(() => {
    elapsedSeconds.value++
    if (stepProgress.value === 1) {
      progressPercent.value = Math.min(25, progressPercent.value + 4)
    } else if (stepProgress.value === 2) {
      if (elapsedSeconds.value < 5) {
        currentStepText.value = `Menyusun struktur essay & jawaban dengan AI (${selectedModel.value})...`
        progressPercent.value = Math.min(45, progressPercent.value + 3)
      } else if (elapsedSeconds.value < 14) {
        currentStepText.value = 'AI Gemini sedang merumuskan analisis ilmiah & membedah tiap soal...'
        progressPercent.value = Math.min(72, progressPercent.value + 2)
      } else if (elapsedSeconds.value < 22) {
        currentStepText.value = 'Menyusun analisis analitis per soal & format baku referensi akademik...'
        progressPercent.value = Math.min(88, progressPercent.value + 1.2)
      } else {
        currentStepText.value = 'Memvalidasi struktur data & menyiapkan integrasi Supabase...'
        progressPercent.value = Math.min(94, progressPercent.value + 0.4)
      }
    } else if (stepProgress.value === 3) {
      currentStepText.value = 'Mengunggah file PDF asli ke Supabase Storage...'
      progressPercent.value = Math.max(95, progressPercent.value)
    } else if (stepProgress.value === 4) {
      currentStepText.value = 'Menyimpan artikel ke database Supabase...'
      progressPercent.value = 98
    }
  }, 1000)

  const currentCourse = courses.find(c => c.id === selectedCourseId.value) || {
    id: 'ai',
    name: 'Kecerdasan Buatan'
  }

  try {
    // 1. Extract PDF text
    const { text, numPages } = await extractTextFromPdf(selectedFile.value)
    
    // 2. Call AI Generator (via local/Vercel proxy to https://shiteru.id/v1)
    stepProgress.value = 2
    currentStepText.value = `Menyusun struktur essay & jawaban dengan AI (${selectedModel.value})...`
    
    const aiOutput = await generateAssignmentFromPdf(text, {
      courseId: currentCourse.id,
      courseName: currentCourse.name,
      defaultClassName: PORTAL_INFO.className,
      defaultProgram: PORTAL_INFO.studyProgram
    })

    // 3. Upload original PDF to Supabase Storage
    stepProgress.value = 3
    currentStepText.value = 'Mengunggah file PDF asli ke Supabase Storage...'
    
    const uploadResult = await uploadPdfToSupabase(selectedFile.value, aiOutput.slug)
    if (uploadResult.success) {
      aiOutput.pdfFile = uploadResult.publicUrl
      aiOutput.pdfName = selectedFile.value.name
    }

    // 4. Save assignment payload to Supabase
    stepProgress.value = 4
    currentStepText.value = 'Menyimpan artikel ke database Supabase...'
    
    await saveAssignmentToSupabase(aiOutput)

    // Complete!
    progressPercent.value = 100
    generatedResult.value = aiOutput
    generatedUrl.value = `https://tugas-kuliah-razaan.vercel.app/tugas/${aiOutput.slug}`
    
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    
    showToast('Artikel tugas berhasil digenerate dan disimpan ke Supabase!', 'success')
  } catch (err) {
    console.error('Generation error:', err)
    showToast(`Error: ${err.message || 'Gagal memproses dokumen'}`, 'info')
  } finally {
    if (timerInterval) clearInterval(timerInterval)
    isProcessing.value = false
  }
}

const resetGenerator = () => {
  if (timerInterval) clearInterval(timerInterval)
  selectedFile.value = null
  generatedResult.value = null
  stepProgress.value = 0
  elapsedSeconds.value = 0
  progressPercent.value = 10
}
</script>

<style scoped>
.generator-page {
  padding: 3.5rem 0 5rem;
}

.breadcrumb-nav {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
  color: var(--text-dim);
}

.breadcrumb-nav a {
  color: var(--accent-primary);
  text-decoration: none;
}

.generator-header {
  margin-bottom: 2.5rem;
}

.generator-title {
  font-size: clamp(2rem, 4vw, 2.7rem);
  margin: 0.5rem 0 0.5rem;
}

.generator-sub {
  font-size: 1.05rem;
  color: var(--text-muted);
  line-height: 1.6;
}

.generator-card {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text-main);
}

.form-select {
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  color: var(--text-main);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  font-family: var(--font-sans);
  outline: none;
  cursor: pointer;
}

.dropzone {
  border: 2px dashed var(--border-medium);
  border-radius: var(--radius-lg);
  padding: 3.5rem 2rem;
  text-align: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.01);
  transition: all 0.2s ease;
  margin-bottom: 2rem;
}

.dropzone:hover, .dropzone-active {
  border-color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.05);
}

.hidden-file-input {
  display: none;
}

.dropzone-icon {
  width: 68px;
  height: 68px;
  margin: 0 auto 1.25rem;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
}

.dropzone-text h4 {
  font-size: 1.15rem;
  margin-bottom: 0.4rem;
}

.dropzone-text p {
  font-size: 0.88rem;
  color: var(--text-dim);
  margin-bottom: 1.25rem;
}

.file-preview-pill {
  display: inline-flex;
  align-items: center;
  gap: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  padding: 1rem 1.5rem;
  border-radius: var(--radius-md);
  text-align: left;
}

.file-info-col {
  display: flex;
  flex-direction: column;
}

.file-name {
  font-weight: 700;
  color: var(--text-main);
}

.file-size {
  font-size: 0.8rem;
  color: var(--text-dim);
}

.remove-file-btn {
  background: rgba(244, 63, 94, 0.15);
  border: none;
  color: var(--accent-rose);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 700;
}

.generate-action-bar {
  display: flex;
  justify-content: center;
}

.processing-section {
  text-align: center;
  padding: 2.5rem 1rem;
}

.pulse-loader {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-ring {
  position: absolute;
  inset: 0;
  border: 4px solid rgba(99, 102, 241, 0.2);
  border-top-color: var(--accent-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loader-icon {
  font-size: 2rem;
}

.live-target-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 0.35rem 0.9rem;
  border-radius: 9999px;
  font-size: 0.8rem;
  color: var(--accent-cyan);
  margin-bottom: 1.25rem;
}

.live-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 1.5s infinite;
}

.progress-bar-container {
  width: 100%;
  max-width: 440px;
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  margin: 0 auto 0.4rem;
  overflow: hidden;
}

.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-cyan));
  border-radius: 9999px;
  transition: width 0.4s ease;
}

.progress-percent-label {
  font-size: 0.82rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.processing-title {
  font-size: 1.35rem;
  margin-bottom: 0.5rem;
}

.processing-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  max-width: 500px;
  margin: 0 auto 2rem;
}

.progress-steps-list {
  max-width: 440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  text-align: left;
}

.prog-step {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  font-size: 0.9rem;
  color: var(--text-dim);
}

.prog-step.active {
  color: var(--accent-primary);
  font-weight: 600;
}

.prog-step.done {
  color: var(--accent-emerald);
}

.step-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-medium);
}

.prog-step.active .step-dot {
  background: var(--accent-primary);
  box-shadow: 0 0 8px var(--accent-primary);
}

.prog-step.done .step-dot {
  background: var(--accent-emerald);
}

.result-success-badge {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
}

.success-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--accent-emerald);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-weight: 800;
  flex-shrink: 0;
}

.result-success-badge h3 {
  font-size: 1.25rem;
  color: var(--accent-emerald);
  margin-bottom: 0.2rem;
}

.result-success-badge p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.result-link-box {
  background: var(--bg-card);
  border: 1px solid var(--border-glow);
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
}

.link-label {
  font-size: 0.82rem;
  color: var(--text-dim);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.link-input-group {
  display: flex;
  gap: 0.75rem;
}

.link-input {
  flex: 1;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--border-medium);
  padding: 0.75rem 1rem;
  border-radius: var(--radius-sm);
  color: var(--text-main);
  font-family: var(--font-mono);
  font-size: 0.92rem;
  outline: none;
}

.preview-card {
  padding: 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
}

.preview-header {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.preview-title {
  font-size: 1.6rem;
  margin-bottom: 0.75rem;
}

.preview-summary {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
  line-height: 1.6;
}

.preview-sections-summary h4 {
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.preview-soal-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.preview-soal-list li {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--accent-primary);
  padding: 0.85rem 1rem;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

.soal-preview-text {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin: 0.3rem 0 0;
}

.preview-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border-subtle);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
  }
  .link-input-group {
    flex-direction: column;
  }
}
</style>
