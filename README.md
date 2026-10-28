# Blog Tugas Kecerdasan Buatan (AI) - Kelas 17.5A.01

Portal publikasi akademik dan blog ilmiah interaktif untuk pengerjaan tugas kelompok mata kuliah **Kecerdasan Buatan (Artificial Intelligence)**, Program Studi **Teknologi Informasi**, **Universitas Bina Sarana Informatika (UBSI)**.

Aplikasi ini dibangun menggunakan **Vue 3 (Composition API)** + **Vite** dan dirancang untuk dapat langsung dideploy ke **Vercel** guna pengumpulan tugas berbasis tautan (link) di portal **MyBest**.

---

## 👥 Identitas Anggota Kelompok

| No | Nama Lengkap | NIM | Peran / Kontribusi |
|:---:|:---|:---:|:---|
| 1 | **Razaan Kurniawan Putra** | `17240286` | Lead Author & Software Engineer |
| 2 | **Ridho Putra Rianar** | `17240102` | Co-Author & Algorithm Analyst |
| 3 | **Aby Yazzy Wijaya** | `17240158` | Co-Author & Cognitive Systems Specialist |
| 4 | **Toma Brema** | `17240099` | Co-Author & AI Ethics Specialist |
| 5 | **Sam Nurullah** | `17240117` | Co-Author & Heuristic Search Specialist |

- **Kelas**: 17.5A.01
- **Program Studi**: Teknologi Informasi
- **Mata Kuliah**: Kecerdasan Buatan

---

## 📚 Struktur Konten Blog

### 1. [Tugas 1: Sinergi AI & Kognisi Manusia](/tugas-1)
- **Topik**: Kecerdasan Buatan dan Teknik Potensi Manusia dalam Pemrograman
- **Daftar Soal & Pembahasan**:
  1. *Sinergi AI dan Kognisi Manusia* (Akselerasi sintaksis vs arah strategis).
  2. *Pembebasan Beban Kognitif (Cognitive Offloading)* menuju level System Design & Arsitektur.
  3. *Computational Thinking & Prompt Engineering* (4 pilar: Dekomposisi, Pola, Abstraksi, Algoritma).
  4. *Flow State & Pengelolaan Interupsi AI* (Mode on-demand, pemisahan tahap deep thinking vs implementasi).
  5. *Etika, Empati, dan Tanggung Jawab Sosial* (Fairness, a11y, mitigasi bias data latih, human-in-the-loop).
  6. *Pembelajaran Berkelanjutan (Continuous Learning)* (Metode Tanya Sokratik, analisis Big-O, pemahaman refactoring).
  7. *Kreativitas Manusia dalam Inovasi Teknologi* (Inovasi zero-to-one, intuisi, AI sebagai akselerator bukan arsitek).
  - Dilengkapi referensi akademik berstandar APA/IEEE.

### 2. [Tugas 2: Teknik Pencarian & Optimasi Algoritma](/tugas-2)
- **Topik**: Penyelesaian Masalah dengan Teknik Pencarian (Search Algorithms)
- **Daftar Soal & Pembahasan**:
  1. *6 Komponen Formulasi Masalah Formal* (Initial State, Actions, Transition Model, Goal Test, Path Cost, State Space pada robot AGV gudang).
  2. *Pencarian Buta (Uninformed Search)*: Matriks komparasi mendalam BFS vs DFS (Time, Space, Completeness, Optimality).
  3. *Iterative Deepening Search (IDS)*: Efisiensi memori linear $O(b \cdot d)$ dan optimalitas untuk ruang status sangat luas seperti pohon catur.
  4. *Pencarian Heuristik & Algoritma A\**: Sifat admissible $h(n) \le h^*(n)$ dan dekonstruksi $f(n) = g(n) + h(n)$.
  5. *Pencarian Lokal & Optimasi*: Hill Climbing (kelemahan local optima) dan Simulated Annealing (parameter suhu $T$).
  6. *Studi Kasus 8-Queens*: Perbandingan ledakan kombinatorial Tree Search ($4.4 \times 10^9$ status) vs Pencarian Lokal Min-Conflicts yang mampu menyelesaikan hingga $1.000.000$ ratu. **Dilengkapi visualisasi interaktif papan catur 8-Queens secara langsung di halaman!**
  7. *Analisis Dilema Ride-Hailing*: Analisis kegagalan fatal OOM (Out-of-Memory) pada BFS/DFS, dan solusi rekayasa industri menggunakan *Bidirectional A\* + Contraction Hierarchies (CH)*.

---

## 🚀 Panduan Deploy ke Vercel

Sesuai instruksi tugas ke-2 dan ke-3 (*"Buat pada Blog atau Web pribadi bukan Google Drive, dan kirimkan link dari blog"*), website ini telah dilengkapi `vercel.json` sehingga routing SPA berjalan tanpa kendala 404.

### Opsi A: Deploy via GitHub (Paling Direkomendasikan)
1. Inisialisasi Git dan Push ke akun GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: blog tugas kuliah multi-matkul dan tugas 1 & 2 kecerdasan buatan"
   git branch -M main
   git remote add origin https://github.com/RazaanKurniawan/tugas-kuliah.git
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com/dashboard).
3. Klik tombol **"Add New..."** → **"Project"**.
4. Import repository **`RazaanKurniawan/tugas-kuliah`**, atur domain / project name ke **`tugas-kuliah-razaan`** (atau tambahkan domain `tugas-kuliah-razaan.vercel.app` di Settings > Domains), lalu klik **"Deploy"**.
5. Selesai! Website aktif di **https://tugas-kuliah-razaan.vercel.app**.

---

## 📋 Tautan Resmi Pengumpulan ke MyBest

Tautan tugas yang siap dikumpulkan ke MyBest:
- **Tugas 1 (Kecerdasan Buatan):** `https://tugas-kuliah-razaan.vercel.app/tugas-1`
- **Tugas 2 (Kecerdasan Buatan):** `https://tugas-kuliah-razaan.vercel.app/tugas-2`

---

## 💻 Menjalankan di Komputer Lokal

```bash
# Menjalankan development server
npm run dev

# Membangun bundle produksi
npm run build

# Menjalankan preview build
npm run preview
```
