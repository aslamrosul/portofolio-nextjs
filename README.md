# 🎯 Portfolio Website - Aslam Rosul Ahmad

Sebuah **website portfolio profesional** yang dibangun dengan Next.js 16, TypeScript, Prisma ORM, dan CSS Modules. Website ini menawarkan halaman portfolio responsif dengan admin dashboard untuk mengelola konten secara dinamis tanpa perlu coding.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-000000?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.19.2-2D3748?style=for-the-badge&logo=prisma)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)

## 📖 Daftar Isi

- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Tech Stack](#️-tech-stack)
- [📦 Instalasi](#-instalasi)
- [🚀 Menjalankan Aplikasi](#-menjalankan-aplikasi)
- [📁 Struktur Proyek](#-struktur-proyek)
- [🗄️ Database & Prisma](#️-database--prisma)
- [🔐 Admin Dashboard](#-admin-dashboard)
- [🎨 Kustomisasi](#-kustomisasi)
- [🌐 Deployment](#-deployment)
- [📚 Scripts Tersedia](#-scripts-tersedia)
- [🤝 Kontribusi](#-kontribusi)
- [📧 Kontak](#-kontak)

---

## ✨ Fitur Utama

### Website Portfolio
- ✅ **Desain Modern & Responsif** - Terlihat sempurna di semua perangkat
- ✅ **Dark Mode Theme** - Tema gelap yang elegan dan eye-friendly
- ✅ **Animasi Smooth** - Scroll effects dan fade-in animations
- ✅ **Sections Dinamis**:
  - 🎭 Hero Section dengan typing animation
  - 📝 About Section dengan deskripsi lengkap
  - 🎓 Experience Section (Pendidikan & Pengalaman Kerja)
  - 💼 Projects Section dengan featured & other projects
  - 📞 Contact Section dengan call-to-action
  - 🔗 Social Media Sidebar
  - 🧭 Navigation Bar yang sticky
- ✅ **SEO Optimized** - Meta tags dan Open Graph
- ✅ **Performance** - Static cache generation untuk optimasi

### Admin Dashboard
- ✅ **Edit Konten Tanpa Coding** - Interface user-friendly
- ✅ **Authentication** - Secure login system
- ✅ **Real-time Preview** - Lihat perubahan langsung
- ✅ **Manajemen Database** - Integrasi dengan Prisma ORM
- ✅ **Multi-role Support** - Ready untuk multiple users

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | CSS Modules, Global CSS |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | Prisma ORM (MySQL/PostgreSQL/SQLite) |
| **Authentication** | Custom Auth Implementation |
| **Build Tool** | webpack (integrated in Next.js) |
| **Linting** | ESLint |

---

## 📦 Instalasi

### Prerequisites
- **Node.js** 18 atau lebih tinggi
- **npm** atau **yarn**
- **Git**

### Step-by-Step Installation

1. **Clone Repository**
```bash
git clone https://github.com/aslamrosul/portofolio-nextjs.git
cd portofolio-nextjs
```

2. **Install Dependencies**
```bash
npm install
# atau dengan yarn
yarn install
```

3. **Setup Environment Variables**

Buat file `.env.local` di root directory dengan konfigurasi:

```env
# Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"
# atau untuk MySQL:
# DATABASE_URL="mysql://user:password@localhost:3306/portfolio"
# atau untuk SQLite:
# DATABASE_URL="file:./prisma/dev.db"

# Authentication (opsional)
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# API Configuration
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

4. **Setup Database dengan Prisma**

```bash
# Generate Prisma Client
npm run prisma:generate

# Push schema ke database (create tables)
npm run prisma:push

# (Opsional) Seed database dengan data awal
npm run prisma:seed

# (Opsional) Buka Prisma Studio UI
npm run prisma:studio
```

---

## 🚀 Menjalankan Aplikasi

### Development Mode
```bash
npm run dev
```
**Output:**
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Akses aplikasi di [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build   # Generate optimized build
npm start       # Start production server
```

### Code Linting
```bash
npm run lint
```

---

## 📁 Struktur Proyek

```
portofolio-nextjs/
├── src/
│   ├── components/                 # React Components
│   │   ├── About.tsx              # About section
│   │   ├── Contact.tsx            # Contact form section
│   │   ├── Experience.tsx         # Experience/Education section
│   │   ├── Footer.tsx             # Footer component
│   │   ├── Hero.tsx               # Hero/Landing section
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Projects.tsx           # Projects showcase section
│   │   └── SocialSidebar.tsx      # Social media links sidebar
│   │
│   ├── data/                       # Static Data & JSON
│   │   └── portfolio.json         # Main portfolio data (hero, about, projects, etc.)
│   │
│   ├── lib/                        # Utilities & Helpers
│   │   └── prisma.ts              # Prisma client singleton
│   │
│   ├── pages/                      # Next.js Pages & API Routes
│   │   ├── _app.tsx               # App wrapper & global setup
│   │   ├── _document.tsx          # HTML document structure
│   │   ├── index.tsx              # Home/Portfolio page
│   │   │
│   │   ├── admin/                 # Admin Dashboard Pages
│   │   │   ├── dashboard.tsx      # Main dashboard (edit content)
│   │   │   └── login.tsx          # Login page
│   │   │
│   │   └── api/                   # API Routes (Backend)
│   │       ├── auth.ts            # Authentication endpoints
│   │       ├── portfolio.ts       # Portfolio data endpoints
│   │       ├── hello.ts           # Example endpoint
│   │       └── ping.ts            # Health check endpoint
│   │
│   └── styles/                     # CSS Modules & Global Styles
│       ├── globals.css            # Global styles & CSS variables
│       ├── About.module.css
│       ├── Admin.module.css
│       ├── Contact.module.css
│       ├── Experience.module.css
│       ├── Footer.module.css
│       ├── Hero.module.css
│       ├── Home.module.css
│       ├── Navbar.module.css
│       ├── Projects.module.css
│       └── SocialSidebar.module.css
│
├── prisma/                         # Prisma Configuration
│   ├── schema.prisma              # Database schema definition
│   └── seed.ts                    # Database seeding script
│
├── scripts/                        # Utility Scripts
│   └── generate-cache.js          # Static cache generation script
│
├── public/                         # Static Assets
│   ├── portfolio-cache.json       # Generated cache file
│   ├── profil.jpg                 # Profile picture
│   ├── project1.jpg               # Project 1 image
│   ├── project2.jpg               # Project 2 image
│   └── ...                        # Other static files
│
├── .env.local                      # Environment variables (gitignored)
├── .gitignore
├── next.config.js                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies & scripts
├── prisma.json                    # Prisma configuration (auto-generated)
├── vercel.json                    # Vercel deployment config
├── CHANGELOG.md                   # Version history
└── README.md                      # This file
```

---

## 🗄️ Database & Prisma

### Setup Database

**Supported Databases:**
- PostgreSQL (Recommended)
- MySQL
- SQLite
- MongoDB
- SQL Server

**Configure DATABASE_URL di `.env.local`:**

```env
# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# MySQL
DATABASE_URL="mysql://user:password@localhost:3306/portfolio"

# SQLite
DATABASE_URL="file:./prisma/dev.db"
```

### Prisma Commands

```bash
# Generate Prisma Client (after schema changes)
npm run prisma:generate

# Create & run database migrations
npm run prisma:migrate

# Push schema to database (without migration)
npm run prisma:push

# Seed database dengan data awal
npm run prisma:seed

# Open interactive Prisma Studio UI
npm run prisma:studio
```

### Schema Location
Edit file `prisma/schema.prisma` untuk mengubah struktur database.

---

## 🔐 Admin Dashboard

### Akses Dashboard

1. **Development Mode**
   ```bash
   npm run dev
   ```

2. **Buka Admin**
   ```
   URL: http://localhost:3000/admin/login
   ```

3. **Default Credentials** (Ganti setelah setup!)
   ```
   Username: admin
   Password: admin123
   ```

4. **Dashboard Main**
   ```
   URL: http://localhost:3000/admin/dashboard
   ```

### Fitur Dashboard
- 📝 Edit Hero Section (nama, deskripsi, roles)
- 📄 Edit About Section
- 🎓 Manage Experience & Education
- 💼 Manage Projects (featured & other)
- 📞 Edit Contact Information
- 🔗 Update Social Media Links
- 👁️ Real-time Preview
- 💾 Auto-save ke Database

### Keamanan
⚠️ **PENTING:**
- ✅ Ganti username & password default SEBELUM deployment
- ✅ Gunakan HTTPS di production
- ✅ Set `NEXTAUTH_SECRET` dengan random string yang kuat
- ✅ Restrict akses admin API dengan authentication checks

---

## 🎨 Kustomisasi

### Edit Portfolio Data

**Option 1: Via JSON (Cepat)**
Edit `src/data/portfolio.json`:

```json
{
  "hero": {
    "name": "Nama Anda",
    "intro": "Halo, nama saya",
    "roles": ["Role 1", "Role 2", "Role 3"],
    "description": "Deskripsi singkat tentang Anda..."
  },
  "about": {
    "text": "Paragraf panjang tentang Anda...",
    "image": "/profil.jpg"
  },
  "experience": [
    {
      "id": 1,
      "period": "2023 - Sekarang",
      "institution": "Nama Institusi",
      "position": "Posisi Anda",
      "description": "Deskripsi pengalaman..."
    }
  ],
  "projects": {
    "featured": [...],
    "other": [...]
  },
  "contact": {
    "text": "...",
    "email": "your@email.com"
  },
  "social": {
    "github": "https://...",
    "linkedin": "https://...",
    ...
  }
}
```

**Option 2: Via Admin Dashboard (User-friendly)**
Gunakan interface di `/admin/dashboard` untuk edit konten tanpa membuka file.

### Mengganti Gambar

Letakkan gambar di folder `public/`:
```
public/
├── profil.jpg           # Foto profil (recommended: 300x300px)
├── project1.jpg         # Proyek 1 (recommended: 600x400px)
├── project2.jpg         # Proyek 2
└── [tambahan sesuai kebutuhan]
```

Update referensi di `portfolio.json`.

### Mengubah Theme Colors

Edit CSS variables di `src/styles/globals.css`:

```css
:root {
    --bg-dark: #0a192f;           /* Primary background */
    --bg-light: #112240;          /* Secondary background */
    --text-lightest: #ccd6f6;     /* Light text */
    --text-light: #a8b2d1;        /* Medium text */
    --text-dark: #8892b0;         /* Dark text */
    --accent: #64ffda;            /* Accent color (cyan/teal) */
    --accent-alt: #e74c3c;        /* Alternative accent (optional) */
}
```

### Menambah Section Baru

1. Buat component di `src/components/NewSection.tsx`
2. Import & tambahkan di `src/pages/index.tsx`
3. Tambahkan styling di `src/styles/NewSection.module.css`
4. (Opsional) Tambahkan data ke database/portfolio.json

---

## 🌐 Deployment

### Vercel (Recommended)

**Option A: UI Dashboard**
1. Push kode ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Click "New Project" → Select repository
4. Setup environment variables (DATABASE_URL, NEXTAUTH_SECRET, etc.)
5. Deploy!

**Option B: CLI**
```bash
npm install -g vercel
vercel
```

### Alternative Platforms

**Netlify**
```bash
npm run build
# Upload .next folder ke Netlify
```

**Self-Hosted (DigitalOcean, AWS, etc.)**
```bash
npm run build
npm start
```

Pastikan:
- ✅ Node.js environment tersedia
- ✅ Database URL dikonfigurasi
- ✅ Environment variables di set
- ✅ Port 3000 accessible

---

## 📚 Scripts Tersedia

### Development
```bash
npm run dev              # Start dev server (hot reload)
npm run lint            # Run ESLint
```

### Build & Production
```bash
npm run build           # Build untuk production
npm start              # Start production server
```

### Database & Prisma
```bash
npm run prisma:generate     # Generate Prisma Client
npm run prisma:migrate      # Create & run migrations
npm run prisma:push         # Push schema to DB
npm run prisma:seed         # Seed database
npm run prisma:studio       # Open Prisma Studio UI
```

### Cache
```bash
npm run generate-cache      # Generate static cache (portfolio-cache.json)
```

---

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan ikuti langkah berikut:

1. **Fork repository**
   ```bash
   git clone https://github.com/aslamrosul/portofolio-nextjs.git
   ```

2. **Buat branch fitur**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **Commit changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```

4. **Push ke branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **Buat Pull Request**
   - Jelaskan perubahan yang dibuat
   - Sertakan screenshot jika ada UI changes
   - Link ke issue yang related (jika ada)

---

## 📧 Kontak

**Aslam Rosul Ahmad**

| Platform | Link |
|----------|------|
| 📧 Email | [nvrsrndrmrx@gmail.com](mailto:nvrsrndrmrx@gmail.com) |
| 🐙 GitHub | [@aslamrosul](https://github.com/aslamrosul) |
| 💼 LinkedIn | [LinkedIn Profile](https://linkedin.com/in/aslamrosul) |
| 🔔 Instagram | [@username](https://instagram.com/username) |

**Status:** Sedang mencari internship di bidang **Web Development** atau **Cyber Security**

---

## 📄 Lisensi

Project ini open source dan tersedia di bawah [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by Aslam Rosul Ahmad**

Jika proyek ini membantu, mohon berikan ⭐ di GitHub!

</div>
```

## Lisensi

MIT License - Bebas digunakan untuk keperluan personal dan komersial.

## Kontak

- Email: nvrsrndrmrx@gmail.com
- GitHub: [@aslamrosul](https://github.com/aslamrosul)
- LinkedIn: [Aslam Rosul Ahmad](https://www.linkedin.com/in/aslamrosul/)
