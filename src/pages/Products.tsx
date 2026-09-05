import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

interface Product {
  slug: string
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  badge?: string
  desc: string
}

const SAMPLE_PRODUCTS: Product[] = [
  {
    slug: 'premium-shirt-1',
    name: 'Premium Cotton Shirt',
    price: 2500,
    oldPrice: 3500,
    image: 'https://images.unsplash.com/photo-1596399579883-072a50dcb1c0?w=400&h=400&fit=crop',
    category: 'Clothing',
    badge: 'Sale',
    desc: 'Luxurious cotton shirt perfect for any occasion',
  },
  {
    slug: 'dress-1',
    name: 'Elegant Dress',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1595777712802-5b5f4b08a0c7?w=400&h=400&fit=crop',
    category: 'Clothing',
    badge: 'New',
    desc: 'Sophisticated dress for special occasions',
  },
  {
    slug: 'leather-shoes-1',
    name: 'Leather Shoes',
    price: 5500,
    oldPrice: 7000,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    category: 'Footwear',
    badge: 'Sale',
    desc: 'Premium leather shoes with exceptional comfort',
  },
  {
    slug: 'formal-shoes-1',
    name: 'Formal Shoes',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1504060890962-8f4acffd3c89?w=400&h=400&fit=crop',
    category: 'Footwear',
    desc: 'Professional formal shoes for business meetings',
  },
  {
    slug: 'fragrance-1',
    name: 'Luxury Perfume',
    price: 3500,
    oldPrice: 4500,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&h=400&fit=crop',
    category: 'Fragrance',
    badge: 'Hot',
    desc: 'Exquisite fragrance from international brands',
  },
  {
    slug: 'fragrance-2',
    name: 'Premium Cologne',
    price: 4000,
    image: 'https://images.unsplash.com/photo-1588308921097-de728f93fb00?w=400&h=400&fit=crop',
    category: 'Fragrance',
    desc: 'Sophisticated cologne for the modern gentleman',
  },
  {
    slug: 'watch-1',
    name: 'Luxury Watch',
    price: 12000,
    oldPrice: 15000,
    image: 'https://images.unsplash.com/photo-1523170335684-f042f1e9f1b9?w=400&h=400&fit=crop',
    category: 'Accessories',
    badge: 'Sale',
    desc: 'Premium timepiece with elegant design',
  },
  {
    slug: 'belt-1',
    name: 'Designer Belt',
    price: 2000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    category: 'Accessories',
    desc: 'Classic leather belt perfect with any outfit',
  },
]

export default function Products() {
  const [products, setProducts] = useState<Product[]>(SAMPLE_PRODUCTS)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    let filtered = SAMPLE_PRODUCTS

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setProducts(filtered)
  }, [selectedCategory, searchTerm])

  const categories = ['All', 'Clothing', 'Footwear', 'Fragrance', 'Accessories']

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#C9A24B] mb-4 text-center">Our Collection</h1>
        <p className="text-center text-gray-300 mb-12">Discover our curated selection of luxury items</p>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 bg-[#1A2B1F] text-[#F6F1E4] border border-[#C9A24B] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === cat
                    ? 'bg-[#C9A24B] text-[#0B1613] font-semibold'
                    : 'bg-[#1A2B1F] text-[#F6F1E4] border border-[#C9A24B] hover:bg-[#2B3C2F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-300">No products found</p>
          </div>
        )}
      </div>
    </div>
  )
}