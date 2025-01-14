
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload } from 'lucide-react'

export function SignUpForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [logo, setLogo] = useState<File | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Signing up with:', { name, email, password, companyName, logo })
    navigate('/dashboard')
  }

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <Input
            id="name"
            name="name"
            type="text"
            required
            className="block w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 peer pt-6"
            placeholder=" "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Label
            htmlFor="name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Name
          </Label>
        </div>
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
            autoComplete="new-password"
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
        <div className="relative">
          <Input
            id="company-name"
            name="companyName"
            type="text"
            required
            className="block w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 peer pt-6"
            placeholder=" "
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Label
            htmlFor="company-name"
            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            Company Name
          </Label>
        </div>
        <div className="relative">
          <Input
            id="logo"
            name="logo"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleLogoChange}
          />
          <Label
            htmlFor="logo"
            className="flex items-center justify-center w-full px-4 py-3 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-500 focus:outline-none"
          >
            <div className="flex items-center">
              <Upload className="w-6 h-6 mr-2 text-gray-400" />
              <span className="text-sm text-gray-600">
                {logo ? logo.name : 'Upload Company Logo'}
              </span>
            </div>
          </Label>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
            Already have an account? Log in
          </Link>
        </div>
      </div>

      <div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </div>
    </form>
  )
}

