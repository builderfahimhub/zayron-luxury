import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'

interface ProductCardProps {
  slug: string
  name: string
  price: number
  oldPrice?: number
  image: string
  category: string
  badge?: string
}

export default function ProductCard({
  slug,
  name,
  price,
  oldPrice,
  image,
  badge,
}: ProductCardProps) {
  return (
    <Link to={`/products/${slug}`}>
      <div className="bg-[#1A2B1F] rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105 h-full">
        <div className="relative h-64 bg-gray-800 overflow-hidden">
          <img
            src={image || 'https://via.placeholder.com/300x300?text=Product'}
            alt={name}
            className="w-full h-full object-cover"
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-[#C9A24B] text-[#0B1613] px-3 py-1 rounded-full text-sm font-semibold">
              {badge}
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#F6F1E4] mb-2 truncate">{name}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl font-bold text-[#C9A24B]">৳{price.toLocaleString()}</span>
            {oldPrice && (
              <span className="text-sm text-gray-400 line-through">৳{oldPrice.toLocaleString()}</span>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-[#C9A24B] fill-[#C9A24B]" />
              ))}
            </div>
            <span className="text-[#C9A24B] hover:underline">View →</span>
          </div>
        </div>
      </div>
    </Link>
  )
}