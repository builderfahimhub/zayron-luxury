import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const categories = [
    { name: 'Clothing', emoji: '👔', color: 'from-purple-600' },
    { name: 'Footwear', emoji: '👞', color: 'from-blue-600' },
    { name: 'Fragrance', emoji: '🧴', color: 'from-pink-600' },
    { name: 'Accessories', emoji: '💎', color: 'from-amber-600' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A2B1F] to-[#0B1613] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-[#C9A24B] mb-6">ZAYRON</h1>
          <p className="text-2xl md:text-3xl text-[#F6F1E4] mb-4">Luxury Refined</p>
          <p className="text-lg text-gray-300 mb-8">Modest luxury clothing, footwear, fragrance and accessories tailored in Sylhet, Bangladesh</p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#C9A24B] text-[#0B1613] px-8 py-4 rounded-lg font-semibold hover:bg-[#D4B566] transition"
          >
            Explore Collection
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#C9A24B] mb-12 text-center">Shop by Category</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to="/products">
              <div className={`bg-gradient-to-br ${cat.color} to-[#0B1613] p-8 rounded-lg text-center hover:shadow-xl transition transform hover:scale-105 cursor-pointer`}>
                <div className="text-6xl mb-4">{cat.emoji}</div>
                <h3 className="text-2xl font-bold text-white">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1A2B1F] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#C9A24B] mb-12 text-center">Why Choose ZAYRON</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-[#F6F1E4] mb-2">Premium Quality</h3>
              <p className="text-gray-300">Handpicked luxury items curated for the discerning customer</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-[#F6F1E4] mb-2">Fast Delivery</h3>
              <p className="text-gray-300">Quick and reliable shipping across Bangladesh</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="text-xl font-bold text-[#F6F1E4] mb-2">Authentic</h3>
              <p className="text-gray-300">100% genuine products with authenticity guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}