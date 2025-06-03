import { Building2, Shield, Zap, AlertTriangle } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-800 dark:via-purple-800 dark:to-indigo-800 opacity-10 dark:opacity-20 animate-pulse-slow rounded-2xl"></div>
      
      <div className="relative glass-effect rounded-2xl p-6 sm:p-8 text-center animate-fade-in">
        {/* Main Title */}
        <div className="mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 rounded-2xl shadow-lg animate-float">
              <Building2 className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Cek Rekening</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">Indonesia</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Cek nama pemilik rekening bank di Indonesia secara{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">gratis</span> dan{" "}
            <span className="font-semibold text-purple-600 dark:text-purple-400">mudah</span>
          </p>

          {/* Important Notice */}
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg p-4">
              <div className="flex items-center justify-center space-x-2 text-amber-700 dark:text-amber-300">
                <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                <p className="text-sm font-medium">
                  <strong>Gunakan dengan bijak</strong> - Maksimal 3 pengecekan per hari. 
                  Pengembang tidak bertanggung jawab atas penyalahgunaan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-3">
              <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">100% Gratis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Tidak ada biaya tersembunyi</p>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-3">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Cepat & Akurat</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Hasil dalam hitungan detik</p>
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/30 dark:border-gray-700/30">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3">
              <Building2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Semua Bank</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Mendukung 100+ bank</p>
          </div>
        </div>
      </div>
    </header>
  )
} 