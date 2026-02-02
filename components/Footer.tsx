import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/aiqso-logo.png"
                alt="AIQSO Logo"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">
              AI-Powered Infrastructure Solutions for Modern Businesses
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services#bi" className="hover:text-white">Business Intelligence</Link></li>
              <li><Link href="/services#cloud" className="hover:text-white">Cloud Solutions</Link></li>
              <li><Link href="/services#security" className="hover:text-white">Security Services</Link></li>
              <li><Link href="/services#automation" className="hover:text-white">Smart Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link href="/aiqso-io-privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 (123) 456-7890</li>
              <li>✉️ support@aiqso.io</li>
              <li>📍 Your City, State</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AIQSO.IO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
