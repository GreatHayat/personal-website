"use client";
import React from "react";
import Link from "next/link";
import { Home, Mail, Search } from "lucide-react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-teal-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[150px] md:text-[200px] lg:text-[250px] font-black leading-none">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              404
            </span>
          </h1>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you&apos;re looking for seems to have wandered off.
            Maybe it&apos;s building an MVP somewhere? 🚀
          </p>
        </div>

        {/* Suggestions Box */}
        <div className="mb-10 p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl max-w-2xl mx-auto">
          <p className="text-gray-300 text-sm mb-4">
            <span className="font-semibold text-white">
              Here&apos;s what you can do:
            </span>
          </p>
          <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Check the URL for typos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>Go back to the homepage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Browse my projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span>Get in touch with me</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 text-white"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-full font-semibold text-lg text-white transition-all duration-300 hover:scale-105"
          >
            <Search className="w-5 h-5" />
            View Projects
          </Link>
        </div>

        {/* Contact Link */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            Still can&apos;t find what you&apos;re looking for?
          </p>
          <Link
            href="mailto:mkhizarfreelancer@gmail.com"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            Send me a message
          </Link>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
