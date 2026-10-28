<template>
  <div class="article-page">
    <!-- Header / Hero Section -->
    <header class="article-hero">
      <div class="container container-narrow">
        <nav class="breadcrumb-nav">
          <router-link to="/">Beranda</router-link>
          <span>/</span>
          <span class="breadcrumb-current">Tugas 1</span>
        </nav>

        <div class="article-meta-badges">
          <span class="badge badge-primary">Mata Kuliah: Kecerdasan Buatan</span>
          <span class="badge badge-cyan">Kelas: {{ courseInfo.className }}</span>
          <span class="badge badge-emerald">Semester 5</span>
        </div>

        <h1 class="article-main-title">
          Tugas 1: Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman
        </h1>

        <p class="article-lead">
          Kajian komprehensif mengenai sinergi antara kapasitas komputasi cepat AI dan potensi berpikir kritis-strategis manusia dalam siklus rekayasa perangkat lunak modern.
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
            target-path="/tugas-1"
            task-name="Tugas 1"
            label="Salin Link Tugas 1 (MyBest)"
            btn-class="btn-primary"
          />

          <a href="/docs/Tugas1AI.pdf" target="_blank" download class="btn btn-secondary">
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
              <h2>Sinergi AI dan Kognisi Manusia</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Dalam paradigma pemrograman modern, terjadi pergeseran dari menulis kode baris demi baris secara manual menuju kolaborasi dengan AI (seperti GitHub Copilot atau ChatGPT). Jelaskan bagaimana sinergi antara "kapasitas komputasi cepat dari AI" dan "potensi berpikir kritis serta strategis dari manusia" dapat menciptakan siklus pengembangan perangkat lunak yang lebih efektif dan inovatif!
          </div>

          <div class="answer-content">
            <p>
              Sinergi antara kapasitas komputasi AI dan pemikiran kritis manusia mengubah siklus pengembangan perangkat lunak dari metode linier manual menjadi siklus kolaboratif yang adaptif.
            </p>

            <div class="concept-grid">
              <div class="concept-card">
                <div class="concept-icon">⚡</div>
                <h4>1. Peran Komputasi Cepat AI</h4>
                <p class="concept-tagline">Akselerasi Sintaks dan Pola</p>
                <p>
                  AI seperti GitHub Copilot dan ChatGPT memiliki keunggulan dalam pemrosesan data berbasis probabilitas statistik skala besar. AI dapat menghasilkan struktur kode dasar (<em>boilerplate</em>), mengonversi struktur data, melengkapi sintaksis secara instan, serta mengidentifikasi bug umum tanpa jeda berpikir. Hal ini memangkas waktu kerja mekanis secara drastis.
                </p>
              </div>

              <div class="concept-card">
                <div class="concept-icon">🧠</div>
                <h4>2. Peran Kognisi Manusia</h4>
                <p class="concept-tagline">Arah, Konteks & Strategi</p>
                <p>
                  AI tidak memahami intensi bisnis, konteks batas sistem, maupun kompromi arsitektur. Manusia berperan sebagai pengambil keputusan strategis yang menentukan:
                </p>
                <ul>
                  <li><strong>Batasan domain</strong> dan kebutuhan bisnis nyata.</li>
                  <li><strong>Evaluasi trade-off</strong> (misalnya memilih antara optimasi latensi versus konsistensi data).</li>
                  <li><strong>Validasi keamanan</strong>, logika alur proses, dan kepatuhan sistem.</li>
                </ul>
              </div>
            </div>

            <div class="callout callout-tip">
              <div class="callout-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>3. Siklus Pengembangan yang Efektif dan Inovatif</span>
              </div>
              <p>
                Integrasi keduanya menciptakan <strong>umpan balik yang sangat singkat</strong> (<em>tight feedback loop</em>). Pengembang dapat mengeksplorasi ide dan membuat prototipe dalam hitungan menit, bukan berhari-hari. Manusia mengarahkan hipotesis, AI merealisasikannya dalam bentuk draf kode, dan manusia memvalidasinya secara kritis. Siklus iterasi cepat ini memberikan ruang mental lebih luas bagi pengembang untuk merancang inovasi fitur yang solutif.
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
              <h2>Pembebasan Beban Kognitif (Cognitive Offloading)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Banyak tugas dalam pemrograman bersifat repetitif dan menghabiskan beban kognitif manusia, seperti menulis boilerplate code, melakukan formatting, atau mencari syntax error.<br />
            a. Jelaskan konsep cognitive offloading dalam konteks penggunaan AI pemrograman!<br />
            b. Bagaimana teknik pembebasan beban kognitif ini memungkinkan programmer memaksimalkan potensi manusianya pada level berpikir yang lebih tinggi (seperti System Design atau arsitektur perangkat lunak)?
          </div>

          <div class="answer-content">
            <h3>a. Konsep Cognitive Offloading dalam Penggunaan AI Pemrograman</h3>
            <p>
              <strong>Cognitive offloading</strong> adalah praktik mengalihkan beban pemrosesan informasi dari memori kerja (<em>working memory</em>) manusia ke alat bantu eksternal. Dalam pemrograman, memori kerja manusia memiliki keterbatasan kapasitas dalam menampung informasi secara simultan.
            </p>
            <p>
              Saat menggunakan asisten AI, beban mengingat detail sintaks bahasa, aturan regex, penulisan fungsi CRUD berulang, hingga format struktur JSON dialihkan ke sistem AI. Programmer tidak perlu lagi menghabiskan daya ingat untuk hal-hal mekanis, melainkan cukup mengenali dan mengonfirmasi pola yang dihasilkan oleh AI.
            </p>

            <hr class="section-divider" />

            <h3>b. Peningkatan Potensi Manusia ke Level Berpikir yang Lebih Tinggi</h3>
            <p>
              Dengan berkurangnya beban kognitif eksternal (<em>extraneous cognitive load</em>), energi mental programmer terbebas untuk menangani beban kognitif hakiki (<em>germane cognitive load</em>). Dampak konkretnya meliputi:
            </p>

            <div class="feature-bullets">
              <div class="bullet-box">
                <span class="bullet-badge">Arsitektur</span>
                <h4>Perancangan System Design</h4>
                <p>
                  Fokus beralih pada pemisahan modul, penentuan pola komunikasi antar-layanan (seperti arsitektur berbasis event atau mikrolayanan), dan ketahanan sistem (<em>fault tolerance</em>).
                </p>
              </div>

              <div class="bullet-box">
                <span class="bullet-badge">Keandalan</span>
                <h4>Analisis Skalabilitas dan Keamanan</h4>
                <p>
                  Programmer dapat mencurahkan waktu untuk menganalisis potensi bottleneck konkurensi, merancang skema mitigasi beban tinggi, serta merumuskan tata kelola keamanan data pengguna.
                </p>
              </div>

              <div class="bullet-box">
                <span class="bullet-badge">Data</span>
                <h4>Pemodelan Data Komprehensif</h4>
                <p>
                  Fokus beralih ke hubungan entitas jangka panjang dan efisiensi query tingkat lanjut, bukan sekadar menulis sintaks pembuatan tabel basis data.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- ==================== SOAL 3 ==================== -->
        <section id="soal-3" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">03</div>
            <div>
              <span class="badge badge-emerald">Soal 3</span>
              <h2>Computational Thinking dan Prompt Engineering</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Era AI mengubah skill wajib programmer, salah satunya adalah Prompt Engineering (rekayasa perintah).<br />
            a. Jelaskan hubungan antara Computational Thinking (cara berpikir komputasional manusia) dengan kemampuan menyusun prompt yang baik untuk menghasilkan kode AI yang akurat!<br />
            b. Mengapa kemampuan merancang logika dan memecahkan masalah (problem decomposition) oleh otak manusia masih menjadi fondasi utama, meskipun AI sudah bisa menulis kode secara otomatis?
          </div>

          <div class="answer-content">
            <h3>a. Hubungan Computational Thinking dengan Kualitas Prompt</h3>
            <p>
              <strong>Prompt Engineering</strong> bukan sekadar menyusun kalimat instruksi dalam bahasa sehari-hari, melainkan proses translasi logika komputasional menjadi spesifikasi formal yang dapat dieksekusi mesin. Penerapannya mencakup empat pilar <em>Computational Thinking</em>:
            </p>

            <div class="four-pillars-grid">
              <div class="pillar-card">
                <div class="pillar-num">01</div>
                <h4>Dekomposisi</h4>
                <p>
                  Memecah fungsionalitas aplikasi besar menjadi modul-modul instruksi kecil dan spesifik agar AI tidak kehilangan konteks logika selama generasi token.
                </p>
              </div>

              <div class="pillar-card">
                <div class="pillar-num">02</div>
                <h4>Pengenalan Pola</h4>
                <p>
                  Mengidentifikasi kebutuhan perancangan dan menginstruksikan AI untuk menerapkan pola desain perangkat lunak yang sesuai (misalnya Singleton, Factory, atau Repository Pattern).
                </p>
              </div>

              <div class="pillar-card">
                <div class="pillar-num">03</div>
                <h4>Abstraksi</h4>
                <p>
                  Memilah detail yang tidak relevan dan berfokus memberikan definisi input, batasan kondisi (<em>constraints</em>), serta format output yang diinginkan secara eksplisit.
                </p>
              </div>

              <div class="pillar-card">
                <div class="pillar-num">04</div>
                <h4>Perancangan Algoritma</h4>
                <p>
                  Menuliskan urutan langkah logis (pseudocode berurutan) di dalam prompt agar alur prediksi kode oleh model bahasa tetap terarah dan minim halusinasi.
                </p>
              </div>
            </div>

            <hr class="section-divider" />

            <h3>b. Mengapa Perancangan Logika dan Pemecahan Masalah Tetap Jadi Fondasi Utama</h3>
            <p>
              AI bekerja berdasarkan <strong>prediksi probabilitas statistik dari token teks</strong>, bukan penalaran atas pemahaman semantik dunia nyata. Kelemahan mendasar ini menegaskan bahwa:
            </p>

            <div class="callout callout-warning">
              <div class="callout-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>Masalah yang Tidak Terdefinisi Menghasilkan Kode yang Salah</span>
              </div>
              <p>
                Jika manusia gagal memetakan batas masalah dengan benar, AI akan menghasilkan kode yang rapi secara sintaks, namun sama sekali tidak menyelesaikan masalah bisnis (<em>syntactically correct, semantically useless</em>).
              </p>
            </div>

            <p>
              <strong>Penanganan Kondisi Ekstrem (Edge Cases):</strong> Otak manusia sangat diperlukan untuk mengantisipasi anomali bisnis dan skenario ekstrem yang tidak tercantum dalam dataset pelatihan AI. AI mengeksekusi sintaks, tetapi logika penyelesaian masalah tetap bersumber dari manusia.
            </p>
          </div>
        </section>

        <!-- ==================== SOAL 4 ==================== -->
        <section id="soal-4" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">04</div>
            <div>
              <span class="badge badge-amber">Soal 4</span>
              <h2>Flow State dan Gangguan Algoritma</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Salah satu teknik peningkatan potensi manusia dalam bekerja adalah mencapai kondisi Flow (aliran kerja yang dalam dan fokus penuh). Namun, penggunaan AI yang terus-menerus memunculkan saran (autocompletion) berpotensi memecah konsentrasi programmer. Bagaimana seorang programmer dapat mengelola interaksi dengan AI agar tetap memasuki dan mempertahankan Flow State, alih-alih menjadi "operator" yang terganggu oleh pop-up AI?
          </div>

          <div class="answer-content">
            <p>
              Kondisi <strong>Flow</strong> tercapai saat terjadi keseimbangan optimal antara tantangan teknis dan keterampilan terfokus tanpa adanya interupsi eksternal. Pop-up saran autocompletion yang muncul terus-menerus memecah alur pikir internal dan menimbulkan kelelahan mengambil keputusan (<em>decision fatigue</em>) karena programmer dipaksa terus mengevaluasi saran AI alih-alih merumuskan logikanya sendiri.
            </p>

            <h4>Langkah Mengelola Interaksi agar Flow State Tetap Terjaga:</h4>

            <div class="steps-flow">
              <div class="step-flow-item">
                <div class="step-flow-badge">1</div>
                <div>
                  <strong>Mengubah Mode Interaksi Menjadi On-Demand</strong>
                  <p>
                    Matikan fitur saran inline otomatis (<em>ghost text</em>) yang muncul setiap kali mengetik. Ubah pengaturannya agar saran AI hanya muncul ketika dipanggil secara manual menggunakan tombol pintasan keyboard (misalnya kombinasi <code>Alt + \</code> atau <code>Ctrl + Space</code>).
                  </p>
                </div>
              </div>

              <div class="step-flow-item">
                <div class="step-flow-badge">2</div>
                <div>
                  <strong>Pemisahan Fase Desain dan Fase Implementasi (Two-Phase Workflow)</strong>
                  <ul>
                    <li>
                      <strong>Tahap Pertama (Deep Thinking):</strong> Buat kerangka algoritma, struktur antarmuka, dan definisi tipe data secara mandiri tanpa bantuan AI untuk membangun pemahaman mental yang utuh.
                    </li>
                    <li>
                      <strong>Tahap Kedua (Execution Acceleration):</strong> Panggil AI untuk mengisi implementasi fungsi rutin, menghasilkan unit test, atau merapikan dokumentasi kode berdasarkan kerangka yang telah dibuat.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="step-flow-item">
                <div class="step-flow-badge">3</div>
                <div>
                  <strong>Mengisolasi Layar Kerja</strong>
                  <p>
                    Gunakan jendela obrolan AI secara terpisah pada monitor kedua atau tab berbeda untuk sesi tanya-jawab konsep, sehingga editor kode utama tetap bersih dari interupsi visual.
                  </p>
                </div>
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
              <h2>Etika, Empati, dan Tanggung Jawab Sosial</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> AI dapat menuliskan kode algoritma yang menentukan siapa yang mendapat pinjaman bank, siapa yang lolos seleksi kerja, atau bagaimana data privasi pengguna diolah. AI tidak memiliki kesadaran moral atau empati.<br />
            a. Mengapa "Empati" dan "Etika" merupakan teknik potensi manusia yang tidak bisa digantikan oleh AI dalam fase desain algoritma?<br />
            b. Jelaskan bagaimana tanggung jawab seorang programmer (Human Responsibility) diuji ketika kode yang dihasilkan oleh AI mengandung bias atau diskriminasi!
          </div>

          <div class="answer-content">
            <h3>a. Mengapa Empati dan Etika Tidak Bisa Digantikan AI dalam Desain Algoritma</h3>
            <p>
              Model AI beroperasi secara mekanis untuk mengoptimalkan metrik matematis atau mencari korelasi data tanpa memiliki kesadaran nilai moral.
            </p>

            <div class="duo-cards">
              <div class="duo-card">
                <h4>❤️ Empati</h4>
                <p>
                  Diperlukan untuk memahami dampak psikologis dan sosial dari sebuah perangkat lunak terhadap manusia nyata. Sebagai contoh:
                </p>
                <ul>
                  <li>Mempertimbangkan kebutuhan aksesibilitas penyandang disabilitas (a11y).</li>
                  <li>Rancangan antarmuka yang tidak manipulatif (menghindari <em>dark patterns</em>).</li>
                  <li>Melindungi pengguna rentan dari jebakan finansial digital.</li>
                </ul>
              </div>

              <div class="duo-card">
                <h4>⚖️ Etika</h4>
                <p>
                  Berfungsi sebagai kompas pembatas untuk menentukan batasan moral: apakah sebuah algoritma layak diterapkan meskipun secara matematis sangat menguntungkan? AI dapat menghitung efisiensi secara akurat, namun hanya manusia yang dapat memutuskan aspek keadilan (<em>fairness</em>) dan kelayakan moralnya.
                </p>
              </div>
            </div>

            <hr class="section-divider" />

            <h3>b. Tanggung Jawab Programmer (Human Responsibility) terhadap Bias Algoritma</h3>
            <p>
              Ketika kode yang dihasilkan atau disarankan oleh AI memicu bias (misalnya diskriminasi rasial atau gender pada sistem seleksi kerja):
            </p>

            <ul>
              <li>
                <strong>Akuntabilitas Tidak Dapat Dilimpahkan:</strong> Mesin tidak memiliki subjek hukum atau tanggung jawab moral. Tanggung jawab mutlak berada pada programmer, tim rekayasa, dan organisasi yang merilis sistem tersebut.
              </li>
              <li>
                <strong>Kewajiban Pengujian Komprehensif:</strong> Programmer bertanggung jawab memeriksa kebersihan data latih, menguji sistem terhadap berbagai kelompok pengguna yang representatif, serta menyiapkan batasan logika agar sistem menolak keputusan yang diskriminatif.
              </li>
              <li>
                <strong>Mekanisme Human-in-the-Loop:</strong> Programmer wajib memastikan adanya jalur intervensi manusia, sehingga setiap keputusan krusial yang berdampak pada kehidupan pengguna dapat ditinjau ulang dan dibatalkan secara manual.
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
              <h2>Pembelajaran Berkelanjutan (Continuous Learning)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> Kemampuan AI dalam menulis kode berpotensi membuat programmer pemula terlalu bergantung pada AI (automation bias), sehingga tidak memahami logika dasar di balik kode tersebut. Jelaskan bagaimana programmer harus memanfaatkan AI sebagai "tutor" untuk mempercepat pembelajaran (potensi penyerahan ilmu), alih-alih hanya sebagai "tukang ketik" yang membunuh kemampuan continuous learning!
          </div>

          <div class="answer-content">
            <p>
              Kecenderungan menyalin kode AI secara langsung memicu <strong>bias otomatisasi</strong> (<em>automation bias</em>), yang berujung pada penurunan daya analisis mendalam (<em>cognitive atrophy</em>) saat terjadi kesalahan sistem kritis di lingkungan produksi.
            </p>

            <h4>Langkah Memanfaatkan AI sebagai Tutor Pembelajaran Aktif:</h4>

            <div class="tutor-box">
              <div class="tutor-item">
                <span class="tutor-badge">1. Socratic Prompting</span>
                <h4>Menerapkan Metode Tanya Sokratik</h4>
                <p>
                  Jangan meminta kode instan. Arahkan AI dengan perintah panduan dialogis.
                </p>
                <div class="example-prompt-box">
                  <code>
                    "Jelaskan konsep di balik penanganan race condition ini, berikan petunjuk logika tanpa menuliskan kodenya secara langsung, dan uji pemahaman saya dengan pertanyaan bertahap."
                  </code>
                </div>
              </div>

              <div class="tutor-item">
                <span class="tutor-badge">2. Trade-Off Analysis</span>
                <h4>Analisis Trade-off dan Kompleksitas Algoritma</h4>
                <p>
                  Manfaatkan AI untuk menguji kode yang telah kita tulis sendiri secara mandiri.
                </p>
                <div class="example-prompt-box">
                  <code>
                    "Berapa notasi Big-O (waktu dan memori) dari fungsi ini, dan bagaimana perbandingannya jika saya menggunakan pendekatan struktur data alternatif?"
                  </code>
                </div>
              </div>

              <div class="tutor-item">
                <span class="tutor-badge">3. Deep Refactoring</span>
                <h4>Pelajari Alasan di Balik Refactoring</h4>
                <p>
                  Saat meminta AI mengoptimalkan kode yang sudah ada, instruksikan agar AI menyertakan penjelasan detail alasan teknis di balik setiap perubahan, prinsip <em>Clean Code</em> yang diterapkan, serta implikasinya terhadap performa sistem.
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
              <h2>Kreativitas Manusia dalam Inovasi Teknologi</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Pertanyaan:</strong> AI dilatih berdasarkan data masa lalu (kode-kode yang sudah ada di internet). Oleh karena itu, AI sangat hebat dalam mereplikasi pola yang sudah ada. Jelaskan mengapa "Kreativitas Manusia" (intuisi, imajinasi, dan visi masa depan) masih menjadi penggerak utama dalam memecahkan masalah arsitektur perangkat lunak yang belum pernah ada sebelumnya, sementara AI hanya berperan sebagai asisten eksekusi!
          </div>

          <div class="answer-content">
            <p>
              Model kecerdasan buatan bersifat <strong>retrospektif</strong>; pembelajarannya bersandar pada pola data historis yang telah terdokumentasi sebelumnya. AI unggul dalam interpolasi (menggabungkan dan mereplikasi hal-hal yang sudah ada), namun memiliki batasan mendasar dalam menghasilkan paradigma yang sepenuhnya baru.
            </p>

            <h4>Faktor Kreativitas Manusia sebagai Penggerak Utama:</h4>

            <div class="innovation-grid">
              <div class="inno-card">
                <div class="inno-tag">Inovasi Zero-to-One</div>
                <h4>Penciptaan Paradigma Baru</h4>
                <p>
                  Terobosan besar dalam rekayasa perangkat lunak—seperti pergeseran arsitektur monolitik ke <em>event-driven</em>, perancangan sistem kontrol versi terdistribusi (Git oleh Linus Torvalds), atau penciptaan model komputasi terdistribusi (MapReduce)—lahir dari pemikiran lateral manusia yang merespons masalah unik di dunia nyata, bukan dari pengulangan data masa lalu.
                </p>
              </div>

              <div class="inno-card">
                <div class="inno-tag">Intuisi & Konteks</div>
                <h4>Pemahaman Konteks Holistik</h4>
                <p>
                  Manusia mampu menghubungkan bidang yang tidak terkait (misalnya mengadaptasi sistem biologi kekebalan tubuh ke dalam algoritma keamanan komputer, atau psikologi perilaku pasar ke dalam perancangan antarmuka) untuk memecahkan kendala sistem yang belum memiliki preseden.
                </p>
              </div>

              <div class="inno-card inno-card-full">
                <div class="inno-tag">Posisi Fundamental</div>
                <h4>AI sebagai Akselerator, Bukan Arsitek</h4>
                <p>
                  Kreativitas, perumusan visi masa depan, dan intuisi arsitektur berasal dari manusia. AI berfungsi sebagai <strong>akselerator eksekusi (One-to-N)</strong> yang menerjemahkan visi tersebut menjadi modul-modul implementasi teknis dengan cepat dan terstruktur.
                </p>
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
                <strong>Russell, S., & Norvig, P. (2020).</strong> <em>Artificial Intelligence: A Modern Approach (4th Edition).</em> Pearson.
              </li>
              <li>
                <strong>Csikszentmihalyi, M. (1990).</strong> <em>Flow: The Psychology of Optimal Experience.</em> Harper & Row.
              </li>
              <li>
                <strong>Norman, D. A. (1993).</strong> <em>Things That Make Us Smart: Defending Human Attributes in the Age of the Machine.</em> Addison-Wesley.
              </li>
              <li>
                <strong>Sweller, J. (1988).</strong> <em>Cognitive Load During Problem Solving: Effects on Learning.</em> Cognitive Science, 12(2), 257-285.
              </li>
              <li>
                <strong>IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems (2019).</strong> <em>Ethically Aligned Design: A Vision for Prioritizing Human Well-being with Autonomous and Intelligent Systems.</em> IEEE.
              </li>
            </ol>
          </div>
        </section>

        <!-- Bottom Navigation & Share -->
        <div class="article-bottom-nav">
          <router-link to="/" class="btn btn-secondary">
            ← Kembali ke Beranda
          </router-link>
          <div class="bottom-actions">
            <CopyLinkBtn
              target-path="/tugas-1"
              task-name="Tugas 1"
              label="Salin Link Tugas 1"
              btn-class="btn-primary"
            />
            <router-link to="/tugas-2" class="btn btn-outline">
              Lanjut ke Tugas 2 →
            </router-link>
          </div>
        </div>
      </main>

      <!-- Sticky TOC Sidebar -->
      <aside class="article-toc">
        <div class="toc-sidebar glass-card">
          <h4 class="toc-title">Daftar Isi Soal</h4>
          <nav class="toc-nav">
            <a href="#soal-1" class="toc-link">01. Sinergi AI & Kognisi</a>
            <a href="#soal-2" class="toc-link">02. Cognitive Offloading</a>
            <a href="#soal-3" class="toc-link">03. Computational Thinking</a>
            <a href="#soal-4" class="toc-link">04. Flow State & Interupsi</a>
            <a href="#soal-5" class="toc-link">05. Etika & Tanggung Jawab</a>
            <a href="#soal-6" class="toc-link">06. Continuous Learning</a>
            <a href="#soal-7" class="toc-link">07. Kreativitas Zero-to-One</a>
            <a href="#referensi" class="toc-link">📚 Referensi Akademik</a>
          </nav>

          <hr class="toc-divider" />

          <div class="toc-quick-copy">
            <span class="toc-label">Kumpulkan Tugas:</span>
            <CopyLinkBtn
              target-path="/tugas-1"
              task-name="Tugas 1"
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
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.concept-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.concept-icon {
  font-size: 1.75rem;
  margin-bottom: 0.75rem;
}

.concept-tagline {
  font-size: 0.82rem;
  color: var(--accent-cyan);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 700;
  margin-bottom: 0.75rem;
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

.four-pillars-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  margin: 1.75rem 0;
}

.pillar-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.25rem;
}

.pillar-num {
  font-size: 1.25rem;
  font-weight: 800;
  font-family: var(--font-display);
  color: var(--accent-emerald);
  margin-bottom: 0.4rem;
}

.steps-flow {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.step-flow-item {
  display: flex;
  gap: 1.25rem;
}

.step-flow-badge {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--gradient-brand);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  flex-shrink: 0;
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

.tutor-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tutor-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.tutor-badge {
  font-size: 0.75rem;
  color: var(--accent-cyan);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: inline-block;
}

.example-prompt-box {
  background: rgba(0, 0, 0, 0.3);
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  margin-top: 0.75rem;
  border-left: 2px solid var(--accent-cyan);
}

.innovation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.inno-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}

.inno-card-full {
  grid-column: 1 / -1;
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.25);
}

.inno-tag {
  font-size: 0.75rem;
  color: var(--accent-emerald);
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
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
