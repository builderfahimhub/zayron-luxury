import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 text-[#C9A24B]">ZAYRON</h1>
        <p className="text-xl mb-8 text-[#F6F1E4]">Luxury, Sylhet</p>
        <p className="text-lg text-gray-300 mb-12">Modest luxury clothing, footwear, fragrance and accessories</p>
        
        <div className="bg-[#1A2B1F] p-8 rounded-lg border border-[#C9A24B]">
          <p className="text-[#F6F1E4] mb-6">Count: {count}</p>
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-[#C9A24B] text-[#0B1613] font-semibold rounded hover:bg-[#D4B566] transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default App