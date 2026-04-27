# 🎛️ Admin Dashboard - Portfolio CMS

Dashboard admin untuk mengelola konten portfolio tanpa perlu edit kode.

## ✨ Fitur

- 🔐 Login authentication
- 📝 Edit semua konten portfolio
- ➕ Tambah item baru (Experience, Projects)
- 🗑️ Hapus item
- 👁️ Preview real-time
- 💾 Auto-save ke JSON file
- 🎨 Color picker untuk tema
- 📱 Responsive dashboard
- 🚀 Easy to use

## 🚀 Quick Start

### 1. Jalankan Server
```bash
npm run dev
```

### 2. Akses Dashboard
Buka browser: http://localhost:3000/admin/login

### 3. Login
```
Username: admin
Password: admin123
```

### 4. Edit Konten
- Pilih section dari sidebar
- Edit form
- Klik "Simpan Perubahan"
- Preview di tab baru

## 📸 Screenshots

### Login Page
```
┌─────────────────────────────┐
│     Admin Login             │
│  Masuk untuk mengelola      │
│       portfolio             │
│                             │
│  Username: [__________]     │
│  Password: [__________]     │
│                             │
│      [    Login    ]        │
└─────────────────────────────┘
```

### Dashboard
```
┌──────────────────────────────────────────────┐
│  Portfolio Admin Dashboard    [Preview] [Logout] │
├──────┬───────────────────────────────────────┤
│ 🏠   │  Hero Section                         │
│ Hero │  ┌─────────────────────────────────┐ │
│      │  │ Intro Text: [____________]      │ │
│ 👤   │  │ Nama: [____________________]    │ │
│ About│  │ Roles: [____________________]   │ │
│      │  │        [____________________]   │ │
│ 🎓   │  │ Deskripsi: [_______________]    │ │
│ Exp  │  │            [_______________]    │ │
│      │  └─────────────────────────────────┘ │
│ 💼   │                                       │
│ Proj │  [💾 Simpan Perubahan]               │
│      │                                       │
│ 📧   │                                       │
│ Cont │                                       │
└──────┴───────────────────────────────────────┘
```

## 📋 Sections yang Bisa Diedit

### 1. Hero Section
- Intro text
- Nama lengkap
- Roles (typing animation)
- Deskripsi

### 2. About
- Tentang diri
- Foto profil path

### 3. Experience
- Periode
- Institusi
- Posisi
- Deskripsi
- ➕ Tambah/🗑️ Hapus

### 4. Featured Projects
- Label
- Title
- Deskripsi
- Technologies
- GitHub URL
- Screenshot
- ➕ Tambah/🗑️ Hapus

### 5. Other Projects
- Title
- Deskripsi
- Technologies
- GitHub URL
- ➕ Tambah/🗑️ Hapus

### 6. Contact
- Contact text
- Email

### 7. Social Media
- GitHub URL
- LinkedIn URL
- Email

### 8. Settings
- CV URL
- Accent Color

## 🔒 Keamanan

### Default Credentials
⚠️ **GANTI PASSWORD SEBELUM DEPLOY!**

Edit `src/pages/api/auth.ts`:
```typescript
const ADMIN_USERNAME = 'admin'
const ADMIN_PASSWORD = 'your_secure_password' // GANTI!
```

### Untuk Production
Sistem auth ini sederhana dan **TIDAK AMAN** untuk production!

Gunakan:
- NextAuth.js
- Database untuk credentials
- JWT tokens
- Environment variables

## 💾 Data Storage

### Lokasi
Data disimpan di: `src/data/portfolio.json`

### Backup
```bash
# Manual backup
copy src/data/portfolio.json src/data/portfolio.backup.json

# Git backup
git add src/data/portfolio.json
git commit -m "Update portfolio data"
```

## 🎨 Kustomisasi

### Ganti Warna Dashboard
Edit `src/styles/Admin.module.css`

### Tambah Field
1. Update `portfolio.json`
2. Update form di `dashboard.tsx`
3. Update komponen frontend

### Tambah Section
1. Tambah data di JSON
2. Tambah tab di sidebar
3. Tambah form
4. Update frontend

## 🔄 API Endpoints

### GET /api/portfolio
Ambil data portfolio
```javascript
fetch('/api/portfolio')
  .then(res => res.json())
  .then(data => console.log(data))
```

### POST /api/portfolio
Update data portfolio
```javascript
fetch('/api/portfolio', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(newData)
})
```

### POST /api/auth
Login authentication
```javascript
fetch('/api/auth', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username, password })
})
```

## 🐛 Troubleshooting

### Login gagal
- Check username & password
- Check console errors
- Restart server

### Perubahan tidak muncul
- Refresh page (Ctrl + R)
- Hard refresh (Ctrl + Shift + R)
- Check portfolio.json

### Error saat save
- Check console
- Check file permissions
- Restart server

### Gambar tidak muncul
- Check file di public/
- Check path format
- Restart server

## 📈 Upgrade Options

### Database
Upgrade dari JSON ke database:

**MongoDB**
```bash
npm install mongodb mongoose
```

**PostgreSQL**
```bash
npm install pg
```

**Prisma (Recommended)**
```bash
npm install prisma @prisma/client
npx prisma init
```

### Authentication
Upgrade auth system:

**NextAuth.js**
```bash
npm install next-auth
```

**Auth0**
```bash
npm install @auth0/nextjs-auth0
```

## 📚 Dokumentasi Lengkap

Baca [ADMIN_GUIDE.md](./ADMIN_GUIDE.md) untuk panduan lengkap.

## 🎯 Workflow

### Development
1. Edit di dashboard
2. Preview changes
3. Test
4. Commit to Git

### Production
1. Edit locally
2. Test thoroughly
3. Backup data
4. Deploy

## 📞 Support

- Email: nvrsrndrmrx@gmail.com
- GitHub: @aslamrosul
- Docs: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

## 🎉 Features Roadmap

### v1.0 (Current)
- ✅ Basic CRUD
- ✅ Simple auth
- ✅ JSON storage
- ✅ All sections editable

### v2.0 (Future)
- ⏳ Database integration
- ⏳ Better authentication
- ⏳ Image upload
- ⏳ Multi-user support
- ⏳ Version control
- ⏳ Undo/Redo
- ⏳ Draft mode

## 📄 License

MIT License - Free to use and modify

---

Happy managing! 🚀
