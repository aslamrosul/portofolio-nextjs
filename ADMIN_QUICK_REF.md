# Admin Dashboard - Quick Reference

Referensi cepat untuk Admin Dashboard.

## 🔑 Login

**URL**: http://localhost:3000/admin/login

**Credentials**:
```
Username: admin
Password: admin123
```

⚠️ Ganti di: `src/pages/api/auth.ts`

## 📝 Edit Konten

### Hero Section
```
Intro: "Halo, nama saya"
Nama: "Aslam Rosul Ahmad"
Roles: (satu per baris)
  Web Developer.
  Security Enthusiast.
  Data Analyst.
Deskripsi: (2-3 kalimat)
```

### About
```
Text: (paragraf panjang tentang diri)
Image: /profil.jpg
```

### Experience
```
➕ Tambah Experience
Periode: "2023 - Sekarang"
Institusi: "Politeknik Negeri Malang"
Posisi: "D4 - Teknik Informatika"
Deskripsi: (1-2 paragraf)
🗑️ Hapus (tombol di pojok kanan)
```

### Featured Projects
```
➕ Tambah Featured Project
Label: "Proyek Laravel"
Title: "Sistem Pelaporan..."
Deskripsi: (2-3 paragraf)
Technologies: Laravel, PHP, MySQL (pisah koma)
GitHub: https://github.com/...
Image: /project1.jpg
🗑️ Hapus (tombol di pojok kanan)
```

### Other Projects
```
➕ Tambah Other Project
Title: "Landing Page"
Deskripsi: (1 paragraf)
Technologies: HTML, CSS, JS (pisah koma)
GitHub: https://github.com/...
🗑️ Hapus (tombol di pojok kanan)
```

### Contact
```
Text: "Saat ini saya sedang..."
Email: your@email.com
```

### Social Media
```
GitHub: https://github.com/username
LinkedIn: https://linkedin.com/in/username
Email: your@email.com
```

### Settings
```
CV URL: /cv.pdf
Accent Color: #64ffda (color picker)
```

## 💾 Save & Preview

1. Edit form
2. Klik "💾 Simpan Perubahan"
3. Klik "👁️ Preview Site"
4. Refresh untuk lihat perubahan

## 📁 File Locations

### Data
```
src/data/portfolio.json
```

### Images
```
public/profil.jpg
public/project1.jpg
public/project2.jpg
public/cv.pdf
```

### Code
```
src/pages/admin/dashboard.tsx  - Dashboard UI
src/pages/admin/login.tsx      - Login page
src/pages/api/portfolio.ts     - Data API
src/pages/api/auth.ts          - Auth API
src/styles/Admin.module.css    - Dashboard styles
```

## 🔄 Workflow

```
1. Login → Dashboard
2. Select Section → Edit Form
3. Save Changes → Preview
4. Test → Commit to Git
```

## 🐛 Quick Fixes

### Login gagal
```bash
# Restart server
npm run dev
```

### Perubahan tidak muncul
```
Ctrl + Shift + R (hard refresh)
```

### Error saat save
```bash
# Check file permissions
# Restart server
npm run dev
```

### Gambar tidak muncul
```
1. Check file di public/
2. Check path: /nama-file.jpg
3. Restart server
```

## 🔒 Security Checklist

- [ ] Ganti password default
- [ ] Backup portfolio.json
- [ ] Test login
- [ ] Test save
- [ ] Test preview

## 📊 Data Format

### JSON Structure
```json
{
  "hero": {
    "intro": "string",
    "name": "string",
    "roles": ["string"],
    "description": "string"
  },
  "about": {
    "text": "string",
    "image": "string"
  },
  "experience": [{
    "id": number,
    "period": "string",
    "institution": "string",
    "position": "string",
    "description": "string"
  }],
  "projects": {
    "featured": [{
      "id": number,
      "label": "string",
      "title": "string",
      "description": "string",
      "technologies": ["string"],
      "github": "string",
      "image": "string"
    }],
    "other": [{
      "id": number,
      "title": "string",
      "description": "string",
      "technologies": ["string"],
      "github": "string"
    }]
  },
  "contact": {
    "text": "string",
    "email": "string"
  },
  "social": {
    "github": "string",
    "linkedin": "string",
    "email": "string"
  },
  "settings": {
    "cvUrl": "string",
    "theme": {
      "accentColor": "string"
    }
  }
}
```

## 🎯 Common Tasks

### Ganti Nama
```
Dashboard → Hero Section → Nama → Save
```

### Tambah Experience
```
Dashboard → Experience → ➕ Tambah Experience → Fill form → Save
```

### Hapus Experience
```
Dashboard → Experience → 🗑️ Hapus (di card) → Save
```

### Tambah Project
```
Dashboard → Projects → ➕ Tambah Featured/Other Project → Fill form → Save
```

### Hapus Project
```
Dashboard → Projects → 🗑️ Hapus (di card) → Save
```

### Ganti Email
```
Dashboard → Contact → Email → Save
Dashboard → Social Media → Email → Save
```

### Ganti Warna
```
Dashboard → Settings → Accent Color → Pick color → Save
```

### Upload Foto
```
1. Copy foto ke public/
2. Dashboard → About → Image → /nama-foto.jpg → Save
```

### Upload CV
```
1. Copy CV ke public/
2. Dashboard → Settings → CV URL → /cv.pdf → Save
```

## 📞 Help

**Full Guide**: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

**Support**: nvrsrndrmrx@gmail.com

---

Quick Ref v1.0
