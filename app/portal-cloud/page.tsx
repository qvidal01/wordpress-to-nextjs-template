import Link from 'next/link';

export const metadata = {
  title: 'Cloud Applications Portal | AIQSO',
  description: 'Access your cloud-hosted applications and services',
};

export default function CloudPortalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">☁️</div>
          <h1 className="text-5xl font-bold mb-4">Cloud Applications</h1>
          <p className="text-xl text-gray-100">Access your cloud-hosted applications and services</p>
        </div>
      </section>

      {/* Login Required Notice */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <div className="text-3xl mr-4">🔐</div>
              <div>
                <h3 className="text-lg font-bold text-yellow-900 mb-2">Authentication Required</h3>
                <p className="text-yellow-800">
                  You must be logged in to access cloud applications. Please sign in below or contact us for access credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <Link href="/contact" className="text-blue-600 hover:underline text-sm">
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Available Applications Preview */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Cloud Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📧</div>
                  <h3 className="text-xl font-bold text-gray-900">Email Suite</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Enterprise email with calendar and contacts
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📁</div>
                  <h3 className="text-xl font-bold text-gray-900">File Storage</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Secure cloud file storage and sharing
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">💬</div>
                  <h3 className="text-xl font-bold text-gray-900">Team Chat</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Real-time team communication platform
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">📊</div>
                  <h3 className="text-xl font-bold text-gray-900">Analytics Dashboard</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Business intelligence and reporting
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🗂️</div>
                  <h3 className="text-xl font-bold text-gray-900">Project Management</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Track projects, tasks, and team progress
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 opacity-50">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900">AI Assistant</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  AI-powered business automation tools
                </p>
                <div className="flex items-center text-gray-500">
                  <span className="text-sm">🔒 Login required</span>
                </div>
              </div>

            </div>
          </div>

          {/* Need Access */}
          <div className="bg-purple-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Access?</h3>
            <p className="text-gray-700 mb-6">
              Contact our team to set up your cloud applications account and get your credentials.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-purple-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Request Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
