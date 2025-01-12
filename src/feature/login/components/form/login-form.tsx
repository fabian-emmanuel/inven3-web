import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate() // Using useNavigate for navigation

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your API to authenticate the user
    console.log('Logging in with:', { email, password })
    // Navigate to the dashboard
    navigate('/dashboard') // Using navigate to redirect to dashboard
  }

  return (
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div className="relative">
            <Input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Label
                htmlFor="email-address"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Email address
            </Label>
          </div>
          <div className="relative">
            <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 peer pt-6"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Password
            </Label>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm">
            <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Don't have an account? Sign up
            </Link>
          </div>
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <Button type="submit" className="w-full">
            Log in
          </Button>
        </div>
      </form>
  )
}
