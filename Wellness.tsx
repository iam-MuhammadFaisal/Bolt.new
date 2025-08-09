import React from 'react'
import { HeartIcon, BrainIcon, MoonIcon, ActivityIcon, BookOpenIcon, PlayIcon } from 'lucide-react'

const Wellness: React.FC = () => {
  const wellnessActivities = [
    {
      id: 1,
      title: 'Morning Meditation',
      description: '10-minute guided mindfulness session',
      duration: '10 min',
      category: 'Mindfulness',
      icon: BrainIcon,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    },
    {
      id: 2,
      title: 'Breathing Exercise',
      description: '4-7-8 breathing technique for anxiety relief',
      duration: '5 min',
      category: 'Breathing',
      icon: HeartIcon,
      color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
    },
    {
      id: 3,
      title: 'Sleep Stories',
      description: 'Calming bedtime stories for better sleep',
      duration: '15 min',
      category: 'Sleep',
      icon: MoonIcon,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      id: 4,
      title: 'Body Scan',
      description: 'Progressive muscle relaxation technique',
      duration: '12 min',
      category: 'Relaxation',
      icon: ActivityIcon,
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400'
    }
  ]

  const cbtModules = [
    {
      id: 1,
      title: 'Thought Challenging',
      description: 'Learn to identify and challenge negative thought patterns',
      progress: 75,
      lessons: 8
    },
    {
      id: 2,
      title: 'Behavioral Activation',
      description: 'Increase engagement in meaningful activities',
      progress: 45,
      lessons: 6
    },
    {
      id: 3,
      title: 'Exposure Therapy',
      description: 'Gradual exposure to anxiety-provoking situations',
      progress: 20,
      lessons: 10
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wellness Hub</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Evidence-based therapeutic interventions and mindfulness practices
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {wellnessActivities.map((activity) => (
          <div key={activity.id} className="card hover:shadow-lg transition-shadow cursor-pointer">
            <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center mb-4`}>
              <activity.icon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              {activity.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              {activity.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {activity.duration}
              </span>
              <button className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium">
                <PlayIcon className="w-4 h-4 mr-1" />
                Start
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CBT Modules */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            CBT Therapy Modules
          </h3>
          <BookOpenIcon className="w-6 h-6 text-gray-400" />
        </div>
        
        <div className="space-y-4">
          {cbtModules.map((module) => (
            <div key={module.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {module.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {module.description}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {module.progress}%
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {module.lessons} lessons
                  </div>
                </div>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${module.progress}%` }}
                />
              </div>
              
              <button className="btn-primary text-sm">
                Continue Module
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Mindfulness Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Mindfulness */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Daily Mindfulness
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Morning meditation completed
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">+20 tokens</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Breathing exercise (pending)
                </span>
              </div>
              <button className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                Start
              </button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Evening reflection
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Later</span>
            </div>
          </div>
        </div>

        {/* Wellness Insights */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Wellness Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <BrainIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Meditation Streak
                  </h4>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    You've meditated 7 days in a row! Consistency is key to building lasting habits.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <HeartIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">
                    Mood Improvement
                  </h4>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Your average mood has increased by 15% this week compared to last week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wellness