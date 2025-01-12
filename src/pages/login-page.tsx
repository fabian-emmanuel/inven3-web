import {LoginForm} from "@/feature/login/components/form/login-form.tsx";


export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-md w-full space-y-8 p-10 bg-white shadow-2xl rounded-xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Access your procurement management dashboard
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

