# 🏦 Cek Rekening Indonesia

Website modern untuk mengecek nama pemilik rekening bank di Indonesia secara gratis dan mudah.

![Cek Rekening Indonesia](https://via.placeholder.com/800x400/3b82f6/ffffff?text=Cek+Rekening+Indonesia)

> 🚀 **Latest Deployment**: December 2024 - API error handling improved for GitHub Pages

## ✨ Fitur

- 🆓 **100% Gratis** - Tidak ada biaya tersembunyi
- ⚡ **Cepat & Akurat** - Hasil dalam hitungan detik
- 🏦 **Semua Bank** - Mendukung 100+ bank dan e-wallet Indonesia
- 📱 **Responsive** - Tampilan optimal di semua perangkat
- 🎨 **Modern UI/UX** - Interface yang bersih dan intuitif
- 🔒 **Aman** - Tidak menyimpan data pribadi
- 🧪 **Demo Mode** - Mode demo untuk testing di localhost

## 🏦 Bank yang Didukung

Semua bank besar dan e-wallet populer di Indonesia:
- Bank Mandiri, BNI, BRI, BCA
- Bank Danamon, BTPN, BTN, CIMB
- Bank Syariah Indonesia, Bank Muamalat
- Bank Daerah (Jabar, DKI, Jateng, Jatim, dll)
- E-wallet: GoPay, OVO, DANA, ShopeePay, LinkAja
- Dan masih banyak lagi...

## 🚀 Demo

Kunjungi: [https://erzambayu.github.io/cek-rekening-indonesia/](https://erzambayu.github.io/cek-rekening-indonesia/)

## 🛠️ Teknologi

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: [CekRekening API](https://documenter.getpostman.com/view/31839079/2sAYQgi8yL)
- **Deployment**: GitHub Pages

## 📁 Struktur Proyek

```
src/
├── components/
│   ├── Header.tsx          # Header dengan fitur utama
│   ├── CheckForm.tsx       # Form input bank dan nomor rekening
│   └── Footer.tsx          # Footer dengan kredit dan disclaimer
├── hooks/
│   └── useCheckAccount.ts  # Custom hook untuk API call
├── types/
│   └── index.ts           # Type definitions
├── utils/
│   └── cn.ts              # Utility untuk class names
├── App.tsx                # Komponen utama
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone https://github.com/YOUR_USERNAME/cek-rekening-indonesia.git
cd cek-rekening-indonesia
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka browser di `http://localhost:3000`

### 🧪 Testing di Localhost

**CORS Issue**: Karena browser security policy, API tidak dapat diakses langsung dari localhost. Website menyediakan:

1. **Mode Demo**: Klik tombol "Coba Mode Demo" untuk melihat data simulasi
2. **Production Ready**: API berfungsi normal setelah di-deploy ke GitHub Pages
3. **Error Handling**: Pesan error yang informatif untuk debugging

### Build untuk Production

```bash
npm run build
```

### Deploy ke GitHub Pages

```bash
npm run deploy
```

## 📋 API Documentation

Website ini menggunakan API dari [CekRekening](https://documenter.getpostman.com/view/31839079/2sAYQgi8yL).

### Endpoint

```
POST https://cekrekening.my.id/api/check
```

### Request Body

```json
{
  "bank_code": "014",
  "account_number": "1234567890"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "account_number": "1234567890",
    "account_name": "JOHN DOE",
    "bank_code": "014",
    "bank_name": "Bank BCA"
  }
}
```

### Error Handling

Website menangani berbagai macam error:
- **Network Error**: Koneksi internet bermasalah
- **CORS Error**: Tidak dapat diakses dari localhost (gunakan demo mode)
- **API Error**: Server error, rate limiting, dll
- **Validation Error**: Data input tidak valid

## 🧪 Demo Mode

Untuk testing di localhost, website menyediakan mode demo yang mensimulasikan response API dengan data dummy. Mode ini berguna untuk:

- ✅ Testing UI/UX tanpa koneksi API
- ✅ Presentasi fitur website
- ✅ Development dan debugging
- ✅ Preview sebelum deploy

Data demo menggunakan nama-nama Indonesia yang umum dan format response yang sama dengan API asli.

## ⚠️ Disclaimer

Cek Nama Rekening bersifat gratis, API dapat digunakan oleh siapapun dan dimanapun tanpa dipungut biaya apapun. Beberapa bank/e-wallet mungkin tidak dapat digunakan karena beberapa alasan. Kami tidak bertanggung jawab atas kerugian yang ditimbulkan oleh penggunaan software ini.

## 🙏 Credits

### Original Project & API

- [@heirro](https://github.com/heirro)
- [@vavaheirro-impact360](https://github.com/vavaheirro-impact360)
- [@savioruz](https://github.com/savioruz)

### UI/UX Redesign

- **Erzam Bayu** - Modern redesign dengan React + TypeScript + Tailwind CSS

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🔗 Links

- [Original Repository](https://github.com/cekrekening/cekrekening.github.io)
- [API Documentation](https://documenter.getpostman.com/view/31839079/2sAYQgi8yL)
- [Original Website](https://cekrekening.github.io/)

---

Made with ❤️ for Indonesia 🇮🇩 