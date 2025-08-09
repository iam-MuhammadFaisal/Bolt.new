import { Routes, Route } from 'react-router-dom'
import { AppProvider } from './contexts/AppContext'
import Layout from './components/Layout/Layout'
import Dashboard from './pages/Dashboard'
import MoodTracker from './pages/MoodTracker'
import TaskManager from './pages/TaskManager'
import Wellness from './pages/Wellness'
import Community from './pages/Community'
import Profile from './pages/Profile'
import Landing from './pages/Landing'

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/app" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="mood" element={<MoodTracker />} />
            <Route path="tasks" element={<TaskManager />} />
            <Route path="wellness" element={<Wellness />} />
            <Route path="community" element={<Community />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  )
}

export default App