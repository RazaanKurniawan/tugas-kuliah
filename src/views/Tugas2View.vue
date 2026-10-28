<template>
  <div class="article-page">
    <!-- Header / Hero Section -->
    <header class="article-hero">
      <div class="container container-narrow">
        <nav class="breadcrumb-nav">
          <router-link to="/">Beranda</router-link>
          <span>/</span>
          <router-link to="/#courses">Mata Kuliah: Kecerdasan Buatan</router-link>
          <span>/</span>
          <span class="breadcrumb-current">Tugas 2</span>
        </nav>

        <div class="article-meta-badges">
          <span class="badge badge-cyan">Mata Kuliah: Kecerdasan Buatan</span>
          <span class="badge badge-primary">Kelas: {{ portalInfo.className }}</span>
          <span class="badge badge-emerald">{{ portalInfo.studyProgram }}</span>
        </div>

        <h1 class="article-main-title">
          Tugas 2 : Kecerdasan Buatan
        </h1>
        <p class="article-subtitle">
          Soal Essay: Penyelesaian Masalah dengan Teknik Pencarian
        </p>

        <!-- Identity Banner (Persis Sesuai Dokumen Jawaban) -->
        <div class="identity-banner glass-card">
          <div class="identity-header">
            <strong>Identitas Kelompok:</strong>
            <span>Kelas : {{ portalInfo.className }} • Program Studi : {{ portalInfo.studyProgram }}</span>
          </div>
          <div class="members-chips">
            <span v-for="m in portalInfo.members" :key="m.nim" class="member-chip">
              <span class="chip-name">{{ m.name }}</span>
              <span class="chip-nim">({{ m.nim }})</span>
            </span>
          </div>
        </div>

        <!-- Sticky Floating / Quick Actions -->
        <div class="article-actions-bar">
          <CopyLinkBtn
            target-path="/tugas-2"
            task-name="Tugas 2"
            label="Salin Link Tugas 2 (MyBest)"
            btn-class="btn-primary"
          />

          <a href="/docs/Tugas2AI.pdf" target="_blank" download class="btn btn-secondary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Unduh PDF Asli (Tugas2AI.pdf)</span>
          </a>

          <button class="btn btn-outline" @click="printPage">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            <span>Cetak / Simpan PDF</span>
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content & Sidebar Layout -->
    <div class="container article-layout">
      <!-- Article Body -->
      <main class="article-body">
        <!-- Petunjuk Pengerjaan Box (Persis Seperti di PDF) -->
        <section class="guidelines-accordion glass-card">
          <div class="guidelines-card-header" @click="showGuidelines = !showGuidelines">
            <div class="guidelines-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <strong>Petunjuk Pengerjaan Tugas (Sesuai PDF)</strong>
            </div>
            <span class="accordion-toggle">{{ showGuidelines ? 'Sembunyikan ▲' : 'Lihat 7 Petunjuk ▼' }}</span>
          </div>

          <div v-show="showGuidelines" class="guidelines-content">
            <ol class="pdf-instructions-list">
              <li>Kerjakan secara Kelompok</li>
              <li>Buat pada Blog atau Web pribadi bukan Google Drive.</li>
              <li>Setiap anggota kelompok WAJIB mengirimkan jawaban dengan menggunakan LINK dari Blog yang dipilih.</li>
              <li>Cantumkan NIM, Nama Lengkap pada jawaban yang diberikan</li>
              <li>Kerjakan dengan Analisa yang baik dan terstruktur, serta dilengkapi dengan sumber referensi yang digunakan (Boleh menggunakan bantuan AI, ChatGPT dan sejenisnya, namun harus diperkuat dengan hasil pemikiran sendiri).</li>
              <li>Jawaban dapat disertai dengan gambar atau diagram pendukungnya.</li>
              <li>Muat hasil pengerjaan pada Link di MyBest</li>
            </ol>
          </div>
        </section>

        <!-- ==================== SOAL 1 ==================== -->
        <section id="soal-1" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">01</div>
            <div>
              <span class="badge badge-primary">Soal 1</span>
              <h2>SOAL 1: FORMULASI MASALAH (PROBLEM FORMULATION)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 1: Formulasi Masalah (Problem Formulation)</strong> Dalam Kecerdasan Buatan, sebelum sebuah algoritma pencarian dijalankan, masalah harus dirumuskan terlebih dahulu ke dalam struktur yang dapat dipahami mesin. Sebutkan dan jelaskan 6 komponen utama dalam perumusan masalah (problem formulation)! Berikan contoh penerapannya pada kasus "Robot pengantar barang dari titik A ke titik B di dalam sebuah gudang".
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 1</div>

            <p>
              Perumusan masalah formal dalam lingkungan agen cerdas terdiri dari 6 komponen utama. Berikut adalah penjelasan dan penerapannya pada kasus "Robot pengantar barang dari titik A ke titik B di dalam gudang":
            </p>

            <div class="verbatim-item">
              <h4>1. Initial State (Kondisi Awal)</h4>
              <p>
                Keadaan atau konfigurasi lingkungan saat agen pertama kali memulai proses pencarian. <strong>Contoh Kasus:</strong> Robot berada diam di titik koordinat awal A (misalnya dermaga bongkar muat / loading dock) membawa muatan barang yang siap dikirim.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>2. Actions (Himpunan Tindakan)</h4>
              <p>
                Daftar semua kemungkinan aksi legal atau perpindahan yang diizinkan untuk dieksekusi oleh agen dari suatu keadaan. <strong>Contoh Kasus:</strong> Robot dapat bergerak 1 meter Maju, Mundur, Belok Kiri 90 derajat, Belok Kanan 90 derajat, atau Berhenti.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>3. Transition Model (Model Transisi / Result Function)</h4>
              <p>
                Deskripsi formal mengenai hasil luaran dari eksekusi suatu aksi pada status tertentu: Result(s, a) = s'. <strong>Contoh Kasus:</strong> Jika robot berada pada koordinat (X, Y) menghadap ke utara dan mengeksekusi aksi "Maju 1 meter", maka status berikutnya berpindah ke koordinat (X, Y+1) menghadap ke utara, asalkan tidak menabrak rak gudang atau rintangan.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>4. Goal Test (Uji Kondisi Tujuan)</h4>
              <p>
                Fungsi atau kondisi penentu apakah status saat ini sudah memenuhi kriteria target akhir yang diinginkan. <strong>Contoh Kasus:</strong> Sistem memeriksa apakah koordinat posisi robot saat ini identik dengan koordinat titik B (misalnya rak penyimpanan zona B-12). Jika benar, misi selesai.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>5. Path Cost (Biaya Jalur / Biaya Langkah)</h4>
              <p>
                Fungsi biaya numerik yang mencerminkan beban dari urutan aksi yang diambil untuk mencapai tujuan, dinotasikan c(s, a, s'). <strong>Contoh Kasus:</strong> Total waktu tempuh (dalam detik), konsumsi daya baterai robot (dalam Watt-hour), atau total jarak tempuh fisik (dalam meter) sepanjang rute dari A ke B.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>6. State Space (Ruang Status)</h4>
              <p>
                Kumpulan seluruh kemungkinan status atau konfigurasi posisi yang dapat dicapai robot dari initial state melalui kombinasi aksi yang sah. <strong>Contoh Kasus:</strong> Seluruh peta grid lantai gudang yang dapat dilalui (area bebas halangan rak, dinding pembatas, atau jalur konveyor).
              </p>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 2 ==================== -->
        <section id="soal-2" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">02</div>
            <div>
              <span class="badge badge-cyan">Soal 2</span>
              <h2>SOAL 2: PENCARIAN BUTA (UNINFORMED SEARCH)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 2: Pencarian Buta (Uninformed Search)</strong> Pencarian buta (uninformed search atau blind search) tidak menggunakan informasi tambahan tentang perkiraan jarak menuju tujuan. Bandingkan dua algoritma pencarian buta, yaitu Breadth-First Search (BFS) dan Depth-First Search (DFS)!<br />
            a. Jelaskan perbedaan cara kerja kedua algoritma tersebut!<br />
            b. Jelaskan kelebihan dan kekurangan masing-masing algoritma dari segi kompleksitas waktu, kompleksitas ruang (memori), dan kelengkapan (completeness)!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 2</div>

            <h4>a. Perbedaan Cara Kerja BFS dan DFS</h4>
            <ul>
              <li>
                <strong>Breadth-First Search (BFS):</strong> Menjelajahi ruang status lapis demi lapis secara horizontal (level by level). Algoritma ini mengekspansi semua simpul pada kedalaman d sebelum melangkah ke simpul-simpul pada kedalaman d+1. BFS diimplementasikan menggunakan struktur data antrean FIFO (First-In, First-Out).
              </li>
              <li>
                <strong>Depth-First Search (DFS):</strong> Menjelajahi ruang status sedalam mungkin ke satu cabang cabang secara vertikal sebelum melakukan penelusuran balik (backtracking). Algoritma ini mengekspansi simpul anak paling dalam terlebih dahulu hingga menemui jalan buntu (dead-end). DFS diimplementasikan menggunakan struktur data tumpukan LIFO (Last-In, First-Out) atau fungsi rekursif.
              </li>
            </ul>

            <hr class="section-divider" />

            <h4>b. Perbandingan Karakteristik (b = branching factor, d = kedalaman solusi dangkal, m = kedalaman maksimum pohon)</h4>

            <div class="verbatim-item">
              <strong>1. Kompleksitas Waktu (Time Complexity):</strong>
              <ul>
                <li><strong>BFS:</strong> O(b^d). Waktu bertambah secara eksponensial terhadap kedalaman solusi.</li>
                <li><strong>DFS:</strong> O(b^m). Jika pohon sangat dalam atau memiliki cabang tak hingga, waktu pencarian dapat jauh lebih lama dibanding BFS jika solusi berada di cabang lain.</li>
              </ul>
            </div>

            <div class="verbatim-item">
              <strong>2. Kompleksitas Ruang / Memori (Space Complexity):</strong>
              <ul>
                <li><strong>BFS:</strong> O(b^d). Sangat boros memori karena seluruh simpul yang dibangkitkan pada level saat ini dan level sebelumnya harus tetap disimpan di RAM dalam queue.</li>
                <li><strong>DFS:</strong> O(b * m). Sangat hemat memori karena hanya perlu menyimpan jalur aktif dari akar (root) menuju daun (leaf) beserta saudara-saudaranya yang belum diekspansi.</li>
              </ul>
            </div>

            <div class="verbatim-item">
              <strong>3. Kelengkapan (Completeness):</strong>
              <ul>
                <li><strong>BFS:</strong> Complete. Dijamin pasti menemukan solusi jika solusi memang ada (asalkan branching factor b bernilai hingga).</li>
                <li><strong>DFS:</strong> Incomplete pada ruang status tak terhingga atau grafik yang memiliki siklus/loop (bisa terjebak dalam infinite loop jika tidak dilengkapi pengecekan visited nodes). Lengkap hanya jika ruang status berhingga dan memiliki deteksi siklus.</li>
              </ul>
            </div>

            <!-- Visualisasi Simulasi Pendukung Sesuai Petunjuk #6 -->
            <InteractiveSearchDemo />
          </div>
        </section>

        <!-- ==================== SOAL 3 ==================== -->
        <section id="soal-3" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">03</div>
            <div>
              <span class="badge badge-emerald">Soal 3</span>
              <h2>SOAL 3: ITERATIVE DEEPENING SEARCH (IDS)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 3: Iterative Deepening Search (IDS)</strong> Algoritma Iterative Deepening Search (IDS) sering disebut sebagai algoritma hybrid yang menggabungkan kelebihan dari BFS dan DFS. Jelaskan bagaimana cara kerja IDS, dan mengapa IDS sering menjadi pilihan utama untuk pencarian ruang status yang sangat luas (seperti pohon catur) ketika konsumsi memori menjadi pertimbangan utama!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 3</div>

            <h4>Cara Kerja Iterative Deepening Search (IDS):</h4>
            <p>
              IDS bekerja dengan mengeksekusi algoritma Depth-Limited Search (DFS dengan batas kedalaman) secara berulang-ulang, dimulai dari batas kedalaman (depth limit) L = 0, L = 1, L = 2, dan seterusnya secara bertahap dinaikkan sampai solusi pertama kali ditemukan. Pada setiap iterasi baru, pencarian diulang kembali dari simpul akar hingga mencapai batas kedalaman L yang baru.
            </p>

            <hr class="section-divider" />

            <h4>Alasan IDS Menjadi Pilihan Utama untuk Ruang Status Sangat Luas (seperti Pohon Catur):</h4>
            <ol>
              <li>
                <strong>Efisiensi Memori Selevel DFS:</strong> IDS mempertahankan kompleksitas memori linear yaitu O(b * d), di mana b adalah faktor percabangan dan d adalah kedalaman solusi. Pada permainan seperti catur dengan branching factor sekitar b ≈ 35, BFS akan langsung menghabiskan seluruh kapasitas RAM komputer hanya pada kedalaman ke-5 atau ke-6. IDS dapat berjalan lancar tanpa mengalami masalah kehabisan memori (Out-of-Memory).
              </li>
              <li>
                <strong>Jaminan Kelengkapan dan Optimalitas Selevel BFS:</strong> Karena kedalaman bertambah bertahap (0, 1, 2, ...), IDS dijamin complete dan optimal (menemukan solusi dengan jumlah langkah paling sedikit jika biaya tiap langkah sama), mirip dengan karakteristik BFS.
              </li>
              <li>
                <strong>Biaya Overhead Komputasi Ulang yang Relatif Rendah:</strong> Meskipun simpul level atas di-generate berulang kali, sebagian besar simpul dalam pohon percabangan berada pada daun level terbawah. Proporsi komputasi ulang simpul level atas hanya menambah overhead kecil (sekitar b/(b-1)), yang sangat terbayar dengan penghematan memori yang masif.
              </li>
            </ol>
          </div>
        </section>

        <!-- ==================== SOAL 4 ==================== -->
        <section id="soal-4" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">04</div>
            <div>
              <span class="badge badge-amber">Soal 4</span>
              <h2>SOAL 4: PENCARIAN HEURISTIK DAN ALGORITMA A*</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 4: Pencarian Heuristik dan Algoritma A*</strong> Pencarian dengan informasi heuristik (informed search) menggunakan fungsi heuristik, h(n), untuk memperkirakan biaya menuju tujuan.<br />
            a. Jelaskan apa yang dimaksud dengan fungsi heuristik yang Admissible (dapat diterima)! Mengapa sifat admissible sangat penting dalam algoritma A* (A-Star)?<br />
            b. Algoritma A* menggunakan persamaan f(n) = g(n) + h(n). Jelaskan makna dari f(n), g(n), dan h(n) tersebut!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 4</div>

            <h4>a. Heuristik yang Admissible dan Urgensinya dalam Algoritma A*</h4>
            <ul>
              <li>
                <strong>Definisi Admissible:</strong> Suatu fungsi heuristik h(n) dikatakan admissible (dapat diterima) apabila nilai perkiraan biaya dari simpul n menuju tujuan tidak pernah melebihi biaya sebenarnya (never overestimates the true cost). Secara matematis dituliskan: <code>h(n) &lt;= h*(n)</code>, di mana h*(n) adalah biaya riil terpendek menuju tujuan. Nilai h(Goal) harus sama dengan 0.
              </li>
              <li>
                <strong>Urgensi Sifat Admissible:</strong> Sifat ini menjamin bahwa algoritma A* bersifat Optimal (pasti menemukan jalur berbiaya terendah). Jika heuristik membesar-besarkan biaya (overestimate), A* dapat mengabaikan jalur terbaik yang sebenarnya murah hanya karena heuristiknya keliru memprediksi bahwa jalur tersebut mahal, sehingga algoritma berakhir pada solusi suboptimal.
              </li>
            </ul>

            <hr class="section-divider" />

            <h4>b. Makna Komponen f(n) = g(n) + h(n)</h4>
            <ul>
              <li>
                <strong>g(n):</strong> Biaya Historis (Past/Exact Cost). Merupakan biaya riil yang telah dihabiskan untuk melakukan perjalanan dari simpul awal (start node) hingga ke simpul saat ini n.
              </li>
              <li>
                <strong>h(n):</strong> Biaya Perkiraan Masa Depan (Future/Estimated Cost). Merupakan fungsi perkiraan (heuristik) dari simpul saat ini n menuju simpul tujuan (goal node).
              </li>
              <li>
                <strong>f(n):</strong> Estimasi Biaya Total Jalur (Total Estimated Path Cost). Merupakan taksiran total biaya keseluruhan perjalanan termurah yang melewati simpul n dari awal hingga ke tujuan. Algoritma A* selalu memprioritaskan ekspansi simpul yang memiliki nilai f(n) terkecil pada antrean prioritas (priority queue).
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== SOAL 5 ==================== -->
        <section id="soal-5" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">05</div>
            <div>
              <span class="badge badge-primary">Soal 5</span>
              <h2>SOAL 5: PENCARIAN LOKAL (LOCAL SEARCH) DAN OPTIMASI</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 5: Pencarian Lokal (Local Search) dan Optimasi</strong> Algoritma pencarian lokal seperti Hill Climbing sering digunakan untuk masalah optimasi yang ruang statusnya terlalu besar untuk disimpan dalam memori (misal: Travelling Salesperson Problem atau TSP).<br />
            a. Jelaskan cara kerja dasar algoritma Hill Climbing!<br />
            b. Apa kelemahan utama dari Hill Climbing standar? Sebutkan dan jelaskan satu variasi algoritma yang dapat mengatasi kelemahan tersebut (misalnya: Simulated Annealing atau Genetic Algorithm)!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 5</div>

            <h4>a. Cara Kerja Dasar Algoritma Hill Climbing</h4>
            <p>
              Hill Climbing (sering disebut steepest-ascent) bekerja mirip dengan pendaki gunung yang mendaki dalam kabut tebal:
            </p>
            <ol>
              <li>Algoritma memulai dari satu kondisi awal acak (current state).</li>
              <li>Mengevaluasi seluruh status tetangga (neighbor states) di sekitarnya menggunakan fungsi evaluasi objektif/fitness.</li>
              <li>Memilih tetangga dengan nilai evaluasi tertinggi (perbaikan terbaik dibanding status saat ini).</li>
              <li>Jika tetangga terbaik tersebut lebih baik daripada status saat ini, agen berpindah ke tetangga tersebut dan menjadikannya status baru.</li>
              <li>Proses diulang terus-menerus hingga tidak ada lagi tetangga yang memiliki nilai lebih tinggi dari status saat ini. Pada titik ini, algoritma berhenti dan menganggap posisi tersebut sebagai solusi terbaik.</li>
            </ol>

            <hr class="section-divider" />

            <h4>b. Kelemahan Utama dan Solusi Alternatif</h4>
            <ul>
              <li>
                <strong>Kelemahan Utama:</strong> Terjebak pada Local Optima (Puncak Lokal). Algoritma ini berhenti saat berada di puncak bukit lokal karena semua tetangga di sekitarnya memiliki nilai lebih rendah, padahal ada puncak global (Global Optimum) yang jauh lebih tinggi di bagian lain ruang status. Masalah lain mencakup plateau (wilayah datar tanpa kemiringan) dan ridges (punggung bukit tajam).
              </li>
              <li>
                <strong>Solusi Variasi: Algoritma Simulated Annealing. Penjelasan:</strong> Terinspirasi dari proses pendinginan logam (annealing) dalam metalurgi. Algoritma ini tidak hanya mengambil langkah yang membaik, tetapi juga mengizinkan "langkah buruk" (downhill moves) dengan probabilitas tertentu untuk meloloskan diri dari jebakan puncak lokal. Probabilitas menerima langkah buruk diatur oleh parameter suhu T (Temperature). Di awal pencarian, nilai T tinggi sehingga algoritma bebas melompat menjelajahi area baru. Seiring berjalannya waktu, suhu T menurun secara bertahap menuju 0, membuat algoritma semakin selektif hingga berperilaku murni seperti Hill Climbing saat mendekati konvergensi di global optimum.
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== SOAL 6 ==================== -->
        <section id="soal-6" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">06</div>
            <div>
              <span class="badge badge-cyan">Soal 6</span>
              <h2>SOAL 6: STUDI KASUS - N-QUEENS PROBLEM</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 6: Studi Kasus - N-Queens Problem</strong> Masalah N-Queens menuntut penempatan N buah ratu pada papan catur berukuran NxN sedemikian rupa sehingga tidak ada dua ratu yang saling mematikan (satu baris, kolom, atau diagonal). Jika Anda ditugaskan menyelesaikan masalah 8-Queens menggunakan teknik pencarian, mana yang lebih efisien digunakan: algoritma pencarian pohon ruang status (tree search seperti BFS/DFS) atau algoritma pencarian lokal (seperti Min-Conflicts)? Berikan argumentasi ilmiah mengenai pilihan Anda!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 6</div>

            <p>
              <strong>Rekomendasi Pilihan:</strong> Algoritma Pencarian Lokal (seperti Min-Conflicts / Local Search) jauh lebih efisien dibandingkan Algoritma Pencarian Pohon (Tree Search seperti BFS/DFS).
            </p>

            <h4>Argumentasi Ilmiah:</h4>
            <ol>
              <li>
                <strong>Ukuran Ruang Status dan Ledakan Kombinatorial (Combinatorial Explosion):</strong> Pada papan 8-Queens, jika diselesaikan dengan Tree Search (misal DFS murni tanpa pruning lanjutan), ruang status penempatan 8 ratu pada 64 petak mencapai 64! / (8! * 56!) ≈ 4,4 x 10^9 kombinasi. Bahkan jika dibatasi satu ratu per kolom, ruang statusnya tetap 8^8 = 16.777.216 kemungkinan status. Melacak status pohon membutuhkan pembentukan struktur data tree/graph yang berat dan memerlukan waktu traversal yang lama.
              </li>
              <li>
                <strong>Karakteristik Masalah (Goal State vs Path to Goal):</strong> N-Queens adalah masalah kepuasan batasan (Constraint Satisfaction Problem). Yang dicari hanyalah konfigurasi akhir papan di mana tidak ada ratu yang saling serang. Jalur atau urutan langkah bagaimana ratu ditempatkan sama sekali tidak penting. Algoritma Tree Search (BFS/DFS) membuang-buang memori dan daya komputasi hanya untuk menyimpan urutan rantai status (path history) yang tidak bernilai.
              </li>
              <li>
                <strong>Efisiensi Komputasi Algoritma Min-Conflicts:</strong> Algoritma Min-Conflicts memulai dari penempatan lengkap 8 ratu (satu ratu per kolom secara acak). Pada setiap langkah iterasi:
                <ul>
                  <li>Algoritma memilih secara acak satu ratu yang mengalami konflik (saling serang).</li>
                  <li>Memindahkan ratu tersebut pada kolom yang sama ke baris yang meminimalkan jumlah konflik serangan. Secara empiris, algoritma Min-Conflicts dapat menyelesaikan 8-Queens dalam rata-rata kurang dari 50 langkah (orde O(1) hingga O(N)). Faktanya, Min-Conflicts bahkan dapat menyelesaikan N-Queens untuk N = 1.000.000 (satu juta ratu) dalam hitungan detik, sesuatu yang mustahil dilakukan oleh BFS atau DFS.</li>
                </ul>
              </li>
            </ol>

            <!-- Visualisasi Simulasi Pendukung Sesuai Petunjuk #6 -->
            <Interactive8Queens />
          </div>
        </section>

        <!-- ==================== SOAL 7 ==================== -->
        <section id="soal-7" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">07</div>
            <div>
              <span class="badge badge-emerald">Soal 7</span>
              <h2>SOAL 7: ANALISIS DILEMA "TIME VS SPACE TRADE-OFF"</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 7: Analisis Dilema "Time vs Space Trade-off"</strong> Sebuah perusahaan ride-hailing ingin membuat sistem AI yang dapat mencari rute terpendek bagi pengemudi ojek online untuk mengantarkan penumpang. Sistem ini harus memproses jutaan rute secara real-time. Berdasarkan karakteristik algoritma pencarian (BFS, DFS, A*, IDS, Hill Climbing), algoritma mana yang paling tidak relevan atau akan menyebabkan kegagalan sistem jika diterapkan mentah-mentah pada skala besar ini? Berikan alasan mengapa algoritma tersebut tidak cocok, dan sebutkan algoritma alternatif yang seharusnya digunakan beserta alasan teknisnya!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 7</div>

            <h4>1. Algoritma yang Paling Tidak Relevan / Menyebabkan Kegagalan Sistem:</h4>
            <p>
              Algoritma Breadth-First Search (BFS) dan Depth-First Search (DFS) murni. Secara khusus, BFS adalah yang paling fatal menyebabkan kegagalan sistem seketika (crash sistem).
            </p>

            <strong>Alasan Mengapa Tidak Cocok:</strong>
            <ul>
              <li>
                <strong>Ledakan Memori Ekstrem pada BFS (Out of Memory Failure):</strong> Peta jalan raya kota pada aplikasi ride-hailing dimodelkan sebagai graf berbobot raksasa dengan jutaan persimpangan (nodes) dan ruas jalan (edges). BFS mengekspansi seluruh simpul bertingkat secara meluas. Dengan jutaan permintaan perjalanan real-time, antrean FIFO BFS akan menampung jutaan node jalan raya di RAM per request. Server akan mengalami Out-Of-Memory (OOM) dalam hitungan detik. Selain itu, BFS mengasumsikan biaya tiap ruas jalan adalah sama (bobot 1), padahal jarak jalan dan durasi macet di dunia nyata sangat variatif.
              </li>
              <li>
                <strong>DFS Menghasilkan Rute Irasional (Inoptimal):</strong> DFS akan menelusuri satu ruas jalan hingga ke ujung pulau/kota lain sebelum melakukan backtracking. Hal ini menghasilkan rute yang sangat berputar-putar, boros bahan bakar, dan sama sekali tidak menjamin jarak terpendek.
              </li>
              <li>
                <strong>Hill Climbing Menghasilkan Rute Buntu:</strong> Hill Climbing mudah terjebak di jalan buntu (dead-end) atau persimpangan satu arah karena hanya melihat perbaikan jarak satu langkah ke depan secara serakah tanpa memikirkan jaringan jalan secara global.
              </li>
            </ul>

            <hr class="section-divider" />

            <h4>2. Algoritma Alternatif yang Seharusnya Digunakan:</h4>
            <p>
              Algoritma A* Search yang dioptimasi (khususnya Bidirectional A* Search atau Contraction Hierarchies berbasis A*).
            </p>

            <strong>Alasan Teknis:</strong>
            <ul>
              <li>
                <strong>Efisiensi Heuristik Terarah:</strong> A* menggunakan kombinasi f(n) = g(n) + h(n). Nilai g(n) mencatat jarak tempuh/waktu nyata dari titik penjemputan, sementara h(n) menggunakan jarak garis lurus (Euclidean / Haversine distance) menuju titik tujuan sebagai heuristik yang admissible. Hal ini membuat pencarian fokus mengarah ke tujuan dan tidak menyebar ke segala arah seperti BFS/Dijkstra standar, memangkas ruang pencarian secara drastis.
              </li>
              <li>
                <strong>Jaminan Optimalitas Rute:</strong> Karena heuristik jarak garis lurus tidak pernah melebihi jarak jalan riil (admissible), rute yang dihasilkan dijamin merupakan rute terpendek / tercepat secara matematis.
              </li>
              <li>
                <strong>Skalabilitas Industri (Contraction Hierarchies):</strong> Dalam sistem ride-hailing berskala produksi, algoritma A* dikombinasikan dengan teknik pra-pemrosesan seperti Contraction Hierarchies (CH). Jalan-jalan utama (arteri/tol) diberi prioritas hierarki lebih tinggi daripada gang perumahan, sehingga rute jutaan titik antarkota dapat dihitung hanya dalam waktu beberapa milidetik dengan penggunaan memori yang sangat minim.
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== REFERENSI ==================== -->
        <section id="referensi" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">📚</div>
            <div>
              <span class="badge badge-primary">Daftar Pustaka</span>
              <h2>Sumber Referensi Akademik</h2>
            </div>
          </div>

          <div class="answer-content">
            <p>
              Rujukan ilmiah teori pencarian dan optimasi algoritma:
            </p>
            <ol class="references-list">
              <li>
                <strong>Russell, S., & Norvig, P. (2020).</strong> <em>Artificial Intelligence: A Modern Approach (4th Edition).</em> Pearson.
              </li>
              <li>
                <strong>Hart, P. E., Nilsson, N. J., & Raphael, B. (1968).</strong> <em>A Formal Basis for the Heuristic Determination of Minimum Cost Paths.</em> IEEE SSC.
              </li>
              <li>
                <strong>Korf, R. E. (1985).</strong> <em>Depth-first iterative-deepening: An optimal admissible tree search.</em> Artificial Intelligence.
              </li>
              <li>
                <strong>Minton, S., et al. (1992).</strong> <em>Minimizing conflicts: a heuristic repair method for constraint satisfaction.</em> Artificial Intelligence.
              </li>
              <li>
                <strong>Geisberger, R., et al. (2008).</strong> <em>Contraction Hierarchies: Faster and Simpler Hierarchical Routing.</em> Springer.
              </li>
            </ol>
          </div>
        </section>

        <!-- Bottom Navigation & Share -->
        <div class="article-bottom-nav">
          <router-link to="/tugas-1" class="btn btn-secondary">
            ← Buka Tugas 1
          </router-link>
          <div class="bottom-actions">
            <CopyLinkBtn
              target-path="/tugas-2"
              task-name="Tugas 2"
              label="Salin Link Tugas 2"
              btn-class="btn-primary"
            />
            <router-link to="/" class="btn btn-outline">
              Kembali ke Portal Akademik
            </router-link>
          </div>
        </div>
      </main>

      <!-- Sticky TOC Sidebar -->
      <aside class="article-toc">
        <div class="toc-sidebar glass-card">
          <h4 class="toc-title">Daftar Soal Tugas 2</h4>
          <nav class="toc-nav">
            <a href="#soal-1" class="toc-link">Soal 1: Formulasi Masalah (6 Komponen)</a>
            <a href="#soal-2" class="toc-link">Soal 2: BFS vs DFS Matrix</a>
            <a href="#soal-3" class="toc-link">Soal 3: Iterative Deepening (IDS)</a>
            <a href="#soal-4" class="toc-link">Soal 4: Heuristik A* & Formula</a>
            <a href="#soal-5" class="toc-link">Soal 5: Hill Climbing & Annealing</a>
            <a href="#soal-6" class="toc-link">Soal 6: 8-Queens & Min-Conflicts</a>
            <a href="#soal-7" class="toc-link">Soal 7: Ride-Hailing & Mitigasi OOM</a>
            <a href="#referensi" class="toc-link">📚 Sumber Referensi</a>
          </nav>

          <hr class="toc-divider" />

          <div class="toc-quick-copy">
            <span class="toc-label">Tautan Pengumpulan:</span>
            <CopyLinkBtn
              target-path="/tugas-2"
              task-name="Tugas 2"
              label="Salin Link Halaman Ini"
              btn-class="btn-primary btn-sm"
            />
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { PORTAL_INFO } from '@/data/courseData'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'
import Interactive8Queens from '@/components/Interactive8Queens.vue'
import InteractiveSearchDemo from '@/components/InteractiveSearchDemo.vue'

const portalInfo = PORTAL_INFO
const showGuidelines = ref(true)

const printPage = () => {
  window.print()
}
</script>

<style scoped>
.article-page {
  padding-bottom: 5rem;
}

.article-hero {
  padding: 3.5rem 0 2.5rem;
  border-bottom: 1px solid var(--border-subtle);
  margin-bottom: 3rem;
  background: linear-gradient(180deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%);
}

.breadcrumb-nav {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
  margin-bottom: 1.25rem;
  color: var(--text-dim);
  flex-wrap: wrap;
}

.breadcrumb-nav a {
  color: var(--accent-primary);
  text-decoration: none;
}

.article-meta-badges {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
}

.article-main-title {
  font-size: clamp(2rem, 4vw, 2.8rem);
  margin-bottom: 0.5rem;
}

.article-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 2rem;
}

