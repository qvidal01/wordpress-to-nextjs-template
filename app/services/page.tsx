'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('retail');

  const industries = {
    retail: {
      title: 'Retail & Service Businesses',
      icon: '🏪',
      description: 'Auto shops, salons, convenience stores, and restaurants',
      color: 'from-blue-500 to-cyan-500',
      features: [
        { icon: '📅', title: 'Customer Management', desc: 'Automated scheduling, reminders, and follow-ups' },
        { icon: '📦', title: 'Inventory Tracking', desc: 'Real-time alerts and automated reordering' },
        { icon: '💳', title: 'Payment Integration', desc: 'Seamless POS and accounting connections' },
        { icon: '🔒', title: 'Security Systems', desc: 'Cameras, alarms, and remote monitoring' },
        { icon: '📧', title: 'Marketing Automation', desc: 'Email campaigns and loyalty programs' },
      ]
    },
    msp: {
      title: 'IT & Managed Service Providers',
      icon: '💻',
      description: 'MSPs, IT consultants, and technology providers',
      color: 'from-purple-500 to-pink-500',
      features: [
        { icon: '🎯', title: 'Client Portals', desc: 'Multi-tenant dashboards with real-time monitoring' },
        { icon: '🎫', title: 'Smart Ticketing', desc: 'Intelligent routing and automated responses' },
        { icon: '🛡️', title: 'Security Dashboard', desc: 'Centralized monitoring with auto-alerts' },
        { icon: '📝', title: 'Documentation', desc: 'Auto-generated reports and diagrams' },
        { icon: '💰', title: 'Billing Automation', desc: 'Usage-based invoicing and tracking' },
      ]
    },
    professional: {
      title: 'Professional Services',
      icon: '📋',
      description: 'Accounting, mortgage, logistics, and consulting',
      color: 'from-green-500 to-teal-500',
      features: [
        { icon: '🤝', title: 'CRM Integration', desc: 'Automated lead nurturing and onboarding' },
        { icon: '📄', title: 'Document Workflows', desc: 'E-signatures and approval routing' },
        { icon: '💬', title: 'Client Communication', desc: 'Scheduled updates and status reports' },
        { icon: '📊', title: 'Analytics Dashboard', desc: 'Real-time KPIs and performance metrics' },
        { icon: '🔐', title: 'Secure Sharing', desc: 'Encrypted client portals' },
      ]
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section with Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-24 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
              🚀 Transforming Businesses Since 2005
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Smart Automation for Modern Business
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We eliminate redundant tasks with AI-powered solutions tailored to your industry,
              driving measurable results and 10x productivity gains
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative">Get Free Consultation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#industries"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-200 hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Interactive Industry Solutions */}
      <section className="py-20 bg-white" id="industries">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that every industry has unique challenges. Our solutions are designed specifically for your business needs.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg scale-105`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-2xl">{industry.icon}</span>
                <span className="hidden sm:inline">{industry.title}</span>
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <div className="max-w-6xl mx-auto">
            {Object.entries(industries).map(([key, industry]) => (
              <div
                key={key}
                className={`transition-all duration-500 ${
                  activeTab === key ? 'block' : 'hidden'
                }`}
              >
                <div className={`bg-gradient-to-r ${industry.color} rounded-2xl p-8 text-white mb-8`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl">{industry.icon}</span>
                    <div>
                      <h3 className="text-3xl font-bold">{industry.title}</h3>
                      <p className="text-white/90">{industry.description}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {industry.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="text-4xl mb-3">{feature.icon}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Core Technology Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Automation',
                desc: 'Intelligent systems that learn from your workflows and continuously improve. Our AI solutions work 24/7 to keep your business running smoothly.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: '☁️',
                title: 'Cloud Infrastructure',
                desc: 'Scalable, secure cloud solutions with 99.9% uptime. We handle migration, optimization, and 24/7 monitoring.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: '🔒',
                title: 'Physical Security',
                desc: 'Professional-grade surveillance, access control, and monitoring systems with remote management capabilities.',
                gradient: 'from-red-500 to-orange-500'
              },
              {
                icon: '📊',
                title: 'Business Intelligence',
                desc: 'Transform data into actionable insights with custom dashboards and automated reporting systems.',
                gradient: 'from-green-500 to-teal-500'
              },
              {
                icon: '🔗',
                title: 'Custom Integrations',
                desc: 'Connect all your tools seamlessly. We build custom integrations that eliminate manual data entry.',
                gradient: 'from-indigo-500 to-purple-500'
              },
              {
                icon: '🎯',
                title: 'Workflow Optimization',
                desc: 'Identify bottlenecks and automate repetitive tasks. Increase productivity by up to 10x.',
                gradient: 'from-pink-500 to-rose-500'
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative">
                  <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            A systematic approach that ensures successful implementation and maximum ROI
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block"></div>

              {[
                { step: 1, icon: '🔍', title: 'Discovery & Assessment', desc: 'Deep dive into your workflows, pain points, and goals', color: 'blue' },
                { step: 2, icon: '📋', title: 'Strategy & Planning', desc: 'Design solutions that fit your budget and timeline', color: 'purple' },
                { step: 3, icon: '⚙️', title: 'Custom Development', desc: 'Build and configure using cutting-edge technologies', color: 'pink' },
                { step: 4, icon: '🚀', title: 'Implementation', desc: 'Deploy with minimal disruption and thorough testing', color: 'orange' },
                { step: 5, icon: '🎓', title: 'Training & Support', desc: 'Comprehensive training and 24/7 ongoing support', color: 'green' },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-start mb-12 last:mb-0">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg relative z-10`}>
                    {item.step}
                  </div>
                  <div className="ml-8 flex-grow bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{item.icon}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-lg">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to 10x Your Productivity?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation and discover how automation can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-purple-600 bg-white rounded-xl hover:scale-105 transition-transform shadow-2xl"
            >
              Schedule Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white border-2 border-white rounded-xl hover:bg-white hover:text-purple-600 transition-all"
            >
              Back to Homepage
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-white/80">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
