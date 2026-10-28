import { ref } from 'vue'
import { supabase } from './supabase'

const ADMIN_PASSKEY = 'razaan2026'
const AUTH_STORAGE_KEY = 'academio_admin_session'

// Reactive state
const currentUser = ref(null)
const isAuthenticatedState = ref(false)
const isAuthLoading = ref(true)

// Initialize session from localStorage or Supabase Auth
export async function initAuth() {
  isAuthLoading.value = true
  try {
    // 1. Check Supabase session
    const { data } = await supabase.auth.getSession()
    if (data?.session?.user) {
      currentUser.value = {
        id: data.session.user.id,
        email: data.session.user.email,
        name: data.session.user.user_metadata?.name || 'Administrator',
        role: 'admin',
        token: data.session.access_token
      }
      isAuthenticatedState.value = true
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser.value))
      return currentUser.value
    }

    // 2. Check local admin session backup
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      currentUser.value = parsed
      isAuthenticatedState.value = true
      return parsed
    }
  } catch (err) {
    console.warn('Init auth note:', err)
  } finally {
    isAuthLoading.value = false
  }

  currentUser.value = null
  isAuthenticatedState.value = false
  return null
}

/**
 * Check if the user is currently authenticated
 */
export function isAuthenticated() {
  if (isAuthenticatedState.value) return true
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      if (parsed?.token || parsed?.role === 'admin') {
        isAuthenticatedState.value = true
        currentUser.value = parsed
        return true
      }
    }
  } catch (e) {
    // ignore
  }
  return false
}

/**
 * Get the current user auth token for API requests
 */
export function getAuthToken() {
  if (currentUser.value?.token) {
    return currentUser.value.token
  }
  try {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored)
      return parsed.token || `passkey-${ADMIN_PASSKEY}`
    }
  } catch (e) {
    // ignore
  }
  return `passkey-${ADMIN_PASSKEY}`
}

/**
 * Login with Supabase Email and Password
 */
export async function loginWithEmail(email, password) {
  isAuthLoading.value = true
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      throw error
    }

    currentUser.value = {
      id: data.user.id,
      email: data.user.email,
      name: data.user.user_metadata?.name || 'Administrator',
      role: 'admin',
      token: data.session.access_token
    }
    isAuthenticatedState.value = true
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser.value))

    return { success: true, user: currentUser.value }
  } catch (err) {
    // Also allow passkey fallback if typed as password
    if (password === ADMIN_PASSKEY || email === ADMIN_PASSKEY) {
      return loginWithPasskey(ADMIN_PASSKEY)
    }
    return { success: false, error: err.message || 'Login gagal. Periksa email & password.' }
  } finally {
    isAuthLoading.value = false
  }
}

/**
 * Login using Admin Passkey / Master Secret
 */
export function loginWithPasskey(passkey) {
  if (passkey === ADMIN_PASSKEY) {
    currentUser.value = {
      id: 'admin-master',
      email: 'admin@academio.hub',
      name: 'Razaan Kurniawan (Admin)',
      role: 'admin',
      token: `passkey-${ADMIN_PASSKEY}`
    }
    isAuthenticatedState.value = true
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(currentUser.value))
    return { success: true, user: currentUser.value }
  }

  return { success: false, error: 'Passkey admin salah!' }
}

/**
 * Sign out
 */
export async function logout() {
  try {
    await supabase.auth.signOut()
  } catch (e) {
    // ignore
  }
  currentUser.value = null
  isAuthenticatedState.value = false
  localStorage.removeItem(AUTH_STORAGE_KEY)
}

/**
 * Composable for components
 */
export function useAuth() {
  return {
    currentUser,
    isAuthenticated: isAuthenticatedState,
    isAuthLoading,
    loginWithEmail,
    loginWithPasskey,
    logout,
    checkAuth: isAuthenticated
  }
}
