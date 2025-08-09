import React from 'react'
import { UsersIcon, MessageCircleIcon, HeartIcon, TrendingUpIcon, ShieldIcon } from 'lucide-react'

const Community: React.FC = () => {
  const supportGroups = [
    {
      id: 1,
      name: 'Anxiety Support Circle',
      members: 1247,
      description: 'A safe space to share experiences and coping strategies for anxiety',
      activity: 'Very Active',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'
    },
    {
      id: 2,
      name: 'ADHD Warriors',
      members: 892,
      description: 'Tips, tricks, and support for managing ADHD in daily life',
      activity: 'Active',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
    },
    {
      id: 3,
      name: 'Mindfulness Practitioners',
      members: 2156,
      description: 'Share your meditation journey and learn from others',
      activity: 'Very Active',
      color: 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
    },
    {
      id: 4,
      name: 'Depression Recovery',
      members: 1543,
      description: 'Supporting each other through the journey of depression recovery',
      activity: 'Moderate',
      color: 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400'
    }
  ]

  const recentPosts = [
    {
      id: 1,
      author: 'Anonymous User',
      time: '2 hours ago',
      content: 'Had my first panic-free week in months! The breathing exercises from the app really helped. Thank you all for the support! 💙',
      likes: 24,
      replies: 8,
      group: 'Anxiety Support Circle'
    },
    {
      id: 2,
      author: 'Mindful_Journey',
      time: '4 hours ago',
      content: 'Completed my 30-day meditation streak today. The consistency has really changed how I handle stress. Keep going everyone!',
      likes: 31,
      replies: 12,
      group: 'Mindfulness Practitioners'
    },
    {
      id: 3,
      author: 'Focus_Warrior',
      time: '6 hours ago',
      content: 'Struggling with task prioritization today. Any ADHD-friendly productivity tips that have worked for you?',
      likes: 18,
      replies: 15,
      group: 'ADHD Warriors'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Community</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Connect with others on similar wellness journeys in a safe, anonymous environment
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Members</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12.4K</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <MessageCircleIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Posts Today</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">247</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Support Given</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">1.8K</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Growth</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">+15%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <ShieldIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
              Your Privacy is Protected
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              All community interactions are anonymous and encrypted. Your identity and personal data remain completely private while you connect with others.
            </p>
          </div>
        </div>
      </div>

      {/* Support Groups */}
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Support Groups
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportGroups.map((group) => (
            <div key={group.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className={`px-2 py-1 text-xs rounded-full ${group.color}`}>
                  {group.activity}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {group.members.toLocaleString()} members
                </span>
              </div>
              
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {group.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {group.description}
              </p>
              
              <button className="btn-primary text-sm w-full">
                Join Group
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Community Posts */}
      <div className="card">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Recent Community Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-medium text-white">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {post.time} • {post.group}
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {post.content}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                  <HeartIcon className="w-4 h-4" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span>{post.replies} replies</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="btn-secondary">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  )
}

export default Community