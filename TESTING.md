# Testing Guide

Panduan untuk testing portfolio Next.js Anda sebelum deploy.

## 🧪 Testing Checklist

### 1. Functionality Testing

#### Navigation
- [ ] Navbar links berfungsi (scroll to section)
- [ ] Logo link ke home
- [ ] Download CV button berfungsi
- [ ] Social media links berfungsi
- [ ] Project links berfungsi
- [ ] Email link berfungsi

#### Animations
- [ ] Typing animation di Hero section
- [ ] Fade-in animation saat scroll
- [ ] Glitch effect pada hover hero title
- [ ] Scanline effect terlihat
- [ ] Navbar hide saat scroll down
- [ ] Navbar show saat scroll up
- [ ] Hover effects pada buttons
- [ ] Hover effects pada project cards
- [ ] Hover effects pada social icons

#### Images
- [ ] Foto profil muncul
- [ ] Project screenshots muncul
- [ ] Images lazy load
- [ ] Images responsive
- [ ] Alt text ada

### 2. Responsive Testing

#### Mobile (< 768px)
- [ ] Layout mobile-friendly
- [ ] Text readable
- [ ] Buttons touch-friendly
- [ ] Images scaled properly
- [ ] Navbar simplified
- [ ] Social sidebar hidden
- [ ] No horizontal scroll
- [ ] Font size appropriate

#### Tablet (768px - 1080px)
- [ ] Layout adjusted
- [ ] Images scaled
- [ ] Spacing appropriate
- [ ] Social sidebar hidden

#### Desktop (> 1080px)
- [ ] Full layout visible
- [ ] Social sidebar visible
- [ ] Proper spacing
- [ ] Images full size

### 3. Browser Testing

Test di berbagai browser:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 4. Performance Testing

#### Lighthouse Audit
```bash
# Run in Chrome DevTools
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Generate report
```

Target scores:
- [ ] Performance: > 90
- [ ] Accessibility: > 90
- [ ] Best Practices: > 90
- [ ] SEO: > 90

#### PageSpeed Insights
Test di: https://pagespeed.web.dev/

Target:
- [ ] Mobile score > 80
- [ ] Desktop score > 90
- [ ] First Contentful Paint < 1.8s
- [ ] Largest Contentful Paint < 2.5s
- [ ] Cumulative Layout Shift < 0.1

### 5. SEO Testing

#### Meta Tags
- [ ] Title tag ada (50-60 chars)
- [ ] Meta description ada (150-160 chars)
- [ ] Open Graph tags ada
- [ ] Twitter Card tags ada
- [ ] Canonical URL ada

#### Content
- [ ] H1 tag (only one)
- [ ] Proper heading hierarchy
- [ ] Alt text untuk images
- [ ] Internal links
- [ ] External links (rel="noopener noreferrer")

#### Technical
- [ ] Sitemap.xml ada
- [ ] Robots.txt ada
- [ ] Favicon ada
- [ ] Mobile-friendly
- [ ] HTTPS (after deploy)

### 6. Accessibility Testing

#### Keyboard Navigation
- [ ] Tab navigation works
- [ ] Focus indicators visible
- [ ] Skip to content link
- [ ] All interactive elements accessible

#### Screen Reader
- [ ] Alt text descriptive
- [ ] ARIA labels ada
- [ ] Semantic HTML
- [ ] Proper heading structure

#### Color Contrast
Test di: https://webaim.org/resources/contrastchecker/
- [ ] Text contrast ratio > 4.5:1
- [ ] Large text contrast > 3:1

### 7. Content Testing

#### Text
- [ ] No typos
- [ ] Grammar correct
- [ ] Information accurate
- [ ] Links updated
- [ ] Contact info correct

#### Images
- [ ] High quality
- [ ] Proper dimensions
- [ ] Optimized size
- [ ] Relevant to content

#### Projects
- [ ] Descriptions accurate
- [ ] Links working
- [ ] Technologies listed
- [ ] Screenshots clear

## 🔧 Testing Tools

### Browser DevTools
```
Chrome DevTools (F12):
- Elements: Inspect HTML/CSS
- Console: Check errors
- Network: Check loading
- Lighthouse: Performance audit
- Device toolbar: Test responsive
```

