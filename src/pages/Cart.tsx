import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { Plus, Minus, Trash2, ArrowLeft } from 'lucide-react'

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart()
  const navigate = useNavigate()

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#C9A24B] mb-4">Your Cart</h1>
          <p className="text-2xl text-gray-300 mb-8">Your cart is empty</p>
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center gap-2 bg-[#C9A24B] text-[#0B1613] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B566] transition"
          >
            <ArrowLeft size={20} />
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C9A24B] mb-8">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.slug} className="bg-[#1A2B1F] p-6 rounded-lg border border-[#C9A24B] flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded"
                  />
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-[#F6F1E4] mb-2">{item.name}</h3>
                    <p className="text-[#C9A24B] font-semibold mb-4">৳{item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                        className="bg-[#C9A24B] text-[#0B1613] p-2 rounded hover:bg-[#D4B566] transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-[#F6F1E4] font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                        className="bg-[#C9A24B] text-[#0B1613] p-2 rounded hover:bg-[#D4B566] transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[#F6F1E4] font-bold mb-4">৳{(item.price * item.quantity).toLocaleString()}</p>
                    <button
                      onClick={() => removeItem(item.slug)}
                      className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => navigate('/products')}
              className="mt-8 text-[#C9A24B] hover:underline flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Continue Shopping
            </button>
          </div>

          {/* Cart Summary */}
          <div className="bg-[#1A2B1F] p-8 rounded-lg border border-[#C9A24B] h-fit">
            <h2 className="text-2xl font-bold text-[#F6F1E4] mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping:</span>
                <span>৳200</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax:</span>
                <span>৳{Math.round(total * 0.05).toLocaleString()}</span>
              </div>
              <div className="border-t border-[#C9A24B] pt-4 flex justify-between text-[#C9A24B] font-bold text-lg">
                <span>Total:</span>
                <span>৳{(total + 200 + Math.round(total * 0.05)).toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-[#C9A24B] text-[#0B1613] py-3 rounded-lg font-bold hover:bg-[#D4B566] transition mb-4"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={clearCart}
              className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}