<template>
  <footer class="academic-footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <span class="gradient-text">AI Academic Hub</span>
          </div>
          <p class="footer-desc">
            Dokumentasi dan publikasi tugas kelompok mata kuliah <strong>Kecerdasan Buatan (Artificial Intelligence)</strong>.
            Disusun dengan standar analisis ilmiah, metodologi komparatif, dan implementasi interaktif.
          </p>
          <div class="academic-meta-tags">
            <span class="badge badge-primary">Kelas 17.5A.01</span>
            <span class="badge badge-cyan">Teknologi Informasi</span>
            <span class="badge badge-emerald">Portal MyBest</span>
          </div>
        </div>

        <div class="footer-links-group">
          <h4 class="footer-heading">Navigasi Tugas</h4>
          <ul class="footer-list">
            <li>
              <router-link to="/tugas-1">Tugas 1: Sinergi AI & Kognisi Manusia</router-link>
            </li>
            <li>
              <router-link to="/tugas-2">Tugas 2: Teknik Pencarian & Optimasi</router-link>
            </li>
            <li>
              <a href="/docs/Tugas1AI.pdf" target="_blank" download>Unduh PDF Soal & Jawaban Tugas 1</a>
            </li>
            <li>
              <a href="/docs/Tugas2AI.pdf" target="_blank" download>Unduh PDF Soal & Jawaban Tugas 2</a>
            </li>
          </ul>
        </div>

        <div class="footer-members-group">
          <h4 class="footer-heading">Tim Penyusun</h4>
          <ul class="footer-members-list">
            <li><strong>Razaan Kurniawan Putra</strong> (17240286)</li>
            <li><strong>Ridho Putra Rianar</strong> (17240102)</li>
            <li><strong>Aby Yazzy Wijaya</strong> (17240158)</li>
            <li><strong>Toma Brema</strong> (17240099)</li>
            <li><strong>Sam Nurullah</strong> (17240117)</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copy-text">
          &copy; 2026 Tim Kecerdasan Buatan 17.5A.01. Dibuat menggunakan Vue 3 & siap di-deploy ke Vercel untuk pengumpulan MyBest.
        </p>
        <button class="back-to-top" @click="scrollToTop" title="Kembali ke atas">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
          <span>Ke Atas</span>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped>
.academic-footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-subtle);
  padding: 4.5rem 0 2.5rem;
  margin-top: 6rem;
  position: relative;
  z-index: 2;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
}

.footer-logo {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.footer-desc {
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 440px;
  margin-bottom: 1.5rem;
}

.academic-meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-heading {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 1.25rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 28px;
  height: 2px;
  background: var(--accent-primary);
  border-radius: 2px;
}

.footer-list, .footer-members-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-list a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color 0.2s ease, transform 0.2s ease;
  display: inline-block;
}

.footer-list a:hover {
  color: var(--accent-primary);
  transform: translateX(3px);
}

.footer-members-list li {
  font-size: 0.88rem;
  color: var(--text-muted);
}

.footer-members-list strong {
  color: var(--text-main);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  font-size: 0.88rem;
  color: var(--text-dim);
  flex-wrap: wrap;
  gap: 1rem;
}

.back-to-top {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  color: var(--text-muted);
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.back-to-top:hover {
  color: var(--accent-primary);
  border-color: var(--accent-primary);
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
