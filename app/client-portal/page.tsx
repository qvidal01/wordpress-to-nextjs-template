import Link from 'next/link';

export const metadata = {
  title: 'Client Portal | AIQSO',
  description: 'Access your AIQSO services and manage your account',
};

export default function ClientPortalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Client Portal</h1>
          <p className="text-xl text-gray-100">Access your services and manage your account</p>
        </div>
      </section>

      {/* Portal Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Demo Portal */}
            <Link href="/portal-demo" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Demo Portal</h3>
                <p className="text-gray-600">
                  Try our services with a live demo environment
                </p>
                <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Launch Demo →
                </div>
              </div>
            </Link>

            {/* Cloud Applications */}
            <Link href="/portal-cloud" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="text-5xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Cloud Applications</h3>
                <p className="text-gray-600">
                  Access your cloud-hosted applications
                </p>
                <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  Open Portal →
                </div>
              </div>
            </Link>

            {/* Hosted Services */}
            <Link href="/portal-services" className="group">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hosted Services</h3>
                <p className="text-gray-600">
                  Manage your hosted infrastructure
                </p>
                <div className="mt-4 text-blue-600 font-semibold group-hover:translate-x-2 transition-transform inline-block">
                  View Services →
                </div>
              </div>
            </Link>

          </div>

          {/* Login Section */}
          <div className="mt-16 bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
              <div className="text-center text-sm text-gray-600">
                <Link href="/contact" className="text-blue-600 hover:underline">
                  Need access? Contact us
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
