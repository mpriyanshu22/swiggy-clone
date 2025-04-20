function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-3">Swiggy</h1>
          <p className="text-sm text-gray-400">
            Delivering food happiness at your doorstep. Fast, fresh, and affordable.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Team</a></li>
            <li><a href="#" className="hover:text-white">Swiggy Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Help & Support</a></li>
            <li><a href="#" className="hover:text-white">Partner with us</a></li>
            <li><a href="#" className="hover:text-white">Ride with us</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Contact</h3>
          <p className="text-sm text-gray-400 mb-4">Email: support@swiggy.com</p>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-10 px-4">
        © {new Date().getFullYear()} Swiggy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
