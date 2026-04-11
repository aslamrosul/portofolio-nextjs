# SEO Guide untuk Portfolio Next.js

Panduan lengkap untuk optimasi SEO portfolio Anda.

## 🎯 Basic SEO (Sudah Diimplementasi)

### 1. Meta Tags
File: `src/pages/index.tsx`

```tsx
<Head>
  <title>Aslam Rosul Ahmad - Web Developer & Security Enthusiast</title>
  <meta name="description" content="Portfolio Aslam Rosul Ahmad..." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
```

### 2. Semantic HTML
- ✅ Proper heading hierarchy (h1, h2, h3)
- ✅ Semantic tags (header, main, section, footer)
- ✅ Alt text untuk images

### 3. Performance
- ✅ Next.js Image optimization
- ✅ Code splitting
- ✅ Lazy loading

## 🚀 Advanced SEO (Recommended)

### 1. Open Graph Tags

Edit `src/pages/index.tsx`, tambahkan:

```tsx
<Head>
  {/* Basic Meta Tags */}
  <title>Aslam Rosul Ahmad - Web Developer & Security Enthusiast</title>
  <meta name="description" content="Portfolio Aslam Rosul Ahmad - Web Developer, Security Enthusiast, Data Analyst" />
  
  {/* Open Graph / Facebook */}
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/" />
  <meta property="og:title" content="Aslam Rosul Ahmad - Web Developer" />
  <meta property="og:description" content="Portfolio Aslam Rosul Ahmad - Web Developer, Security Enthusiast" />
  <meta property="og:image" content="https://yourwebsite.com/og-image.jpg" />
  
  {/* Twitter */}
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourwebsite.com/" />
  <meta property="twitter:title" content="Aslam Rosul Ahmad - Web Developer" />
  <meta property="twitter:description" content="Portfolio Aslam Rosul Ahmad" />
  <meta property="twitter:image" content="https://yourwebsite.com/og-image.jpg" />
  
  {/* Additional Meta Tags */}
  <meta name="keywords" content="web developer, security enthusiast, data analyst, portfolio" />
  <meta name="author" content="Aslam Rosul Ahmad" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://yourwebsite.com/" />
</Head>
```

### 2. Structured Data (JSON-LD)

Tambahkan di `src/pages/_document.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Aslam Rosul Ahmad",
      "url": "https://yourwebsite.com",
      "image": "https://yourwebsite.com/profil.jpg",
      "jobTitle": "Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Politeknik Negeri Malang"
      },
      "sameAs": [
        "https://github.com/aslamrosul",
        "https://linkedin.com/in/aslamrosul"
      ]
    })
  }}
/>
```

### 3. Sitemap

Buat file `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### 4. Robots.txt

Buat file `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://yourwebsite.com/sitemap.xml
```

### 5. Favicon & Icons

Tambahkan di `public/`:
- `favicon.ico` (16x16, 32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Update `src/pages/index.tsx`:

```tsx
<Head>
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
</Head>
```

## 📊 SEO Checklist

### Content
- [ ] Unique, descriptive title (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] H1 tag (only one per page)
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Alt text untuk semua images
- [ ] Internal links
- [ ] External links (open in new tab)

### Technical
- [ ] Mobile responsive
- [ ] Fast loading time (< 3s)
- [ ] HTTPS enabled
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Canonical URL
- [ ] Structured data (JSON-LD)
- [ ] Open Graph tags
- [ ] Twitter Card tags

### Performance
- [ ] Optimize images (WebP format)
- [ ] Minify CSS/JS
- [ ] Enable compression
- [ ] Use CDN
- [ ] Lazy loading images
- [ ] Preload critical resources

### Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Color contrast
- [ ] Focus indicators

## 🔍 SEO Tools

### Testing
1. **Google Search Console**
   - Submit sitemap
   - Check indexing status
   - Monitor search performance

2. **Google PageSpeed Insights**
   - Test performance
   - Get optimization suggestions
   - https://pagespeed.web.dev/

3. **Lighthouse (Chrome DevTools)**
   - SEO audit
   - Performance audit
   - Accessibility audit

4. **Meta Tags Checker**
   - https://metatags.io/
   - Preview Open Graph tags

5. **Structured Data Testing Tool**
   - https://search.google.com/test/rich-results
   - Validate JSON-LD

### Monitoring
1. **Google Analytics**
   - Track visitors
   - Monitor behavior
   - Analyze traffic sources

2. **Google Search Console**
   - Monitor search performance
   - Check indexing issues
   - Submit sitemap

3. **Bing Webmaster Tools**
   - Submit to Bing
   - Monitor Bing search

## 📈 Optimization Tips

### 1. Content Optimization
```
✅ DO:
- Write unique, valuable content
- Use keywords naturally
- Update content regularly
- Add portfolio projects
- Write detailed project descriptions

❌ DON'T:
- Keyword stuffing
- Duplicate content
- Thin content
- Hidden text
```

### 2. Image Optimization
```bash
# Optimize images before upload
- Use WebP format
- Compress images (TinyPNG, Squoosh)
- Proper dimensions
- Descriptive filenames
- Alt text
```

### 3. Performance Optimization
```
- Minimize HTTP requests
- Enable compression
- Use CDN (Vercel/Netlify auto)
- Lazy load images
- Preload critical resources
- Minimize CSS/JS
```

### 4. Mobile Optimization
```
- Responsive design ✅
- Touch-friendly buttons
- Readable font sizes
- No horizontal scroll
- Fast mobile loading
```

## 🎯 Keywords Strategy

### Primary Keywords
- Your Name
- Web Developer
- Portfolio
- [Your City/Country]

### Secondary Keywords
- Security Enthusiast
- Data Analyst
- Full Stack Developer
- [Specific Technologies]

### Long-tail Keywords
- "Web Developer Portfolio Indonesia"
- "Security Enthusiast Portfolio"
- "Full Stack Developer Malang"

## 📱 Social Media Integration

### 1. Share Buttons
Tambahkan share buttons untuk:
- LinkedIn
- Twitter
- Facebook
- WhatsApp

### 2. Social Proof
- GitHub stars
- LinkedIn connections
- Project views
- Testimonials

## 🔗 Link Building

### Internal Links
- Link antar sections
- Link ke projects
- Link ke contact

### External Links
- GitHub profile
- LinkedIn profile
- Project demos
- Blog posts (if any)

## 📊 Analytics Setup

### Google Analytics

1. Buat account di [analytics.google.com](https://analytics.google.com)

2. Tambahkan di `src/pages/_document.tsx`:

```tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `,
  }}
/>
```

## 🎯 Post-Launch SEO

### Week 1
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Setup Google Analytics
- [ ] Test all meta tags
- [ ] Check mobile responsiveness

### Week 2-4
- [ ] Monitor indexing status
- [ ] Check for crawl errors
- [ ] Analyze initial traffic
- [ ] Fix any issues

### Monthly
- [ ] Update content
- [ ] Add new projects
- [ ] Check performance
- [ ] Monitor rankings
- [ ] Analyze traffic sources

## 📞 Resources

### Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Meta Tags](https://metatags.io/)

### Learning
- [Google SEO Guide](https://developers.google.com/search/docs)
- [Moz Beginner's Guide](https://moz.com/beginners-guide-to-seo)
- [Ahrefs Blog](https://ahrefs.com/blog/)

---

Good luck with your SEO! 🚀
