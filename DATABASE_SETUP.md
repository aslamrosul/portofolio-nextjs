# Database Setup Guide - PostgreSQL dengan Prisma & Supabase

Panduan lengkap untuk setup database PostgreSQL menggunakan Prisma dan Supabase.

## 🎯 Yang Sudah Disiapkan

- ✅ Prisma schema lengkap
- ✅ Seed script untuk migrasi data dari JSON
- ✅ API routes yang sudah terintegrasi dengan Prisma
- ✅ Prisma client library

## 📋 Prerequisites

- Node.js terinstall
- Akun Supabase (sudah ada)
- Connection string PostgreSQL (sudah ada di .env)

## 🚀 Setup Steps

### 1. Install Dependencies

```bash
npm install
```

Ini akan install:
- `@prisma/client` - Prisma client
- `prisma` - Prisma CLI
- `tsx` - TypeScript executor untuk seed script

### 2. Generate Prisma Client

```bash
npm run prisma:generate
```

Atau:
```bash
npx prisma generate
```

### 3. Push Schema ke Database

**Option A: Push (Recommended untuk development)**
```bash
npm run prisma:push
```

Atau:
```bash
npx prisma db push
```

**Option B: Migrate (Recommended untuk production)**
```bash
npm run prisma:migrate
```

Atau:
```bash
npx prisma migrate dev --name init
```

### 4. Seed Database

Migrasi data dari JSON ke PostgreSQL:

```bash
npm run prisma:seed
```

Atau:
```bash
npx prisma db seed
```

### 5. Verify Data

Buka Prisma Studio untuk melihat data:

```bash
npm run prisma:studio
```

Atau:
```bash
npx prisma studio
```

Akan membuka browser di http://localhost:5555

## 📊 Database Schema

### Tables

1. **Hero** - Hero section data
   - id, intro, name, description
   - Relations: roles (one-to-many)

2. **Role** - Typing animation roles
   - id, text, order, heroId

3. **About** - About section
   - id, text, image

4. **Experience** - Education & experience
   - id, period, institution, position, description, order

5. **FeaturedProject** - Featured projects
   - id, label, title, description, technologies[], github, demo, image, order

6. **OtherProject** - Other projects
   - id, title, description, technologies[], github, order

7. **Contact** - Contact info
   - id, text, email

8. **Social** - Social media links
   - id, github, linkedin, email

9. **Settings** - Site settings
   - id, cvUrl, accentColor

## 🔄 Workflow

### Development
```bash
# 1. Make changes to schema.prisma
# 2. Push changes to database
npm run prisma:push

# 3. Generate new client
npm run prisma:generate

# 4. Restart dev server
npm run dev
```

### Production
```bash
# 1. Run migrations
npm run prisma:migrate

# 2. Generate client
npm run prisma:generate

# 3. Build
npm run build
```

## 📝 Common Commands

### Prisma Commands
```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database (no migration files)
npx prisma db push

# Create migration
npx prisma migrate dev --name migration_name

# Run migrations
npx prisma migrate deploy

# Seed database
npx prisma db seed

# Open Prisma Studio
npx prisma studio

# Reset database (⚠️ deletes all data)
npx prisma migrate reset

# Format schema file
npx prisma format
```

### Database Commands
```bash
# View database
npm run prisma:studio

# Seed from JSON
npm run prisma:seed

# Push schema
npm run prisma:push

# Create migration
npm run prisma:migrate
```

## 🔧 Troubleshooting

### Error: Can't reach database server

**Fix:**
1. Check .env file
2. Verify DATABASE_URL is correct
3. Check Supabase project is running
4. Test connection:
```bash
npx prisma db pull
```

### Error: Schema not in sync

**Fix:**
```bash
npx prisma db push --force-reset
npm run prisma:seed
```

### Error: Prisma Client not generated

**Fix:**
```bash
npx prisma generate
```

### Error: Migration failed

**Fix:**
```bash
# Reset and start fresh
npx prisma migrate reset
npx prisma migrate dev --name init
npm run prisma:seed
```

## 🔒 Environment Variables

File: `.env`

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

**Supabase Format:**
```env
DATABASE_URL="postgresql://postgres:YOUR_PASSWORD@db.PROJECT_REF.supabase.co:5432/postgres"
```

⚠️ **IMPORTANT**: 
- Jangan commit .env ke Git
- .env sudah ada di .gitignore

## 📊 Data Migration

### From JSON to PostgreSQL

Data akan otomatis dimigrasikan dari `src/data/portfolio.json` ke PostgreSQL saat menjalankan seed:

```bash
npm run prisma:seed
```

### Backup Data

**Export dari database:**
```bash
# Using Prisma Studio
npm run prisma:studio
# Export manually

# Or using pg_dump (if you have PostgreSQL client)
pg_dump DATABASE_URL > backup.sql
```

**Import to database:**
```bash
psql DATABASE_URL < backup.sql
```

## 🎯 Next Steps

1. ✅ Setup database (you're here)
2. ✅ Run migrations
3. ✅ Seed data
4. ✅ Test API endpoints
5. ✅ Test admin dashboard
6. ✅ Deploy

## 📚 Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Supabase Docs](https://supabase.com/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)

## 🐛 Common Issues

### Issue: "Table already exists"

**Solution:**
```bash
npx prisma db push --force-reset
npm run prisma:seed
```

### Issue: "Cannot find module '@prisma/client'"

**Solution:**
```bash
npm install @prisma/client
npx prisma generate
```

### Issue: "Seed script not running"

**Solution:**
```bash
npm install tsx --save-dev
npm run prisma:seed
```

## 📞 Support

Jika ada masalah:
1. Check error message
2. Check .env file
3. Check Supabase dashboard
4. Check Prisma Studio
5. Contact: nvrsrndrmrx@gmail.com

---

Happy coding with PostgreSQL! 🚀
