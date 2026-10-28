<template>
  <div class="interactive-queens-box glass-card">
    <div class="demo-header">
      <div class="demo-title-group">
        <span class="badge badge-cyan">Simulasi Interaktif Soal 6</span>
        <h3 class="demo-title">Visualisasi Algoritma Min-Conflicts vs Tree Search</h3>
        <p class="demo-desc">
          Bandingkan bagaimana <strong>Algoritma Pencarian Lokal (Min-Conflicts)</strong> menyelesaikan masalah 8-Queens
          hanya dalam beberapa langkah iterasi, dibandingkan BFS/DFS yang harus menelusuri 4,4 milyar kemungkinan status.
        </p>
      </div>

      <div class="demo-actions">
        <button
          class="btn btn-primary btn-sm"
          :disabled="isSolving || conflictsCount === 0"
          @click="runMinConflicts"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>{{ isSolving ? 'Menjalankan...' : 'Jalankan Min-Conflicts' }}</span>
        </button>

        <button
          class="btn btn-secondary btn-sm"
          :disabled="isSolving"
          @click="randomizeBoard"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          <span>Acak Posisi</span>
        </button>
      </div>
    </div>

    <!-- Metrics Row -->
    <div class="metrics-grid">
      <div class="metric-card">
        <span class="metric-label">Konflik Pasangan Ratu</span>
        <span :class="['metric-value', conflictsCount === 0 ? 'text-success' : 'text-danger']">
          {{ conflictsCount }}
        </span>
        <span class="metric-sub">{{ conflictsCount === 0 ? '✓ Solusi Tercapai!' : 'Ada ratu saling serang' }}</span>
      </div>

      <div class="metric-card">
        <span class="metric-label">Langkah Iterasi</span>
        <span class="metric-value">{{ stepCount }}</span>
        <span class="metric-sub">Kompleksitas: O(1) - O(N)</span>
      </div>

      <div class="metric-card">
        <span class="metric-label">Perbandingan BFS/DFS</span>
        <span class="metric-value text-amber">4.4 × 10⁹</span>
        <span class="metric-sub">Kombinasi pohon pencarian</span>
      </div>
    </div>

    <!-- Board Display -->
    <div class="board-wrapper">
      <div class="chessboard">
        <div
          v-for="row in 8"
          :key="'r-' + row"
          class="board-row"
        >
          <div
            v-for="col in 8"
            :key="'c-' + col"
            :class="[
              'board-cell',
              (row + col) % 2 === 0 ? 'cell-light' : 'cell-dark',
              { 'has-queen': queens[col - 1] === row - 1 },
              { 'is-in-conflict': isInConflict(col - 1, row - 1) }
            ]"
            @click="setQueen(col - 1, row - 1)"
          >
            <span v-if="queens[col - 1] === row - 1" class="queen-symbol">♛</span>
          </div>
        </div>
      </div>

      <div class="board-legend">
        <div class="legend-item">
          <span class="legend-badge cell-light"></span>
          <span>Petak Catur (8 × 8)</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge queen-peaceful">♛</span>
          <span>Ratu Aman (Bebas Konflik)</span>
        </div>
        <div class="legend-item">
          <span class="legend-badge queen-conflict">♛</span>
          <span>Ratu Dalam Konflik</span>
        </div>
        <p class="click-hint">
          💡 <em>Tip: Klik pada petak papan catur untuk memindahkan posisi ratu secara manual.</em>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import confetti from 'canvas-confetti'

// Array of 8 integers representing queen row in each column (0..7)
const queens = ref([0, 1, 2, 3, 4, 5, 6, 7])
const stepCount = ref(0)
const isSolving = ref(false)

// Calculate total conflict pairs
const calculateConflicts = (board) => {
  let conflicts = 0
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 8; j++) {
      // same row
      if (board[i] === board[j]) conflicts++
      // diagonal
      if (Math.abs(board[i] - board[j]) === Math.abs(i - j)) conflicts++
    }
  }
  return conflicts
}

const conflictsCount = computed(() => calculateConflicts(queens.value))

// Check if a specific queen at col, row is under conflict
const isInConflict = (col, row) => {
  if (queens.value[col] !== row) return false
  for (let j = 0; j < 8; j++) {
    if (j === col) continue
    if (queens.value[j] === row) return true
    if (Math.abs(queens.value[j] - row) === Math.abs(j - col)) return true
  }
  return false
}

