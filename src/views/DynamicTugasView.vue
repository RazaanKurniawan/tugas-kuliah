<template>
  <div class="article-page">
    <!-- Loading State -->
    <div v-if="isLoading" class="container container-narrow loading-box">
      <div class="pulse-loader">
        <div class="loader-ring"></div>
        <div class="loader-icon">📚</div>
      </div>
      <h3>Memuat Tugas dari Supabase...</h3>
      <p>Mengambil data artikel terverifikasi...</p>
    </div>

    <!-- Error / Not Found State -->
    <div v-else-if="!assignment" class="container container-narrow not-found-box glass-card">
      <span class="not-found-icon">⚠️</span>
      <h2>Tugas Tidak Ditemukan</h2>
      <p>Dokumen tugas dengan slug <code>{{ $route.params.slug }}</code> belum terdaftar di database Supabase.</p>
      <div class="not-found-actions">
        <router-link to="/" class="btn btn-primary">Kembali ke Beranda</router-link>
        <router-link to="/generator" class="btn btn-secondary">+ Upload & Generate Tugas Ini</router-link>
      </div>
    </div>

    <!-- Main Content when Loaded -->
    <div v-else>
      <!-- Header / Hero Section -->
      <header class="article-hero">
        <div class="container container-narrow">
          <nav class="breadcrumb-nav">
            <router-link to="/">Beranda</router-link>
            <span>/</span>
            <router-link to="/#courses">Mata Kuliah: {{ assignment.courseName || 'Akademik' }}</router-link>
            <span>/</span>
            <span class="breadcrumb-current">{{ assignment.shortTitle || assignment.title }}</span>
          </nav>

          <div class="article-meta-badges">
            <span class="badge badge-primary">Mata Kuliah: {{ assignment.courseName || 'Teknologi Informasi' }}</span>
            <span class="badge badge-cyan">Kelas: {{ assignment.identity?.className || portalInfo.className }}</span>
            <span class="badge badge-emerald">{{ assignment.identity?.studyProgram || portalInfo.studyProgram }}</span>
          </div>

          <h1 class="article-main-title">
            {{ assignment.title }}
          </h1>
          <p class="article-subtitle">
            {{ assignment.topic || assignment.summary }}
          </p>

          <!-- Identity Banner -->
          <div class="identity-banner glass-card">
            <div class="identity-header">
              <strong>Identitas Kelompok:</strong>
              <span>Kelas : {{ assignment.identity?.className || portalInfo.className }} • Program Studi : {{ assignment.identity?.studyProgram || portalInfo.studyProgram }}</span>
            </div>
            <div class="members-chips">
              <span v-for="m in portalInfo.members" :key="m.nim" class="member-chip">
                <span class="chip-name">{{ m.name }}</span>
                <span class="chip-nim">({{ m.nim }})</span>
              </span>
            </div>
          </div>

          <!-- Sticky Floating / Quick Actions -->
          <div class="article-actions-bar">
            <CopyLinkBtn
              :target-path="`/tugas/${assignment.slug}`"
              :task-name="assignment.shortTitle || 'Tugas'"
              label="Salin Link Tugas (MyBest)"
              btn-class="btn-primary"
            />

            <a
              v-if="assignment.pdfFile"
              :href="assignment.pdfFile"
              target="_blank"
              download
              class="btn btn-secondary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              <span>Unduh Dokumen PDF Asli</span>
            </a>

            <button class="btn btn-outline" @click="printPage">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Cetak / Simpan PDF</span>
            </button>

            <!-- Admin Delete Action -->
            <button
              v-if="isAuthenticated"
              class="btn btn-danger-subtle"
              @click="handleDeleteCurrent"
              title="Hapus tugas ini dari database Supabase"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Hapus Tugas (Admin)</span>
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content & Sidebar Layout -->
      <div class="container article-layout">
        <!-- Article Body -->
        <main class="article-body">
          <!-- Petunjuk Pengerjaan Box -->
          <section v-if="assignment.instructions?.length" class="guidelines-accordion glass-card">
            <div class="guidelines-card-header" @click="showGuidelines = !showGuidelines">
              <div class="guidelines-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <strong>Petunjuk Pengerjaan Tugas</strong>
              </div>
              <span class="accordion-toggle">{{ showGuidelines ? 'Sembunyikan ▲' : 'Lihat Petunjuk ▼' }}</span>
            </div>

            <div v-show="showGuidelines" class="guidelines-content">
              <ol class="pdf-instructions-list">
                <li v-for="(inst, i) in assignment.instructions" :key="i">
                  {{ inst }}
                </li>
              </ol>
            </div>
          </section>

          <!-- Dynamic Questions Sections -->
          <section
            v-for="(sec, idx) in assignment.sections"
            :key="idx"
            :id="`soal-${sec.number || (idx + 1)}`"
            class="question-card glass-card"
          >
            <div class="question-header">
              <div class="question-number-badge">
                {{ String(sec.number || (idx + 1)).padStart(2, '0') }}
              </div>
              <div>
                <span class="badge badge-primary">{{ sec.badge || `Soal ${idx + 1}` }}</span>
                <h2>{{ sec.title || `SOAL ${idx + 1}` }}</h2>
              </div>
            </div>

            <div class="question-prompt">
              <strong>Pertanyaan:</strong> {{ sec.question }}
            </div>

            <div class="answer-content verbatim-text">
              <div class="jawaban-badge">JAWABAN ANALITIS</div>
              
              <div class="rendered-answer" v-html="formatAnswerHtml(sec.answer)"></div>

              <!-- Key points callout -->
              <div v-if="sec.keyPoints?.length" class="callout callout-tip">
                <div class="callout-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span>Poin Kunci & Analisa Penting:</span>
                </div>
                <ul>
                  <li v-for="(kp, kIdx) in sec.keyPoints" :key="kIdx">{{ kp }}</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- References Section -->
          <section v-if="assignment.references?.length" id="referensi" class="question-card glass-card">
            <div class="question-header">
              <div class="question-number-badge">📚</div>
              <div>
                <span class="badge badge-primary">Daftar Pustaka</span>
                <h2>Sumber Referensi Akademik</h2>
              </div>
            </div>

            <div class="answer-content">
              <ol class="references-list">
                <li v-for="(ref, rIdx) in assignment.references" :key="rIdx">
                  {{ ref }}
                </li>
              </ol>
            </div>
          </section>

          <!-- Bottom Navigation & Share -->
          <div class="article-bottom-nav">
            <router-link to="/" class="btn btn-secondary">
              ← Kembali ke Portal Akademik
            </router-link>
            <div class="bottom-actions">
              <CopyLinkBtn
                :target-path="`/tugas/${assignment.slug}`"
                :task-name="assignment.shortTitle || 'Tugas'"
                label="Salin Link MyBest"
                btn-class="btn-primary"
              />
            </div>
          </div>
        </main>

        <!-- Sticky TOC Sidebar -->
        <aside class="article-toc">
          <div class="toc-sidebar glass-card">
            <h4 class="toc-title">Daftar Isi Soal</h4>
            <nav class="toc-nav">
              <a
                v-for="(sec, idx) in assignment.sections"
                :key="idx"
                :href="`#soal-${sec.number || (idx + 1)}`"
                class="toc-link"
              >
                {{ String(sec.number || (idx + 1)).padStart(2, '0') }}. {{ sec.title?.replace(/^SOAL\s+\d+:\s*/i, '').slice(0, 24) }}...
              </a>
              <a v-if="assignment.references?.length" href="#referensi" class="toc-link">
                📚 Sumber Referensi
              </a>
            </nav>

            <hr class="toc-divider" />

            <div class="toc-quick-copy">
              <span class="toc-label">Tautan Pengumpulan:</span>
              <CopyLinkBtn
                :target-path="`/tugas/${assignment.slug}`"
                :task-name="assignment.shortTitle || 'Tugas'"
                label="Salin Link Halaman Ini"
                btn-class="btn-primary btn-sm"
              />
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PORTAL_INFO } from '@/data/courseData'
import { getAssignmentBySlug, deleteAssignment } from '@/services/supabase'
import { useAuth } from '@/services/auth'
import { useToast } from '@/composables/useToast'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'

