import './css/global.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '@/pages/login-page.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
]);

const App = () => (
    <RouterProvider router={router} />
)

export default App