// Randomize board
const randomizeBoard = () => {
  stepCount.value = 0
  const newBoard = []
  for (let i = 0; i < 8; i++) {
    newBoard.push(Math.floor(Math.random() * 8))
  }
  queens.value = newBoard
}

// Manual Queen Set
const setQueen = (col, row) => {
  if (isSolving.value) return
  queens.value[col] = row
}

// Min-Conflicts Algorithm Step-by-Step with Async Delay
const runMinConflicts = async () => {
  if (isSolving.value) return
  isSolving.value = true

  const maxSteps = 100
  let currentStep = 0

  while (currentStep < maxSteps && calculateConflicts(queens.value) > 0) {
    currentStep++
    stepCount.value = currentStep

    // Find all columns with queens that have conflicts
    const conflictedCols = []
    for (let c = 0; c < 8; c++) {
      if (isInConflict(c, queens.value[c])) {
        conflictedCols.push(c)
      }
    }

    if (conflictedCols.length === 0) break

    // Pick a random conflicted column
    const chosenCol = conflictedCols[Math.floor(Math.random() * conflictedCols.length)]

    // Find row in this column with minimum conflicts
    let minConflicts = 999
    let bestRows = []

    for (let r = 0; r < 8; r++) {
      const tempBoard = [...queens.value]
      tempBoard[chosenCol] = r
      const conf = calculateConflicts(tempBoard)
      if (conf < minConflicts) {
        minConflicts = conf
        bestRows = [r]
      } else if (conf === minConflicts) {
        bestRows.push(r)
      }
    }

    // Move queen to one of the best rows
    const chosenRow = bestRows[Math.floor(Math.random() * bestRows.length)]
    queens.value[chosenCol] = chosenRow

    // Delay for visual animation
    await new Promise(resolve => setTimeout(resolve, 80))
  }

  isSolving.value = false

  if (calculateConflicts(queens.value) === 0) {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 }
    })
  }
}

onMounted(() => {
  // Initial randomize to create an interesting conflict state
  randomizeBoard()
})
</script>

<style scoped>
.interactive-queens-box {
  padding: 2rem;
  margin: 2rem 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.demo-title-group {
  flex: 1;
  min-width: 280px;
}

.demo-title {
  font-size: 1.35rem;
  margin: 0.5rem 0 0.4rem;
}

.demo-desc {
  font-size: 0.92rem;
  color: var(--text-muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.demo-actions {
  display: flex;
  gap: 0.75rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.metric-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
}

.metric-label {
  font-size: 0.8rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 600;
}

.metric-value {
  font-size: 1.8rem;
  font-weight: 800;
  font-family: var(--font-display);
  color: var(--text-main);
  line-height: 1.2;
  margin: 0.2rem 0;
}

.metric-sub {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.text-success { color: var(--accent-emerald) !important; }
.text-danger { color: var(--accent-rose) !important; }
.text-amber { color: var(--accent-amber) !important; }

.board-wrapper {
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
}

.chessboard {
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 340px;
  border: 3px solid var(--border-medium);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.board-row {
  display: flex;
  flex: 1;
}

.board-cell {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.cell-light {
  background: #cbd5e1;
}

.cell-dark {
  background: #475569;
}

[data-theme="light"] .cell-light { background: #f1f5f9; }
[data-theme="light"] .cell-dark { background: #94a3b8; }

.board-cell:hover {
  filter: brightness(1.2);
}

.has-queen {
  animation: popIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.queen-symbol {
  font-size: 1.7rem;
  line-height: 1;
  color: #0f172a;
  text-shadow: 0 0 2px rgba(255, 255, 255, 0.8);
}

.board-cell.is-in-conflict {
  background: rgba(244, 63, 94, 0.75) !important;
}

.board-cell.is-in-conflict .queen-symbol {
  color: #ffffff;
  animation: shake 0.4s ease-in-out;
}

.board-legend {
  flex: 1;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.legend-badge {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
}

.queen-peaceful {
  background: var(--accent-emerald);
  color: #ffffff;
}

.queen-conflict {
  background: var(--accent-rose);
  color: #ffffff;
}

.click-hint {
  font-size: 0.82rem;
  color: var(--text-dim);
  margin-top: 0.5rem;
}

@keyframes popIn {
  from { transform: scale(0.6); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}
</style>
