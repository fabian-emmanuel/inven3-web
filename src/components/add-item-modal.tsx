import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface AddItemModalProps {
  isOpen: boolean
  onClose: () => void
}

// This would typically come from your backend or state management
const existingItems = ['iPhone Case', 'Screen Protector', 'Charging Cable', 'Power Bank']

export const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose }) => {
  const [itemName, setItemName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [costPrice, setCostPrice] = useState('')
  const [sellingPrice, setSellingPrice] = useState('')
  const [isNewItem, setIsNewItem] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the new item data to your backend
    console.log('New item:', { itemName, quantity, costPrice, sellingPrice })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Item</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="item-name">Item Name</Label>
            <Select onValueChange={(value) => {
              setItemName(value)
              setIsNewItem(value === 'new')
            }}>
              <SelectTrigger>
                <SelectValue placeholder="Select or enter item name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new">Enter new item name</SelectItem>
                {existingItems.map((item) => (
                  <SelectItem key={item} value={item}>{item}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {isNewItem && (
              <Input
                id="new-item-name"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter new item name"
              />
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cost-price">Cost Price</Label>
            <Input
              id="cost-price"
              type="number"
              step="0.01"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
              placeholder="Enter cost price"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="selling-price">Selling Price</Label>
            <Input
              id="selling-price"
              type="number"
              step="0.01"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              placeholder="Enter selling price"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Add Item</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

