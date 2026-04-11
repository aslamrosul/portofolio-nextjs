# Quick Start Guide

## 🚀 Langkah Cepat Memulai

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Buka browser dan akses: http://localhost:3000

### 3. Kustomisasi Konten

#### A. Informasi Personal
Edit file berikut:
- `src/components/Hero.tsx` - Nama dan deskripsi
- `src/components/About.tsx` - Tentang diri
- `src/components/Experience.tsx` - Pendidikan
- `src/components/Contact.tsx` - Email

#### B. Social Media Links
Edit `src/components/SocialSidebar.tsx`:
```tsx
<a href="https://github.com/username-anda">
<a href="https://linkedin.com/in/username-anda">
<a href="mailto:email-anda@gmail.com">
```

#### C. Proyek
Edit `src/components/Projects.tsx` untuk menambah/edit proyek

#### D. Gambar
Letakkan gambar di folder `public/`:
- `profil.jpg` - Foto profil Anda
- `project1.jpg` - Screenshot proyek 1
- `project2.jpg` - Screenshot proyek 2
- `cv.pdf` - File CV Anda

### 4. Build untuk Production
```bash
npm run build
npm start
```

### 5. Deploy

#### Vercel (Recommended)
1. Push ke GitHub
2. Import di [vercel.com](https://vercel.com)
3. Deploy otomatis!

#### Netlify
1. Build: `npm run build`
2. Upload folder `.next` dan `public`
3. Done!

## 📝 Checklist Sebelum Deploy

- [ ] Ganti semua informasi personal
- [ ] Upload foto profil ke `public/profil.jpg`
- [ ] Upload screenshot proyek
- [ ] Upload CV ke `public/cv.pdf`
- [ ] Update link GitHub, LinkedIn, Email
- [ ] Update link proyek
- [ ] Test di mobile view
- [ ] Test semua link berfungsi
- [ ] Build berhasil tanpa error

## 🎨 Kustomisasi Cepat

### Ganti Warna Tema
Edit `src/styles/globals.css`:
```css
:root {
    --accent: #64ffda;  /* Ganti warna ini */
}
```

### Ganti Font
Edit `src/pages/index.tsx`, ganti Google Fonts link

### Tambah Section
1. Buat file `src/components/NamaSection.tsx`
2. Buat file `src/styles/NamaSection.module.css`
3. Import di `src/pages/index.tsx`

## ❓ Troubleshooting

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Error saat build
```bash
# Hapus cache
rm -rf .next
npm run build
```

### Gambar tidak muncul
- Pastikan gambar di folder `public/`
- Path harus dimulai dengan `/`
- Restart dev server

## 📚 Dokumentasi Lengkap

- [README.md](./README.md) - Dokumentasi utama
- [PANDUAN.md](./PANDUAN.md) - Panduan detail
- [CHANGELOG.md](./CHANGELOG.md) - Perubahan dari HTML

## 💡 Tips

1. Gunakan VS Code dengan extension:
   - ESLint
   - Prettier
   - TypeScript

2. Test responsive di browser:
   - Chrome DevTools (F12)
   - Toggle device toolbar (Ctrl+Shift+M)

3. Optimize images sebelum upload:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)

## 🎯 Next Steps

1. ✅ Setup project
2. ✅ Kustomisasi konten
3. ✅ Test locally
4. ✅ Deploy
5. 🎉 Share portfolio Anda!

---

Butuh bantuan? Email: nvrsrndrmrx@gmail.com
