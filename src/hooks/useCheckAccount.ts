import { useState } from 'react'
import { CheckAccountRequest, LoadingState } from '../types'

const API_BASE_URL = 'https://cekrekening-api.belibayar.online/api/v1'

// Check if running on localhost
const isLocalhost = typeof window !== 'undefined' && 
  (window.location.hostname === 'localhost' || 
   window.location.hostname === '127.0.0.1' ||
   window.location.hostname.includes('192.168.'))

export const useCheckAccount = () => {
  const [state, setState] = useState<LoadingState>({
    isLoading: false,
    error: null,
    data: null
  })

  const checkAccount = async (request: CheckAccountRequest) => {
    setState({
      isLoading: true,
      error: null,
      data: null
    })

    try {
      console.log('Calling API:', `${API_BASE_URL}/account-inquiry`)
      console.log('Request payload:', {
        account_number: request.accountNumber,
        account_bank: request.bankCode
      })

      const response = await fetch(`${API_BASE_URL}/account-inquiry`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          account_number: request.accountNumber,
          account_bank: request.bankCode
        })
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        // Handle different HTTP status codes
        if (response.status === 404) {
          throw new Error('Rekening tidak ditemukan')
        } else if (response.status === 400) {
          throw new Error('Data yang dimasukkan tidak valid')
        } else if (response.status === 500) {
          throw new Error('Server error. Silakan coba lagi nanti')
        } else if (response.status === 429) {
          throw new Error('Terlalu banyak permintaan. Silakan tunggu sebentar')
        } else {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
      }

      const result = await response.json()
      console.log('API Response:', result)

      if (!result.success) {
        const errorMessage = result.message || 'Gagal mengecek rekening'
        throw new Error(errorMessage)
      }

      // Transform response to match our interface
      const transformedResult = {
        success: true,
        data: {
          account_number: result.data.account_number,
          account_name: result.data.account_holder,
          bank_code: result.data.account_bank,
          bank_name: result.data.account_bank.toUpperCase()
        },
        message: result.message
      }

      setState({
        isLoading: false,
        error: null,
        data: transformedResult
      })

      return transformedResult
    } catch (error) {
      let errorMessage = 'Terjadi kesalahan saat mengecek rekening'
      let shouldShowDemo = false
      
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        if (isLocalhost) {
          errorMessage = 'CORS_ERROR' // Special flag for localhost CORS
          shouldShowDemo = true
        } else {
          errorMessage = 'Tidak dapat terhubung ke server. Pastikan koneksi internet Anda stabil dan coba lagi.'
        }
      } else if (error instanceof Error) {
        errorMessage = error.message
      }

      console.error('API Error:', error)

      setState({
        isLoading: false,
        error: errorMessage,
        data: null
      })

      // Create error object with demo flag for localhost
      const errorObj = new Error(errorMessage)
      ;(errorObj as any).shouldShowDemo = shouldShowDemo
      throw errorObj
    }
  }

  const reset = () => {
    setState({
      isLoading: false,
      error: null,
      data: null
    })
  }

  return {
    ...state,
    checkAccount,
    reset,
    isLocalhost
  }
} 