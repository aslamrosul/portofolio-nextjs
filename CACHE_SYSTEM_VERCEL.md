# Sistem Cache Portfolio untuk Vercel

## Masalah
Di Vercel, file system bersifat read-only saat runtime. Tidak bisa menyimpan cache secara dinamis seperti di local development.

## Solusi
Generate cache saat build time dan simpan sebagai static file di folder `public`.

## Cara Kerja

### 1. Build Time (Sebelum Deploy)
```bash
npm run build
```

Proses build akan:
1. Generate Prisma client
2. **Jalankan script `generate-cache.js`** → Ambil semua data dari Supabase dan simpan ke `public/portfolio-cache.json`
3. Build Next.js

### 2. Runtime (Saat Website Diakses)

**Jika Supabase aktif:**
- Ambil data langsung dari database
- Website tampil normal dengan data terbaru

**Jika Supabase pause/down:**
- Gagal koneksi ke database
- Otomatis fallback ke `public/portfolio-cache.json`
- Website tetap tampil dengan data terakhir saat build

## Cara Update Cache

### Opsi 1: Re-deploy (Recommended)
1. Pastikan Supabase aktif
2. Push code ke Git
3. Vercel otomatis build ulang → cache ter-update

### Opsi 2: Manual Generate (Local)
```bash
npm run generate-cache
```
Lalu commit file `public/portfolio-cache.json` dan push.

## File Penting

- `scripts/generate-cache.js` - Script untuk generate cache
- `public/portfolio-cache.json` - File cache (di-commit ke Git)
- `package.json` - Build script sudah include generate cache

## Keuntungan

✅ Website tetap bisa diakses meskipun Supabase pause
✅ Tidak perlu setup tambahan (Vercel KV, Redis, dll)
✅ Cache otomatis ter-update setiap deploy
✅ Gratis, tidak ada biaya tambahan

## Catatan

- Cache hanya update saat build/deploy baru
- Jika update data di admin, perlu re-deploy untuk update cache
- File `portfolio-cache.json` harus di-commit ke Git
- Cache berisi timestamp kapan di-generate (`_generated` field)

## Log Messages

- `🔄 Generating portfolio cache...` - Mulai generate cache
- `✅ Cache generated successfully` - Cache berhasil dibuat
- `⚠️ Using build-time cached data` - Pakai cache karena database error
- `📅 Cache generated at: [timestamp]` - Info kapan cache dibuat
