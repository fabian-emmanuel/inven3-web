
import React from 'react'
import { Home, Box, ShoppingCart, BarChart2, Users, Settings } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { cn } from '@/lib/utils'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/dashboard' },
  { icon: Box, label: 'Inventory', href: '/inventory' },
  { icon: ShoppingCart, label: 'Sales', href: '/sales' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: Users, label: 'Users', href: '/users' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export const Sidebar: React.FC = () => {
  const pathname = useLocation().pathname
  const navigate = useNavigate()

  const handleNavigation = (href: string) => {
    navigate(href)
  }

  return (
    <div className="flex flex-col w-64 bg-white border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold text-gray-800">ProcureManager</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(item.href)}
                className={cn(
                  "flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors",
                  pathname === item.href && "bg-gray-100 text-blue-600"
                )}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

