# Changelog

## [1.0.0] - 2024

### Konversi dari HTML ke Next.js

#### Added
- ✅ Struktur Next.js 13 dengan Pages Router
- ✅ TypeScript untuk type safety
- ✅ CSS Modules untuk scoped styling
- ✅ Komponen React yang reusable:
  - Navbar dengan sticky positioning
  - Hero section dengan typing animation
  - About section dengan foto profil
  - Experience timeline
  - Featured projects dengan layout grid
  - Other projects cards
  - Contact section
  - Footer
  - Social sidebar
- ✅ Animasi fade-in on scroll
- ✅ Navbar hide on scroll down
- ✅ Glitch effect pada hero title
- ✅ Scanline effect untuk tema security
- ✅ Hover effects pada semua interactive elements
- ✅ Responsive design untuk mobile, tablet, dan desktop
- ✅ Next.js Image optimization
- ✅ SEO meta tags
- ✅ Google Fonts integration (Inter & Fira Code)
- ✅ Typed.js untuk typing animation
- ✅ Dokumentasi lengkap (README.md & PANDUAN.md)

#### Changed
- 🔄 Dari single HTML file ke modular components
- 🔄 Dari inline styles ke CSS Modules
- 🔄 Dari vanilla JS ke React hooks
- 🔄 Dari `<img>` ke Next.js `<Image>` component
- 🔄 Dari static links ke Next.js `<Link>` component

#### Improved
- ⚡ Performance dengan Next.js optimizations
- ⚡ Image loading dengan lazy loading
- ⚡ Code splitting otomatis
- ⚡ Better SEO dengan meta tags
- ⚡ Type safety dengan TypeScript
- ⚡ Maintainability dengan component structure

#### File Structure
```
portofolio-nextjs/
├── public/
│   ├── profil.jpg
│   ├── project1.jpg
│   ├── project2.jpg
│   └── cv.pdf (perlu ditambahkan)
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── SocialSidebar.tsx
│   ├── pages/
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles/
│       ├── globals.css
│       ├── About.module.css
│       ├── Contact.module.css
│       ├── Experience.module.css
│       ├── Footer.module.css
│       ├── Hero.module.css
│       ├── Navbar.module.css
│       ├── Projects.module.css
│       └── SocialSidebar.module.css
├── README.md
├── PANDUAN.md
├── CHANGELOG.md
└── package.json
```

#### Notes
- Semua fungsionalitas dari versi HTML telah dikonversi
- Styling tetap sama dengan versi original
- Animasi dan effects tetap berfungsi
- Responsive design tetap terjaga
- Perlu menambahkan file cv.pdf ke folder public/

#### Next Steps
1. Install dependencies: `npm install`
2. Tambahkan file cv.pdf ke folder public/
3. Jalankan development server: `npm run dev`
4. Kustomisasi konten sesuai kebutuhan
5. Deploy ke Vercel atau Netlify
