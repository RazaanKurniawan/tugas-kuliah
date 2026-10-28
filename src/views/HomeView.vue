<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container hero-container">
        <div class="hero-badge-wrap">
          <span class="badge badge-primary">Publikasi Akademik Resmi</span>
          <span class="badge badge-cyan">Kelas {{ courseInfo.className }}</span>
        </div>

        <h1 class="hero-title">
          Portal Laporan & Blog Ilmiah<br />
          <span class="gradient-text">Kecerdasan Buatan</span>
        </h1>

        <p class="hero-desc">
          Dokumentasi komprehensif pengerjaan tugas akademik mata kuliah <strong>Kecerdasan Buatan</strong>,
          Program Studi <strong>{{ courseInfo.studyProgram }}</strong>, {{ courseInfo.institution }}.
          Disajikan dalam format blog interaktif berstandar ilmiah modern.
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
              <h4 class="submit-box-title">Pengumpulan Tugas via Link (MyBest)</h4>
              <p class="submit-box-desc">
                Sesuai petunjuk pengerjaan (bukan Google Drive), salin link masing-masing tugas berikut untuk dikumpulkan langsung ke MyBest:
              </p>
            </div>
          </div>

          <div class="submit-box-buttons">
            <CopyLinkBtn
              target-path="/tugas-1"
              task-name="Tugas 1"
              label="Salin Link Tugas 1"
              btn-class="btn-primary"
            />
            <CopyLinkBtn
              target-path="/tugas-2"
              task-name="Tugas 2"
              label="Salin Link Tugas 2"
              btn-class="btn-secondary"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Assignments Showcase Section -->
    <section class="section-assignments">
      <div class="container">
        <div class="section-header">
          <span class="badge badge-emerald">Daftar Artikel Tugas</span>
          <h2 class="section-title">Dokumentasi Tugas Kuliah</h2>
          <p class="section-sub">
            Pilih tugas di bawah ini untuk membaca analisis lengkap beserta diagram dan referensi ilmiah.
          </p>
        </div>

        <div class="assignments-grid">
          <!-- Card Tugas 1 -->
          <article class="assignment-card glass-card glass-card-interactive">
            <div class="card-badge-row">
              <span class="badge badge-primary">Tugas 1</span>
              <span class="reading-time">⏱ {{ assignments[0].readingTime }}</span>
            </div>

            <h3 class="card-title">
              <router-link to="/tugas-1">{{ assignments[0].title }}</router-link>
            </h3>

            <p class="card-summary">{{ assignments[0].summary }}</p>

            <div class="topics-tags">
              <span v-for="(t, i) in assignments[0].topics.slice(0, 4)" :key="i" class="topic-tag">
                # {{ t }}
              </span>
              <span class="topic-tag-more">+3 Topik Lainnya</span>
            </div>

            <div class="card-footer-actions">
              <router-link to="/tugas-1" class="btn btn-primary btn-sm">
                <span>Baca Artikel Lengkap</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>

              <CopyLinkBtn
                target-path="/tugas-1"
                task-name="Tugas 1"
                label="Salin Link"
                btn-class="btn-secondary btn-sm"
              />

              <a :href="assignments[0].pdfFile" target="_blank" download class="btn btn-outline btn-sm" title="Unduh PDF Asli">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>PDF</span>
              </a>
            </div>
          </article>

          <!-- Card Tugas 2 -->
          <article class="assignment-card glass-card glass-card-interactive">
            <div class="card-badge-row">
              <span class="badge badge-cyan">Tugas 2</span>
              <span class="reading-time">⏱ {{ assignments[1].readingTime }}</span>
            </div>

            <h3 class="card-title">
              <router-link to="/tugas-2">{{ assignments[1].title }}</router-link>
            </h3>

            <p class="card-summary">{{ assignments[1].summary }}</p>

            <div class="topics-tags">
              <span v-for="(t, i) in assignments[1].topics.slice(0, 4)" :key="i" class="topic-tag">
                # {{ t }}
              </span>
              <span class="topic-tag-more">+3 Topik Lainnya</span>
            </div>

            <div class="card-footer-actions">
              <router-link to="/tugas-2" class="btn btn-primary btn-sm">
                <span>Baca Artikel Lengkap</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </router-link>

              <CopyLinkBtn
                target-path="/tugas-2"
                task-name="Tugas 2"
                label="Salin Link"
                btn-class="btn-secondary btn-sm"
              />

              <a :href="assignments[1].pdfFile" target="_blank" download class="btn btn-outline btn-sm" title="Unduh PDF Asli">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>PDF</span>
              </a>
            </div>
          </article>
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
              Website blog ini dirancang khusus untuk memenuhi seluruh 7 instruksi pengerjaan dari dosen pengampu:
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
                <p>Setiap halaman tugas memiliki link permanen yang siap dikirim oleh setiap anggota kelompok.</p>
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
                <p>Dilengkapi buku rujukan standar AI (Russell & Norvig, Cognitive Psychology, IEEE).</p>
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
import { COURSE_INFO, ASSIGNMENTS } from '@/data/courseData'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'
import GroupMembersCard from '@/components/GroupMembersCard.vue'

const courseInfo = COURSE_INFO
const assignments = ASSIGNMENTS
</script>

<style scoped>
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

.section-assignments {
  padding: 4rem 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  margin: 0.6rem 0 0.4rem;
}

.section-sub {
  font-size: 1rem;
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
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
  margin-bottom: 1.5rem;
  flex: 1;
}

.topics-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 2rem;
}

.topic-tag {
  font-size: 0.78rem;
  background: rgba(255, 255, 255, 0.04);
  color: #38bdf8;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
  border: 1px solid var(--border-subtle);
  font-family: var(--font-mono);
}

.topic-tag-more {
  font-size: 0.78rem;
  color: var(--text-dim);
  padding: 0.25rem 0.4rem;
}

.card-footer-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-subtle);
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
