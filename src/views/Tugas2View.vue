<template>
  <div class="article-page">
    <!-- Header / Hero Section -->
    <header class="article-hero">
      <div class="container container-narrow">
        <nav class="breadcrumb-nav">
          <router-link to="/">Beranda</router-link>
          <span>/</span>
          <span class="breadcrumb-current">Tugas 2</span>
        </nav>

        <div class="article-meta-badges">
          <span class="badge badge-cyan">Mata Kuliah: Kecerdasan Buatan</span>
          <span class="badge badge-primary">Kelas: {{ courseInfo.className }}</span>
          <span class="badge badge-emerald">Semester 5</span>
        </div>

        <h1 class="article-main-title">
          Tugas 2: Penyelesaian Masalah dengan Teknik Pencarian (Search Algorithms)
        </h1>

        <p class="article-lead">
          Kajian komparatif algoritma pencarian kecerdasan buatan: formulasi 6 komponen ruang status, BFS vs DFS, IDS, formulasi heuristik A*, Simulated Annealing, studi kasus 8-Queens, dan rekayasa mitigasi OOM pada sistem ride-hailing jutaan rute.
        </p>

        <!-- Identity Banner -->
        <div class="identity-banner glass-card">
          <div class="identity-header">
            <strong>Tim Penyusun (Kelompok):</strong>
            <span>Program Studi {{ courseInfo.studyProgram }} • {{ courseInfo.institution }}</span>
          </div>
          <div class="members-chips">
            <span v-for="m in courseInfo.members" :key="m.nim" class="member-chip">
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
            <span>Unduh PDF Soal & Jawaban</span>
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
        <!-- ==================== SOAL 1 ==================== -->
        <section id="soal-1" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">01</div>
            <div>
              <span class="badge badge-primary">Soal 1</span>
              <h2>Formulasi Masalah (Problem Formulation)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Dalam Kecerdasan Buatan, sebelum sebuah algoritma pencarian dijalankan, masalah harus dirumuskan terlebih dahulu ke dalam struktur yang dapat dipahami mesin. Sebutkan dan jelaskan 6 komponen utama dalam perumusan masalah (problem formulation)! Berikan contoh penerapannya pada kasus "Robot pengantar barang dari titik A ke titik B di dalam sebuah gudang".
          </div>

          <div class="answer-content">
            <p>
              Perumusan masalah formal dalam lingkungan agen cerdas terdiri dari <strong>6 komponen utama</strong>. Berikut adalah penjelasan teoritis serta penerapannya secara spesifik pada kasus <em>"Robot pengantar barang dari titik A ke titik B di dalam gudang"</em>:
            </p>

            <div class="table-responsive">
              <table class="academic-table">
                <thead>
                  <tr>
                    <th>Komponen</th>
                    <th>Definisi Formal Mesin</th>
                    <th>Contoh Penerapan Robot Gudang (A → B)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>1. Initial State</strong></td>
                    <td>Konfigurasi atau keadaan lingkungan saat agen pertama kali memulai proses pencarian.</td>
                    <td>Robot berada diam di titik koordinat awal <code>A</code> (misalnya dermaga bongkar muat / <em>loading dock</em>) membawa muatan barang yang siap dikirim.</td>
                  </tr>
                  <tr>
                    <td><strong>2. Actions</strong></td>
                    <td>Himpunan semua kemungkinan aksi legal atau perpindahan yang diizinkan untuk dieksekusi oleh agen dari suatu keadaan.</td>
                    <td>Robot dapat bergerak 1 meter Maju, Mundur, Belok Kiri 90°, Belok Kanan 90°, atau Berhenti.</td>
                  </tr>
                  <tr>
                    <td><strong>3. Transition Model</strong></td>
                    <td>Deskripsi formal hasil luaran dari eksekusi suatu aksi pada status tertentu: <code>Result(s, a) = s'</code>.</td>
                    <td>Jika robot berada pada koordinat <code>(X, Y)</code> menghadap ke utara dan mengeksekusi aksi "Maju 1 meter", maka status berikutnya berpindah ke <code>(X, Y+1)</code> menghadap ke utara (asalkan tidak menabrak rintangan).</td>
                  </tr>
                  <tr>
                    <td><strong>4. Goal Test</strong></td>
                    <td>Fungsi predikat penentu apakah status saat ini sudah memenuhi kriteria target akhir yang diinginkan.</td>
                    <td>Sistem memeriksa apakah koordinat posisi robot saat ini identik dengan koordinat titik <code>B</code> (misalnya rak penyimpanan zona B-12). Jika benar, misi selesai.</td>
                  </tr>
                  <tr>
                    <td><strong>5. Path Cost</strong></td>
                    <td>Fungsi biaya numerik yang mencerminkan beban dari urutan aksi yang diambil, dinotasikan <code>c(s, a, s')</code>.</td>
                    <td>Total waktu tempuh (detik), konsumsi daya baterai (Watt-hour), atau total jarak tempuh fisik (meter) sepanjang rute dari A ke B.</td>
                  </tr>
                  <tr>
                    <td><strong>6. State Space</strong></td>
                    <td>Kumpulan seluruh kemungkinan konfigurasi posisi yang dapat dicapai robot dari <em>initial state</em> melalui kombinasi aksi legal.</td>
                    <td>Seluruh peta grid lantai gudang yang dapat dilalui (area bebas halangan rak, dinding pembatas, atau jalur konveyor).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 2 ==================== -->
        <section id="soal-2" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">02</div>
            <div>
              <span class="badge badge-cyan">Soal 2</span>
              <h2>Pencarian Buta: Breadth-First Search (BFS) vs Depth-First Search (DFS)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Pencarian buta (uninformed search atau blind search) tidak menggunakan informasi tambahan tentang perkiraan jarak menuju tujuan. Bandingkan dua algoritma pencarian buta, yaitu Breadth-First Search (BFS) dan Depth-First Search (DFS)!<br />
            a. Jelaskan perbedaan cara kerja kedua algoritma tersebut!<br />
            b. Jelaskan kelebihan dan kekurangan masing-masing algoritma dari segi kompleksitas waktu, kompleksitas ruang (memori), dan kelengkapan (completeness)!
          </div>

          <div class="answer-content">
            <h3>a. Perbedaan Cara Kerja BFS dan DFS</h3>

            <div class="duo-cards">
              <div class="duo-card">
                <h4>🌐 Breadth-First Search (BFS)</h4>
                <p>
                  Menjelajahi ruang status <strong>lapis demi lapis secara horizontal</strong> (<em>level by level</em>). Algoritma ini mengekspansi semua simpul pada kedalaman <code>d</code> sebelum melangkah ke simpul-simpul pada kedalaman <code>d+1</code>.
                </p>
                <p>
                  <strong>Struktur Data:</strong> Antrean FIFO (<em>First-In, First-Out Queue</em>).
                </p>
              </div>

              <div class="duo-card">
                <h4>🌲 Depth-First Search (DFS)</h4>
                <p>
                  Menjelajahi ruang status <strong>sedalam mungkin ke satu cabang</strong> secara vertikal sebelum melakukan penelusuran balik (<em>backtracking</em>). Algoritma ini mengekspansi simpul anak paling dalam terlebih dahulu hingga menemui jalan buntu (<em>dead-end</em>).
                </p>
                <p>
                  <strong>Struktur Data:</strong> Tumpukan LIFO (<em>Last-In, First-Out Stack</em>) atau fungsi rekursif.
                </p>
              </div>
            </div>

            <!-- Interactive Graph Simulation -->
            <InteractiveSearchDemo />

            <hr class="section-divider" />

            <h3>b. Perbandingan Karakteristik Formal</h3>
            <p>
              Notasi: <code>b</code> = <em>branching factor</em> (faktor percabangan), <code>d</code> = kedalaman solusi paling dangkal, <code>m</code> = kedalaman maksimum pohon.
            </p>

            <div class="table-responsive">
              <table class="academic-table">
                <thead>
                  <tr>
                    <th>Parameter Analisis</th>
                    <th>Breadth-First Search (BFS)</th>
                    <th>Depth-First Search (DFS)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Kompleksitas Waktu (Time)</strong></td>
                    <td><code>O(b^d)</code><br />Waktu meningkat secara eksponensial terhadap kedalaman solusi dangkal.</td>
                    <td><code>O(b^m)</code><br />Dapat sangat lama jika pohon dalam/tak hingga dan solusi berada di cabang lain.</td>
                  </tr>
                  <tr>
                    <td><strong>Kompleksitas Ruang (Space)</strong></td>
                    <td><code>O(b^d)</code><br /><strong>Sangat boros memori</strong>, karena semua simpul pada level berjalan dan sebelumnya harus disimpan di RAM dalam queue.</td>
                    <td><code>O(b × m)</code><br /><strong>Sangat hemat memori</strong>, hanya perlu menyimpan simpul di jalur aktif dari root ke daun beserta saudara yang belum diekspansi.</td>
                  </tr>
                  <tr>
                    <td><strong>Kelengkapan (Completeness)</strong></td>
                    <td><strong>Complete</strong><br />Dijamin menemukan solusi jika solusi memang ada (asalkan <code>b</code> bernilai berhingga).</td>
                    <td><strong>Incomplete</strong><br />Gagal pada ruang status tak berhingga atau grafik bersiklus/loop jika tanpa deteksi visited nodes.</td>
                  </tr>
                  <tr>
                    <td><strong>Optimalitas</strong></td>
                    <td><strong>Optimal</strong> (jika semua biaya langkah / <em>step costs</em> sama).</td>
                    <td><strong>Suboptimal</strong> (menemukan solusi pertama yang ditemui di cabang terdalam).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 3 ==================== -->
        <section id="soal-3" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">03</div>
            <div>
              <span class="badge badge-emerald">Soal 3</span>
              <h2>Iterative Deepening Search (IDS)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Algoritma Iterative Deepening Search (IDS) sering disebut sebagai algoritma hybrid yang menggabungkan kelebihan dari BFS dan DFS. Jelaskan bagaimana cara kerja IDS, dan mengapa IDS sering menjadi pilihan utama untuk pencarian ruang status yang sangat luas (seperti pohon catur) ketika konsumsi memori menjadi pertimbangan utama!
          </div>

          <div class="answer-content">
            <h3>Cara Kerja Iterative Deepening Search (IDS)</h3>
            <p>
              IDS bekerja dengan mengeksekusi algoritma <strong>Depth-Limited Search (DLS)</strong> secara berulang-ulang, dimulai dari batas kedalaman (<em>depth limit</em>) <code>L = 0</code>, kemudian <code>L = 1</code>, <code>L = 2</code>, dan seterusnya secara bertahap dinaikkan sampai solusi pertama kali ditemukan.
            </p>
            <p>
              Pada setiap iterasi baru dengan limit <code>L</code> yang lebih tinggi, pencarian diulang kembali dari simpul akar (<em>root</em>) hingga mencapai batas kedalaman tersebut.
            </p>

            <div class="math-block">
              Limit L = 0 → DLS(0) | L = 1 → DLS(1) | ... | L = d → Solusi Ditemukan
            </div>

            <hr class="section-divider" />

            <h3>Mengapa IDS Pilihan Utama untuk Ruang Status Sangat Luas (Pohon Catur):</h3>

            <div class="feature-bullets">
              <div class="bullet-box">
                <span class="bullet-badge">Keunggulan DFS</span>
                <h4>1. Efisiensi Memori Selevel DFS: O(b × d)</h4>
                <p>
                  IDS mempertahankan kompleksitas memori linear <code>O(b × d)</code>. Pada permainan catur dengan faktor percabangan rata-rata <code>b ≈ 35</code>, algoritma BFS akan langsung menghabiskan seluruh kapasitas RAM komputer hanya pada kedalaman ke-5 atau ke-6 (<em>Out-of-Memory</em>). IDS dapat menelusuri kedalaman jauh lebih besar tanpa pernah kehabisan memori.
                </p>
              </div>

              <div class="bullet-box">
                <span class="bullet-badge">Keunggulan BFS</span>
                <h4>2. Jaminan Kelengkapan & Optimalitas Selevel BFS</h4>
                <p>
                  Karena batas kedalaman bertambah bertahap (0, 1, 2, ...), IDS dijamin <strong>complete</strong> dan <strong>optimal</strong> (pasti menemukan solusi dengan jumlah langkah paling sedikit jika bobot langkah seragam), persis seperti karakteristik BFS tanpa membawa kelemahan memorinya.
                </p>
              </div>

              <div class="bullet-box">
                <span class="bullet-badge">Trade-Off Rendah</span>
                <h4>3. Biaya Overhead Komputasi Ulang Sangat Rendah</h4>
                <p>
                  Meskipun simpul level atas di-<em>generate</em> berulang kali, proporsi terbesar simpul dalam pohon percabangan berada pada tingkat daun terbawah. Rasio overhead komputasi ulang simpul level atas hanya menambah faktor sekitar <code>b / (b - 1)</code> (sekitar 2% hingga 8%), yang sangat terbayar lunas dengan penghematan jutaan gigabyte memori.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 4 ==================== -->
        <section id="soal-4" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">04</div>
            <div>
              <span class="badge badge-amber">Soal 4</span>
              <h2>Pencarian Heuristik dan Algoritma A* (A-Star)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Pencarian dengan informasi heuristik (informed search) menggunakan fungsi heuristik, h(n), untuk memperkirakan biaya menuju tujuan.<br />
            a. Jelaskan apa yang dimaksud dengan fungsi heuristik yang Admissible (dapat diterima)! Mengapa sifat admissible sangat penting dalam algoritma A* (A-Star)?<br />
            b. Algoritma A* menggunakan persamaan f(n) = g(n) + h(n). Jelaskan makna dari f(n), g(n), dan h(n) tersebut!
          </div>

          <div class="answer-content">
            <h3>a. Heuristik yang Admissible dan Urgensinya dalam Algoritma A*</h3>
            <p>
              <strong>Definisi Admissible:</strong> Suatu fungsi heuristik <code>h(n)</code> dikatakan <em>admissible</em> (dapat diterima) apabila nilai perkiraan biaya dari simpul <code>n</code> menuju tujuan <strong>tidak pernah melebihi biaya sebenarnya</strong> (<em>never overestimates the true cost</em>).
            </p>

            <div class="math-block">
              h(n) ≤ h*(n) &nbsp;&nbsp;&text{dan}&nbsp;&nbsp; h(Goal) = 0
            </div>

            <p>
              di mana <code>h*(n)</code> adalah biaya riil terpendek menuju tujuan.
            </p>

            <div class="callout callout-info">
              <div class="callout-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                <span>Urgensi Sifat Admissible bagi Optimalitas</span>
              </div>
              <p>
                Sifat admissible menjamin bahwa algoritma A* bersifat <strong>Optimal</strong> (pasti menemukan jalur berbiaya terendah). Jika fungsi heuristik membesar-besarkan perkiraan biaya (<em>overestimate</em>), A* dapat mengabaikan jalur terbaik yang sebenarnya murah hanya karena heuristiknya keliru menganggap jalur tersebut mahal, sehingga algoritma berakhir pada solusi suboptimal.
              </p>
            </div>

            <hr class="section-divider" />

            <h3>b. Makna Komponen Formula f(n) = g(n) + h(n)</h3>

            <div class="math-block">
              f(n) = g(n) + h(n)
            </div>

            <div class="formula-breakdown-grid">
              <div class="formula-card">
                <span class="formula-var text-cyan">g(n)</span>
                <h4>Biaya Historis (Past / Exact Cost)</h4>
                <p>
                  Biaya riil yang telah dihabiskan untuk melakukan perjalanan dari simpul awal (<em>start node</em>) hingga ke simpul saat ini <code>n</code>.
                </p>
              </div>

              <div class="formula-card">
                <span class="formula-var text-pink">h(n)</span>
                <h4>Biaya Perkiraan Masa Depan (Heuristic Cost)</h4>
                <p>
                  Fungsi perkiraan biaya dari simpul saat ini <code>n</code> menuju simpul tujuan (<em>goal node</em>). Misalnya jarak garis lurus (Euclidean).
                </p>
              </div>

              <div class="formula-card formula-card-highlight">
                <span class="formula-var text-indigo">f(n)</span>
                <h4>Estimasi Biaya Total Jalur (Total Estimated Cost)</h4>
                <p>
                  Taksiran total biaya keseluruhan perjalanan termurah yang melewati simpul <code>n</code> dari awal hingga tujuan. Algoritma A* selalu memprioritaskan ekspansi simpul yang memiliki nilai <code>f(n)</code> terkecil dalam <em>priority queue</em>.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 5 ==================== -->
        <section id="soal-5" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">05</div>
            <div>
              <span class="badge badge-primary">Soal 5</span>
              <h2>Pencarian Lokal (Local Search) dan Optimasi</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Algoritma pencarian lokal seperti Hill Climbing sering digunakan untuk masalah optimasi yang ruang statusnya terlalu besar untuk disimpan dalam memori (misal: Travelling Salesperson Problem atau TSP).<br />
            a. Jelaskan cara kerja dasar algoritma Hill Climbing!<br />
            b. Apa kelemahan utama dari Hill Climbing standar? Sebutkan dan jelaskan satu variasi algoritma yang dapat mengatasi kelemahan tersebut (misalnya: Simulated Annealing atau Genetic Algorithm)!
          </div>

          <div class="answer-content">
            <h3>a. Cara Kerja Dasar Algoritma Hill Climbing</h3>
            <p>
              Hill Climbing (sering disebut <em>steepest-ascent</em>) bekerja mirip dengan seorang pendaki gunung yang mendaki menuju puncak dalam kabut tebal tanpa peta global:
            </p>

            <ol>
              <li><strong>Inisialisasi:</strong> Algoritma memulai dari satu kondisi awal acak (<em>current state</em>).</li>
              <li><strong>Evaluasi Tetangga:</strong> Mengevaluasi seluruh status tetangga (<em>neighbor states</em>) di sekitarnya menggunakan fungsi evaluasi objektif/fitness.</li>
              <li><strong>Pemilihan Terbaik:</strong> Memilih tetangga dengan nilai evaluasi tertinggi (perbaikan terbaik dibanding status saat ini).</li>
              <li><strong>Transisi:</strong> Jika tetangga terbaik tersebut lebih tinggi nilainya daripada status saat ini, agen berpindah ke tetangga tersebut dan menjadikannya status baru.</li>
              <li><strong>Kondisi Berhenti:</strong> Proses diulang terus-menerus hingga tidak ada lagi tetangga yang memiliki nilai lebih tinggi dari status saat ini. Pada titik ini, algoritma berhenti dan menganggap posisi tersebut sebagai solusi terbaik.</li>
            </ol>

            <hr class="section-divider" />

            <h3>b. Kelemahan Utama dan Solusi Variasi Simulated Annealing</h3>

            <div class="callout callout-danger">
              <div class="callout-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <span>Kelemahan Utama: Terjebak pada Local Optima (Puncak Lokal)</span>
              </div>
              <p>
                Hill Climbing berhenti seketika saat berada di puncak bukit lokal karena semua tetangga di sekitarnya bernilai lebih rendah, padahal ada <strong>Puncak Global (Global Optimum)</strong> yang jauh lebih tinggi di belahan lain ruang pencarian. Masalah lain meliputi <em>plateau</em> (wilayah datar tanpa kemiringan arah perbaikan) dan <em>ridges</em> (punggung bukit tajam).
              </p>
            </div>

            <h4>Solusi Variasi: Algoritma Simulated Annealing</h4>
            <p>
              Terinspirasi dari proses pendinginan logam cair (<em>annealing</em>) dalam bidang metalurgi:
            </p>
            <ul>
              <li>
                Algoritma ini tidak hanya mengambil langkah yang membaik, melainkan juga mengizinkan <strong>"langkah buruk" (downhill moves)</strong> dengan probabilitas tertentu untuk meloloskan diri dari jebakan puncak lokal.
              </li>
              <li>
                Probabilitas menerima langkah buruk diatur oleh parameter suhu <code>T</code> (<em>Temperature</em>).
              </li>
              <li>
                <strong>Fase Awal:</strong> Nilai <code>T</code> tinggi, sehingga probabilitas menerima langkah buruk besar dan algoritma bebas melompat menjelajahi area baru secara ekstensif.
              </li>
              <li>
                <strong>Fase Akhir:</strong> Seiring berjalannya waktu, suhu <code>T</code> menurun bertahap mendekati 0 menurut <em>cooling schedule</em>. Algoritma menjadi semakin selektif hingga berperilaku murni seperti Hill Climbing saat mendekati konvergensi di puncak global optimum.
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
              <h2>Studi Kasus: Masalah 8-Queens (N-Queens Problem)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Masalah N-Queens menuntut penempatan N buah ratu pada papan catur berukuran NxN sedemikian rupa sehingga tidak ada dua ratu yang saling mematikan (satu baris, kolom, atau diagonal). Jika Anda ditugaskan menyelesaikan masalah 8-Queens menggunakan teknik pencarian, mana yang lebih efisien digunakan: algoritma pencarian pohon ruang status (tree search seperti BFS/DFS) atau algoritma pencarian lokal (seperti Min-Conflicts)? Berikan argumentasi ilmiah mengenai pilihan Anda!
          </div>

          <div class="answer-content">
            <div class="recommendation-badge-box">
              <span class="badge badge-emerald">Rekomendasi Ilmiah Terbaik</span>
              <h3>Algoritma Pencarian Lokal (Min-Conflicts / Local Search)</h3>
              <p>
                Jauh lebih efisien secara eksponensial dibandingkan Algoritma Pencarian Pohon (Tree Search seperti BFS/DFS).
              </p>
            </div>

            <!-- Interactive 8-Queens Board Demo -->
            <Interactive8Queens />

            <h4>Argumentasi Ilmiah:</h4>

            <div class="argument-cards-grid">
              <div class="arg-card">
                <span class="arg-badge">1. Ukuran Ruang Status</span>
                <h4>Ledakan Kombinatorial (Combinatorial Explosion)</h4>
                <p>
                  Pada papan 8-Queens, jika diselesaikan dengan Tree Search murni tanpa pruning lanjutan, penempatan 8 ratu pada 64 petak memiliki kemungkinan ruang status:
                </p>
                <div class="math-block" style="font-size: 1.1rem;">
                  64! / (8! × 56!) ≈ 4,4 × 10⁹ kombinasi
                </div>
                <p>
                  Bahkan jika dibatasi satu ratu per kolom, ruang statusnya tetap <code>8^8 = 16.777.216</code> kemungkinan status. Melacak status pohon membutuhkan pembentukan struktur data tree/graph yang berat dan traversal sangat lambat.
                </p>
              </div>

              <div class="arg-card">
                <span class="arg-badge">2. Karakteristik Masalah</span>
                <h4>Constraint Satisfaction Problem (CSP)</h4>
                <p>
                  N-Queens adalah masalah kepuasan batasan (CSP) murni. Yang dicari hanyalah <strong>konfigurasi akhir status papan</strong> di mana tidak ada ratu yang saling serang.
                </p>
                <p>
                  Jalur atau urutan langkah bagaimana ratu ditempatkan sama sekali tidak bernilai. Algoritma Tree Search (BFS/DFS) membuang-buang memori dan daya komputasi hanya untuk menyimpan urutan rantai status (<em>path history</em>) yang tidak berguna.
                </p>
              </div>

              <div class="arg-card arg-card-highlight">
                <span class="arg-badge">3. Efisiensi Ekstrem</span>
                <h4>Kinerja Algoritma Min-Conflicts: Skala 1 Juta Ratu</h4>
                <p>
                  Algoritma Min-Conflicts memulai dari penempatan lengkap 8 ratu (satu ratu per kolom secara acak). Pada setiap langkah iterasi:
                </p>
                <ul>
                  <li>Memilih secara acak ratu yang mengalami konflik saling serang.</li>
                  <li>Memindahkan ratu tersebut pada kolom yang sama ke baris yang meminimalkan jumlah konflik serangan.</li>
                </ul>
                <p>
                  Secara empiris, Min-Conflicts menyelesaikan 8-Queens dalam rata-rata kurang dari 50 langkah (orde <code>O(1)</code> hingga <code>O(N)</code>). Faktanya, Min-Conflicts bahkan dapat menyelesaikan <strong>N-Queens untuk N = 1.000.000 (satu juta ratu) dalam hitungan detik</strong>, sesuatu yang mustahil dilakukan oleh BFS atau DFS.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 7 ==================== -->
        <section id="soal-7" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">07</div>
            <div>
              <span class="badge badge-emerald">Soal 7</span>
              <h2>Analisis Dilema "Time vs Space Trade-off" Ride-Hailing</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Sebuah perusahaan ride-hailing ingin membuat sistem AI yang dapat mencari rute terpendek bagi pengemudi ojek online untuk mengantarkan penumpang. Sistem ini harus memproses jutaan rute secara real-time. Berdasarkan karakteristik algoritma pencarian (BFS, DFS, A*, IDS, Hill Climbing), algoritma mana yang paling tidak relevan atau akan menyebabkan kegagalan sistem jika diterapkan mentah-mentah pada skala besar ini? Berikan alasan mengapa algoritma tersebut tidak cocok, dan sebutkan algoritma alternatif yang seharusnya digunakan beserta alasan teknisnya!
          </div>

          <div class="answer-content">
            <div class="callout callout-danger">
              <div class="callout-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>1. Algoritma yang Paling Tidak Relevan: BFS & DFS Murni</span>
              </div>
              <p>
                Secara khusus, <strong>Breadth-First Search (BFS)</strong> adalah yang paling fatal menyebabkan kegagalan sistem seketika (<em>system crash</em>).
              </p>
            </div>

            <h4>Alasan Mengapa Tidak Cocok:</h4>

            <div class="failure-reasons-list">
              <div class="failure-item">
                <span class="failure-tag">Kelemahan Fatal BFS</span>
                <h4>Ledakan Memori Ekstrem (Out-of-Memory Failure)</h4>
                <p>
                  Peta jalan raya kota pada aplikasi ride-hailing dimodelkan sebagai graf berbobot raksasa dengan jutaan persimpangan (<em>nodes</em>) dan ruas jalan (<em>edges</em>). BFS mengekspansi seluruh simpul bertingkat secara meluas. Dengan jutaan permintaan perjalanan real-time, antrean FIFO BFS akan menampung jutaan node jalan raya di RAM per request. Server akan mengalami <strong>Out-Of-Memory (OOM)</strong> dalam hitungan detik. Selain itu, BFS mengasumsikan biaya tiap ruas jalan adalah sama (bobot 1), padahal jarak jalan dan durasi macet di dunia nyata sangat variatif.
                </p>
              </div>

              <div class="failure-item">
                <span class="failure-tag">Kelemahan Fatal DFS</span>
                <h4>DFS Menghasilkan Rute Irasional (Inoptimal)</h4>
                <p>
                  DFS akan menelusuri satu ruas jalan hingga ke ujung pulau/kota lain sebelum melakukan backtracking. Hal ini menghasilkan rute yang sangat berputar-putar, boros bahan bakar pengemudi, dan sama sekali tidak menjamin jarak terpendek.
                </p>
              </div>

              <div class="failure-item">
                <span class="failure-tag">Kelemahan Fatal Hill Climbing</span>
                <h4>Hill Climbing Menghasilkan Rute Buntu</h4>
                <p>
                  Hill Climbing mudah terjebak di jalan buntu (<em>dead-end</em>) atau persimpangan satu arah karena hanya melihat perbaikan jarak satu langkah ke depan secara serakah tanpa memikirkan jaringan jalan secara global.
                </p>
              </div>
            </div>

            <hr class="section-divider" />

            <div class="solution-highlight-box">
              <span class="badge badge-emerald">Solusi Rekayasa Industri</span>
              <h3>2. Algoritma Alternatif yang Seharusnya Digunakan</h3>
              <p class="solution-name">
                <strong>Algoritma A* Search Teroptimasi</strong>, khususnya <strong>Bidirectional A* Search</strong> yang dikombinasikan dengan <strong>Contraction Hierarchies (CH)</strong>.
              </p>

              <div class="tech-reasons-grid">
                <div class="tech-reason-card">
                  <h4>🎯 Efisiensi Heuristik Terarah</h4>
                  <p>
                    A* menggunakan kombinasi <code>f(n) = g(n) + h(n)</code>. Nilai <code>g(n)</code> mencatat jarak tempuh/waktu nyata dari titik penjemputan, sementara <code>h(n)</code> menggunakan jarak garis lurus (<em>Euclidean / Haversine distance</em>) menuju titik tujuan sebagai heuristik yang admissible. Hal ini membuat pencarian fokus mengarah ke tujuan dan tidak menyebar ke segala arah seperti BFS/Dijkstra standar, memangkas ruang pencarian secara drastis.
                  </p>
                </div>

                <div class="tech-reason-card">
                  <h4>📐 Jaminan Optimalitas Rute</h4>
                  <p>
                    Karena heuristik jarak garis lurus tidak pernah melebihi jarak jalan riil (<em>admissible</em>), rute yang dihasilkan dijamin merupakan rute terpendek / tercepat secara matematis.
                  </p>
                </div>

                <div class="tech-reason-card tech-reason-full">
                  <h4>⚡ Skalabilitas Industri (Contraction Hierarchies)</h4>
                  <p>
                    Dalam sistem ride-hailing berskala produksi (seperti Gojek, Grab, atau Google Maps), algoritma A* dikombinasikan dengan teknik pra-pemrosesan seperti <strong>Contraction Hierarchies (CH)</strong>. Jalan-jalan utama (arteri/tol) diberi prioritas hierarki lebih tinggi daripada gang perumahan, sehingga kalkulasi rute jutaan titik antarkota dapat dihitung hanya dalam waktu beberapa milidetik dengan penggunaan memori yang sangat minim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== REFERENSI ==================== -->
        <section id="referensi" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">📚</div>
            <div>
              <span class="badge badge-primary">Daftar Pustaka</span>
              <h2>Referensi Akademik & Studi Terkait</h2>
            </div>
          </div>

          <div class="answer-content">
            <ol class="references-list">
              <li>
                <strong>Russell, S., & Norvig, P. (2020).</strong> <em>Artificial Intelligence: A Modern Approach (4th Edition).</em> Pearson. [Bab 3: Solving Problems by Searching; Bab 4: Search in Complex Environments].
              </li>
              <li>
                <strong>Hart, P. E., Nilsson, N. J., & Raphael, B. (1968).</strong> <em>A Formal Basis for the Heuristic Determination of Minimum Cost Paths.</em> IEEE Transactions on Systems Science and Cybernetics, 4(2), 100-107.
              </li>
              <li>
                <strong>Korf, R. E. (1985).</strong> <em>Depth-first iterative-deepening: An optimal admissible tree search.</em> Artificial Intelligence, 27(1), 97-109.
              </li>
              <li>
                <strong>Minton, S., Johnston, M. D., Philips, A. B., & Laird, P. (1992).</strong> <em>Minimizing conflicts: a heuristic repair method for constraint satisfaction and scheduling problems.</em> Artificial Intelligence, 58(1-3), 161-205.
              </li>
              <li>
                <strong>Geisberger, R., Sanders, P., Schultes, D., & Delling, D. (2008).</strong> <em>Contraction Hierarchies: Faster and Simpler Hierarchical Routing in Road Networks.</em> Experimental Algorithms, Springer, 319-333.
              </li>
            </ol>
          </div>
        </section>

        <!-- Bottom Navigation & Share -->
        <div class="article-bottom-nav">
          <router-link to="/tugas-1" class="btn btn-secondary">
            ← Ke Tugas 1
          </router-link>
          <div class="bottom-actions">
            <CopyLinkBtn
              target-path="/tugas-2"
              task-name="Tugas 2"
              label="Salin Link Tugas 2"
              btn-class="btn-primary"
            />
            <router-link to="/" class="btn btn-outline">
              Kembali ke Beranda
            </router-link>
          </div>
        </div>
      </main>

      <!-- Sticky TOC Sidebar -->
      <aside class="article-toc">
        <div class="toc-sidebar glass-card">
          <h4 class="toc-title">Daftar Isi Soal</h4>
          <nav class="toc-nav">
            <a href="#soal-1" class="toc-link">01. Formulasi Masalah (6 Komponen)</a>
            <a href="#soal-2" class="toc-link">02. BFS vs DFS Matrix</a>
            <a href="#soal-3" class="toc-link">03. Iterative Deepening (IDS)</a>
            <a href="#soal-4" class="toc-link">04. Heuristik A* & Formula</a>
            <a href="#soal-5" class="toc-link">05. Hill Climbing & Annealing</a>
            <a href="#soal-6" class="toc-link">06. 8-Queens & Min-Conflicts</a>
            <a href="#soal-7" class="toc-link">07. Ride-Hailing & Mitigasi OOM</a>
            <a href="#referensi" class="toc-link">📚 Referensi Akademik</a>
          </nav>

          <hr class="toc-divider" />

          <div class="toc-quick-copy">
            <span class="toc-label">Kumpulkan Tugas:</span>
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
import { COURSE_INFO } from '@/data/courseData'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'
import Interactive8Queens from '@/components/Interactive8Queens.vue'
import InteractiveSearchDemo from '@/components/InteractiveSearchDemo.vue'

const courseInfo = COURSE_INFO

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
  margin-bottom: 1.25rem;
}

