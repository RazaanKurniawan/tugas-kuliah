<template>
  <div class="sidebar-wrapper">
    <!-- Backdrop Overlay -->
    <transition name="fade">
      <div v-if="isOpen" class="sidebar-backdrop" @click="closeSidebar"></div>
    </transition>

    <!-- Slide-in Drawer -->
    <transition name="slide">
      <aside v-if="isOpen" class="sidebar-drawer glass-card">
        <!-- Sidebar Header -->
        <div class="sidebar-header">
          <router-link to="/" class="sidebar-brand" @click="closeSidebar">
            <div class="logo-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <div>
              <div class="sidebar-title">Academic<span class="gradient-text">.hub</span></div>
              <div class="sidebar-sub">Portal Tugas 17.5A.01</div>
            </div>
          </router-link>

          <button class="sidebar-close-btn" @click="closeSidebar" aria-label="Tutup Menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Sidebar Content (Scrollable) -->
        <div class="sidebar-body">
          <!-- Quick Navigation -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">Navigasi Utama</div>
            <router-link to="/" class="sidebar-link" active-class="active" exact @click="closeSidebar">
              <span class="link-icon">🏠</span>
              <span>Beranda Utama</span>
            </router-link>
            <router-link
              to="/generator"
              class="sidebar-link"
              active-class="active"
              @click="closeSidebar"
            >
              <span class="link-icon">✨</span>
              <span>AI Studio & Generator</span>
              <span v-if="isAuthenticated" class="badge badge-emerald badge-xs">Admin</span>
              <span v-else class="badge badge-warning badge-xs">🔒 Kunci</span>
            </router-link>
          </div>

          <!-- Section: Daftar Tugas AI -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">
              <span>Tugas: Kecerdasan Buatan</span>
              <span class="badge badge-primary badge-xs">Aktif</span>
            </div>
            
            <router-link to="/tugas-1" class="sidebar-link task-link" active-class="active" @click="closeSidebar">
              <div class="task-num-badge">T1</div>
              <div class="task-link-col">
                <span class="task-link-title">Tugas 1: Sinergi AI & Kognisi</span>
                <span class="task-link-meta">7 Soal Essay Analitis • 100% Verbatim</span>
              </div>
            </router-link>

            <router-link to="/tugas-2" class="sidebar-link task-link" active-class="active" @click="closeSidebar">
              <div class="task-num-badge task-num-2">T2</div>
              <div class="task-link-col">
                <span class="task-link-title">Tugas 2: Teknik Pencarian & 8-Queens</span>
                <span class="task-link-meta">BFS, DFS, Min-Conflicts • Interaktif</span>
              </div>
            </router-link>

            <!-- Dynamic Tasks from Supabase -->
            <div v-if="dynamicTasks.length > 0" class="dynamic-tasks-subgroup">
              <div class="subgroup-label">Tugas Hasil Generate (Supabase):</div>
              <router-link
                v-for="dyn in dynamicTasks"
                :key="dyn.slug"
                :to="`/tugas/${dyn.slug}`"
                class="sidebar-link task-link dynamic-item"
                active-class="active"
                @click="closeSidebar"
              >
                <div class="task-num-badge task-num-dyn">AI</div>
                <div class="task-link-col">
                  <span class="task-link-title">{{ dyn.shortTitle || dyn.title }}</span>
                  <span class="task-link-meta">{{ dyn.courseName }}</span>
                </div>
              </router-link>
            </div>
          </div>

          <!-- Section: Mata Kuliah Semester 5 -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">Katalog Mata Kuliah</div>
            <a href="/#courses" class="sidebar-link" @click="closeSidebar">
              <span class="course-status-dot active"></span>
              <span class="course-name">Kecerdasan Buatan</span>
              <span class="course-count">2 Tugas</span>
            </a>
            <div class="sidebar-link item-disabled">
              <span class="course-status-dot disabled"></span>
              <span class="course-name">Rekayasa Perangkat Lunak</span>
              <span class="status-tag">Segera</span>
            </div>
            <div class="sidebar-link item-disabled">
              <span class="course-status-dot disabled"></span>
              <span class="course-name">Sistem Basis Data Lanjut</span>
              <span class="status-tag">Segera</span>
            </div>
            <div class="sidebar-link item-disabled">
              <span class="course-status-dot disabled"></span>
              <span class="course-name">Jaringan Komputer</span>
              <span class="status-tag">Segera</span>
            </div>
          </div>

          <!-- Section: Informasi Kelompok -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">Informasi Akademik</div>
            <a href="/#kelompok" class="sidebar-link" @click="closeSidebar">
              <span class="link-icon">👥</span>
              <span>Daftar Anggota Kelompok</span>
            </a>
            <a href="/#panduan" class="sidebar-link" @click="closeSidebar">
              <span class="link-icon">📋</span>
              <span>Ketentuan Pengumpulan MyBest</span>
            </a>
          </div>
        </div>

        <!-- Sidebar Footer -->
        <div class="sidebar-footer">
          <div v-if="isAuthenticated" class="admin-footer-card">
            <div class="admin-user-info">
              <span class="admin-dot-live"></span>
              <div>
                <strong>Administrator</strong>
                <span>{{ currentUser?.email || 'admin@academio.hub' }}</span>
              </div>
            </div>
            <button class="btn btn-danger-subtle btn-sm" @click="handleLogout">
              Keluar
            </button>
          </div>

          <div v-else class="login-footer-card">
            <div>
              <strong>Mode Tamu (Publik)</strong>
              <span>Masuk admin untuk kelola tugas</span>
            </div>
            <router-link to="/login" class="btn btn-primary btn-sm" @click="closeSidebar">
              Login Admin
            </router-link>
          </div>
        </div>
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/services/auth'
import { getDynamicAssignments } from '@/services/supabase'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const router = useRouter()
const { currentUser, isAuthenticated, logout } = useAuth()
const { showToast } = useToast()
const dynamicTasks = ref([])

