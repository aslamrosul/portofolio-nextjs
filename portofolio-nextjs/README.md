# Portfolio Next.js - Aslam Rosul Ahmad

Portfolio website yang dibangun dengan Next.js 13 (Pages Router), TypeScript, dan CSS Modules.

## Fitur

- ✨ Desain modern dengan tema dark mode
- 🎨 Animasi smooth scroll dan fade-in effects
- 📱 Fully responsive untuk semua ukuran layar
- ⚡ Optimized dengan Next.js Image component
- 🔒 Security-themed design dengan glitch effects
- 📝 TypeScript untuk type safety
- 🎛️ **Admin Dashboard untuk edit konten tanpa coding**

## Struktur Proyek

```
portofolio-nextjs/
├── public/              # Static assets (images, CV, dll)
│   ├── profil.jpg
│   ├── project1.jpg
│   └── project2.jpg
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── SocialSidebar.tsx
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/         # CSS Modules
│       ├── globals.css
│       ├── Navbar.module.css
│       ├── Hero.module.css
│       ├── About.module.css
│       ├── Experience.module.css
│       ├── Projects.module.css
│       ├── Contact.module.css
│       ├── Footer.module.css
│       └── SocialSidebar.module.css
└── package.json
```

## Instalasi & Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses [http://localhost:3000](http://localhost:3000)

## Admin Dashboard

Portfolio ini dilengkapi dengan Admin Dashboard untuk mengedit konten tanpa perlu edit kode!

### Akses Dashboard
1. Jalankan dev server: `npm run dev`
2. Buka: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
3. Login dengan:
   - Username: `admin`
   - Password: `admin123`

### Fitur Dashboard
- ✅ Edit Hero, About, Experience, Projects, Contact
- ✅ Update Social Media Links
- ✅ Ganti warna tema
- ✅ Preview real-time
- ✅ Auto-save ke JSON file

📚 **Dokumentasi lengkap**: [ADMIN_GUIDE.md](./ADMIN_GUIDE.md)

⚠️ **PENTING**: Ganti password default sebelum deploy!

## Build untuk Production

```bash
npm run build
npm start
```

## Kustomisasi

### Mengganti Informasi Personal

Edit file-file berikut untuk mengganti informasi personal:

- `src/components/Hero.tsx` - Nama, deskripsi, dan typing effect
- `src/components/About.tsx` - Tentang diri Anda
- `src/components/Experience.tsx` - Pendidikan dan pengalaman
- `src/components/Projects.tsx` - Proyek-proyek Anda
- `src/components/Contact.tsx` - Email dan informasi kontak
- `src/components/SocialSidebar.tsx` - Link social media

### Mengganti Gambar

Letakkan gambar Anda di folder `public/`:
- `profil.jpg` - Foto profil
- `project1.jpg` - Screenshot proyek 1
- `project2.jpg` - Screenshot proyek 2
- `cv.pdf` - File CV Anda

### Mengubah Warna Tema

Edit variabel CSS di `src/styles/globals.css`:

```css
:root {
    --bg-dark: #0a192f;      /* Background utama */
    --bg-light: #112240;     /* Background card */
    --text-lightest: #ccd6f6; /* Text terang */
    --text-light: #a8b2d1;   /* Text medium */
    --text-dark: #8892b0;    /* Text gelap */
    --accent: #64ffda;       /* Warna aksen (hijau) */
}
```

## Teknologi yang Digunakan

- [Next.js 13](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling
- [Typed.js](https://github.com/mattboldt/typed.js/) - Typing animation
- [Next/Image](https://nextjs.org/docs/api-reference/next/image) - Image optimization

## Deploy

Portfolio ini dapat di-deploy ke berbagai platform:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder .next ke Netlify
```

## Lisensi

MIT License - Bebas digunakan untuk keperluan personal dan komersial.

## Kontak

- Email: nvrsrndrmrx@gmail.com
- GitHub: [@aslamrosul](https://github.com/aslamrosul)
- LinkedIn: [Aslam Rosul Ahmad](https://www.linkedin.com/in/aslamrosul/)
