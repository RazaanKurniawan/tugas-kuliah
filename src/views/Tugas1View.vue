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
          <span class="breadcrumb-current">Tugas 1</span>
        </nav>

        <div class="article-meta-badges">
          <span class="badge badge-primary">Mata Kuliah: Kecerdasan Buatan</span>
          <span class="badge badge-cyan">Kelas: {{ portalInfo.className }}</span>
          <span class="badge badge-emerald">{{ portalInfo.studyProgram }}</span>
        </div>

        <h1 class="article-main-title">
          Tugas 1 : Kecerdasan Buatan
        </h1>
        <p class="article-subtitle">
          Soal Essay: Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman
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
            <span>Unduh PDF Asli (Tugas1AI.pdf)</span>
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
              <h2>SOAL 1: SINERGI AI DAN KOGNISI MANUSIA</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 1: Sinergi AI dan Kognisi Manusia</strong> Dalam paradigma pemrograman modern, terjadi pergeseran dari menulis kode baris demi baris secara manual menuju kolaborasi dengan AI (seperti GitHub Copilot atau ChatGPT). Jelaskan bagaimana sinergi antara "kapasitas komputasi cepat dari AI" dan "potensi berpikir kritis serta strategis dari manusia" dapat menciptakan siklus pengembangan perangkat lunak yang lebih efektif dan inovatif!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 1</div>
            
            <p>
              Sinergi antara kapasitas komputasi AI dan pemikiran kritis manusia mengubah siklus pengembangan perangkat lunak dari metode linier manual menjadi siklus kolaboratif yang adaptif.
            </p>

            <div class="verbatim-item">
              <h4>1. Peran Komputasi Cepat AI (Akselerasi Sintaks dan Pola)</h4>
              <p>
                AI seperti GitHub Copilot dan ChatGPT memiliki keunggulan dalam pemrosesan data berbasis probabilitas statistik skala besar. AI dapat menghasilkan struktur kode dasar (boilerplate), mengonversi struktur data, melengkapi sintaksis secara instan, serta mengidentifikasi bug umum tanpa jeda berpikir. Hal ini memangkas waktu kerja mekanis secara drastis.
              </p>
            </div>

            <div class="verbatim-item">
              <h4>2. Peran Berpikir Kritis dan Strategis Manusia (Arah dan Konteks)</h4>
              <p>
                AI tidak memahami intensi bisnis, konteks batas sistem, maupun kompromi arsitektur. Manusia berperan sebagai pengambil keputusan strategis yang menentukan:
              </p>
              <ul>
                <li>Batasan domain dan kebutuhan bisnis nyata.</li>
                <li>Evaluasi trade-off (misalnya memilih antara optimasi latensi versus konsistensi data).</li>
                <li>Validasi keamanan, logika alur proses, dan kepatuhan sistem.</li>
              </ul>
            </div>

            <div class="verbatim-item">
              <h4>3. Siklus Pengembangan yang Efektif dan Inovatif</h4>
              <p>
                Integrasi keduanya menciptakan umpan balik yang sangat singkat. Pengembang dapat mengeksplorasi ide dan membuat prototipe dalam hitungan menit, bukan berhari-hari. Manusia mengarahkan hipotesis, AI merealisasikannya dalam bentuk draf kode, dan manusia memvalidasinya secara kritis. Siklus iterasi cepat ini memberikan ruang mental lebih luas bagi pengembang untuk merancang inovasi fitur yang solutif.
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
              <h2>SOAL 2: PEMBEBASAN BEBAN KOGNITIF (COGNITIVE OFFLOADING)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 2: Pembebasan Beban Kognitif (Cognitive Offloading)</strong> Banyak tugas dalam pemrograman bersifat repetitif dan menghabiskan beban kognitif manusia, seperti menulis boilerplate code, melakukan formatting, atau mencari syntax error.<br />
            a. Jelaskan konsep cognitive offloading dalam konteks penggunaan AI pemrograman!<br />
            b. Bagaimana teknik pembebasan beban kognitif ini memungkinkan programmer memaksimalkan potensi manusianya pada level berpikir yang lebih tinggi (seperti System Design atau arsitektur perangkat lunak)?
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 2</div>

            <h4>a. Konsep Cognitive Offloading dalam Penggunaan AI Pemrograman</h4>
            <p>
              Cognitive offloading adalah praktik mengalihkan beban pemrosesan informasi dari memori kerja manusia ke alat bantu eksternal. Dalam pemrograman, memori kerja manusia memiliki keterbatasan kapasitas dalam menampung informasi secara simultan. Saat menggunakan asisten AI, beban mengingat detail sintaks bahasa, aturan regex, penulisan fungsi CRUD berulang, hingga format struktur JSON dialihkan ke sistem AI. Programmer tidak perlu lagi menghabiskan daya ingat untuk hal-hal mekanis, melainkan cukup mengenali dan mengonfirmasi pola yang dihasilkan oleh AI.
            </p>

            <hr class="section-divider" />

            <h4>b. Peningkatan Potensi Manusia ke Level Berpikir yang Lebih Tinggi</h4>
            <p>
              Dengan berkurangnya beban kognitif eksternal (extraneous cognitive load), energi mental programmer terbebas untuk menangani beban kognitif hakiki (germane cognitive load). Dampak konkretnya meliputi:
            </p>
            <ul>
              <li>
                <strong>Perancangan System Design:</strong> Fokus beralih pada pemisahan modul, penentuan pola komunikasi antar-layanan (seperti arsitektur berbasis event atau mikrolayanan), dan ketahanan sistem (fault tolerance).
              </li>
              <li>
                <strong>Analisis Skalabilitas dan Keamanan:</strong> Programmer dapat mencurahkan waktu untuk menganalisis potensi bottleneck konkurensi, merancang skema mitigasi beban tinggi, serta merumuskan tata kelola keamanan data pengguna.
              </li>
              <li>
                <strong>Pemodelan Data Komprehensif:</strong> Fokus beralih ke hubungan entitas jangka panjang dan efisiensi query tingkat lanjut, bukan sekadar menulis sintaks pembuatan tabel.
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== SOAL 3 ==================== -->
        <section id="soal-3" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">03</div>
            <div>
              <span class="badge badge-emerald">Soal 3</span>
              <h2>SOAL 3: COMPUTATIONAL THINKING DAN PROMPT ENGINEERING</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 3: Computational Thinking dan Prompt Engineering</strong> Era AI mengubah skill wajib programmer, salah satunya adalah Prompt Engineering (rekayasa perintah).<br />
            a. Jelaskan hubungan antara Computational Thinking (cara berpikir komputasional manusia) dengan kemampuan menyusun prompt yang baik untuk menghasilkan kode AI yang akurat!<br />
            b. Mengapa kemampuan merancang logika dan memecahkan masalah (problem decomposition) oleh otak manusia masih menjadi fondasi utama, meskipun AI sudah bisa menulis kode secara otomatis?
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 3</div>

            <h4>a. Hubungan Computational Thinking dengan Kualitas Prompt</h4>
            <p>
              Prompt Engineering bukan sekadar menyusun kalimat instruksi dalam bahasa sehari-hari, melainkan proses translasi logika komputasional menjadi spesifikasi yang dapat dieksekusi mesin. Penerapannya mencakup empat pilar:
            </p>
            <ul>
              <li>
                <strong>Dekomposisi:</strong> Memecah fungsionalitas aplikasi besar menjadi modul-modul instruksi kecil dan spesifik agar AI tidak kehilangan konteks logika.
              </li>
              <li>
                <strong>Pengenalan Pola:</strong> Mengidentifikasi kebutuhan perancangan dan menginstruksikan AI untuk menerapkan pola desain perangkat lunak yang sesuai (misalnya Singleton, Factory, atau Repository Pattern).
              </li>
              <li>
                <strong>Abstraksi:</strong> Memilah detail yang tidak relevan dan berfokus memberikan definisi input, batasan kondisi (constraints), serta format output yang diinginkan secara eksplisit.
              </li>
              <li>
                <strong>Perancangan Algoritma:</strong> Menuliskan urutan langkah logis (pseudocode berurutan) di dalam prompt agar alur prediksi kode oleh model bahasa tetap terarah dan minim halusinasi.
              </li>
            </ul>

            <hr class="section-divider" />

            <h4>b. Mengapa Perancangan Logika dan Pemecahan Masalah Tetap Jadi Fondasi Utama</h4>
            <p>
              AI bekerja berdasarkan prediksi probabilitas statistik dari token teks, bukan penalaran atas pemahaman semantik dunia nyata. Kelemahan mendasar ini menegaskan bahwa:
            </p>
            <ul>
              <li>
                <strong>Masalah yang Tidak Terdefinisi Menghasilkan Kode yang Salah:</strong> Jika manusia gagal memetakan batas masalah dengan benar, AI akan menghasilkan kode yang rapi secara sintaks, namun sama sekali tidak menyelesaikan masalah bisnis (syntactically correct, semantically useless).
              </li>
              <li>
                <strong>Penanganan Kondisi Ekstrem (Edge Cases):</strong> Otak manusia diperlukan untuk mengantisipasi anomali bisnis dan skenario ekstrem yang tidak tercantum dalam dataset pelatihan AI. AI mengeksekusi sintaks, tetapi logika penyelesaian masalah tetap bersumber dari manusia.
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== SOAL 4 ==================== -->
        <section id="soal-4" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">04</div>
            <div>
              <span class="badge badge-amber">Soal 4</span>
              <h2>SOAL 4: FLOW STATE DAN GANGGUAN ALGORITMA</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 4: Flow State dan Gangguan Algoritma</strong> Salah satu teknik peningkatan potensi manusia dalam bekerja adalah mencapai kondisi Flow (aliran kerja yang dalam dan fokus penuh). Namun, penggunaan AI yang terus-menerus memunculkan saran (autocompletion) berpotensi memecah konsentrasi programmer. Bagaimana seorang programmer dapat mengelola interaksi dengan AI agar tetap memasuki dan mempertahankan Flow State, alih-alih menjadi "operator" yang terganggu oleh pop-up AI?
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 4</div>

            <p>
              Kondisi Flow tercapai saat terjadi keseimbangan antara tantangan teknis dan keterampilan terfokus tanpa adanya interupsi eksternal. Pop-up saran autocompletion yang muncul terus-menerus memecah alur pikir internal dan menimbulkan kelelahan mengambil keputusan (decision fatigue) karena programmer dipaksa terus mengevaluasi saran AI alih-alih merumuskan logikanya sendiri.
            </p>

            <h4>Langkah mengelola interaksi agar Flow State tetap terjaga:</h4>
            <ul>
              <li>
                <strong>Mengubah Mode Interaksi Menjadi On-Demand:</strong> Matikan fitur saran inline otomatis (ghost text) yang muncul setiap kali mengetik. Ubah pengaturannya agar saran AI hanya muncul ketika dipanggil secara manual menggunakan tombol pintasan keyboard (misalnya kombinasi Alt + \ atau Ctrl + Space).
              </li>
              <li>
                <strong>Pemisahan Fase Desain dan Fase Implementasi:</strong>
                <ol>
                  <li><strong>Tahap Pertama (Deep Thinking):</strong> Buat kerangka algoritma, struktur antarmuka, dan definisi tipe data secara mandiri tanpa bantuan AI untuk membangun pemahaman mental yang utuh.</li>
                  <li><strong>Tahap Kedua (Execution Acceleration):</strong> Panggil AI untuk mengisi implementasi fungsi rutin, menghasilkan unit test, atau merapikan dokumentasi kode berdasarkan kerangka yang telah dibuat.</li>
                </ol>
              </li>
              <li>
                <strong>Mengisolasi Layar Kerja:</strong> Gunakan jendela obrolan AI secara terpisah pada monitor kedua atau tab berbeda untuk sesi tanya-jawab konsep, sehingga editor kode utama tetap bersih dari interupsi visual.
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
              <h2>SOAL 5: ETIKA, EMPATI, DAN TANGGUNG JAWAB SOSIAL</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 5: Etika, Empati, dan Tanggung Jawab Sosial</strong> AI dapat menuliskan kode algoritma yang menentukan siapa yang mendapat pinjaman bank, siapa yang lolos seleksi kerja, atau bagaimana data privasi pengguna diolah. AI tidak memiliki kesadaran moral atau empati.<br />
            a. Mengapa "Empati" dan "Etika" merupakan teknik potensi manusia yang tidak bisa digantikan oleh AI dalam fase desain algoritma?<br />
            b. Jelaskan bagaimana tanggung jawab seorang programmer (Human Responsibility) diuji ketika kode yang dihasilkan oleh AI mengandung bias atau diskriminasi!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 5</div>

            <h4>a. Mengapa Empati dan Etika Tidak Bisa Digantikan AI dalam Desain Algoritma</h4>
            <p>
              Model AI beroperasi secara mekanis untuk mengoptimalkan metrik matematis atau mencari korelasi data tanpa memiliki kesadaran nilai moral.
            </p>
            <ul>
              <li>
                <strong>Empati:</strong> Diperlukan untuk memahami dampak psikologis dan sosial dari sebuah perangkat lunak terhadap manusia nyata. Sebagai contoh, mempertimbangkan kebutuhan aksesibilitas penyandang disabilitas, rancangan antarmuka yang tidak manipulatif (menghindari dark patterns), serta melindungi pengguna rentan dari jebakan finansial digital.
              </li>
              <li>
                <strong>Etika:</strong> Berfungsi sebagai kompas pembatas untuk menentukan batasan moral: apakah sebuah algoritma layak diterapkan meskipun secara matematis sangat menguntungkan? AI dapat menghitung efisiensi secara akurat, namun hanya manusia yang dapat memutuskan aspek keadilan (fairness) dan kelayakan moralnya.
              </li>
            </ul>

            <hr class="section-divider" />

            <h4>b. Tanggung Jawab Programmer (Human Responsibility) terhadap Bias Algoritma</h4>
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
              <h2>SOAL 6: PEMBELAJARAN BERKELANJUTAN (CONTINUOUS LEARNING)</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 6: Pembelajaran Berkelanjutan (Continuous Learning)</strong> Kemampuan AI dalam menulis kode berpotensi membuat programmer pemula terlalu bergantung pada AI (automation bias), sehingga tidak memahami logika dasar di balik kode tersebut. Jelaskan bagaimana programmer harus memanfaatkan AI sebagai "tutor" untuk mempercepat pembelajaran (potensi penyerahan ilmu), alih-alih hanya sebagai "tukang ketik" yang membunuh kemampuan continuous learning!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 6</div>

            <p>
              Kecenderungan menyalin kode AI secara langsung memicu bias otomatisasi (automation bias), yang berujung pada penurunan daya analisis mendalam (cognitive atrophy) saat terjadi kesalahan sistem di lingkungan produksi.
            </p>

            <h4>Langkah memanfaatkan AI sebagai tutor pembelajaran aktif:</h4>
            <ul>
              <li>
                <strong>Menerapkan Metode Tanya Sokratik (Socratic Prompting):</strong> Jangan meminta kode instan. Arahkan AI dengan perintah panduan, misalnya: <em>"Jelaskan konsep di balik penanganan race condition ini, berikan petunjuk logika tanpa menuliskan kodenya secara langsung, dan uji pemahaman saya dengan pertanyaan bertahap."</em>
              </li>
              <li>
                <strong>Analisis Trade-off dan Kompleksitas Algoritma:</strong> Manfaatkan AI untuk menguji kode yang telah kita tulis sendiri dengan pertanyaan: <em>"Berapa notasi Big-O (waktu dan memori) dari fungsi ini, dan bagaimana perbandingannya jika saya menggunakan pendekatan struktur data alternatif?"</em>
              </li>
              <li>
                <strong>Pelajari Alasan di Balik Refactoring:</strong> Saat meminta AI mengoptimalkan kode yang sudah ada, instruksikan agar AI menyertakan penjelasan detail alasan teknis di balik setiap perubahan, prinsip Clean Code yang diterapkan, serta implikasinya terhadap performa sistem.
              </li>
            </ul>
          </div>
        </section>

        <!-- ==================== SOAL 7 ==================== -->
        <section id="soal-7" class="question-card glass-card">
          <div class="question-header">
            <div class="question-number-badge">07</div>
            <div>
              <span class="badge badge-emerald">Soal 7</span>
              <h2>SOAL 7: KREATIVITAS MANUSIA DALAM INOVASI TEKNOLOGI</h2>
            </div>
          </div>

          <div class="question-prompt">
            <strong>Soal 7: Kreativitas Manusia dalam Inovasi Teknologi</strong> AI dilatih berdasarkan data masa lalu (kode-kode yang sudah ada di internet). Oleh karena itu, AI sangat hebat dalam mereplikasi pola yang sudah ada. Jelaskan mengapa "Kreativitas Manusia" (intuisi, imajinasi, dan visi masa depan) masih menjadi penggerak utama dalam memecahkan masalah arsitektur perangkat lunak yang belum pernah ada sebelumnya, sementara AI hanya berperan sebagai asisten eksekusi!
          </div>

          <div class="answer-content verbatim-text">
            <div class="jawaban-badge">JAWABAN SOAL 7</div>

            <p>
              Model kecerdasan buatan bersifat retrospektif; pembelajarannya bersandar pada pola data historis yang telah terdokumentasi sebelumnya. AI unggul dalam interpolasi (menggabungkan dan mereplikasi hal-hal yang sudah ada), namun memiliki batasan mendasar dalam menghasilkan paradigma yang sepenuhnya baru.
            </p>

            <h4>Kreativitas manusia tetap menjadi penggerak utama karena beberapa faktor:</h4>
            <ul>
              <li>
                <strong>Penciptaan Paradigma Baru (Inovasi Zero-to-One):</strong> Terobosan besar dalam rekayasa perangkat lunak—seperti pergeseran arsitektur monolitik ke event-driven, perancangan sistem kontrol versi terdistribusi (Git), atau penciptaan model komputasi terdistribusi—lahir dari pemikiran lateral manusia yang merespons masalah unik di dunia nyata, bukan dari pengulangan data masa lalu.
              </li>
              <li>
                <strong>Pemahaman Konteks Holistik dan Intuisi:</strong> Manusia mampu menghubungkan bidang yang tidak terkait (misalnya mengadaptasi sistem biologi ke dalam algoritma komputasi, atau perilaku pasar ke dalam perancangan antarmuka) untuk memecahkan kendala sistem yang belum memiliki preseden.
              </li>
              <li>
                <strong>Posisi AI sebagai Akselerator, Bukan Arsitek:</strong> Kreativitas, perumusan visi masa depan, dan intuisi arsitektur berasal dari manusia. AI berfungsi sebagai akselerator eksekusi (One-to-N) yang menerjemahkan visi tersebut menjadi modul-modul implementasi teknis dengan cepat dan terstruktur.
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
              Penyusunan analisa di atas diperkuat dengan rujukan pustaka standar kecerdasan buatan dan psikologi kognitif:
            </p>
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
                <strong>IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems (2019).</strong> <em>Ethically Aligned Design.</em> IEEE.
              </li>
            </ol>
          </div>
        </section>

        <!-- Bottom Navigation & Share -->
        <div class="article-bottom-nav">
          <router-link to="/" class="btn btn-secondary">
            ← Kembali ke Portal Akademik
          </router-link>
          <div class="bottom-actions">
            <CopyLinkBtn
              target-path="/tugas-1"
              task-name="Tugas 1"
              label="Salin Link Tugas 1"
              btn-class="btn-primary"
            />
            <router-link to="/tugas-2" class="btn btn-outline">
              Buka Tugas 2 →
            </router-link>
          </div>
        </div>
      </main>

      <!-- Sticky TOC Sidebar -->
      <aside class="article-toc">
        <div class="toc-sidebar glass-card">
          <h4 class="toc-title">Daftar Soal Tugas 1</h4>
          <nav class="toc-nav">
            <a href="#soal-1" class="toc-link">Soal 1: Sinergi AI & Kognisi</a>
            <a href="#soal-2" class="toc-link">Soal 2: Cognitive Offloading</a>
            <a href="#soal-3" class="toc-link">Soal 3: Computational Thinking</a>
            <a href="#soal-4" class="toc-link">Soal 4: Flow State & Gangguan</a>
            <a href="#soal-5" class="toc-link">Soal 5: Etika & Empati</a>
            <a href="#soal-6" class="toc-link">Soal 6: Continuous Learning</a>
            <a href="#soal-7" class="toc-link">Soal 7: Kreativitas Zero-to-One</a>
            <a href="#referensi" class="toc-link">📚 Sumber Referensi</a>
          </nav>

          <hr class="toc-divider" />

          <div class="toc-quick-copy">
            <span class="toc-label">Tautan Pengumpulan:</span>
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
import { ref } from 'vue'
import { PORTAL_INFO } from '@/data/courseData'
import CopyLinkBtn from '@/components/CopyLinkBtn.vue'

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
  background: linear-gradient(180deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
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
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  color: #a5b4fc;
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
