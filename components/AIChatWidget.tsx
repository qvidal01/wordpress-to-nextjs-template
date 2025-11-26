'use client';

import Image from 'next/image';
import { useState } from 'react';

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        aria-label="Open AI Chat"
      >
        <Image
          src="/ai-chat-icon.png"
          alt="AI Assistant"
          width={48}
          height={48}
          className="object-cover rounded-full"
        />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/ai-chat-icon.png"
                alt="AI Assistant"
                width={40}
                height={40}
                className="object-cover rounded-full border-2 border-white"
              />
              <div>
                <h3 className="font-bold">AI Assistant</h3>
                <p className="text-xs text-blue-100">Online • Powered by AIQSO</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {/* Welcome Message */}
            <div className="flex gap-3">
              <Image
                src="/ai-chat-icon.png"
                alt="AI"
                width={32}
                height={32}
                className="object-cover rounded-full h-8"
              />
              <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]">
                <p className="text-gray-800">
                  👋 Hello! I'm your AI assistant. How can I help you today?
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  <button className="text-left text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg transition-colors">
                    📊 Tell me about your services
                  </button>
                  <button className="text-left text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg transition-colors">
                    💼 Schedule a consultation
                  </button>
                  <button className="text-left text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-lg transition-colors">
                    🔒 Ask about security solutions
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-full hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by AIQSO Applied Intelligence
            </p>
          </div>
        </div>
      )}
    </>
  );
}
