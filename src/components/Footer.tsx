import { Heart, Github, ExternalLink, AlertTriangle, Shield } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 space-y-8">
      {/* Enhanced Disclaimer */}
      <div className="glass-effect rounded-2xl p-6 border-l-4 border-red-500 dark:border-red-400">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="w-6 h-6 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-800 dark:text-red-200 mb-3 text-lg">⚠️ DISCLAIMER & PERINGATAN PENTING</h3>
            
            <div className="space-y-3 text-red-700 dark:text-red-300">
              <p className="font-semibold">
                🚨 GUNAKAN DENGAN BIJAK - PENGEMBANG TIDAK BERTANGGUNG JAWAB
              </p>
              
              <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border border-red-200 dark:border-red-700">
                <p className="leading-relaxed">
                  Website Cek Rekening Indonesia ini menggunakan API publik yang tersedia bebas untuk umum. 
                  <strong className="text-red-800 dark:text-red-200"> Pengembang/Author TIDAK bertanggung jawab atas segala tindakan, kerugian, 
                  konsekuensi hukum, finansial, atau dampak negatif lainnya</strong> yang timbul dari penggunaan website ini.
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg border border-amber-200 dark:border-amber-700">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">🛡️ Kebijakan Penggunaan:</h4>
                <ul className="list-disc list-inside space-y-1 text-amber-700 dark:text-amber-300">
                  <li>Maksimal 3 pengecekan per hari untuk mencegah penyalahgunaan</li>
                  <li>Website ini hanya untuk keperluan informasi dan verifikasi yang sah</li>
                  <li>Dilarang menggunakan untuk tujuan penipuan, kejahatan, atau aktivitas ilegal</li>
                  <li>Pengguna bertanggung jawab penuh atas semua aktivitas yang dilakukan</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">ℹ️ Informasi Tambahan:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
                  <li>Beberapa bank/e-wallet mungkin tidak dapat diakses karena pembatasan teknis</li>
                  <li>Data yang ditampilkan bersumber dari API pihak ketiga</li>
                  <li>Website ini adalah hasil redesign dan menggunakan API yang sudah tersedia</li>
                  <li>Tidak ada jaminan keakuratan data 100%</li>
                </ul>
              </div>

              <p className="text-sm font-medium text-red-800 dark:text-red-200 bg-red-100 dark:bg-red-900/30 p-3 rounded-lg border border-red-300 dark:border-red-700">
                ⚖️ Dengan menggunakan website ini, Anda menyetujui bahwa segala risiko dan tanggung jawab 
                sepenuhnya berada di tangan pengguna. Author hanya menyediakan redesign interface dan 
                tidak memiliki kontrol atas API atau data yang ditampilkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">🤝 Panduan Penggunaan yang Bijak</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-medium text-green-700 dark:text-green-400">✅ Diperbolehkan:</h4>
                <ul className="list-disc list-inside space-y-1 text-green-600 dark:text-green-400">
                  <li>Verifikasi rekening untuk transaksi bisnis yang sah</li>
                  <li>Memastikan kebenaran data sebelum transfer</li>
                  <li>Validasi untuk keperluan administrasi</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-red-700 dark:text-red-400">❌ Dilarang:</h4>
                <ul className="list-disc list-inside space-y-1 text-red-600 dark:text-red-400">
                  <li>Menggunakan untuk penipuan atau kejahatan</li>
                  <li>Penyalahgunaan data pribadi orang lain</li>
                  <li>Aktivitas yang melanggar hukum</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Credits */}
      <div className="glass-effect rounded-2xl p-6">
        <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">Credits & Attribution</h3>
        
        <div className="space-y-4">
          {/* Original Creators */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">Original API & Project by:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/heirro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium text-gray-900 dark:text-gray-100">@heirro</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/vavaheirro-impact360"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium text-gray-900 dark:text-gray-100">@vavaheirro-impact360</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://github.com/savioruz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <Github className="w-4 h-4" />
                <span className="font-medium text-gray-900 dark:text-gray-100">@savioruz</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 dark:border-gray-700"></div>

          {/* Redesigner */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">UI/UX Redesign by:</p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-4 py-2 rounded-lg">
                <Heart className="w-4 h-4 text-red-500" />
                <span className="font-bold gradient-text">Erzam Bayu</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <a
            href="https://github.com/cekrekening/cekrekening.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <Github className="w-4 h-4" />
            <span>Original Repository</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://documenter.getpostman.com/view/31839079/2sAYQgi8yL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>API Documentation</span>
          </a>
          <a
            href="https://cekrekening.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Original Website</span>
          </a>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Made with{" "}
          <Heart className="inline w-4 h-4 text-red-500 mx-1" />
          for Indonesia 🇮🇩
        </p>
      </div>
    </footer>
  )
} 