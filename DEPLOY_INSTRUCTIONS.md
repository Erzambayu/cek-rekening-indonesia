# 🚀 Instruksi Deploy GitHub Pages

## Masalah: Website Blank Putih di GitHub Pages

Jika website menampilkan blank putih di GitHub Pages, ikuti langkah-langkah berikut:

### 1. Enable GitHub Pages

1. Pergi ke repository GitHub: https://github.com/Erzambayu/cek-rekening-indonesia
2. Klik **Settings** (tab paling kanan)
3. Scroll ke bawah hingga menemukan **Pages** di sidebar kiri
4. Di **Source**, pilih **GitHub Actions** (bukan Deploy from a branch)

### 2. Commit dan Push File yang Diperbaiki

Pastikan semua file sudah ter-commit dan ter-push ke repository:

```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

### 3. Trigger GitHub Actions

1. Pergi ke tab **Actions** di repository GitHub
2. Jika ada workflow yang failed, klik **Re-run failed jobs**
3. Atau push commit baru untuk trigger workflow baru

### 4. Verifikasi Deployment

1. Setelah workflow selesai (hijau ✅), klik pada deployment
2. URL website akan tersedia: `https://erzambayu.github.io/cek-rekening-indonesia/`

### 5. Alternative: Manual Upload Dist Folder

Jika GitHub Actions masih bermasalah:

1. Build project secara lokal:
```bash
npm run build
```

2. Upload semua isi folder `dist/` ke branch `gh-pages`:
```bash
# Buat branch gh-pages
git checkout --orphan gh-pages
git rm -rf .
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. Di Settings > Pages, pilih source: `Deploy from a branch` > `gh-pages` > `/ (root)`

### 6. Troubleshooting

**Jika masih blank:**

1. Check console browser (F12) untuk error JavaScript
2. Pastikan file `index.html` ada di root folder yang di-deploy
3. Cek apakah assets (CSS, JS) ter-load dengan benar
4. Tunggu 5-10 menit untuk propagasi GitHub Pages

**File-file penting yang harus ada:**
- ✅ `dist/index.html` (entry point)
- ✅ `dist/assets/` (CSS & JS files)
- ✅ `.github/workflows/deploy.yml` (GitHub Actions)
- ✅ `public/404.html` (SPA routing)

### 7. Verifikasi URL

Website seharusnya accessible di:
- https://erzambayu.github.io/cek-rekening-indonesia/
- https://erzambayu.me/cek-rekening-indonesia/ (jika custom domain sudah disetup)

---

Jika masih ada masalah, cek logs di GitHub Actions untuk error messages. 