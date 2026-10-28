<template>
  <div class="app-root">
    <!-- Ambient glowing backdrop -->
    <div class="ambient-bg" aria-hidden="true">
      <div class="ambient-orb orb-1"></div>
      <div class="ambient-orb orb-2"></div>
      <div class="ambient-orb orb-3"></div>
    </div>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Router View with Page Transition -->
    <router-view v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </router-view>

    <!-- Academic Footer -->
    <Footer />

    <!-- Global Toast Notifications -->
    <ToastNotification />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import ToastNotification from '@/components/ToastNotification.vue'
</script>

<style>
.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
