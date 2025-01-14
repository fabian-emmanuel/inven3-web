import './css/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '@/feature/login/pages/login-page'
import SignUpPage from '@/feature/sign-up/pages/sign-up-page'
import DashboardPage from '@/feature/dashboard/pages/dashboard-page'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignUpPage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
    },

]);

const App = () => (
    <RouterProvider router={router} />
)

export default App