const closeSidebar = () => {
  emit('close')
}

const loadTasks = async () => {
  try {
    const list = await getDynamicAssignments()
    dynamicTasks.value = list || []
  } catch (e) {
    // ignore
  }
}

const handleLogout = async () => {
  await logout()
  showToast('Anda telah keluar dari mode admin.', 'info')
  closeSidebar()
  router.push('/')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    loadTasks()
  }
})

onMounted(() => {
  loadTasks()
  // ESC key listener
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && props.isOpen) {
      closeSidebar()
    }
  })
})
</script>

<style scoped>
.sidebar-wrapper {
  position: relative;
  z-index: 2000;
}

.sidebar-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 2001;
}

.sidebar-drawer {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 340px;
  max-width: 85vw;
  background: var(--bg-card);
  border-right: 1px solid var(--border-medium);
  z-index: 2002;
  display: flex;
  flex-direction: column;
  box-shadow: 20px 0 50px rgba(0, 0, 0, 0.5);
}

.sidebar-header {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.sidebar-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.15rem;
  color: var(--text-main);
  line-height: 1.1;
}

.sidebar-sub {
  font-size: 0.72rem;
  color: var(--text-dim);
  font-weight: 500;
}

.sidebar-close-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-medium);
  color: var(--text-dim);
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.sidebar-close-btn:hover {
  background: rgba(244, 63, 94, 0.15);
  color: var(--accent-rose);
  border-color: var(--accent-rose);
}

.sidebar-body {
  flex: 1;
  overflow-y: auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.sidebar-section-title {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-dim);
  padding: 0 0.5rem 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sidebar-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.7rem 0.85rem;
  border-radius: var(--radius-md);
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.18s;
  background: transparent;
}

.sidebar-link:hover {
  background: rgba(99, 102, 241, 0.1);
  color: var(--accent-primary);
  transform: translateX(3px);
}

.sidebar-link.active {
  background: var(--gradient-brand);
  color: #fff;
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35);
}

.link-icon {
  font-size: 1.1rem;
}

.task-link {
  align-items: flex-start;
  padding: 0.65rem 0.75rem;
}

.task-num-badge {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  background: rgba(99, 102, 241, 0.2);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 2px;
}

.task-num-2 {
  background: rgba(6, 182, 212, 0.2);
  color: var(--accent-cyan);
}

.task-num-dyn {
  background: rgba(16, 185, 129, 0.2);
  color: var(--accent-emerald);
}

.task-link-col {
  display: flex;
  flex-direction: column;
}

.task-link-title {
  font-weight: 700;
  font-size: 0.86rem;
  line-height: 1.25;
}

.task-link-meta {
  font-size: 0.72rem;
  color: var(--text-dim);
  margin-top: 2px;
}

.sidebar-link.active .task-link-meta {
  color: rgba(255, 255, 255, 0.8);
}

.dynamic-tasks-subgroup {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--border-subtle);
}

.subgroup-label {
  font-size: 0.72rem;
  color: var(--text-dim);
  padding: 0 0.5rem 0.35rem;
}

.course-status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.course-status-dot.active {
  background: var(--accent-emerald);
  box-shadow: 0 0 6px var(--accent-emerald);
}

.course-status-dot.disabled {
  background: var(--text-dim);
}

.course-name {
  flex: 1;
}

.course-count {
  font-size: 0.75rem;
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent-emerald);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

.status-tag {
  font-size: 0.72rem;
  color: var(--text-dim);
}

.item-disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.badge-xs {
  font-size: 0.68rem;
  padding: 0.15rem 0.45rem;
  margin-left: auto;
}

.sidebar-footer {
  padding: 1.25rem;
  border-top: 1px solid var(--border-subtle);
  background: rgba(15, 23, 42, 0.4);
}

.admin-footer-card, .login-footer-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}

.admin-user-info {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.admin-dot-live {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse 1.5s infinite;
}

.admin-user-info strong {
  display: block;
  font-size: 0.84rem;
  color: var(--text-main);
}

.admin-user-info span {
  font-size: 0.72rem;
  color: var(--text-dim);
}

.login-footer-card strong {
  display: block;
  font-size: 0.84rem;
  color: var(--text-main);
}

.login-footer-card span {
  font-size: 0.72rem;
  color: var(--text-dim);
}

/* Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-100%);
}
</style>