### Online Tools

#### Performance
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

#### SEO
- [Google Search Console](https://search.google.com/search-console)
- [Meta Tags Checker](https://metatags.io/)
- [Structured Data Testing](https://search.google.com/test/rich-results)

#### Accessibility
- [WAVE](https://wave.webaim.org/)
- [aXe DevTools](https://www.deque.com/axe/devtools/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)

#### Responsive
- [Responsive Design Checker](https://responsivedesignchecker.com/)
- [BrowserStack](https://www.browserstack.com/)
- Chrome DevTools Device Mode

#### Validation
- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

## 🐛 Common Issues & Fixes

### Issue: Images not loading
```
✅ Fix:
- Check path starts with /
- Check file exists in public/
- Check filename case-sensitive
- Restart dev server
```

### Issue: Animations not working
```
✅ Fix:
- Check JavaScript loaded
- Check Typed.js loaded
- Check console for errors
- Clear browser cache
```

### Issue: Navbar not hiding
```
✅ Fix:
- Check scroll event listener
- Check navbar class
- Check CSS transition
- Test in different browser
```

### Issue: Responsive not working
```
✅ Fix:
- Check viewport meta tag
- Check CSS media queries
- Test in real device
- Check browser zoom level
```

### Issue: Slow loading
```
✅ Fix:
- Optimize images
- Check bundle size
- Enable compression
- Use CDN
- Lazy load images
```

## 📱 Device Testing

### Recommended Devices

#### Mobile
- iPhone 12/13/14 (iOS)
- Samsung Galaxy S21/S22 (Android)
- iPhone SE (small screen)
- iPad (tablet)

#### Desktop
- 1920x1080 (Full HD)
- 1366x768 (Laptop)
- 2560x1440 (2K)
- 3840x2160 (4K)

### Testing in Chrome DevTools

```
1. Open DevTools (F12)
2. Click device toolbar icon (Ctrl+Shift+M)
3. Select device from dropdown
4. Test different devices
5. Test landscape/portrait
```

## 🎯 Pre-Deploy Testing

### Final Checklist

#### Build Test
```bash
npm run build
```
- [ ] Build successful
- [ ] No errors
- [ ] No warnings (critical)

#### Production Test
```bash
npm run build
npm start
```
- [ ] App runs in production mode
- [ ] All features work
- [ ] Performance good

#### Content Review
- [ ] All personal info updated
- [ ] All links working
- [ ] All images showing
- [ ] CV file added
- [ ] Contact info correct

#### Technical Review
- [ ] Meta tags updated
- [ ] Favicon added
- [ ] Sitemap created
- [ ] Robots.txt created
- [ ] Analytics setup (optional)

## 📊 Testing Report Template

```markdown
# Testing Report

## Date: [Date]
## Tester: [Name]

### Functionality
- Navigation: ✅/❌
- Animations: ✅/❌
- Links: ✅/❌
- Forms: ✅/❌

### Responsive
- Mobile: ✅/❌
- Tablet: ✅/❌
- Desktop: ✅/❌

### Performance
- Lighthouse Score: [Score]
- PageSpeed Mobile: [Score]
- PageSpeed Desktop: [Score]

### SEO
- Meta Tags: ✅/❌
- Sitemap: ✅/❌
- Robots.txt: ✅/❌

### Accessibility
- Keyboard Nav: ✅/❌
- Screen Reader: ✅/❌
- Color Contrast: ✅/❌

### Issues Found
1. [Issue description]
2. [Issue description]

### Recommendations
1. [Recommendation]
2. [Recommendation]
```

## 🚀 Automated Testing (Optional)

### Setup Jest (Unit Testing)
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### Setup Cypress (E2E Testing)
```bash
npm install --save-dev cypress
```

### Setup Playwright (E2E Testing)
```bash
npm install --save-dev @playwright/test
```

## 📞 Support

Jika menemukan bug atau issue:
1. Check console for errors
2. Check network tab
3. Try different browser
4. Clear cache
5. Contact: nvrsrndrmrx@gmail.com

---

Happy testing! 🧪
