import Link from 'next/link';

export const metadata = {
  title: 'Hosted Services Portal | AIQSO',
  description: 'Manage your hosted infrastructure and services',
};

export default function ServicesPortalPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🔧</div>
          <h1 className="text-5xl font-bold mb-4">Hosted Services</h1>
          <p className="text-xl text-gray-100">Manage your hosted infrastructure and services</p>
        </div>
      </section>

      {/* Services Dashboard */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Login Required Notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex">
              <div className="text-3xl mr-4">🔐</div>
              <div>
                <h3 className="text-lg font-bold text-yellow-900 mb-2">Authentication Required</h3>
                <p className="text-yellow-800">
                  Access to hosted services management requires authentication. Please sign in or contact us for credentials.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Login */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Portal Login</h2>
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
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Access Services
              </button>
            </form>
          </div>

          {/* Service Categories */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Available Service Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

            {/* Server Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">🖥️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Server Management</h3>
              <p className="text-gray-600 mb-4">
                Monitor and manage your hosted servers
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Server status and uptime</li>
                <li>• Resource monitoring</li>
                <li>• Restart and maintenance</li>
                <li>• Performance metrics</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

            {/* Database Management */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Database Services</h3>
              <p className="text-gray-600 mb-4">
                Manage your hosted databases
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Database backups</li>
                <li>• Query performance</li>
                <li>• User management</li>
                <li>• Connection monitoring</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

            {/* Web Hosting */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Web Hosting</h3>
              <p className="text-gray-600 mb-4">
                Manage your hosted websites
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Domain management</li>
                <li>• SSL certificates</li>
                <li>• FTP/SFTP access</li>
                <li>• Traffic analytics</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

            {/* Email Hosting */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Hosting</h3>
              <p className="text-gray-600 mb-4">
                Manage hosted email services
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Email accounts</li>
                <li>• Spam filtering</li>
                <li>• Forwarding rules</li>
                <li>• Storage quotas</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

            {/* Backup Services */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Backup Management</h3>
              <p className="text-gray-600 mb-4">
                Manage your backup services
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Automated backups</li>
                <li>• Restore options</li>
                <li>• Backup scheduling</li>
                <li>• Storage management</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

            {/* Monitoring & Alerts */}
            <div className="bg-white rounded-xl shadow-lg p-8 opacity-50">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Monitoring & Alerts</h3>
              <p className="text-gray-600 mb-4">
                System monitoring and notifications
              </p>
              <ul className="space-y-2 text-sm text-gray-600 mb-4">
                <li>• Real-time alerts</li>
                <li>• Performance graphs</li>
                <li>• Incident history</li>
                <li>• Custom thresholds</li>
              </ul>
              <div className="text-gray-500 text-sm">🔒 Login required</div>
            </div>

          </div>

          {/* Support Section */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support Available</h3>
            <p className="text-gray-700 mb-4">
              Our infrastructure team is available around the clock to assist with your hosted services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">📞</span>
                <div>
                  <div className="font-semibold">Phone Support</div>
                  <div className="text-sm text-gray-600">24/7 hotline</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">💬</span>
                <div>
                  <div className="font-semibold">Live Chat</div>
                  <div className="text-sm text-gray-600">Instant help</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-3">📧</span>
                <div>
                  <div className="font-semibold">Email Tickets</div>
                  <div className="text-sm text-gray-600">Detailed support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Get Started CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need Hosting Services?</h3>
            <p className="text-gray-100 mb-6">
              Contact us to discuss your hosting requirements and get started with enterprise-grade infrastructure.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
