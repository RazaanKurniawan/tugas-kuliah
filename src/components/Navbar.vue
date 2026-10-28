<template>
  <header class="navbar">
    <div class="container navbar-inner">
      <!-- Left: Sidebar Toggle & Brand -->
      <div class="navbar-left">
        <button class="sidebar-trigger-btn" @click="sidebarOpen = true" title="Buka Menu Navigasi & Daftar Tugas">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span class="trigger-label">Menu</span>
        </button>

        <router-link to="/" class="brand-logo">
          <div class="logo-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div class="brand-text">
            <span class="brand-title">Academic<span class="gradient-text">.hub</span></span>
            <span class="brand-sub">Portal Tugas • Kelas 17.5A.01</span>
          </div>
        </router-link>
      </div>

      <!-- Desktop Navigation (Clean & Uncluttered) -->
      <nav class="nav-links">
        <router-link to="/" class="nav-item" active-class="active" exact>Beranda</router-link>
        <a href="/#courses" class="nav-item">Mata Kuliah</a>
        <a href="/#kelompok" class="nav-item">Kelompok</a>
        <button class="nav-item nav-btn-inline" @click="sidebarOpen = true">
          <span>📚 Semua Tugas</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
        </button>
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

        <!-- AI Generator Button -->
        <router-link to="/generator" class="btn btn-outline btn-sm" :title="isAuthenticated ? 'AI Studio Generator' : 'Khusus Admin (Perlu Login)'">
          <svg v-if="!isAuthenticated" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          <span>{{ isAuthenticated ? '+ Upload PDF' : 'Upload PDF' }}</span>
        </router-link>

        <!-- Auth Status & Actions -->
        <div v-if="isAuthenticated" class="admin-nav-group">
          <span class="admin-status-pill" title="Administrator Terautentikasi">
            <span class="admin-dot"></span>
            <span>Admin</span>
          </span>
          <button class="icon-btn logout-nav-btn" @click="handleLogout" title="Keluar / Logout Admin">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
          </button>
        </div>
        <router-link v-else to="/login" class="btn btn-ghost btn-sm login-nav-btn" title="Masuk sebagai Administrator">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Login</span>
        </router-link>

        <!-- Salin Link Current Page Button -->
        <CopyLinkBtn
          v-if="$route.path.startsWith('/tugas')"
          :task-name="'Tugas'"
          label="Salin Link Halaman"
          btn-class="btn-primary btn-sm"
        />
      </div>
    </div>

    <!-- Sliding Sidebar Drawer -->
    <Sidebar :is-open="sidebarOpen" @close="sidebarOpen = false" />
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/services/auth'
import { useToast } from '@/composables/useToast'
import CopyLinkBtn from './CopyLinkBtn.vue'
import Sidebar from './Sidebar.vue'

const router = useRouter()
const { currentUser, isAuthenticated, logout } = useAuth()
const { showToast } = useToast()

const isDark = ref(true)
const sidebarOpen = ref(false)

const handleLogout = async () => {
  await logout()
  showToast('Anda telah keluar dari mode administrator.', 'info')
  router.push('/')
}

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

.navbar-left {
  display: flex;
  align-items: center;
  gap: 1.15rem;
}

.sidebar-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-medium);
  color: var(--text-main);
  padding: 0.55rem 0.85rem;
  border-radius: var(--radius-md);
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.sidebar-trigger-btn:hover {
  background: rgba(99, 102, 241, 0.15);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-1px);
}

.trigger-label {
  font-family: var(--font-sans);
}

.nav-btn-inline {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-family: inherit;
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
  gap: 1.6rem;
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

.nav-dropdown {
  position: relative;
}

.nav-dropdown-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.4rem 0.2rem;
  font-family: var(--font-sans);
  transition: color 0.2s ease;
}

.nav-dropdown-btn:hover {
  color: var(--text-main);
}

.nav-dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 250px;
  padding: 0.75rem;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.5rem;
}

.dropdown-header {
  font-size: 0.72rem;
  color: var(--text-dim);
  text-transform: uppercase;
  font-weight: 700;
  padding: 0.3rem 0.5rem;
  letter-spacing: 0.05em;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.6rem 0.75rem;
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.88rem;
  transition: background 0.15s ease;
}

.dropdown-item:hover:not(.item-disabled) {
  background: rgba(255, 255, 255, 0.05);
}

.dropdown-item-sub {
  display: block;
  font-size: 0.75rem;
  color: var(--text-dim);
}

.item-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.dot-active {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-emerald);
  flex-shrink: 0;
}

.dot-disabled {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-dim);
  flex-shrink: 0;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.admin-nav-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.admin-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--accent-emerald);
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.35rem 0.65rem;
  border-radius: var(--radius-sm);
}

.admin-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-emerald);
  box-shadow: 0 0 6px var(--accent-emerald);
}

.logout-nav-btn {
  width: 34px;
  height: 34px;
  color: var(--accent-rose);
}

.logout-nav-btn:hover {
  background: rgba(244, 63, 94, 0.15);
  border-color: var(--accent-rose);
  color: var(--accent-rose);
}

.login-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--text-dim);
  font-size: 0.82rem;
  padding: 0.45rem 0.75rem;
}

.login-nav-btn:hover {
  color: var(--accent-primary);
  background: rgba(99, 102, 241, 0.1);
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
  gap: 0.75rem;
  box-shadow: var(--shadow-lg);
}

.mobile-category {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--text-dim);
  font-weight: 700;
  margin-top: 0.5rem;
}

.mobile-nav-link {
  text-decoration: none;
  color: var(--text-main);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.4rem 0;
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

@media (max-width: 920px) {
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}
</style>
