<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-badge-wrap">
          <span class="badge badge-primary">Portal Blog & Arsip Akademik</span>
          <span class="badge badge-cyan">Kelas {{ portalInfo.className }}</span>
          <span class="badge badge-emerald">{{ portalInfo.studyProgram }}</span>
        </div>

        <h1 class="hero-title">
          Portal Blog Akademik &<br />
          <span class="gradient-text">Publikasi Tugas Kuliah</span>
        </h1>

        <p class="hero-desc">
          Platform publikasi digital resmi mahasiswa <strong>Kelas {{ portalInfo.className }}</strong>,
          Program Studi <strong>{{ portalInfo.studyProgram }}</strong>, {{ portalInfo.institution }}.
          Dirancang untuk mengarsipkan seluruh laporan dan artikel tugas lintas mata kuliah semester ini.
        </p>

        <!-- Quick Submission Action Box -->
        <div class="quick-submit-box glass-card">
          <div class="submit-box-content">
            <div class="submit-box-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
            <div>
              <h4 class="submit-box-title">Pengumpulan Tugas via Link (Portal MyBest)</h4>
              <p class="submit-box-desc">
                Salin tautan blog resmi masing-masing tugas berikut untuk dikumpulkan langsung ke MyBest:
              </p>
            </div>
          </div>

          <div class="submit-box-buttons">
            <CopyLinkBtn
              target-path="/tugas-1"
              task-name="Tugas 1 (AI)"
              label="Salin Link Tugas 1"
              btn-class="btn-primary"
            />
            <CopyLinkBtn
              target-path="/tugas-2"
              task-name="Tugas 2 (AI)"
              label="Salin Link Tugas 2"
              btn-class="btn-secondary"
            />
          </div>
        </div>

        <!-- AI Generator Studio CTA Box -->
        <div class="ai-studio-cta glass-card">
          <div class="cta-left">
            <div class="cta-badge-row">
              <span class="badge badge-primary">✨ Fitur Otomatisasi Baru</span>
              <span class="badge badge-cyan">AI + Supabase</span>
            </div>
            <h3>Punya PDF Tugas Kuliah Baru?</h3>
            <p>
              Tinggal unggah file dokumen PDF, AI akan langsung menganalisis dan membuat tampilan artikel blog tugas yang rapi serta otomatis tersimpan ke database Supabase.
            </p>
          </div>
          <router-link to="/generator" class="btn btn-primary btn-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span>Buka AI PDF Generator</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Multi-Course Hub Section -->
    <section class="section-courses" id="courses">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-cyan">Katalog Akademik Multi-Mata Kuliah</span>
          <h2 class="section-title">Daftar Mata Kuliah Semester 5</h2>
          <p class="section-sub">
            Portal ini dirancang modular untuk menampung seluruh tugas mata kuliah semester ini. Pilih filter untuk melihat tugas yang aktif.
          </p>
        </div>

        <!-- Course Tabs Filter -->
        <div class="course-filter-bar">
          <button
            :class="['filter-btn', { active: selectedCourseId === 'all' }]"
            @click="selectedCourseId = 'all'"
          >
            Semua Mata Kuliah
          </button>
          <button
            v-for="course in courses"
            :key="course.id"
            :class="['filter-btn', { active: selectedCourseId === course.id }]"
            @click="selectedCourseId = course.id"
          >
            {{ course.name }}
            <span v-if="course.status === 'Aktif'" class="counter-badge">{{ course.assignmentsCount }}</span>
          </button>
        </div>

        <!-- Active Assignments Grid (Kecerdasan Buatan) -->
        <div v-if="selectedCourseId === 'all' || selectedCourseId === 'ai'" class="assignments-section-block">
          <div class="course-category-title">
            <div class="category-indicator"></div>
            <div>
              <h3>Mata Kuliah: Kecerdasan Buatan (Kode: AI-175A)</h3>
              <p>2 Tugas Essay & Penyelesaian Masalah dengan Teknik Pencarian</p>
            </div>
          </div>

          <div class="assignments-grid">
            <!-- Tugas 1 -->
            <article class="assignment-card glass-card glass-card-interactive">
              <div class="card-badge-row">
                <span class="badge badge-primary">Tugas 1 • Kecerdasan Buatan</span>
                <span class="reading-time">⏱ 15 Menit Baca</span>
              </div>

              <h3 class="card-title">
                <router-link to="/tugas-1">
                  Tugas 1 : Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman
                </router-link>
              </h3>

              <p class="card-summary">
                Membahas 7 Soal Essay mengenai Sinergi AI & Kognisi Manusia, Cognitive Offloading, Computational Thinking & Prompt Engineering, Flow State, Etika & Empati, Continuous Learning, dan Kreativitas Zero-to-One.
              </p>

              <div class="card-footer-actions">
                <router-link to="/tugas-1" class="btn btn-primary btn-sm">
                  <span>Baca Tugas 1</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </router-link>

                <CopyLinkBtn
                  target-path="/tugas-1"
                  task-name="Tugas 1"
                  label="Salin Link"
                  btn-class="btn-secondary btn-sm"
                />

                <a href="/docs/Tugas1AI.pdf" target="_blank" download class="btn btn-outline btn-sm" title="Unduh PDF Asli">
                  PDF
                </a>
              </div>
            </article>

            <!-- Tugas 2 -->
            <article class="assignment-card glass-card glass-card-interactive">
              <div class="card-badge-row">
                <span class="badge badge-cyan">Tugas 2 • Kecerdasan Buatan</span>
                <span class="reading-time">⏱ 20 Menit Baca</span>
              </div>

              <h3 class="card-title">
                <router-link to="/tugas-2">
                  Tugas 2 : Penyelesaian Masalah dengan Teknik Pencarian (Search Algorithms)
                </router-link>
              </h3>

              <p class="card-summary">
                Membahas 7 Soal Essay Formulasi Masalah (Robot Gudang), Perbandingan BFS vs DFS, Iterative Deepening Search (IDS), Heuristik A* Admissible, Local Search Hill Climbing & Simulated Annealing, Studi Kasus 8-Queens (Min-Conflicts), dan Mitigasi OOM pada Sistem Ride-Hailing.
              </p>

              <div class="card-footer-actions">
                <router-link to="/tugas-2" class="btn btn-primary btn-sm">
                  <span>Baca Tugas 2</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </router-link>

                <CopyLinkBtn
                  target-path="/tugas-2"
                  task-name="Tugas 2"
                  label="Salin Link"
                  btn-class="btn-secondary btn-sm"
                />

                <a href="/docs/Tugas2AI.pdf" target="_blank" download class="btn btn-outline btn-sm" title="Unduh PDF Asli">
                  PDF
                </a>
              </div>
            </article>

            <!-- Dynamic Assignments from Supabase -->
            <article
              v-for="dyn in dynamicAssignments"
              :key="dyn.slug"
              class="assignment-card glass-card glass-card-interactive"
            >
              <div class="card-badge-row">
                <span class="badge badge-emerald">{{ dyn.courseName || 'Tugas Baru' }}</span>
                <span class="reading-time">⏱ {{ dyn.readingTime || '15 Menit Baca' }}</span>
              </div>

              <h3 class="card-title">
                <router-link :to="`/tugas/${dyn.slug}`">
                  {{ dyn.title }}
                </router-link>
              </h3>

              <p class="card-summary">{{ dyn.summary }}</p>

              <div class="card-footer-actions">
                <router-link :to="`/tugas/${dyn.slug}`" class="btn btn-primary btn-sm">
                  <span>Baca Tugas</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </router-link>

                <CopyLinkBtn
                  :target-path="`/tugas/${dyn.slug}`"
                  :task-name="dyn.title"
                  label="Salin Link"
                  btn-class="btn-secondary btn-sm"
                />

                <a v-if="dyn.pdfFile" :href="dyn.pdfFile" target="_blank" download class="btn btn-outline btn-sm" title="Unduh PDF">
                  PDF
                </a>
              </div>
            </article>
          </div>
        </div>

        <!-- Upcoming Courses Grid (RPL, Basis Data, Jaringan) -->
        <div v-if="selectedCourseId === 'all' || selectedCourseId !== 'ai'" class="upcoming-courses-block">
          <div class="course-category-title" style="margin-top: 3rem;">
            <div class="category-indicator indicator-muted"></div>
            <div>
              <h3>Mata Kuliah Lainnya (Siap untuk Tugas Selanjutnya)</h3>
              <p>Struktur siap digunakan saat tugas semester aktif diberikan</p>
            </div>
          </div>

          <div class="courses-preview-grid">
            <div
              v-for="course in otherCourses"
              :key="course.id"
              class="course-preview-card glass-card"
            >
              <div class="course-code-tag">{{ course.code }}</div>
              <h4 class="course-preview-title">{{ course.name }}</h4>
              <p class="course-preview-desc">{{ course.description }}</p>
              <div class="course-status-pill">
                <span class="pulse-dot"></span>
                <span>{{ course.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Checklist Petunjuk Pengerjaan Dosen -->
    <section class="section-guidelines">
      <div class="container">
        <div class="guidelines-card glass-card">
          <div class="guidelines-header">
            <span class="badge badge-amber">Kepatuhan Akademik</span>
            <h3>Kesesuaian dengan Petunjuk Pengerjaan Tugas</h3>
            <p>
              Website blog ini memenuhi seluruh 7 instruksi pengerjaan dari dosen pengampu:
            </p>
          </div>

          <div class="guidelines-grid">
            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>1. Pengerjaan Berkelompok</strong>
                <p>Kolaborasi 5 mahasiswa Kelas 17.5A.01 dengan kontribusi riset mendalam.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>2. Web / Blog Pribadi (Bukan Google Drive)</strong>
                <p>Dideploy ke Vercel dengan domain publik yang dapat diakses kapan saja secara cepat.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>3. Pengiriman Menggunakan Link Blog</strong>
                <p>Setiap halaman tugas memiliki tautan permanen yang siap dikirim oleh setiap anggota kelompok.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>4. Cantumkan NIM & Nama Lengkap</strong>
                <p>Tercantum jelas pada header, kartu identitas, serta footer di setiap artikel tugas.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>5. Analisa Terstruktur & Referensi Ilmiah</strong>
                <p>Teks tugas 100% persis dengan naskah PDF dilengkapi daftar pustaka baku.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>6. Diagram & Simulasi Interaktif</strong>
                <p>Disertai visualisasi pohon pencarian graf, matriks kompleksitas, dan simulasi 8-Queens.</p>
              </div>
            </div>

            <div class="guide-item">
              <span class="guide-check">✓</span>
              <div>
                <strong>7. Pemuatan Link di MyBest</strong>
                <p>Tersedia tombol satu-klik "Salin Link Tugas" untuk kemudahan input ke MyBest.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Group Members Section -->
    <div class="container">
      <GroupMembersCard />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { PORTAL_INFO, COURSES } from '@/data/courseData'
import { getDynamicAssignments } from '@/services/supabase'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'
import GroupMembersCard from '@/components/GroupMembersCard.vue'

const portalInfo = PORTAL_INFO
const courses = COURSES
const selectedCourseId = ref('all')
const dynamicAssignments = ref([])

onMounted(async () => {
  try {
    const list = await getDynamicAssignments()
    dynamicAssignments.value = list
  } catch (err) {
    console.warn('Note loading dynamic assignments:', err)
  }
})

const otherCourses = computed(() => {
  if (selectedCourseId.value === 'all') {
    return courses.filter(c => c.id !== 'ai')
  }
  return courses.filter(c => c.id === selectedCourseId.value)
})
</script>

<style scoped>
.ai-studio-cta {
  width: 100%;
  max-width: 820px;
  margin-top: 1.5rem;
  padding: 1.75rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(99, 102, 241, 0.35);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 50%, rgba(236, 72, 153, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-align: left;
}

.cta-left h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0 0.3rem;
}

.cta-left p {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0;
  line-height: 1.5;
}

.cta-badge-row {
  display: flex;
  gap: 0.5rem;
}

@media (max-width: 860px) {
  .ai-studio-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}

.hero-section {
  padding: 5rem 0 3.5rem;
  text-align: center;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge-wrap {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-title {
  max-width: 900px;
  margin-bottom: 1.5rem;
}

.hero-desc {
  max-width: 720px;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
  color: var(--text-muted);
}

.quick-submit-box {
  width: 100%;
  max-width: 820px;
  padding: 1.75rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-align: left;
  background: var(--bg-card);
  box-shadow: var(--shadow-glow);
}

.submit-box-content {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.submit-box-icon {
  width: 50px;
  height: 50px;
  border-radius: var(--radius-md);
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-primary);
  flex-shrink: 0;
}

.submit-box-title {
  font-size: 1.1rem;
  margin-bottom: 0.2rem;
}

.submit-box-desc {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0;
  line-height: 1.5;
}

.submit-box-buttons {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.section-courses {
  padding: 4rem 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-title {
  font-size: 2rem;
  margin: 0.6rem 0 0.4rem;
}

.section-sub {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 620px;
  margin: 0 auto;
}

.course-filter-bar {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 600;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  background: var(--bg-card-hover);
  color: var(--text-main);
  border-color: var(--accent-primary);
}

.filter-btn.active {
  background: var(--gradient-brand);
  color: #ffffff;
  border-color: transparent;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.counter-badge {
  background: rgba(255, 255, 255, 0.25);
  font-size: 0.75rem;
  padding: 0.1rem 0.45rem;
  border-radius: 99px;
}

.course-category-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
}

.category-indicator {
  width: 5px;
  height: 42px;
  border-radius: 3px;
  background: var(--accent-primary);
}

.indicator-muted {
  background: var(--text-dim);
}

.course-category-title h3 {
  font-size: 1.35rem;
  margin-bottom: 0.2rem;
}

.course-category-title p {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.assignments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 2rem;
}

.assignment-card {
  padding: 2.2rem;
  border-radius: var(--radius-lg);
  display: flex;
  flex-direction: column;
}

.card-badge-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.reading-time {
  font-size: 0.82rem;
  color: var(--text-dim);
  font-weight: 500;
}

.card-title {
  font-size: 1.35rem;
  margin-bottom: 1rem;
  line-height: 1.35;
}

.card-title a {
  text-decoration: none;
  color: var(--text-main);
  transition: color 0.2s ease;
}

.card-title a:hover {
  color: var(--accent-primary);
}

.card-summary {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
  flex: 1;
  line-height: 1.65;
}

.card-footer-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
}

.courses-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.course-preview-card {
  padding: 1.75rem;
  border-radius: var(--radius-md);
  border: 1px dashed var(--border-medium);
  display: flex;
  flex-direction: column;
}

.course-code-tag {
  font-size: 0.75rem;
  color: var(--accent-cyan);
  font-family: var(--font-mono);
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.course-preview-title {
  font-size: 1.15rem;
  margin-bottom: 0.5rem;
}

.course-preview-desc {
  font-size: 0.88rem;
  color: var(--text-dim);
  flex: 1;
  margin-bottom: 1.25rem;
  line-height: 1.6;
}

.course-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.78rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.3rem 0.7rem;
  border-radius: var(--radius-full);
  align-self: flex-start;
}

.pulse-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-dim);
}

.section-guidelines {
  padding: 3rem 0;
}

.guidelines-card {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
}

.guidelines-header {
  margin-bottom: 2rem;
}

.guidelines-header h3 {
  font-size: 1.5rem;
  margin: 0.5rem 0 0.35rem;
}

.guidelines-header p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 0;
}

.guidelines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.guide-item {
  display: flex;
  gap: 0.85rem;
  align-items: flex-start;
}

.guide-check {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent-emerald);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

.guide-item strong {
  display: block;
  font-size: 0.92rem;
  color: var(--text-main);
  margin-bottom: 0.2rem;
}

.guide-item p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0;
  line-height: 1.5;
}

@media (max-width: 860px) {
  .quick-submit-box {
    flex-direction: column;
    align-items: flex-start;
  }
  .submit-box-buttons {
    width: 100%;
    flex-direction: column;
  }
}
</style>
