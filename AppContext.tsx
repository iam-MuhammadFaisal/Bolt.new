import React, { createContext, useContext, useReducer, ReactNode } from 'react'

interface MoodEntry {
  id: string
  date: string
  mood: number
  energy: number
  anxiety: number
  notes: string
  tags: string[]
}

interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
  category: string
  energyLevel: number
}

interface AppState {
  user: {
    name: string
    email: string
    wellnessTokens: number
    streak: number
  }
  moodEntries: MoodEntry[]
  tasks: Task[]
  darkMode: boolean
}

type AppAction = 
  | { type: 'ADD_MOOD_ENTRY'; payload: MoodEntry }
  | { type: 'ADD_TASK'; payload: Task }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'UPDATE_TOKENS'; payload: number }

const initialState: AppState = {
  user: {
    name: 'Alex Chen',
    email: 'alex@mindsflow.app',
    wellnessTokens: 1250,
    streak: 7
  },
  moodEntries: [
    {
      id: '1',
      date: '2024-01-15',
      mood: 7,
      energy: 6,
      anxiety: 3,
      notes: 'Had a productive morning meditation session',
      tags: ['meditation', 'productive']
    },
    {
      id: '2',
      date: '2024-01-14',
      mood: 5,
      energy: 4,
      anxiety: 6,
      notes: 'Feeling overwhelmed with work deadlines',
      tags: ['work', 'stress']
    }
  ],
  tasks: [
    {
      id: '1',
      title: 'Complete morning meditation',
      description: '10-minute mindfulness session',
      completed: true,
      priority: 'high',
      category: 'wellness',
      energyLevel: 3
    },
    {
      id: '2',
      title: 'Review project proposal',
      description: 'Go through the Q1 marketing proposal',
      completed: false,
      priority: 'high',
      dueDate: '2024-01-16',
      category: 'work',
      energyLevel: 8
    }
  ],
  darkMode: false
}

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'ADD_MOOD_ENTRY':
      return {
        ...state,
        moodEntries: [action.payload, ...state.moodEntries]
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        )
      }
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case 'UPDATE_TOKENS':
      return {
        ...state,
        user: {
          ...state.user,
          wellnessTokens: state.user.wellnessTokens + action.payload
        }
      }
    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState)

  React.useEffect(() => {
    if (state.darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [state.darkMode])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}