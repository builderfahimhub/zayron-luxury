export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1613] border-t border-[#C9A24B] mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#C9A24B] mb-4">ZAYRON</h3>
            <p className="text-[#F6F1E4]">Modest luxury clothing, footwear, fragrance and accessories tailored in Sylhet, Bangladesh.</p>
          </div>
          
          <div>
            <h4 className="text-[#C9A24B] font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#F6F1E4]">
              <li><a href="#" className="hover:text-[#C9A24B] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#C9A24B] transition">Products</a></li>
              <li><a href="#" className="hover:text-[#C9A24B] transition">About</a></li>
              <li><a href="#" className="hover:text-[#C9A24B] transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#C9A24B] font-semibold mb-4">Contact</h4>
            <p className="text-[#F6F1E4] mb-2">Email: info@zayron.com</p>
            <p className="text-[#F6F1E4] mb-2">Phone: +880 1XXX-XXXXXX</p>
            <p className="text-[#F6F1E4]">Sylhet, Bangladesh</p>
          </div>
        </div>

        <div className="border-t border-[#C9A24B] pt-8">
          <p className="text-center text-[#F6F1E4]">© {currentYear} ZAYRON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}