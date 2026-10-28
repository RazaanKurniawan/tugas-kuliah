-- =========================================================================
-- Skema Database Supabase untuk Blog Tugas Kuliah Mahasiswa (Kelas 17.5A.01)
-- Jalankan script ini di SQL Editor dashboard Supabase jika ingin membuat tabel:
-- https://supabase.com/dashboard/project/qvrkaqhosvdkhcpfoxbh/sql
-- =========================================================================

-- 1. Buat Tabel assignments
CREATE TABLE IF NOT EXISTS public.assignments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT UNIQUE NOT NULL,
    course_id TEXT NOT NULL DEFAULT 'ai',
    course_name TEXT NOT NULL DEFAULT 'Kecerdasan Buatan',
    title TEXT NOT NULL,
    topic TEXT,
    summary TEXT,
    reading_time TEXT DEFAULT '15 Menit Baca',
    pdf_url TEXT,
    data JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.assignments ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Izinkan publik membaca seluruh data tugas
CREATE POLICY "Public assignments are viewable by everyone"
ON public.assignments
FOR SELECT
USING (true);

-- 4. Policy: Izinkan penambahan tugas baru dari frontend/generator
CREATE POLICY "Allow anon insert assignments"
ON public.assignments
FOR INSERT
WITH CHECK (true);

-- 5. Policy: Izinkan pembaruan tugas
CREATE POLICY "Allow anon update assignments"
ON public.assignments
FOR UPDATE
USING (true);

-- Catatan:
-- Aplikasi juga telah dilengkapi auto-fallback ke Supabase Storage (Bucket 'assignments')
-- sehingga fitur upload PDF dan generator AI tetap bekerja 100% tanpa error meskipun
-- tabel SQL di atas belum dieksekusi.
