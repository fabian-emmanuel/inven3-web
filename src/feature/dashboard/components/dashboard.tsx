import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, LineChart } from '@/components/ui/chart'
import { Button } from '@/components/ui/button'
import {Link} from 'react-router-dom'
import { AddItemModal } from '@/components/add-item-modal'

interface DashboardProps {
  userRole: 'Admin' | 'Sales_Manager' | 'Sales_Person' | 'Inventory_Manager'
}

export const Dashboard: React.FC<DashboardProps> = ({ userRole }) => {
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Dashboard ({userRole})</h2>
        <div className="space-x-2">
          {userRole === 'Admin' && (
            <Link to="/add-user">
              <Button>Add User</Button>
            </Link>
          )}
          {(userRole === 'Admin' || userRole === 'Inventory_Manager') && (
            <Button onClick={() => setIsAddItemModalOpen(true)}>Add New Item</Button>
          )}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12,234</div>
            <p className="text-xs text-muted-foreground">+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">+201 since last week</p>
          </CardContent>
        </Card>
        {(userRole === 'Admin' || userRole === 'Sales_Manager') && (
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <BarChart />
            </CardContent>
          </Card>
        )}
        {(userRole === 'Admin' || userRole === 'Inventory_Manager') && (
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Inventory Trend</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <LineChart />
            </CardContent>
          </Card>
        )}
      </div>
      <AddItemModal isOpen={isAddItemModalOpen} onClose={() => setIsAddItemModalOpen(false)} />
    </div>
  )
}

