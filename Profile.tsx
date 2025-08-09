import React from 'react'
import { useApp } from '../contexts/AppContext'
import { 
  CoinsIcon, 
  TrophyIcon, 
  FlameIcon, 
  ShieldIcon,
  SettingsIcon,
  DownloadIcon,
  ShareIcon
} from 'lucide-react'

const Profile: React.FC = () => {
  const { state } = useApp()

  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Completed your first mood entry',
      icon: '🎯',
      earned: true,
      date: '2024-01-10'
    },
    {
      id: 2,
      title: 'Meditation Master',
      description: 'Completed 7 days of meditation',
      icon: '🧘',
      earned: true,
      date: '2024-01-15'
    },
    {
      id: 3,
      title: 'Task Warrior',
      description: 'Completed 50 tasks',
      icon: '⚔️',
      earned: false,
      progress: 32
    },
    {
      id: 4,
      title: 'Community Helper',
      description: 'Helped 10 community members',
      icon: '🤝',
      earned: false,
      progress: 6
    }
  ]

  const wellnessStats = [
    { label: 'Total Mood Entries', value: state.moodEntries.length },
    { label: 'Tasks Completed', value: state.tasks.filter(t => t.completed).length },
    { label: 'Current Streak', value: state.user.streak },
    { label: 'Wellness Tokens', value: state.user.wellnessTokens }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Manage your wellness journey and privacy settings
        </p>
      </div>

      {/* Profile Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="lg:col-span-1">
          <div className="card text-center">
            <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">
                {state.user.name.charAt(0)}
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
              {state.user.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {state.user.email}
            </p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-wellness-600 dark:text-wellness-400">
                  <CoinsIcon className="w-4 h-4" />
                  <span className="font-bold">{state.user.wellnessTokens}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Tokens</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 text-orange-600 dark:text-orange-400">
                  <FlameIcon className="w-4 h-4" />
                  <span className="font-bold">{state.user.streak}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Day Streak</p>
              </div>
            </div>
            
            <button className="btn-primary w-full mb-2">
              <SettingsIcon className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats & Achievements */}
        <div className="lg:col-span-2 space-y-6">
          {/* Wellness Stats */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Wellness Statistics
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {wellnessStats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`border rounded-lg p-4 ${
                    achievement.earned
                      ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20'
                      : 'border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-700/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h4 className={`font-medium ${
                        achievement.earned
                          ? 'text-green-900 dark:text-green-100'
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {achievement.title}
                      </h4>
                      <p className={`text-sm ${
                        achievement.earned
                          ? 'text-green-700 dark:text-green-300'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}>
                        {achievement.description}
                      </p>
                      
                      {achievement.earned ? (
                        <div className="flex items-center space-x-1 mt-2">
                          <TrophyIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                          <span className="text-xs text-green-600 dark:text-green-400">
                            Earned {achievement.date}
                          </span>
                        </div>
                      ) : (
                        <div className="mt-2">
                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{achievement.progress}/10</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1">
                            <div
                              className="bg-primary-600 h-1 rounded-full"
                              style={{ width: `${(achievement.progress! / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Privacy & Data */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Privacy Settings */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Privacy & Security
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-center space-x-3">
                <ShieldIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="font-medium text-blue-900 dark:text-blue-100">
                    Blockchain Security
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Your data is encrypted and stored on Bitcoin L2
                  </p>
                </div>
              </div>
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Anonymous Community Posts
                </span>
                <div className="w-11 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Share Progress with Therapist
                </span>
                <div className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Contribute to Research (Anonymous)
                </span>
                <div className="w-11 h-6 bg-primary-600 rounded-full relative">
                  <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Export */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Data Management
          </h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You own your data completely. Export, share, or delete your information at any time.
            </p>
            
            <div className="space-y-3">
              <button className="btn-secondary w-full flex items-center justify-center">
                <DownloadIcon className="w-4 h-4 mr-2" />
                Export All Data
              </button>
              
              <button className="btn-secondary w-full flex items-center justify-center">
                <ShareIcon className="w-4 h-4 mr-2" />
                Share with Healthcare Provider
              </button>
              
              <button className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium w-full text-center py-2">
                Delete Account & Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile