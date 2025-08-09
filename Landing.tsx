import React from 'react'
import { Link } from 'react-router-dom'
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  HeartIcon, 
  TrendingUpIcon,
  UsersIcon,
  BrainIcon
} from 'lucide-react'

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-wellness-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-xl flex items-center justify-center">
              <SparklesIcon className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900 dark:text-white">
              Mind's Flow
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/app"
              className="btn-primary"
            >
              Launch App
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Your Wellness,
              <span className="bg-gradient-to-r from-primary-600 to-wellness-600 bg-clip-text text-transparent">
                {' '}Decentralized
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Take control of your mental health journey with blockchain-secured privacy, 
              AI-powered insights, and a supportive community that rewards your progress.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/app"
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Journey
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionizing Mental Wellness
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Combining cutting-edge technology with evidence-based therapeutic approaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: BrainIcon,
                title: 'AI-Powered Insights',
                description: 'Advanced sentiment analysis and personalized recommendations based on your unique patterns and goals.'
              },
              {
                icon: ShieldCheckIcon,
                title: 'Blockchain Security',
                description: 'Your mental health data is encrypted and stored on Bitcoin L2, ensuring complete privacy and ownership.'
              },
              {
                icon: HeartIcon,
                title: 'Mood Tracking',
                description: 'Comprehensive mood and symptom tracking with beautiful visualizations and trend analysis.'
              },
              {
                icon: TrendingUpIcon,
                title: 'Productivity Sync',
                description: 'Connect your wellness journey with productivity goals and see how they influence each other.'
              },
              {
                icon: UsersIcon,
                title: 'Peer Support',
                description: 'Anonymous community features with peer rewards and accountability partnerships.'
              },
              {
                icon: SparklesIcon,
                title: 'Wellness Rewards',
                description: 'Earn tokens for consistent wellness activities and unlock premium features and NFT achievements.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="card hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-wellness-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Wellness Journey?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of users who have taken control of their mental health with Mind's Flow's 
            decentralized platform. Your data, your progress, your rewards.
          </p>
          <Link
            to="/app"
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            <SparklesIcon className="w-5 h-5 mr-2" />
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Mind's Flow. Empowering wellness through decentralization.</p>
        </div>
      </footer>
    </div>
  )
}

export default Landing