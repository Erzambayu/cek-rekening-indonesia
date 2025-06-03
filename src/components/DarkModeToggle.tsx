import { Sun, Moon } from 'lucide-react'

interface DarkModeToggleProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-500 transition-all duration-300 transform ${
            isDarkMode ? 'rotate-180 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-600 dark:text-blue-400 transition-all duration-300 transform ${
            isDarkMode ? 'rotate-0 scale-100 opacity-100' : '-rotate-180 scale-0 opacity-0'
          }`}
        />
      </div>
    </button>
  )
}

export default DarkModeToggle 