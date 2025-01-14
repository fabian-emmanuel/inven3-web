import { Layout } from '@/components/layout'
import { Dashboard } from '@/feature/dashboard/components/dashboard'

export default function DashboardPage() {
  return (
    <Layout>
      <Dashboard userRole="Admin" />
    </Layout>
  )
}

