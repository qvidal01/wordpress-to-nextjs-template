'use client';

import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    icon: '📊',
    title: 'Business Intelligence',
    description: 'Transform your data into actionable insights with our comprehensive analytics solutions.',
    link: '/services#bi'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure designed for modern businesses and rapid growth.',
    link: '/services#cloud'
  },
  {
    icon: '🔒',
    title: 'Security Services',
    description: 'Enterprise-grade security solutions to protect your digital assets and data.',
    link: '/services#security'
  },
  {
    icon: '🤖',
    title: 'Smart Automation',
    description: 'AI-powered automation to streamline workflows and increase efficiency.',
    link: '/services#automation'
  },
  {
    icon: '🏠',
    title: 'Smart Home/Office',
    description: 'Intelligent building solutions for homes and modern workspaces.',
    link: '/services#smart'
  },
  {
    icon: '💡',
    title: 'IT Consulting',
    description: 'Strategic technology consulting to align IT with your business goals.',
    link: '/services#consulting'
  }
];

export function ServicesGrid() {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring the latest technologies to your business with our industry-specific solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, link }: typeof services[0]) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-64 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute inset-0 bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center backface-hidden border border-gray-200">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-2xl font-bold text-gray-900 text-center">{title}</h3>
          <div className="mt-4 text-gray-400 text-sm">Hover to learn more</div>
        </div>

        {/* Back of card */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 flex flex-col justify-between backface-hidden rotate-y-180 text-white">
          <p className="text-lg">{description}</p>
          <Link
            href={link}
            className="mt-4 inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