const route = useRoute()
const router = useRouter()
const { isAuthenticated } = useAuth()
const { showToast } = useToast()
const portalInfo = PORTAL_INFO

const assignment = ref(null)
const isLoading = ref(true)
const showGuidelines = ref(true)

const handleDeleteCurrent = async () => {
  if (!confirm(`Yakin ingin menghapus artikel tugas "${assignment.value?.title}" dari database Supabase?`)) return
  const res = await deleteAssignment(route.params.slug)
  if (res.success) {
    showToast('Artikel tugas berhasil dihapus.', 'success')
    router.push('/')
  } else {
    showToast(`Gagal menghapus: ${res.error}`, 'info')
  }
}

const loadAssignment = async () => {
  isLoading.value = true
  const slug = route.params.slug
  try {
    const data = await getAssignmentBySlug(slug)
    assignment.value = data
  } catch (err) {
    console.error('Failed to load assignment:', err)
  } finally {
    isLoading.value = false
  }
}

const formatAnswerHtml = (text) => {
  if (!text) return ''
  // Basic paragraph formatting
  return text
    .split('\n\n')
    .map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
    .join('')
}

const printPage = () => {
  window.print()
}

onMounted(() => {
  loadAssignment()
})

watch(() => route.params.slug, () => {
  loadAssignment()
})
</script>

