import React, { createContext, useState, useContext, ReactNode } from 'react'

interface CartItem {
  slug: string
  name: string
  price: number
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (slug: string) => void
  updateQuantity: (slug: string, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.slug === item.slug)
      if (existingItem) {
        return prevItems.map((i) =>
          i.slug === item.slug
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      }
      return [...prevItems, item]
    })
  }

  const removeItem = (slug: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.slug !== slug))
  }

  const updateQuantity = (slug: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(slug)
    } else {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.slug === slug ? { ...i, quantity } : i
        )
      )
    }
  }

  const clearCart = () => {
    setItems([])
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}