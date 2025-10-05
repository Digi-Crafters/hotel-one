import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-amber-500 mb-3">
              Royal Comfort
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
              Luxury beach resort offering unforgettable experiences with world-class amenities.
            </p>
            <div className="flex space-x-3">
              {['📘', '📷', '🐦', '📱'].map((icon, index) => (
                <button key={index} className="text-gray-400 hover:text-amber-500 transition-colors text-base">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 md:flex-col md:space-y-2 md:gap-0">
              {['Rooms & Suites', 'Amenities', 'Gallery', 'Dining', 'Spa'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-600 hover:text-amber-500 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">Contact Us</h4>
            <div className="flex flex-wrap gap-4 md:flex-col md:space-y-2 md:gap-0 text-gray-600 text-sm">
              <div className="flex items-start space-x-2">
                <span className="mt-0.5">📍</span>
                <span className="hidden md:inline">123 Beachfront Ave<br />Paradise Island</span>
                <span className="md:hidden">123 Beachfront Ave, Paradise Island</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <span className="break-all">hello@royalcomfort.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-gray-900">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-3">
              Exclusive offers and updates
            </p>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-amber-400 transition-colors text-sm"
              />
              <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-gray-500 text-xs">
              © 2024 Royal Comfort Beach Resort. All rights reserved.
            </p>
            <div className="flex space-x-4 text-xs text-gray-500">
              <Link href="#" className="hover:text-amber-500 transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">Terms</Link>
              <Link href="#" className="hover:text-amber-500 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer