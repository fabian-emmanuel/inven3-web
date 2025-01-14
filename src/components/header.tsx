
import React from 'react'
import { Bell, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const Header: React.FC = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Here you would typically clear the user's session
    console.log('Logging out')
    navigate('/login')
  }

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center">
        <button className="p-1 mr-4 text-gray-400 hover:text-gray-600">
          <Bell className="w-6 h-6" />
        </button>
        <button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 mr-4">
          <User className="w-8 h-8 mr-2" />
          <span>John Doe</span>
        </button>
        <Button onClick={handleLogout} variant="outline">Logout</Button>
      </div>
    </header>
  )
}