.identity-banner {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
  border: 1px solid var(--border-medium);
}

.identity-header {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.members-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.member-chip {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  padding: 0.3rem 0.75rem;
  border-radius: var(--radius-full);
  font-size: 0.82rem;
  display: inline-flex;
  gap: 0.35rem;
}

.chip-name {
  color: var(--text-main);
  font-weight: 600;
}

.chip-nim {
  color: var(--accent-cyan);
  font-family: var(--font-mono);
}

.article-actions-bar {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.guidelines-accordion {
  padding: 1.25rem 1.75rem;
  border-radius: var(--radius-md);
  margin-bottom: 2.5rem;
  border: 1px solid var(--border-medium);
}

.guidelines-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.guidelines-title {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: var(--text-main);
}

.accordion-toggle {
  font-size: 0.85rem;
  color: var(--accent-primary);
  font-weight: 600;
}

.guidelines-content {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.pdf-instructions-list {
  padding-left: 1.5rem;
  line-height: 1.8;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.pdf-instructions-list li {
  margin-bottom: 0.4rem;
}

.article-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 3rem;
  align-items: start;
}

.article-body {
  min-width: 0;
}

.question-card {
  padding: 2.5rem;
  border-radius: var(--radius-lg);
  margin-bottom: 3rem;
}

.jawaban-badge {
  display: inline-block;
  background: rgba(6, 182, 212, 0.15);
  border: 1px solid rgba(6, 182, 212, 0.3);
  color: #67e8f9;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  margin-bottom: 1.25rem;
}

.verbatim-text {
  font-size: 1.02rem;
  line-height: 1.85;
  color: var(--text-muted);
}

.verbatim-text p {
  margin-bottom: 1.25rem;
}

.verbatim-text h4 {
  color: var(--text-main);
  font-size: 1.08rem;
  margin: 1.5rem 0 0.6rem;
}

.verbatim-text ul, .verbatim-text ol {
  margin: 0.8rem 0 1.4rem 1.5rem;
}

.verbatim-text li {
  margin-bottom: 0.5rem;
}

.section-divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 1.75rem 0;
}

.references-list {
  padding-left: 1.5rem;
  line-height: 1.9;
}

.references-list li {
  margin-bottom: 0.75rem;
  color: var(--text-muted);
}

.article-bottom-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
  flex-wrap: wrap;
  gap: 1rem;
}

.bottom-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.toc-title {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--text-main);
}

.toc-nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.toc-divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 1.25rem 0;
}

.toc-quick-copy {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.toc-label {
  font-size: 0.78rem;
  color: var(--text-dim);
  font-weight: 600;
}

@media (max-width: 960px) {
  .article-layout {
    grid-template-columns: 1fr;
  }
  .article-toc {
    display: none;
  }
}
</style>
