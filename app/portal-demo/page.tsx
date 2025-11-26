import Link from 'next/link';

export const metadata = {
  title: 'Demo Portal | AIQSO',
  description: 'Try our services with a live demo environment',
};

export default function DemoPortalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-5xl font-bold mb-4">Demo Portal</h1>
          <p className="text-xl text-gray-100">Experience our services in a live demo environment</p>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Demo Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Business Intelligence Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">BI Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Explore interactive business intelligence dashboards with sample data
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

            {/* Infrastructure Management Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Infrastructure Panel</h3>
              <p className="text-gray-600 mb-4">
                Test drive our infrastructure management interface
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

            {/* AI Solutions Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI Assistant</h3>
              <p className="text-gray-600 mb-4">
                Interact with our AI-powered business automation tools
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

            {/* Security Monitoring Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Security Center</h3>
              <p className="text-gray-600 mb-4">
                View our comprehensive security monitoring dashboard
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

            {/* Cloud Management Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Console</h3>
              <p className="text-gray-600 mb-4">
                Manage cloud resources with our intuitive interface
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

            {/* Automation Demo */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Automation Studio</h3>
              <p className="text-gray-600 mb-4">
                Create and test workflow automations visually
              </p>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Launch Demo
              </button>
            </div>

          </div>

          {/* Info Section */}
          <div className="mt-16 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Environment Information</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>All demos use sample data and are fully functional</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>No registration required to explore features</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Demo sessions are isolated and secure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Contact us to schedule a personalized demo with your data</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for Production?</h3>
            <p className="text-gray-600 mb-6">
              Contact us to set up your own dedicated environment
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
