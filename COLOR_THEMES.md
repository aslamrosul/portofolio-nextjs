# Color Themes

Berikut adalah beberapa tema warna yang bisa Anda gunakan untuk portfolio Anda.

## Cara Menggunakan

Edit file `src/styles/globals.css` dan ganti nilai `--accent`:

```css
:root {
    --accent: #64ffda;  /* Ganti dengan warna pilihan */
}
```

## Tema Warna

### 1. Cyber Green (Default)
```css
--accent: #64ffda;
```
- Tema: Tech, Security, Hacker
- Cocok untuk: Web Developer, Security Enthusiast
- Vibe: Modern, Professional, Tech-savvy

### 2. Electric Blue
```css
--accent: #00d4ff;
```
- Tema: Innovation, Technology
- Cocok untuk: Software Engineer, Data Scientist
- Vibe: Clean, Professional, Trustworthy

### 3. Neon Purple
```css
--accent: #a78bfa;
```
- Tema: Creative, Modern
- Cocok untuk: UI/UX Designer, Frontend Developer
- Vibe: Creative, Artistic, Modern

### 4. Hot Pink
```css
--accent: #f472b6;
```
- Tema: Bold, Creative
- Cocok untuk: Creative Developer, Designer
- Vibe: Bold, Energetic, Creative

### 5. Sunset Orange
```css
--accent: #fb923c;
```
- Tema: Warm, Friendly
- Cocok untuk: Full Stack Developer, Product Manager
- Vibe: Warm, Approachable, Energetic

### 6. Matrix Green
```css
--accent: #00ff41;
```
- Tema: Hacker, Matrix
- Cocok untuk: Cybersecurity, Ethical Hacker
- Vibe: Intense, Tech, Security-focused

### 7. Royal Purple
```css
--accent: #8b5cf6;
```
- Tema: Premium, Elegant
- Cocok untuk: Senior Developer, Tech Lead
- Vibe: Premium, Professional, Elegant

### 8. Mint Green
```css
--accent: #34d399;
```
- Tema: Fresh, Clean
- Cocok untuk: Mobile Developer, Startup
- Vibe: Fresh, Modern, Clean

### 9. Sky Blue
```css
--accent: #38bdf8;
```
- Tema: Calm, Professional
- Cocok untuk: Backend Developer, DevOps
- Vibe: Calm, Reliable, Professional

### 10. Coral Red
```css
--accent: #f87171;
```
- Tema: Bold, Passionate
- Cocok untuk: Game Developer, Creative Coder
- Vibe: Bold, Passionate, Energetic

## Kombinasi Warna Lanjutan

Jika ingin kustomisasi lebih lanjut, edit semua variabel warna:

### Dark Mode (Default)
```css
:root {
    --bg-dark: #0a192f;      /* Background utama */
    --bg-light: #112240;     /* Background card */
    --text-lightest: #ccd6f6; /* Text terang */
    --text-light: #a8b2d1;   /* Text medium */
    --text-dark: #8892b0;    /* Text gelap */
    --accent: #64ffda;       /* Warna aksen */
}
```

### Midnight Blue Theme
```css
:root {
    --bg-dark: #0f172a;
    --bg-light: #1e293b;
    --text-lightest: #f1f5f9;
    --text-light: #cbd5e1;
    --text-dark: #94a3b8;
    --accent: #38bdf8;
}
```

### Deep Purple Theme
```css
:root {
    --bg-dark: #1e1b4b;
    --bg-light: #312e81;
    --text-lightest: #e0e7ff;
    --text-light: #c7d2fe;
    --text-dark: #a5b4fc;
    --accent: #a78bfa;
}
```

### Forest Green Theme
```css
:root {
    --bg-dark: #064e3b;
    --bg-light: #065f46;
    --text-lightest: #d1fae5;
    --text-light: #a7f3d0;
    --text-dark: #6ee7b7;
    --accent: #34d399;
}
```

## Tips Memilih Warna

1. **Sesuaikan dengan Personal Brand**
   - Tech/Security → Green/Blue
   - Creative → Purple/Pink
   - Professional → Blue/Gray

2. **Kontras yang Baik**
   - Pastikan warna aksen kontras dengan background
   - Test di berbagai device

3. **Konsistensi**
   - Gunakan 1 warna aksen utama
   - Jangan terlalu banyak warna

4. **Accessibility**
   - Pastikan text readable
   - Test dengan color blindness simulator

## Tools untuk Memilih Warna

- [Coolors.co](https://coolors.co/) - Color palette generator
- [Adobe Color](https://color.adobe.com/) - Color wheel
- [Paletton](https://paletton.com/) - Color scheme designer
- [ColorHunt](https://colorhunt.co/) - Color palettes

## Preview Warna

Untuk preview warna sebelum apply:
1. Buka browser DevTools (F12)
2. Inspect element dengan warna aksen
3. Edit CSS variable langsung di DevTools
4. Jika cocok, copy ke `globals.css`

---

Selamat bereksperimen dengan warna! 🎨
