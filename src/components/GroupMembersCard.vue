<template>
  <div class="members-container glass-card" id="kelompok">
    <div class="members-header">
      <div>
        <span class="badge badge-primary">Informasi Akademik</span>
        <h3 class="members-title">Identitas Kelompok & Kontributor</h3>
        <p class="members-sub">
          Kelas: <strong>{{ courseInfo.className }}</strong> • Program Studi: <strong>{{ courseInfo.studyProgram }}</strong>
        </p>
      </div>

      <button class="btn btn-secondary btn-sm" @click="copyAllMembers">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Salin Daftar NIM & Nama</span>
      </button>
    </div>

    <div class="members-grid">
      <div
        v-for="(member, idx) in courseInfo.members"
        :key="member.nim"
        class="member-card"
      >
        <div class="member-index">{{ idx + 1 }}</div>
        <img :src="member.avatar" :alt="member.name" class="member-avatar" />
        <div class="member-info">
          <h4 class="member-name">{{ member.name }}</h4>
          <span class="member-nim">NIM: <strong>{{ member.nim }}</strong></span>
          <span class="member-role">{{ member.role }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { COURSE_INFO } from '@/data/courseData'
import { useToast } from '@/composables/useToast'

const courseInfo = COURSE_INFO
const { showToast } = useToast()

const copyAllMembers = async () => {
  const text = `Identitas Kelompok Kecerdasan Buatan (Kelas ${courseInfo.className}):\n` +
    courseInfo.members.map((m, i) => `${i + 1}. ${m.name} (${m.nim})`).join('\n')

  try {
    await navigator.clipboard.writeText(text)
    showToast('Daftar anggota & NIM berhasil disalin!', 'success')
  } catch (e) {
    console.error(e)
  }
}
</script>

<style scoped>
.members-container {
  padding: 2.2rem;
  margin: 3rem 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
}

.members-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.members-title {
  font-size: 1.45rem;
  margin: 0.5rem 0 0.25rem;
}

.members-sub {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.members-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.member-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  transition: all 0.2s ease;
}

.member-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-glow);
  transform: translateY(-2px);
}

.member-index {
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-dim);
}

.member-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--accent-primary);
  background: var(--bg-card);
  flex-shrink: 0;
}

.member-info {
  display: flex;
  flex-direction: column;
}

.member-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.3;
}

.member-nim {
  font-size: 0.82rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
  margin: 2px 0;
}

.member-role {
  font-size: 0.72rem;
  color: var(--accent-cyan);
  font-weight: 600;
}
</style>
