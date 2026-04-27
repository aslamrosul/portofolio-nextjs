# Admin Dashboard Guide

Panduan lengkap untuk menggunakan Admin Dashboard Portfolio.

## 🎯 Fitur Dashboard

Dashboard admin memungkinkan Anda mengedit konten portfolio tanpa perlu edit kode secara manual.

### Yang Bisa Diedit:
- ✅ Hero Section (nama, deskripsi, roles)
- ✅ About Section (tentang diri, foto profil)
- ✅ Experience (pendidikan & pengalaman)
- ✅ Projects (featured & other projects)
- ✅ Contact (text & email)
- ✅ Social Media Links
- ✅ Settings (CV URL, accent color)

## 🚀 Cara Mengakses Dashboard

### 1. Jalankan Development Server
```bash
npm run dev
```

### 2. Buka Admin Login
Akses: http://localhost:3000/admin/login

### 3. Login
```
Username: admin
Password: admin123
```

⚠️ **PENTING**: Ganti password default di `src/pages/api/auth.ts`

## 📝 Cara Menggunakan Dashboard

### Login
1. Buka `/admin/login`
2. Masukkan username dan password
3. Klik "Login"

### Edit Konten
1. Pilih section yang ingin diedit dari sidebar
2. Edit konten di form
3. Klik "💾 Simpan Perubahan"
4. Refresh halaman utama untuk melihat perubahan

### Tambah Item Baru
**Experience:**
1. Pilih tab "Experience"
2. Klik "➕ Tambah Experience"
3. Isi form yang muncul
4. Klik "Simpan Perubahan"

**Featured Projects:**
1. Pilih tab "Projects"
2. Klik "➕ Tambah Featured Project"
3. Isi form yang muncul
4. Klik "Simpan Perubahan"

**Other Projects:**
1. Pilih tab "Projects"
2. Scroll ke bawah ke "Other Projects"
3. Klik "➕ Tambah Other Project"
4. Isi form yang muncul
5. Klik "Simpan Perubahan"

### Hapus Item
1. Buka item yang ingin dihapus
2. Klik tombol "🗑️ Hapus" di pojok kanan atas card
3. Item akan langsung terhapus
4. Klik "Simpan Perubahan" untuk menyimpan

### Preview
- Klik "👁️ Preview Site" untuk melihat portfolio
- Buka di tab baru untuk membandingkan

### Logout
- Klik "Logout" di header

## 📋 Panduan Edit Per Section

### Hero Section
**Yang bisa diedit:**
- Intro Text (contoh: "Halo, nama saya")
- Nama lengkap
- Roles (satu per baris, untuk typing animation)
- Deskripsi singkat

**Tips:**
- Roles akan muncul dengan animasi typing
- Pisahkan setiap role dengan enter/baris baru
- Deskripsi maksimal 2-3 kalimat

### About Section
**Yang bisa diedit:**
- Tentang diri (paragraf panjang)
- Path foto profil

**Tips:**
- Upload foto ke folder `public/` terlebih dahulu
- Masukkan path dengan format: `/nama-file.jpg`
- Foto akan otomatis di-optimize oleh Next.js

### Experience
**Yang bisa diedit:**
- Periode (contoh: "2023 - Sekarang")
- Institusi (contoh: "Politeknik Negeri Malang")
- Posisi (contoh: "D4 - Teknik Informatika")
- Deskripsi

**Fitur:**
- ➕ Tambah experience baru
- 🗑️ Hapus experience

**Tips:**
- Bisa menambah multiple experience
- Urutkan dari yang terbaru
- Klik "Tambah Experience" untuk menambah item baru
- Klik "Hapus" untuk menghapus item

### Featured Projects
**Yang bisa diedit:**
- Label (contoh: "Proyek Laravel")
- Title
- Deskripsi
- Technologies (pisahkan dengan koma)
- GitHub URL
- Image Path

**Fitur:**
- ➕ Tambah featured project baru
- 🗑️ Hapus featured project

**Tips:**
- Upload screenshot ke folder `public/`
- Technologies dipisah dengan koma: `Laravel, PHP, MySQL`
- Image path format: `/project1.jpg`
- Klik "Tambah Featured Project" untuk menambah
- Klik "Hapus" untuk menghapus

### Other Projects
**Yang bisa diedit:**
- Title
- Deskripsi
- Technologies
- GitHub URL

