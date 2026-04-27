# Panduan Lengkap Portfolio Next.js

## Konversi dari HTML ke Next.js

Portfolio ini telah dikonversi dari HTML/CSS/JavaScript murni ke Next.js dengan struktur yang lebih terorganisir dan performa yang lebih baik.

## Perbedaan Utama

### 1. Struktur File
- **Sebelum (HTML)**: Semua kode dalam 1 file `index.html`
- **Sekarang (Next.js)**: Terpisah menjadi komponen-komponen reusable

### 2. Styling
- **Sebelum**: CSS global dalam `style.css`
- **Sekarang**: CSS Modules untuk setiap komponen + global styles

### 3. JavaScript
- **Sebelum**: Script terpisah di `script.js`
- **Sekarang**: Logic terintegrasi dalam komponen React dengan hooks

### 4. Images
- **Sebelum**: Tag `<img>` biasa
- **Sekarang**: Next.js `<Image>` component dengan optimasi otomatis

## Cara Menjalankan

### Development Mode
```bash
npm run dev
```
Buka http://localhost:3000 di browser Anda.

### Production Build
```bash
npm run build
npm start
```

## Cara Kustomisasi

### 1. Mengganti Foto Profil

Letakkan foto baru di `public/profil.jpg` atau ganti path di `src/components/About.tsx`:

```tsx
<Image
  src="/nama-foto-baru.jpg"
  alt="Foto Anda"
  width={360}
  height={360}
/>
```

### 2. Menambah/Mengedit Proyek

Edit file `src/components/Projects.tsx`. Untuk menambah proyek unggulan:

```tsx
<div className={`${styles.projectGrid} ${styles.featured}`} data-fade>
  <div className={styles.projectContent}>
    <span className={styles.projectLabel}>Label Proyek</span>
    <h3 className={styles.projectTitle}>
      <a href="link-github">Nama Proyek</a>
    </h3>
    <div className={styles.projectDesc}>
      <p>Deskripsi proyek...</p>
    </div>
    <ul className={styles.projectTech}>
      <li>Tech 1</li>
      <li>Tech 2</li>
    </ul>
  </div>
  <div className={styles.projectImage}>
    <Image src="/project-baru.jpg" alt="Screenshot" width={600} height={400} />
  </div>
</div>
```

### 3. Mengganti Warna Tema

Edit `src/styles/globals.css`:

```css
:root {
    --accent: #64ffda;  /* Ganti dengan warna favorit Anda */
}
```

Warna yang direkomendasikan:
- Hijau (default): `#64ffda`
- Biru: `#00d4ff`
- Ungu: `#a78bfa`
- Pink: `#f472b6`
- Orange: `#fb923c`

### 4. Menambah Section Baru

1. Buat komponen baru di `src/components/NamaSection.tsx`
2. Buat CSS Module di `src/styles/NamaSection.module.css`
3. Import dan tambahkan di `src/pages/index.tsx`:

```tsx
import NamaSection from '@/components/NamaSection'

// Di dalam return:
<main>
  <Hero />
  <About />
  <NamaSection />  {/* Section baru */}
  <Experience />
  ...
</main>
```

### 5. Menambah Link di Navbar

Edit `src/components/Navbar.tsx`:

```tsx
<li>
  <Link href="#section-baru">
    <span>05.</span> Nama Section
  </Link>
</li>
```

### 6. Mengganti Font

Edit `src/pages/index.tsx`, ganti link Google Fonts:

```tsx
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
```

Lalu update di `src/styles/globals.css`:

```css
:root {
    --font-sans: 'Poppins', sans-serif;
}
```

## Troubleshooting

### Error: Module not found
Pastikan semua dependencies sudah terinstall:
```bash
npm install
```

### Gambar tidak muncul
- Pastikan gambar ada di folder `public/`
- Cek path di komponen (harus dimulai dengan `/`)
- Restart development server

### Styling tidak muncul
- Pastikan import CSS Module sudah benar
- Cek nama class di CSS Module (gunakan camelCase)
- Clear cache browser (Ctrl + Shift + R)

### TypeScript error
Jika ada error TypeScript yang mengganggu, Anda bisa:
1. Restart VS Code
2. Atau jalankan: `npm run build` untuk melihat error yang sebenarnya

## Tips Optimasi

### 1. Compress Images
Gunakan tools seperti:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

### 2. Lazy Loading
Next.js sudah otomatis melakukan lazy loading untuk images dan components.

### 3. SEO
Tambahkan meta tags di `src/pages/index.tsx`:

```tsx
<Head>
  <meta property="og:title" content="Portfolio Anda" />
  <meta property="og:description" content="Deskripsi" />
  <meta property="og:image" content="/og-image.jpg" />
</Head>
```

## Deploy ke Vercel

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

Vercel akan otomatis detect Next.js dan setup semuanya.

## Deploy ke Netlify

1. Build project: `npm run build`
2. Upload folder `.next` dan `public` ke Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## Pertanyaan?

Jika ada pertanyaan atau butuh bantuan, silakan:
- Buka issue di GitHub
- Email: nvrsrndrmrx@gmail.com

Selamat coding! 🚀
