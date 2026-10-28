<template>
  <button
    :class="['btn', btnClass || 'btn-primary', { 'copied': isCopied }]"
    @click="copyUrl"
    :title="title || 'Salin link tugas untuk dikumpulkan ke MyBest'"
  >
    <svg v-if="!isCopied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>{{ isCopied ? copiedText : (label || 'Salin Link Tugas') }}</span>
  </button>
</template>

<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'
import { useToast } from '@/composables/useToast'

const props = defineProps({
  targetPath: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  copiedText: {
    type: String,
    default: 'Tersalin!'
  },
  btnClass: {
    type: String,
    default: 'btn-primary'
  },
  title: {
    type: String,
    default: ''
  },
  taskName: {
    type: String,
    default: 'Halaman Ini'
  }
})

const isCopied = ref(false)
const { showToast } = useToast()

const copyUrl = async () => {
  let url = window.location.origin
  if (props.targetPath) {
    url = url + props.targetPath
  } else {
    url = window.location.href
  }

  try {
    await navigator.clipboard.writeText(url)
    isCopied.value = true
    
    // Confetti celebration
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#8b5cf6', '#ec4899', '#06b6d4']
    })

    showToast(`Link ${props.taskName} berhasil disalin! Siap dikirim ke MyBest`, 'success')

    setTimeout(() => {
      isCopied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy', err)
    showToast('Gagal menyalin link secara otomatis. Silakan salin dari browser URL.', 'info')
  }
}
</script>

<style scoped>
button.copied {
  background: var(--accent-emerald) !important;
  color: #ffffff !important;
  border-color: var(--accent-emerald) !important;
}
</style>
