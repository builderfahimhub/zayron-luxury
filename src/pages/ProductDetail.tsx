import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const SAMPLE_PRODUCTS: any = {
  'premium-shirt-1': {
    slug: 'premium-shirt-1',
    name: 'Premium Cotton Shirt',
    price: 2500,
    oldPrice: 3500,
    image: 'https://images.unsplash.com/photo-1596399579883-072a50dcb1c0?w=600&h=600&fit=crop',
    category: 'Clothing',
    badge: 'Sale',
    desc: 'Luxurious cotton shirt perfect for any occasion',
    longDesc: 'Our premium cotton shirt is crafted from the finest materials available. With its elegant design and comfortable fit, it is perfect for casual outings or formal events. Available in multiple colors and sizes.',
    stock: 15,
  },
  'dress-1': {
    slug: 'dress-1',
    name: 'Elegant Dress',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1595777712802-5b5f4b08a0c7?w=600&h=600&fit=crop',
    category: 'Clothing',
    badge: 'New',
    desc: 'Sophisticated dress for special occasions',
    longDesc: 'This elegant dress is designed for those special moments in life. Made with premium fabric and expert tailoring, it ensures you look and feel your best.',
    stock: 8,
  },
  'leather-shoes-1': {
    slug: 'leather-shoes-1',
    name: 'Leather Shoes',
    price: 5500,
    oldPrice: 7000,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&h=600&fit=crop',
    category: 'Footwear',
    badge: 'Sale',
    desc: 'Premium leather shoes with exceptional comfort',
    longDesc: 'Experience ultimate comfort and style with our premium leather shoes. Hand-selected leather and expert craftsmanship ensure durability and elegance.',
    stock: 12,
  },
  'formal-shoes-1': {
    slug: 'formal-shoes-1',
    name: 'Formal Shoes',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1504060890962-8f4acffd3c89?w=600&h=600&fit=crop',
    category: 'Footwear',
    desc: 'Professional formal shoes for business meetings',
    longDesc: 'These formal shoes are perfect for business professionals. With their sleek design and comfortable sole, they are ideal for long days at work.',
    stock: 10,
  },
  'fragrance-1': {
    slug: 'fragrance-1',
    name: 'Luxury Perfume',
    price: 3500,
    oldPrice: 4500,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=600&fit=crop',
    category: 'Fragrance',
    badge: 'Hot',
    desc: 'Exquisite fragrance from international brands',
    longDesc: 'Indulge in our luxury perfume collection, featuring fragrances from renowned international brands. Each scent is carefully selected to provide a unique and memorable experience.',
    stock: 20,
  },
  'fragrance-2': {
    slug: 'fragrance-2',
    name: 'Premium Cologne',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1588308921097-de728f93fb00?w=600&h=600&fit=crop',
    category: 'Fragrance',
    desc: 'Sophisticated cologne for the modern gentleman',
    longDesc: 'Our premium cologne is designed for the modern gentleman. With its sophisticated aroma and long-lasting formula, it is the perfect choice for any occasion.',
    stock: 18,
  },
  'watch-1': {
    slug: 'watch-1',
    name: 'Luxury Watch',
    price: 12000,
    oldPrice: 15000,
    image: 'https://images.unsplash.com/photo-1523170335684-f042f1e9f1b9?w=600&h=600&fit=crop',
    category: 'Accessories',
    badge: 'Sale',
    desc: 'Premium timepiece with elegant design',
    longDesc: 'Our luxury watch is a masterpiece of engineering and design. With its precise movement and elegant design, it is a timeless piece that will complement any wardrobe.',
    stock: 5,
  },
  'belt-1': {
    slug: 'belt-1',
    name: 'Designer Belt',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
    category: 'Accessories',
    desc: 'Classic leather belt perfect with any outfit',
    longDesc: 'This designer belt is crafted from premium leather and features a sleek buckle design. Perfect for adding a touch of sophistication to any outfit.',
    stock: 25,
  },
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const product = SAMPLE_PRODUCTS[slug || '']

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#C9A24B] mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/products')}
            className="bg-[#C9A24B] text-[#0B1613] px-6 py-3 rounded-lg font-semibold hover:bg-[#D4B566] transition"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    })
    navigate('/cart')
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate('/products')}
          className="text-[#C9A24B] hover:underline mb-8 flex items-center gap-2"
        >
          ← Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-[#1A2B1F] rounded-lg p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-4">
              {product.badge && (
                <span className="bg-[#C9A24B] text-[#0B1613] px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {product.badge}
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-[#F6F1E4] mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-6">{product.category}</p>

            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl font-bold text-[#C9A24B]">৳{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-xl text-gray-400 line-through">৳{product.oldPrice.toLocaleString()}</span>
                )}
              </div>
              {product.oldPrice && (
                <p className="text-[#C9A24B] font-semibold">
                  Save ৳{(product.oldPrice - product.price).toLocaleString()} ({Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%)
                </p>
              )}
            </div>

            <p className="text-gray-300 mb-8 text-lg leading-relaxed">{product.longDesc}</p>

            <div className="mb-8 p-4 bg-[#1A2B1F] rounded-lg border border-[#C9A24B]">
              <p className="text-[#F6F1E4]"><strong>Stock Available:</strong> {product.stock} items</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-[#F6F1E4] font-semibold mb-4">Quantity:</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-[#C9A24B] text-[#0B1613] p-2 rounded hover:bg-[#D4B566] transition"
                >
                  <Minus size={20} />
                </button>
                <span className="text-2xl font-bold text-[#F6F1E4] w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="bg-[#C9A24B] text-[#0B1613] p-2 rounded hover:bg-[#D4B566] transition"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-[#C9A24B] text-[#0B1613] py-4 rounded-lg font-bold text-lg hover:bg-[#D4B566] transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={24} />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}