.article-lead {
  font-size: 1.15rem;
  color: var(--text-muted);
  line-height: 1.7;
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

.section-divider {
  border: none;
  border-top: 1px solid var(--border-subtle);
  margin: 2rem 0;
}

.duo-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.duo-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.feature-bullets {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.bullet-box {
  background: rgba(255, 255, 255, 0.02);
  border-left: 3px solid var(--accent-primary);
  padding: 1.25rem 1.5rem;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.bullet-badge {
  font-size: 0.72rem;
  background: rgba(99, 102, 241, 0.15);
  color: #a5b4fc;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.4rem;
}

.formula-breakdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  margin: 1.75rem 0;
}

.formula-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.formula-card-highlight {
  background: rgba(99, 102, 241, 0.06);
  border-color: rgba(99, 102, 241, 0.3);
}

.formula-var {
  font-size: 1.8rem;
  font-weight: 800;
  font-family: var(--font-mono);
  display: block;
  margin-bottom: 0.5rem;
}

.text-cyan { color: #38bdf8; }
.text-pink { color: #f472b6; }
.text-indigo { color: #818cf8; }

.recommendation-badge-box {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.3);
  padding: 1.5rem;
  border-radius: var(--radius-md);
  margin-bottom: 2rem;
}

.recommendation-badge-box h3 {
  font-size: 1.35rem;
  margin: 0.5rem 0 0.25rem;
  color: var(--accent-emerald);
}

.argument-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.arg-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.arg-card-highlight {
  grid-column: 1 / -1;
  background: rgba(6, 182, 212, 0.05);
  border-color: rgba(6, 182, 212, 0.25);
}

.arg-badge {
  font-size: 0.75rem;
  color: var(--accent-cyan);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  display: inline-block;
}

.failure-reasons-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.failure-item {
  background: rgba(244, 63, 94, 0.04);
  border-left: 3px solid var(--accent-rose);
  padding: 1.25rem 1.5rem;
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
}

.failure-tag {
  font-size: 0.72rem;
  color: var(--accent-rose);
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.35rem;
  display: inline-block;
}

.solution-highlight-box {
  background: rgba(99, 102, 241, 0.05);
  border: 1px solid rgba(99, 102, 241, 0.3);
  padding: 2rem;
  border-radius: var(--radius-lg);
  margin-top: 1.5rem;
}

.solution-name {
  font-size: 1.15rem;
  color: var(--text-main);
  margin: 0.5rem 0 1.5rem;
}

.tech-reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.25rem;
}

.tech-reason-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.tech-reason-full {
  grid-column: 1 / -1;
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
