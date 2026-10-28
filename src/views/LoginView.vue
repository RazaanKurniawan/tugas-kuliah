<template>
  <div class="login-page">
    <div class="container container-narrow">
      <div class="login-wrapper">
        <!-- Breadcrumb / Back -->
        <div class="login-back-bar">
          <router-link to="/" class="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Kembali ke Beranda</span>
          </router-link>
        </div>

        <!-- Login Card -->
        <div class="login-card glass-card">
          <div class="login-header">
            <div class="lock-avatar">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <h1 class="login-title">Autentikasi Admin</h1>
            <p class="login-desc">
              Area terbatas. Fitur AI Studio, upload PDF, dan pengelolaan CRUD tugas hanya dapat diakses oleh administrator terverifikasi.
            </p>
          </div>

          <!-- Login Mode Tabs -->
          <div class="login-tabs">
            <button
              :class="['login-tab-btn', { active: activeTab === 'passkey' }]"
              @click="activeTab = 'passkey'"
            >
              <span>🔑 Admin Passkey (Cepat)</span>
            </button>
            <button
              :class="['login-tab-btn', { active: activeTab === 'email' }]"
              @click="activeTab = 'email'"
            >
              <span>📧 Supabase Email & Password</span>
            </button>
          </div>

          <!-- Tab 1: Passkey Quick Login -->
          <form v-if="activeTab === 'passkey'" @submit.prevent="handlePasskeyLogin" class="login-form">
            <div class="form-group">
              <label class="form-label" for="passkey">Admin Master Passkey / Secret Key</label>
              <div class="input-with-icon">
                <input
                  id="passkey"
                  v-model="passkeyInput"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan passkey admin..."
                  class="custom-input"
                  autocomplete="current-password"
                  required
                />
                <button
                  type="button"
                  class="toggle-visibility-btn"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isLoading">
              <span v-if="isLoading">Memverifikasi...</span>
              <span v-else>Masuk sebagai Admin</span>
              <svg v-if="!isLoading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>

          <!-- Tab 2: Supabase Email & Password -->
          <form v-else @submit.prevent="handleEmailLogin" class="login-form">
            <div class="form-group">
              <label class="form-label" for="email">Email Admin</label>
              <input
                id="email"
                v-model="emailInput"
                type="email"
                placeholder="admin@academio.hub"
                class="custom-input"
                autocomplete="email"
                required
              />
            </div>

            <div class="form-group">
              <label class="form-label" for="password">Password</label>
              <div class="input-with-icon">
                <input
                  id="password"
                  v-model="passwordInput"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Masukkan password admin..."
                  class="custom-input"
                  autocomplete="current-password"
                  required
                />
                <button
                  type="button"
                  class="toggle-visibility-btn"
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? '🙈' : '👁️' }}
                </button>
              </div>
            </div>

            <button type="submit" class="btn btn-primary btn-submit" :disabled="isLoading">
              <span v-if="isLoading">Memverifikasi ke Supabase Auth...</span>
              <span v-else>Login dengan Akun Supabase</span>
              <svg v-if="!isLoading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/services/auth'
import { useToast } from '@/composables/useToast'

const router = useRouter()
const route = useRoute()
const { loginWithPasskey, loginWithEmail } = useAuth()
const { showToast } = useToast()

const activeTab = ref('passkey')
const passkeyInput = ref('')
const emailInput = ref('admin@academio.hub')
const passwordInput = ref('')
const showPassword = ref(false)
const isLoading = ref(false)

const handleSuccessLogin = () => {
  showToast('Autentikasi admin berhasil! Selamat datang kembali.', 'success')
  const redirectPath = route.query.redirect || '/generator'
  router.push(redirectPath)
}

const handlePasskeyLogin = async () => {
  isLoading.value = true
  try {
    const res = loginWithPasskey(passkeyInput.value)
    if (res.success) {
      handleSuccessLogin()
    } else {
      showToast(res.error || 'Passkey salah!', 'info')
    }
  } finally {
    isLoading.value = false
  }
}

const handleEmailLogin = async () => {
  isLoading.value = true
  try {
    const res = await loginWithEmail(emailInput.value, passwordInput.value)
    if (res.success) {
      handleSuccessLogin()
    } else {
      showToast(res.error || 'Email atau password salah!', 'info')
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: calc(100vh - 180px);
  display: flex;
  align-items: center;
  padding: 3rem 0 5rem;
}

.login-wrapper {
  max-width: 480px;
  margin: 0 auto;
  width: 100%;
}

.login-back-bar {
  margin-bottom: 1.25rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--accent-primary);
}

.login-card {
  padding: 2.5rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-glow);
  box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.lock-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid var(--border-glow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  color: var(--accent-primary);
}

.login-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.login-desc {
  font-size: 0.9rem;
  color: var(--text-dim);
  line-height: 1.5;
}

.login-tabs {
  display: flex;
  background: rgba(15, 23, 42, 0.6);
  padding: 0.35rem;
  border-radius: var(--radius-md);
  margin-bottom: 1.75rem;
  border: 1px solid var(--border-color);
  gap: 0.35rem;
}

.login-tab-btn {
  flex: 1;
  background: transparent;
  border: none;
  color: var(--text-dim);
  padding: 0.65rem 0.5rem;
  border-radius: var(--radius-sm);
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.login-tab-btn.active {
  background: var(--accent-primary);
  color: #fff;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

.input-with-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.custom-input {
  width: 100%;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-color);
  color: #fff;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
}

.custom-input:focus {
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}

.toggle-visibility-btn {
  position: absolute;
  right: 0.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  opacity: 0.7;
}

.toggle-visibility-btn:hover {
  opacity: 1;
}

.btn-submit {
  width: 100%;
  padding: 0.95rem;
  margin-top: 0.5rem;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
}
</style>
