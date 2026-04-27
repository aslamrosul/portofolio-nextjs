# Image URL Feature - Featured Projects

## Fitur Baru

Sekarang kamu bisa mengatur URL tujuan saat gambar project diklik, terpisah dari GitHub URL.

## Cara Kerja

### Priority URL saat gambar diklik:
1. **Image URL** (jika diisi) → Prioritas tertinggi
2. **Demo URL** (jika ada) → Prioritas kedua
3. **GitHub URL** → Fallback default

## Cara Menggunakan

### Di Dashboard Admin:

1. Buka `/admin/dashboard`
2. Pilih tab "Projects"
3. Edit Featured Project
4. Isi field baru:
   - **Image URL**: URL tujuan saat gambar diklik
   - **Demo URL**: Link demo live project (opsional)

### Contoh Penggunaan:

**Scenario 1: Project di Vercel**
```
Image URL: https://myproject.vercel.app
Demo URL: https://myproject.vercel.app
GitHub: https://github.com/user/myproject
```
→ Gambar akan link ke Vercel

**Scenario 2: Project belum deploy**
```
Image URL: (kosong)
Demo URL: (kosong)
GitHub: https://github.com/user/myproject
```
→ Gambar akan link ke GitHub

**Scenario 3: Custom URL**
```
Image URL: https://custom-domain.com
Demo URL: (kosong)
GitHub: https://github.com/user/myproject
```
→ Gambar akan link ke custom domain

## Update Database

Setelah update kode, jalankan:

```bash
# Push schema baru ke database
npm run prisma:push

# Atau jika perlu migration
npm run prisma:migrate
```

## Field Baru di Database

```prisma
model FeaturedProject {
  // ... field lainnya
  imageUrl String? // URL when image is clicked
}
```

## Catatan

- Field `imageUrl` bersifat opsional (nullable)
- Jika kosong, otomatis pakai `demo` atau `github`
- Tidak perlu re-seed data lama, field baru akan null
- Update via dashboard admin untuk set imageUrl
