import { Link } from 'react-router-dom'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="bg-[#0B1613] border-b border-[#C9A24B]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-bold text-[#C9A24B]">ZAYRON</Link>
          
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-[#F6F1E4] hover:text-[#C9A24B] transition">Home</Link>
            <Link to="/products" className="text-[#F6F1E4] hover:text-[#C9A24B] transition">Products</Link>
            <Link to="/cart" className="relative flex items-center gap-2 text-[#F6F1E4] hover:text-[#C9A24B] transition">
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#C9A24B] text-[#0B1613] rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <button
            className="md:hidden text-[#C9A24B]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4">
            <Link to="/" className="text-[#F6F1E4] hover:text-[#C9A24B] transition">Home</Link>
            <Link to="/products" className="text-[#F6F1E4] hover:text-[#C9A24B] transition">Products</Link>
            <Link to="/cart" className="flex items-center gap-2 text-[#F6F1E4] hover:text-[#C9A24B] transition">
              <ShoppingCart size={24} />
              Cart {cartCount > 0 && `(${cartCount})`}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}