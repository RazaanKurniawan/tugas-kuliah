<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <router-link to="/" class="brand-logo">
        <div class="logo-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-title">AI Academic<span class="gradient-text">.hub</span></span>
          <span class="brand-sub">Kelas 17.5A.01 • Teknologi Informasi</span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <nav class="nav-links">
        <router-link to="/" class="nav-item" active-class="active" exact>Beranda</router-link>
        <router-link to="/tugas-1" class="nav-item" active-class="active">Tugas 1: Sinergi AI</router-link>
        <router-link to="/tugas-2" class="nav-item" active-class="active">Tugas 2: Teknik Pencarian</router-link>
        <a href="#kelompok" class="nav-item" v-if="$route.path === '/'" @click.prevent="scrollToKelompok">Kelompok</a>
      </nav>

      <!-- Actions -->
      <div class="nav-actions">
        <!-- Theme Toggle -->
        <button class="icon-btn" @click="toggleTheme" :title="isDark ? 'Mode Terang' : 'Mode Gelap'">
          <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>

        <!-- Salin Link Current Page Button -->
        <CopyLinkBtn
          v-if="$route.path !== '/'"
          :task-name="$route.path === '/tugas-1' ? 'Tugas 1' : 'Tugas 2'"
          label="Salin Link Halaman"
          btn-class="btn-primary btn-sm"
        />
        <router-link v-else to="/tugas-1" class="btn btn-primary btn-sm">
          Mulai Baca
        </router-link>

        <!-- Mobile Menu Toggle -->
        <button class="icon-btn mobile-toggle" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu">
          <svg v-if="!mobileMenuOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div v-if="mobileMenuOpen" class="mobile-drawer">
      <router-link to="/" class="mobile-nav-link" @click="mobileMenuOpen = false">Beranda</router-link>
      <router-link to="/tugas-1" class="mobile-nav-link" @click="mobileMenuOpen = false">Tugas 1: Sinergi AI & Kognisi</router-link>
      <router-link to="/tugas-2" class="mobile-nav-link" @click="mobileMenuOpen = false">Tugas 2: Teknik Pencarian</router-link>
      <div class="mobile-actions">
        <CopyLinkBtn target-path="/tugas-1" task-name="Tugas 1" label="Salin Link Tugas 1" btn-class="btn-secondary btn-sm" />
        <CopyLinkBtn target-path="/tugas-2" task-name="Tugas 2" label="Salin Link Tugas 2" btn-class="btn-secondary btn-sm" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CopyLinkBtn from './CopyLinkBtn.vue'

const isDark = ref(true)
const mobileMenuOpen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.removeAttribute('data-theme')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light') {
    isDark.value = false
    document.documentElement.setAttribute('data-theme', 'light')
  }
})

const scrollToKelompok = () => {
  const el = document.getElementById('kelompok')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: var(--nav-height);
  background: var(--bg-glass);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: var(--text-main);
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  line-height: 1.1;
  color: var(--text-main);
}

.brand-sub {
  font-size: 0.72rem;
  color: var(--text-dim);
  font-weight: 500;
  margin-top: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.8rem;
}

.nav-item {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 600;
  padding: 0.4rem 0.2rem;
  position: relative;
  transition: color 0.2s ease;
}

.nav-item:hover {
  color: var(--text-main);
}

.nav-item.active {
  color: var(--accent-primary);
}

.nav-item.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-brand);
  border-radius: 2px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-medium);
  color: var(--text-main);
  width: 38px;
  height: 38px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.icon-btn:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.mobile-toggle {
  display: none;
}

.mobile-drawer {
  position: absolute;
  top: var(--nav-height);
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-medium);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: var(--shadow-lg);
}

.mobile-nav-link {
  text-decoration: none;
  color: var(--text-main);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 860px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>
