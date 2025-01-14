import { SignUpForm } from '@/feature/sign-up/components/form/sign-up-form'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-2xl rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Join us and start managing your procurement process efficiently
          </p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

