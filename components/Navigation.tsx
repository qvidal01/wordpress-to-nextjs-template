'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <a href="tel:+1234567890" className="hover:text-blue-400">📞 (123) 456-7890</a>
            <a href="mailto:support@aiqso.io" className="hover:text-blue-400">✉️ support@aiqso.io</a>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/aiqso" target="_blank" rel="noopener" className="hover:text-blue-400">📷</a>
            <a href="https://facebook.com/aiqso" target="_blank" rel="noopener" className="hover:text-blue-400">📘</a>
            <a href="https://twitter.com/aiqso" target="_blank" rel="noopener" className="hover:text-blue-400">🐦</a>
            <a href="https://youtube.com/@AIQSO" target="_blank" rel="noopener" className="hover:text-blue-400">📺</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/aiqso-logo.png"
                alt="AIQSO - Applied Intelligence"
                width={60}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
              <li>
                <Link href="/client-portal" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Client Portal
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4">
              <Link href="/" className="block py-2 hover:text-blue-600">Home</Link>
              <Link href="/services" className="block py-2 hover:text-blue-600">Services</Link>
              <Link href="/about" className="block py-2 hover:text-blue-600">About</Link>
              <Link href="/contact" className="block py-2 hover:text-blue-600">Contact</Link>
              <Link href="/client-portal" className="block py-2 text-blue-600">Client Portal</Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
