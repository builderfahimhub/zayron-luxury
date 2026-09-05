import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export default function Checkout() {
  const { items, total, clearCart } = useCart()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    deliveryZone: '',
    payMethod: 'card',
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [trackerId, setTrackerId] = useState('')

  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl text-gray-300 mb-8">Your cart is empty</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#C9A24B] text-[#0B1613] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B566] transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate order processing
    setTimeout(() => {
      const tracker = `ZAYRON-${Date.now()}`
      setTrackerId(tracker)
      setOrderPlaced(true)
      clearCart()
      setIsProcessing(false)
    }, 2000)
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <CheckCircle className="w-24 h-24 text-[#C9A24B] mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-[#C9A24B] mb-4">Order Placed Successfully!</h1>
          <p className="text-xl text-gray-300 mb-8">Thank you for your purchase.</p>
          
          <div className="bg-[#1A2B1F] p-6 rounded-lg border border-[#C9A24B] mb-8">
            <p className="text-[#F6F1E4] mb-2"><strong>Tracker ID:</strong></p>
            <p className="text-2xl font-bold text-[#C9A24B] mb-4">{trackerId}</p>
            <p className="text-gray-300">Use this ID to track your order</p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">Order Details:</p>
            <p className="text-[#F6F1E4]"><strong>Name:</strong> {formData.name}</p>
            <p className="text-[#F6F1E4]"><strong>Phone:</strong> {formData.phone}</p>
            <p className="text-[#F6F1E4]"><strong>Address:</strong> {formData.address}</p>
            <p className="text-[#F6F1E4]"><strong>Total Amount:</strong> ৳{(total + 200 + Math.round(total * 0.05)).toLocaleString()}</p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-8 bg-[#C9A24B] text-[#0B1613] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B566] transition"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#C9A24B] mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#1A2B1F] p-8 rounded-lg border border-[#C9A24B]">
              <h2 className="text-2xl font-bold text-[#F6F1E4] mb-6">Delivery Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Delivery Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                    placeholder="Enter your delivery address"
                  />
                </div>

                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Delivery Zone *</label>
                  <select
                    name="deliveryZone"
                    value={formData.deliveryZone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                  >
                    <option value="">Select delivery zone</option>
                    <option value="sylhet-city">Sylhet City</option>
                    <option value="sylhet-suburban">Sylhet Suburban</option>
                    <option value="outside-sylhet">Outside Sylhet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#F6F1E4] font-semibold mb-2">Payment Method *</label>
                  <select
                    name="payMethod"
                    value={formData.payMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0B1613] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
                  >
                    <option value="card">Credit/Debit Card</option>
                    <option value="mobile">Mobile Banking</option>
                    <option value="cash">Cash on Delivery</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full mt-8 bg-[#C9A24B] text-[#0B1613] py-3 rounded-lg font-bold hover:bg-[#D4B566] transition disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Place Order'}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-[#1A2B1F] p-8 rounded-lg border border-[#C9A24B] h-fit">
            <h2 className="text-2xl font-bold text-[#F6F1E4] mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {items.map((item) => (
                <div key={item.slug} className="flex justify-between text-gray-300">
                  <span>{item.name} x{item.quantity}</span>
                  <span>৳{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-[#C9A24B] pt-6 space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>৳{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping:</span>
                <span>৳200</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Tax (5%):</span>
                <span>৳{Math.round(total * 0.05).toLocaleString()}</span>
              </div>
              <div className="border-t border-[#C9A24B] pt-3 flex justify-between text-[#C9A24B] font-bold text-lg">
                <span>Total:</span>
                <span>৳{(total + 200 + Math.round(total * 0.05)).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}