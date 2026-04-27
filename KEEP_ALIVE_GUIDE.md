# Keep Supabase Active - GitHub Actions

## Cara Kerja

Sistem ini otomatis "ping" database Supabase setiap 5 hari sekali untuk mencegah auto-pause.

## Setup

### 1. File yang Sudah Dibuat

✅ `src/pages/api/ping.ts` - API endpoint untuk ping database
✅ `.github/workflows/keep-alive.yml` - GitHub Action script

### 2. Cara Aktivasi

1. **Commit & Push ke GitHub:**
   ```bash
   git add .
   git commit -m "Add keep-alive system"
   git push
   ```

2. **Verifikasi di GitHub:**
   - Buka repository di GitHub
   - Klik tab "Actions"
   - Lihat workflow "Keep Supabase Active"
   - Workflow akan jalan otomatis setiap 5 hari

3. **Test Manual (Opsional):**
   - Di tab Actions, klik "Keep Supabase Active"
   - Klik "Run workflow" → "Run workflow"
   - Tunggu beberapa detik, lihat hasilnya

### 3. Verifikasi Endpoint

Test endpoint ping secara manual:
```bash
curl https://aslamra.vercel.app/api/ping
```

Atau buka di browser:
```
https://aslamra.vercel.app/api/ping
```

Response yang diharapkan:
```json
{
  "status": "ok",
  "message": "Database is active",
  "timestamp": "2026-04-12T..."
}
```

## Jadwal Ping

- **Otomatis:** Setiap 5 hari sekali jam 00:00 UTC
- **Manual:** Bisa trigger manual dari GitHub Actions tab
- **Supabase Free Tier:** Pause setelah 7 hari tidak aktif
- **Margin:** Ping setiap 5 hari = aman 2 hari buffer

## Monitoring

### Cek Status di GitHub Actions:
1. Buka repository → tab "Actions"
2. Lihat workflow runs terakhir
3. ✅ = Berhasil ping database
4. ❌ = Gagal (cek logs untuk detail)

### Cek Logs:
- Klik workflow run yang ingin dilihat
- Klik job "ping"
- Lihat output dari setiap step

## Keuntungan

✅ **Otomatis** - Tidak perlu manual intervention
✅ **Gratis** - GitHub Actions free tier cukup untuk ini
✅ **Reliable** - GitHub Actions uptime sangat tinggi
✅ **Simple** - Hanya query sederhana, tidak berat
✅ **Monitoring** - Bisa lihat history di Actions tab

## Risiko & Mitigasi

⚠️ **Risiko:** GitHub Actions down (sangat jarang)
✅ **Mitigasi:** Masih ada cache system sebagai backup

⚠️ **Risiko:** Supabase limit koneksi
✅ **Mitigasi:** Ping hanya 5 hari sekali, sangat ringan

⚠️ **Risiko:** URL berubah
✅ **Mitigasi:** Update URL di `.github/workflows/keep-alive.yml`

## Troubleshooting

### Workflow tidak jalan?
1. Pastikan sudah push ke GitHub
2. Cek tab Actions apakah workflow muncul
3. Coba trigger manual untuk test

### Ping gagal (HTTP 500)?
1. Cek Supabase masih aktif
2. Cek DATABASE_URL di Vercel environment variables
3. Lihat logs di Vercel untuk detail error

### Ingin ubah jadwal?
Edit file `.github/workflows/keep-alive.yml`:
```yaml
# Setiap 3 hari:
- cron: '0 0 */3 * *'

# Setiap hari:
- cron: '0 0 * * *'

# Setiap minggu:
- cron: '0 0 * * 0'
```

## Kombinasi dengan Cache System

Sistem ini bekerja bersama cache system:

1. **Normal:** Database aktif → ambil data langsung
2. **Ping gagal:** Database pause → pakai cache
3. **GitHub Actions:** Keep database aktif → jarang perlu cache

Jadi punya 2 layer protection! 🛡️
