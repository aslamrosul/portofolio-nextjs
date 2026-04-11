# Database Quick Start

Setup PostgreSQL database dalam 5 langkah mudah!

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Push Schema ke Database
```bash
npx prisma db push
```

### 4. Seed Data dari JSON
```bash
npm run prisma:seed
```

### 5. Verify Data
```bash
npm run prisma:studio
```

Buka http://localhost:5555 untuk melihat data.

## ✅ Done!

Sekarang database sudah siap. Jalankan:

```bash
npm run dev
```

Buka http://localhost:3000 - Data sekarang dari PostgreSQL!

## 🎯 Test Admin Dashboard

1. Buka http://localhost:3000/admin/login
2. Login (admin/admin123)
3. Edit konten
4. Save - Data tersimpan di PostgreSQL!

## 📊 View Database

```bash
npm run prisma:studio
```

## 🔄 Reset Database

Jika perlu reset:

```bash
npx prisma db push --force-reset
npm run prisma:seed
```

## 📚 Full Guide

Baca [DATABASE_SETUP.md](./DATABASE_SETUP.md) untuk panduan lengkap.

---

That's it! 🎉
