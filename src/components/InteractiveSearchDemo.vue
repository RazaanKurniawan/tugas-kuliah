<template>
  <div class="search-demo-card glass-card">
    <div class="search-demo-header">
      <div>
        <span class="badge badge-primary">Eksperimen Interaktif Soal 2 & 4</span>
        <h3 class="search-demo-title">Simulasi Perbandingan: BFS vs DFS vs A*</h3>
        <p class="search-demo-sub">
          Amati bagaimana perbedaan strategi ekspansi simpul mempengaruhi jumlah memori dan urutan eksplorasi dari Start (S) menuju Goal (G).
        </p>
      </div>

      <div class="controls-row">
        <div class="algo-selector">
          <button
            v-for="algo in ['BFS', 'DFS', 'A*']"
            :key="algo"
            :class="['algo-btn', { active: currentAlgo === algo }]"
            @click="selectAlgo(algo)"
            :disabled="isRunning"
          >
            {{ algo }}
          </button>
        </div>

        <button
          class="btn btn-primary btn-sm"
          :disabled="isRunning"
          @click="startSearch"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          <span>{{ isRunning ? 'Mencari...' : 'Mulai Pencarian' }}</span>
        </button>
      </div>
    </div>

    <!-- Tree SVG Visualizer -->
    <div class="tree-container">
      <svg class="tree-svg" viewBox="0 0 540 230" preserveAspectRatio="xMidYMid meet">
        <!-- Lines -->
        <line x1="270" y1="35" x2="150" y2="95" class="tree-edge" />
        <line x1="270" y1="35" x2="390" y2="95" class="tree-edge" />

        <line x1="150" y1="95" x2="90" y2="165" class="tree-edge" />
        <line x1="150" y1="95" x2="210" y2="165" class="tree-edge" />

        <line x1="390" y1="95" x2="330" y2="165" class="tree-edge" />
        <line x1="390" y1="95" x2="450" y2="165" class="tree-edge" />

        <!-- Nodes -->
        <!-- S -->
        <g :class="['tree-node-group', getNodeState('S')]">
          <circle cx="270" cy="35" r="20" class="node-circle" />
          <text x="270" y="40" class="node-text">S</text>
          <text x="270" y="12" class="node-cost">h=6</text>
        </g>

        <!-- A -->
        <g :class="['tree-node-group', getNodeState('A')]">
          <circle cx="150" cy="95" r="18" class="node-circle" />
          <text x="150" y="100" class="node-text">A</text>
          <text x="150" y="72" class="node-cost">h=4</text>
        </g>

        <!-- B -->
        <g :class="['tree-node-group', getNodeState('B')]">
          <circle cx="390" cy="95" r="18" class="node-circle" />
          <text x="390" y="100" class="node-text">B</text>
          <text x="390" y="72" class="node-cost">h=2</text>
        </g>

        <!-- C -->
        <g :class="['tree-node-group', getNodeState('C')]">
          <circle cx="90" cy="165" r="18" class="node-circle" />
          <text x="90" y="170" class="node-text">C</text>
          <text x="90" y="196" class="node-cost">h=5</text>
        </g>

        <!-- D -->
        <g :class="['tree-node-group', getNodeState('D')]">
          <circle cx="210" cy="165" r="18" class="node-circle" />
          <text x="210" y="170" class="node-text">D</text>
          <text x="210" y="196" class="node-cost">h=3</text>
        </g>

        <!-- E -->
        <g :class="['tree-node-group', getNodeState('E')]">
          <circle cx="330" cy="165" r="18" class="node-circle" />
          <text x="330" y="170" class="node-text">E</text>
          <text x="330" y="196" class="node-cost">h=4</text>
        </g>

        <!-- G (Goal) -->
        <g :class="['tree-node-group', 'goal-node', getNodeState('G')]">
          <circle cx="450" cy="165" r="22" class="node-circle" />
          <text x="450" y="171" class="node-text">G</text>
          <text x="450" y="200" class="node-cost text-success">h=0</text>
        </g>
      </svg>
    </div>

    <!-- Output Analysis -->
    <div class="search-stats-grid">
      <div class="stat-box">
        <span class="stat-title">Metode Antrean</span>
        <span class="stat-val">{{ algoMeta[currentAlgo].structure }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-title">Urutan Ekplorasi</span>
        <span class="stat-val code-font">{{ visitedOrder.length ? visitedOrder.join(' → ') : '-' }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-title">Kompleksitas Memori</span>
        <span class="stat-val">{{ algoMeta[currentAlgo].space }}</span>
      </div>
      <div class="stat-box">
        <span class="stat-title">Jaminan Solusi</span>
        <span class="stat-val">{{ algoMeta[currentAlgo].guarantee }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentAlgo = ref('A*')
const isRunning = ref(false)
const visitedOrder = ref([])
const activeNode = ref(null)

const algoMeta = {
  'BFS': {
    structure: 'FIFO Queue (Horizontal)',
    space: 'O(b^d) [Boros Memori]',
    guarantee: 'Lengkap & Optimal (Bobot Sama)',
    sequence: ['S', 'A', 'B', 'C', 'D', 'E', 'G']
  },
  'DFS': {
    structure: 'LIFO Stack / Rekursif',
    space: 'O(b × m) [Sangat Hemat]',
    guarantee: 'Incomplete jika ada loop',
    sequence: ['S', 'A', 'C', 'D', 'B', 'E', 'G']
  },
  'A*': {
    structure: 'Priority Queue f(n) = g + h',
    space: 'O(b^d) [Fokus Terarah]',
    guarantee: 'Pasti Optimal jika Admissible',
    sequence: ['S', 'B', 'G']
  }
}

const selectAlgo = (algo) => {
  currentAlgo.value = algo
  visitedOrder.value = []
  activeNode.value = null
}

const getNodeState = (name) => {
  if (activeNode.value === name) return 'node-active'
  if (visitedOrder.value.includes(name)) return 'node-visited'
  return ''
}

const startSearch = async () => {
  if (isRunning.value) return
  isRunning.value = true
  visitedOrder.value = []
  activeNode.value = null

  const seq = algoMeta[currentAlgo.value].sequence

  for (const node of seq) {
    activeNode.value = node
    await new Promise(r => setTimeout(r, 450))
    visitedOrder.value.push(node)
    if (node === 'G') break
  }

  activeNode.value = null
  isRunning.value = false
}
</script>

<style scoped>
.search-demo-card {
  padding: 2rem;
  margin: 2rem 0;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-medium);
}

.search-demo-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.search-demo-title {
  font-size: 1.35rem;
  margin: 0.5rem 0 0.25rem;
}

.search-demo-sub {
  font-size: 0.92rem;
  color: var(--text-muted);
  margin-bottom: 0;
}

.controls-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.algo-selector {
  display: flex;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  padding: 3px;
  border: 1px solid var(--border-subtle);
}

.algo-btn {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.algo-btn.active {
  background: var(--accent-primary);
  color: #ffffff;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
}

.tree-container {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.tree-svg {
  width: 100%;
  height: auto;
  max-height: 240px;
}

.tree-edge {
  stroke: var(--border-medium);
  stroke-width: 2;
  stroke-dasharray: 4 2;
}

.node-circle {
  fill: var(--bg-card);
  stroke: var(--border-medium);
  stroke-width: 2.5;
  transition: all 0.25s ease;
}

.node-text {
  fill: var(--text-main);
  font-family: var(--font-sans);
  font-weight: 700;
  font-size: 14px;
  text-anchor: middle;
}

.node-cost {
  fill: var(--text-dim);
  font-family: var(--font-mono);
  font-size: 11px;
  text-anchor: middle;
}

.tree-node-group.node-active .node-circle {
  fill: var(--accent-amber);
  stroke: #ffffff;
  stroke-width: 4;
  filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.8));
}

.tree-node-group.node-active .node-text {
  fill: #000000;
}

.tree-node-group.node-visited .node-circle {
  fill: var(--accent-primary);
  stroke: var(--accent-secondary);
}

.tree-node-group.goal-node .node-circle {
  stroke: var(--accent-emerald);
}

.tree-node-group.goal-node.node-visited .node-circle {
  fill: var(--accent-emerald);
  stroke: #ffffff;
  filter: drop-shadow(0 0 12px rgba(16, 185, 129, 0.8));
}

.search-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.stat-box {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
}

.stat-title {
  font-size: 0.75rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 600;
}

.stat-val {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-main);
  margin-top: 0.2rem;
}

.code-font {
  font-family: var(--font-mono);
  color: #38bdf8;
}
</style>