<style scoped>
.loading-box {
  text-align: center;
  padding: 8rem 0;
}

.not-found-box {
  text-align: center;
  padding: 5rem 2rem;
  margin: 4rem auto;
  border-radius: var(--radius-lg);
}

.not-found-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.not-found-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.article-page {
  padding-bottom: 5rem;
}

.article-hero {
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 3rem;
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
}

.breadcrumb-nav {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
  color: var(--text-dim);
  flex-wrap: wrap;
}

.breadcrumb-nav a {
  color: var(--accent-primary);
  text-decoration: none;
}

.article-meta-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.article-main-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
}

.article-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.identity-banner {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
  border: 1px solid var(--border-medium);
}

.identity-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.members-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.member-chip {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  display: inline-flex;
  gap: 0.35rem;
}

.chip-name {
  color: var(--text-main);
  font-weight: 600;
}

.chip-nim {
  color: var(--accent-cyan);
  font-family: var(--font-mono);
}

.article-actions-bar {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.guidelines-accordion {
  padding: 1.25rem 1.75rem;
  border-radius: var(--radius-md);
  margin-bottom: 2.5rem;
  border: 1px solid var(--border-medium);
}

.guidelines-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.guidelines-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-main);
}

.accordion-toggle {
  font-size: 0.85rem;
  color: var(--accent-primary);
  font-weight: 600;
}

.guidelines-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.pdf-instructions-list {
  padding-left: 1.5rem;
  line-height: 1.8;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.pdf-instructions-list li {
  margin-bottom: 0.4rem;
}

.article-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 3rem;
  align-items: start;
}

.article-body {
  min-width: 0;
}

.question-card {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  margin-bottom: 3rem;
}

.jawaban-badge {
  display: inline-block;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.verbatim-text {
  font-size: 1.02rem;
  line-height: 1.85;
  color: var(--text-muted);
}

.rendered-answer {
  line-height: 1.85;
}

.rendered-answer :deep(p) {
  margin-bottom: 1.25rem;
}

.references-list {
  padding-left: 1.5rem;
  line-height: 1.9;
}

.references-list li {
  margin-bottom: 0.75rem;
  color: var(--text-muted);
}

.article-bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 1rem;
}

.bottom-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.toc-title {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 1.25rem 0;
}

.toc-quick-copy {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toc-label {
  font-size: 0.78rem;
  color: var(--text-dim);
  font-weight: 600;
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

@keyframes spin {
  to { transform: rotate(360deg); }
}

@media (max-width: 960px) {
  .article-layout {
    grid-template-columns: 1fr;
  }
  .article-toc {
    display: none;
  }
}
</style>
