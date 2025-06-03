import React, { useState, useMemo, useEffect } from 'react'
import { Search, CreditCard, AlertCircle, CheckCircle, RotateCcw, Shield } from 'lucide-react'
import { useCheckAccount } from '../hooks/useCheckAccount'
import { ALL_BANKS } from '../types'

// Demo data yang akan ditampilkan saat CORS error di localhost
const DEMO_DATA = {
  success: true,
  data: {
    account_number: "1234567890",
    account_name: "BUDI SANTOSO",
    bank_code: "bca",
    bank_name: "BCA"
  },
  message: "Demo Mode - Data ini hanya contoh"
}

// Limit constants
const MAX_CHECKS_PER_DAY = 3
const STORAGE_KEY = 'cek_rekening_usage'

const CheckForm: React.FC = () => {
  const [selectedBank, setSelectedBank] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [showDemo, setShowDemo] = useState(false)
  const [checkCount, setCheckCount] = useState(0)
  const { isLoading, error, data, checkAccount, reset, isLocalhost } = useCheckAccount()

  // Load usage data on component mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        const { count, date } = JSON.parse(stored)
        const today = new Date().toDateString()
        
        if (date === today) {
          setCheckCount(count)
        } else {
          // Reset count if it's a new day
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }))
          setCheckCount(0)
        }
      } catch (error) {
        // Reset if corrupted data
        const today = new Date().toDateString()
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }))
        setCheckCount(0)
      }
    } else {
      // First time user
      const today = new Date().toDateString()
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: 0, date: today }))
      setCheckCount(0)
    }
  }, [])

  // Update localStorage when checkCount changes
  const updateUsageCount = () => {
    const today = new Date().toDateString()
    const newCount = checkCount + 1
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: newCount, date: today }))
    setCheckCount(newCount)
  }

  // Check if user has reached the limit
  const hasReachedLimit = checkCount >= MAX_CHECKS_PER_DAY
  const remainingChecks = Math.max(0, MAX_CHECKS_PER_DAY - checkCount)

  // Filter banks based on search term
  const filteredBanks = useMemo(() => {
    if (!searchTerm) return ALL_BANKS
    return ALL_BANKS.filter(bank => 
      bank.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bank.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  // Format account number input
  const handleAccountNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 20) // Only numbers, max 20 digits
    setAccountNumber(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedBank || !accountNumber) {
      return
    }

    // Check if user has reached daily limit
    if (hasReachedLimit) {
      return
    }

    try {
      setShowDemo(false)
      await checkAccount({
        bankCode: selectedBank,
        accountNumber: accountNumber
      })
      
      // Update usage count only on successful request
      updateUsageCount()
    } catch (error: any) {
      if (error.shouldShowDemo) {
        setShowDemo(true)
      }
      // Still count failed attempts to prevent abuse
      updateUsageCount()
    }
  }

  const handleReset = () => {
    setSelectedBank('')
    setAccountNumber('')
    setSearchTerm('')
    setShowDemo(false)
    reset()
  }

  const handleDemoMode = () => {
    setShowDemo(true)
    reset()
  }

  const selectedBankData = ALL_BANKS.find(bank => bank.value === selectedBank)

  const shouldShowDemoButton = error === 'CORS_ERROR' && isLocalhost

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Usage Limit Warning */}
        {remainingChecks <= 1 && !hasReachedLimit && (
          <div className="p-4 bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-700 rounded-lg">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-amber-800 dark:text-amber-200">Peringatan Batas Penggunaan</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300 mt-1">
                  Anda hanya memiliki <strong>{remainingChecks}</strong> pengecekan tersisa hari ini. 
                  Batas akan reset otomatis besok untuk mencegah penyalahgunaan.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Daily Limit Reached */}
        {hasReachedLimit && (
          <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 dark:text-red-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-red-800 dark:text-red-200">Batas Harian Tercapai</h4>
                <p className="text-sm text-red-700 dark:text-red-300 mt-1">
                  Anda telah mencapai batas maksimal <strong>{MAX_CHECKS_PER_DAY} pengecekan per hari</strong>. 
                  Silakan kembali besok untuk melakukan pengecekan lagi. Kebijakan ini dibuat untuk mencegah penyalahgunaan sistem.
                </p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                  Batas akan reset secara otomatis pada pukul 00:00 WIB.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Important Notice */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-800 dark:text-blue-200">PENTING: Gunakan dengan Bijak</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                Website ini menggunakan API publik yang tersedia bebas. <strong>Pengembang tidak bertanggung jawab</strong> atas segala tindakan, kerugian, atau konsekuensi yang timbul dari penggunaan website ini. 
                Pengguna bertanggung jawab penuh atas penggunaan layanan ini.
              </p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                Sisa pengecekan hari ini: <strong>{remainingChecks} dari {MAX_CHECKS_PER_DAY}</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Bank Selection */}
        <div className="space-y-2">
          <label htmlFor="bank" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Pilih Bank / E-Wallet
          </label>
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Cari bank atau e-wallet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            {searchTerm && (
              <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredBanks.length > 0 ? (
                  filteredBanks.map((bank) => (
                    <button
                      key={bank.value}
                      type="button"
                      onClick={() => {
                        setSelectedBank(bank.value)
                        setSearchTerm('')
                      }}
                      className="w-full text-left px-4 py-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150"
                    >
                      <div className="font-medium text-gray-900 dark:text-gray-100">{bank.label}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{bank.value}</div>
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-3 text-gray-500 dark:text-gray-400">Tidak ada bank ditemukan</div>
                )}
              </div>
            )}
          </div>
          
          {selectedBankData && (
            <div className="flex items-center space-x-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
              <CheckCircle className="w-4 h-4" />
              <span>Dipilih: {selectedBankData.label}</span>
            </div>
          )}
        </div>

        {/* Account Number Input */}
        <div className="space-y-2">
          <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nomor Rekening / E-Wallet
          </label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={handleAccountNumberChange}
              placeholder="Masukkan nomor rekening"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              disabled={isLoading}
            />
          </div>
          {accountNumber && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Format: {accountNumber.replace(/(\d{4})(?=\d)/g, '$1-')}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            type="submit"
            disabled={!selectedBank || !accountNumber || isLoading || hasReachedLimit}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-800 dark:hover:to-indigo-800 focus:ring-4 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Memeriksa...</span>
              </div>
            ) : hasReachedLimit ? (
              <div className="flex items-center justify-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Batas Tercapai</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <span>Cek Rekening</span>
                {remainingChecks <= 1 && (
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {remainingChecks} tersisa
                  </span>
                )}
              </div>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-500/20 dark:focus:ring-gray-400/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Demo Mode Button for Localhost CORS */}
        {shouldShowDemoButton && (
          <button
            type="button"
            onClick={handleDemoMode}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white py-3 px-6 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 focus:ring-4 focus:ring-purple-500/20 dark:focus:ring-purple-400/20 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            🧪 Coba Mode Demo
          </button>
        )}
      </form>

      {/* Results */}
      {(data || showDemo || error) && (
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg">
          {/* Success Result */}
          {(data || showDemo) && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Rekening Ditemukan!</span>
                {showDemo && (
                  <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                    DEMO MODE
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Nomor Rekening</div>
                  <div className="font-mono text-lg font-medium text-gray-900 dark:text-gray-100">
                    {showDemo ? DEMO_DATA.data.account_number : data?.data.account_number}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Bank</div>
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {showDemo ? DEMO_DATA.data.bank_name : data?.data.bank_name}
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-1">
                  <div className="text-sm text-gray-500 dark:text-gray-400">Nama Pemilik</div>
                  <div className="text-xl font-bold text-gray-900 dark:text-gray-100 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
                    {showDemo ? DEMO_DATA.data.account_name : data?.data.account_name}
                  </div>
                </div>
              </div>
              
              {showDemo && (
                <div className="mt-4 p-3 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
                  <div className="text-sm text-purple-700 dark:text-purple-300">
                    <strong>Mode Demo:</strong> Data ini hanya contoh karena API tidak dapat diakses dari localhost. 
                    Website akan berfungsi normal setelah di-deploy.
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Error Result */}
          {error && error !== 'CORS_ERROR' && !showDemo && (
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-600 dark:text-red-400">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">Gagal Mengecek Rekening</span>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                <div className="text-red-700 dark:text-red-300">{error}</div>
              </div>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Pastikan nomor rekening dan pilihan bank sudah benar, lalu coba lagi.
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default CheckForm 