import React, { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import { HeartIcon, PlusIcon, CalendarIcon, TrendingUpIcon } from 'lucide-react'

const MoodTracker: React.FC = () => {
  const { state, dispatch } = useApp()
  const [showAddEntry, setShowAddEntry] = useState(false)
  const [newEntry, setNewEntry] = useState({
    mood: 5,
    energy: 5,
    anxiety: 5,
    notes: '',
    tags: ''
  })

  const handleAddEntry = () => {
    const entry = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      mood: newEntry.mood,
      energy: newEntry.energy,
      anxiety: newEntry.anxiety,
      notes: newEntry.notes,
      tags: newEntry.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    }

    dispatch({ type: 'ADD_MOOD_ENTRY', payload: entry })
    dispatch({ type: 'UPDATE_TOKENS', payload: 10 })
    
    setNewEntry({ mood: 5, energy: 5, anxiety: 5, notes: '', tags: '' })
    setShowAddEntry(false)
  }

  const getMoodEmoji = (mood: number) => {
    if (mood >= 9) return '😄'
    if (mood >= 7) return '😊'
    if (mood >= 5) return '😐'
    if (mood >= 3) return '😔'
    return '😢'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mood Tracker</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Track your emotional well-being and identify patterns
          </p>
        </div>
        <button
          onClick={() => setShowAddEntry(true)}
          className="btn-primary flex items-center"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Entry
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <HeartIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Average Mood</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {state.moodEntries.length > 0 
                  ? (state.moodEntries.reduce((sum, entry) => sum + entry.mood, 0) / state.moodEntries.length).toFixed(1)
                  : '0'}/10
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <TrendingUpIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Entries This Week</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{state.moodEntries.length}</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Streak</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{state.user.streak} days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Entry Modal */}
      {showAddEntry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              How are you feeling today?
            </h3>
            
            <div className="space-y-4">
              {/* Mood Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mood: {newEntry.mood}/10 {getMoodEmoji(newEntry.mood)}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newEntry.mood}
                  onChange={(e) => setNewEntry({ ...newEntry, mood: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Energy Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Energy Level: {newEntry.energy}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newEntry.energy}
                  onChange={(e) => setNewEntry({ ...newEntry, energy: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Anxiety Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Anxiety Level: {newEntry.anxiety}/10
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newEntry.anxiety}
                  onChange={(e) => setNewEntry({ ...newEntry, anxiety: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={newEntry.notes}
                  onChange={(e) => setNewEntry({ ...newEntry, notes: e.target.value })}
                  placeholder="What's on your mind?"
                  className="input-field h-20 resize-none"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={newEntry.tags}
                  onChange={(e) => setNewEntry({ ...newEntry, tags: e.target.value })}
                  placeholder="work, stress, exercise, meditation"
                  className="input-field"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleAddEntry}
                className="btn-primary flex-1"
              >
                Save Entry (+10 tokens)
              </button>
              <button
                onClick={() => setShowAddEntry(false)}
                className="btn-secondary flex-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mood Entries List */}
      <div className="card">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Entries</h3>
        <div className="space-y-4">
          {state.moodEntries.length === 0 ? (
            <div className="text-center py-8">
              <HeartIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400">No mood entries yet</p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                Start tracking your mood to see patterns and insights
              </p>
            </div>
          ) : (
            state.moodEntries.map((entry) => (
              <div key={entry.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getMoodEmoji(entry.mood)}</span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {entry.date}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Mood: {entry.mood}/10 • Energy: {entry.energy}/10 • Anxiety: {entry.anxiety}/10
                      </p>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full ${
                    entry.mood >= 8 ? 'bg-green-500' :
                    entry.mood >= 6 ? 'bg-yellow-500' :
                    entry.mood >= 4 ? 'bg-orange-500' : 'bg-red-500'
                  }`} />
                </div>
                
                {entry.notes && (
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {entry.notes}
                  </p>
                )}
                
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default MoodTracker