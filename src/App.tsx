import Header from './components/Header'
import CheckForm from './components/CheckForm'
import Footer from './components/Footer'
import DarkModeToggle from './components/DarkModeToggle'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-300">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-80 h-60 sm:h-80 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-pulse-slow animation-delay-4000"></div>
      </div>

      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-8 min-h-screen">
              {/* Left Column - Header */}
              <div className="col-span-4 xl:col-span-5 flex flex-col justify-center">
                <div className="sticky top-8">
                  <Header />
                </div>
              </div>
              
              {/* Right Column - Form */}
              <div className="col-span-8 xl:col-span-7 flex flex-col justify-center">
                <div className="space-y-8">
                  <CheckForm />
                </div>
              </div>
            </div>
            
            {/* Footer for Desktop */}
            <div className="mt-16">
              <Footer />
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden">
            <div className="max-w-2xl mx-auto space-y-8">
              <Header />
              <CheckForm />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 