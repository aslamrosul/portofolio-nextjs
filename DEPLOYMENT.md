# Deployment Guide

Panduan lengkap untuk deploy portfolio Next.js Anda ke berbagai platform.

## 🚀 Platform Deployment

### 1. Vercel (Recommended) ⭐

Vercel adalah platform terbaik untuk Next.js karena dibuat oleh tim yang sama.

#### Cara Deploy:

**A. Via GitHub (Recommended)**
1. Push code ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

2. Buka [vercel.com](https://vercel.com)
3. Sign in dengan GitHub
4. Click "New Project"
5. Import repository Anda
6. Vercel akan auto-detect Next.js
7. Click "Deploy"
8. Done! 🎉

**B. Via Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Custom Domain
1. Buka project di Vercel dashboard
2. Settings → Domains
3. Add domain Anda
4. Update DNS records sesuai instruksi

#### Environment Variables
1. Settings → Environment Variables
2. Add variables jika diperlukan
3. Redeploy

---

### 2. Netlify

#### Cara Deploy:

**A. Via Netlify UI**
1. Build project:
```bash
npm run build
```

2. Buka [netlify.com](https://netlify.com)
3. Drag & drop folder project
4. Done!

**B. Via GitHub**
1. Push ke GitHub
2. New site from Git
3. Connect repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Deploy

**C. Via Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

### 3. GitHub Pages

⚠️ GitHub Pages tidak support server-side rendering. Gunakan static export.

#### Setup:

1. Edit `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-name', // Ganti dengan nama repo
}

module.exports = nextConfig
```

2. Build:
```bash
npm run build
```

3. Deploy:
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d out"

# Deploy
npm run deploy
```

---

### 4. Railway

#### Cara Deploy:

1. Buka [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select repository
4. Railway auto-detect Next.js
5. Deploy

#### Custom Domain:
1. Settings → Domains
2. Add custom domain
3. Update DNS

---

### 5. Render

#### Cara Deploy:

1. Buka [render.com](https://render.com)
2. New → Web Service
3. Connect GitHub repository
4. Settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
5. Create Web Service

---

### 6. AWS Amplify

#### Cara Deploy:

1. Buka [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Connect app → GitHub
3. Select repository
4. Build settings (auto-detected)
5. Save and deploy

---

### 7. DigitalOcean App Platform

#### Cara Deploy:

1. Buka [DigitalOcean](https://cloud.digitalocean.com/apps)
2. Create App → GitHub
3. Select repository
4. Configure:
   - Build Command: `npm run build`
   - Run Command: `npm start`
5. Deploy

---

## 📋 Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] `npm run build` berhasil tanpa error
- [ ] Semua images ada di folder `public/`
- [ ] File `cv.pdf` sudah ditambahkan
- [ ] Semua link sudah diupdate
- [ ] Test responsive design
- [ ] Test semua animasi berfungsi
- [ ] Update meta tags untuk SEO
- [ ] Remove console.logs
- [ ] Test di berbagai browser

## 🔧 Build Commands

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

### Export Static (untuk GitHub Pages)
```bash
npm run build
# Output di folder .next atau out
```

## 🌐 Custom Domain Setup

### Vercel
1. Vercel Dashboard → Settings → Domains
2. Add domain
3. Update DNS:
   - Type: A
   - Name: @
   - Value: 76.76.21.21
   
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### Netlify
1. Netlify Dashboard → Domain settings
2. Add custom domain
3. Update DNS:
   - Type: A
   - Name: @
   - Value: 75.2.60.5
   
   - Type: CNAME
   - Name: www
   - Value: [your-site].netlify.app

## 🔒 HTTPS

Semua platform modern (Vercel, Netlify, dll) otomatis provide HTTPS gratis via Let's Encrypt.

## 📊 Performance Optimization

### Before Deploy:

1. **Optimize Images**
```bash
# Use tools like:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
```

2. **Check Bundle Size**
```bash
npm run build
# Check output size
```

3. **Lighthouse Score**
- Open Chrome DevTools
- Run Lighthouse audit
- Fix issues

### After Deploy:

1. **Monitor Performance**
   - Vercel Analytics
   - Google Analytics
   - Lighthouse CI

2. **CDN**
   - Vercel/Netlify automatically use CDN
   - Images served from edge

## 🐛 Common Issues

### Build Fails

**Error: Module not found**
```bash
# Solution:
npm install
npm run build
```

**Error: Out of memory**
```bash
# Solution:
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Images Not Loading

**Issue: Images 404**
- Check images are in `public/` folder
- Path must start with `/`
- Restart dev server

### Slow Build Time

**Solution:**
- Remove unused dependencies
- Optimize images before upload
- Use Vercel/Netlify caching

## 📈 Post-Deployment

### 1. Setup Analytics
```tsx
// Add to _app.tsx or _document.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### 2. Setup SEO
- Submit sitemap to Google Search Console
- Add robots.txt
- Add sitemap.xml

### 3. Monitor
- Setup uptime monitoring
- Check error logs
- Monitor performance

## 🎯 Recommended: Vercel

Untuk Next.js, Vercel adalah pilihan terbaik karena:
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Instant rollbacks
- ✅ Preview deployments
- ✅ Analytics built-in
- ✅ Free tier generous

## 📞 Support

Jika ada masalah saat deployment:
- Vercel: [vercel.com/support](https://vercel.com/support)
- Netlify: [netlify.com/support](https://netlify.com/support)
- Email: nvrsrndrmrx@gmail.com

---

Selamat deploy! 🚀