**Fitur:**
- ➕ Tambah other project baru
- 🗑️ Hapus other project

**Tips:**
- Untuk proyek-proyek kecil atau side projects
- Tidak perlu screenshot
- Klik "Tambah Other Project" untuk menambah
- Klik "Hapus" untuk menghapus

### Contact
**Yang bisa diedit:**
- Contact text (ajakan untuk menghubungi)
- Email

**Tips:**
- Email akan otomatis jadi mailto: link
- Text bisa disesuaikan dengan kebutuhan (magang, freelance, dll)

### Social Media
**Yang bisa diedit:**
- GitHub URL
- LinkedIn URL
- Email

**Tips:**
- Pastikan URL lengkap (dengan https://)
- Test link setelah save

### Settings
**Yang bisa diedit:**
- CV URL (path ke file CV)
- Accent Color (warna tema)

**Tips:**
- Upload CV ke folder `public/`
- Accent color bisa dipilih dengan color picker
- Warna akan langsung apply ke seluruh site

## 🔒 Keamanan

### Default Credentials
```
Username: admin
Password: admin123
```

### Ganti Password
Edit file `src/pages/api/auth.ts`:

```typescript
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'password_baru_anda' // GANTI INI!
```

### Untuk Production
⚠️ **SANGAT PENTING**: Sistem auth ini sangat sederhana dan TIDAK aman untuk production!

Untuk production, gunakan:
1. **NextAuth.js** - Authentication library untuk Next.js
2. **Database** - Simpan credentials di database (encrypted)
3. **JWT** - Untuk session management
4. **Environment Variables** - Untuk credentials

## 💾 Data Storage

### Lokasi Data
Data disimpan di: `src/data/portfolio.json`

### Format Data
```json
{
  "hero": { ... },
  "about": { ... },
  "experience": [ ... ],
  "projects": { ... },
  "contact": { ... },
  "social": { ... },
  "settings": { ... }
}
```

### Backup Data
**PENTING**: Backup file `portfolio.json` secara berkala!

```bash
# Backup manual
copy src/data/portfolio.json src/data/portfolio.backup.json

# Atau commit ke Git
git add src/data/portfolio.json
git commit -m "Update portfolio data"
git push
```

## 🔄 Workflow Recommended

### Development
1. Edit konten di dashboard
2. Preview perubahan
3. Test di berbagai device
4. Commit changes ke Git

### Production
1. Edit di local development
2. Test thoroughly
3. Commit & push ke Git
4. Deploy akan auto-update

## 🐛 Troubleshooting

### Login tidak berhasil
```
✅ Fix:
- Check username & password
- Check console untuk error
- Restart dev server
```

### Perubahan tidak muncul
```
✅ Fix:
- Refresh halaman (Ctrl + R)
- Hard refresh (Ctrl + Shift + R)
- Check apakah data tersimpan di portfolio.json
```

### Error saat save
```
✅ Fix:
- Check console untuk error message
- Check file permissions
- Restart dev server
```

### Gambar tidak muncul
```
✅ Fix:
- Pastikan gambar ada di folder public/
- Check path (harus dimulai dengan /)
- Restart dev server
```

## 📈 Upgrade ke Database

Untuk portfolio yang lebih kompleks, upgrade ke database:

### Option 1: MongoDB
```bash
npm install mongodb mongoose
```

### Option 2: PostgreSQL
```bash
npm install pg
```

### Option 3: Prisma (Recommended)
```bash
npm install prisma @prisma/client
npx prisma init
```

## 🎨 Kustomisasi Dashboard

### Ganti Warna Dashboard
Edit `src/styles/Admin.module.css`:

```css
/* Ganti warna aksen */
.loginButton {
    background: #your-color;
}
```

### Tambah Field Baru
1. Update `portfolio.json` dengan field baru
2. Update form di `dashboard.tsx`
3. Update komponen yang menggunakan data

### Tambah Section Baru
1. Tambah data di `portfolio.json`
2. Tambah tab di sidebar
3. Tambah form di dashboard
4. Update komponen frontend

## 📞 Support

Jika ada pertanyaan atau butuh bantuan:
- Email: nvrsrndrmrx@gmail.com
- GitHub: @aslamrosul

## 🎯 Next Steps

1. ✅ Login ke dashboard
2. ✅ Edit konten
3. ✅ Ganti password default
4. ✅ Backup data
5. ✅ Test di production

---

Selamat mengelola portfolio! 🚀
