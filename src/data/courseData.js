export const COURSE_INFO = {
  courseName: 'Kecerdasan Buatan',
  courseCode: 'AI-175A',
  studyProgram: 'Teknologi Informasi',
  className: '17.5A.01',
  semester: 'Semester 5 (Tahun Akademik 2026/2027)',
  faculty: 'Fakultas Teknologi Informasi',
  institution: 'Universitas Bina Sarana Informatika (UBSI)',
  portalPlatform: 'MyBest',
  members: [
    {
      name: 'Razaan Kurniawan Putra',
      nim: '17240286',
      role: 'Ketua Kelompok & Lead Author',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Razaan&backgroundColor=6366f1'
    },
    {
      name: 'Ridho Putra Rianar',
      nim: '17240102',
      role: 'Co-Author & Algorithm Analyst',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ridho&backgroundColor=8b5cf6'
    },
    {
      name: 'Aby Yazzy Wijaya',
      nim: '17240158',
      role: 'Co-Author & Cognitive Systems Researcher',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Aby&backgroundColor=ec4899'
    },
    {
      name: 'Toma Brema',
      nim: '17240099',
      role: 'Co-Author & AI Ethics Specialist',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Toma&backgroundColor=06b6d4'
    },
    {
      name: 'Sam Nurullah',
      nim: '17240117',
      role: 'Co-Author & Heuristic Search Specialist',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Sam&backgroundColor=10b981'
    }
  ]
}

export const ASSIGNMENTS = [
  {
    id: 1,
    slug: 'tugas-1',
    route: '/tugas-1',
    title: 'Tugas 1: Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman',
    shortTitle: 'Tugas 1: Sinergi AI & Kognisi Manusia',
    pdfFile: '/docs/Tugas1AI.pdf',
    pdfName: 'Tugas1AI.pdf',
    badge: 'Essay & AI Cognitive Engineering',
    readingTime: '15 Menit Baca',
    topics: [
      'Sinergi Komputasi AI & Kognisi Strategis',
      'Cognitive Offloading & System Design',
      'Computational Thinking & Prompt Engineering',
      'Flow State & Eliminasi Gangguan Algoritma',
      'Etika, Empati & Human Responsibility',
      'Continuous Learning & Socratic Prompting',
      'Kreativitas Manusia: Inovasi Zero-to-One'
    ],
    summary: 'Menganalisis pergeseran paradigma rekayasa perangkat lunak modern dari penulisan kode manual menuju kolaborasi kognitif manusia-mesin yang terarah, beretika, dan inovatif.'
  },
  {
    id: 2,
    slug: 'tugas-2',
    route: '/tugas-2',
    title: 'Tugas 2: Penyelesaian Masalah dengan Teknik Pencarian (Search Algorithms)',
    shortTitle: 'Tugas 2: Teknik Pencarian & Optimasi Algoritma',
    pdfFile: '/docs/Tugas2AI.pdf',
    pdfName: 'Tugas2AI.pdf',
    badge: 'State Space & Algorithm Complexity',
    readingTime: '20 Menit Baca',
    topics: [
      '6 Komponen Formulasi Masalah (Robot AGV Gudang)',
      'Pencarian Buta: BFS vs DFS Matrix & Complexity',
      'Iterative Deepening Search (IDS) Memory Efficiency',
      'Pencarian Heuristik A* & Admissibility Guarantee',
      'Local Search: Hill Climbing & Simulated Annealing',
      'Studi Kasus 8-Queens: Min-Conflicts vs Tree Search',
      'Dilema Skala Besar Ride-Hailing: Mitigasi OOM'
    ],
    summary: 'Mengkaji secara mendalam formulasi ruang status, trade-off time-space pada algoritma pencarian buta dan heuristik, serta strategi arsitektural untuk sistem skala jutaan rute real-time.'
  }
]
