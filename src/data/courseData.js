export const PORTAL_INFO = {
  portalName: 'Academic Blog & Tugas Mahasiswa',
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
      role: 'Co-Author & Kontributor',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Ridho&backgroundColor=8b5cf6'
    },
    {
      name: 'Aby Yazzy Wijaya',
      nim: '17240158',
      role: 'Co-Author & Kontributor',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Aby&backgroundColor=ec4899'
    },
    {
      name: 'Toma Brema',
      nim: '17240099',
      role: 'Co-Author & Kontributor',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Toma&backgroundColor=06b6d4'
    },
    {
      name: 'Sam Nurullah',
      nim: '17240117',
      role: 'Co-Author & Kontributor',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Sam&backgroundColor=10b981'
    }
  ]
}

export const COURSES = [
  {
    id: 'ai',
    code: 'AI-175A',
    name: 'Kecerdasan Buatan',
    icon: 'Brain',
    status: 'Aktif',
    description: 'Membahas pemecahan masalah dengan teknik pencarian, kecerdasan buatan, logika fuzzy, machine learning, dan potensi manusia dalam era pemrograman cerdas.',
    assignmentsCount: 2,
    assignments: [
      {
        id: 1,
        slug: 'tugas-1',
        route: '/tugas-1',
        courseId: 'ai',
        courseName: 'Kecerdasan Buatan',
        title: 'Tugas 1 : Kecerdasan Buatan',
        topic: 'Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman',
        shortTitle: 'Tugas 1: AI & Potensi Manusia',
        pdfFile: '/docs/Tugas1AI.pdf',
        pdfName: 'Tugas1AI.pdf',
        badge: 'Essay & AI Cognitive Engineering',
        readingTime: '15 Menit Baca',
        summary: 'Kajian mendalam sinergi komputasi AI dan kognisi manusia, cognitive offloading, computational thinking dalam prompt engineering, pengelolaan flow state, etika & empati, serta inovasi zero-to-one.'
      },
      {
        id: 2,
        slug: 'tugas-2',
        route: '/tugas-2',
        courseId: 'ai',
        courseName: 'Kecerdasan Buatan',
        title: 'Tugas 2 : Kecerdasan Buatan',
        topic: 'Penyelesaian Masalah dengan Teknik Pencarian',
        shortTitle: 'Tugas 2: Teknik Pencarian',
        pdfFile: '/docs/Tugas2AI.pdf',
        pdfName: 'Tugas2AI.pdf',
        badge: 'Search Algorithms & Complexity',
        readingTime: '20 Menit Baca',
        summary: 'Analisis komparatif 6 komponen formulasi masalah (robot AGV gudang), pencarian buta BFS vs DFS, IDS, heuristik A* admissible, pencarian lokal Hill Climbing & Simulated Annealing, studi kasus 8-Queens (Min-Conflicts), dan mitigasi OOM pada sistem ride-hailing.'
      }
    ]
  },
  {
    id: 'rpl',
    code: 'RPL-175A',
    name: 'Rekayasa Perangkat Lunak',
    icon: 'Layers',
    status: 'Akan Datang',
    description: 'Dokumentasi perancangan sistem informasi, Unified Modeling Language (UML), metodologi Scrum/Agile, serta software architecture design.',
    assignmentsCount: 0,
    assignments: []
  },
  {
    id: 'bdl',
    code: 'BDL-175A',
    name: 'Sistem Basis Data Lanjut',
    icon: 'Database',
    status: 'Akan Datang',
    description: 'Perancangan basis data relasional kompleks, teknik indexing & query optimization, normalisasi database, dan manajemen transaksi ACID.',
    assignmentsCount: 0,
    assignments: []
  },
  {
    id: 'jkk',
    code: 'JKK-175A',
    name: 'Jaringan Komputer & Keamanan',
    icon: 'Shield',
    status: 'Akan Datang',
    description: 'Konfigurasi topologi LAN/WAN, routing protokol OSPF/BGP, subnetting IPv4/IPv6, dan dasar-dasar cyber security pertahanan jaringan.',
    assignmentsCount: 0,
    assignments: []
  }
]

export const COURSE_INFO = PORTAL_INFO
