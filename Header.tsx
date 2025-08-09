import React from 'react'
import { useApp } from '../../contexts/AppContext'
import { MoonIcon, SunIcon, BellIcon, CoinsIcon } from 'lucide-react'

const Header: React.FC = () => {
  const { state, dispatch } = useApp()

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {state.user.name}
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Wellness Tokens */}
          <div className="flex items-center space-x-2 bg-wellness-100 dark:bg-wellness-900 px-3 py-1 rounded-full">
            <CoinsIcon className="w-4 h-4 text-wellness-600 dark:text-wellness-400" />
            <span className="text-sm font-medium text-wellness-800 dark:text-wellness-200">
              {state.user.wellnessTokens}
            </span>
          </div>
          
          {/* Notifications */}
          <button className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors">
            <BellIcon className="w-5 h-5" />
          </button>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
            className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            {state.darkMode ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          
          {/* Profile Avatar */}
          <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-white">
              {state.user.name.charAt(0)}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header