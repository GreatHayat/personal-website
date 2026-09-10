"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  Filter,
  Sparkles,
  Type,
  Image as ImageIcon,
  FileText,
  Zap,
  Heart,
} from "lucide-react";
import Link from "next/link";

const ToolsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Text Tools",
    "Image Tools",
    "Productivity",
    "Social Media",
  ];

  const tools = [
    {
      name: "LinkedIn Post Formatter",
      category: "Social Media",
      description:
        "Format your LinkedIn posts with bold, italic, and styled text using Unicode characters. Make your posts stand out and drive more engagement with professional formatting.",
      icon: Type,
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      url: "https://resonant-dodol-cf9583.netlify.app/",
      featured: true,
      stats: "1000+ users",
    },
    {
      name: "Upwork Text Formatter",
      category: "Text Tools",
      description:
        "Format your Upwork proposals and messages with special characters and styling. Stand out from other freelancers with professionally formatted text that catches client attention.",
      icon: FileText,
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "https://upwork-text-formatter.netlify.app/",
      featured: true,
      stats: "500+ users",
    },
    {
      name: "Image Blur Tool",
      category: "Image Tools",
      description:
        "Quickly blur sensitive information in screenshots and images. Perfect for protecting privacy in documentation, tutorials, and client presentations. No upload required - works locally in your browser.",
      icon: ImageIcon,
      gradient: "from-teal-500 to-blue-500",
      borderColor: "border-teal-500/50",
      url: "https://blur-images.netlify.app/",
      featured: false,
      stats: "300+ users",
    },
    {
      name: "Text Case Converter",
      category: "Text Tools",
      description:
        "Convert text between different cases: UPPERCASE, lowercase, Title Case, and more. Essential for content creators, writers, and developers who need quick text transformations.",
      icon: Type,
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      url: "#",
      featured: false,
      stats: "Coming Soon",
    },
    {
      name: "Word Counter Pro",
      category: "Productivity",
      description:
        "Advanced word and character counter with reading time estimation. Perfect for writers, students, and content creators who need to meet specific word count requirements.",
      icon: FileText,
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      url: "#",
      featured: false,
      stats: "Coming Soon",
    },
    {
      name: "Code Snippet Manager",
      category: "Productivity",
      description:
        "Save and organize your frequently used code snippets. Quick copy-paste functionality for developers who want to boost their productivity and reduce repetitive typing.",
      icon: Zap,
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "#",
      featured: false,
      stats: "Coming Soon",
    },
  ];

  const filteredTools =
    selectedCategory === "All"
      ? tools
      : tools.filter((tool) => tool.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-linear-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl">
              <Sparkles className="w-8 h-8 text-cyan-400" strokeWidth={2} />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Free Tools
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-6">
              Productivity tools I&apos;ve built for the community. All free to
              use, forever.
            </p>

            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
              <Heart className="w-4 h-4 text-green-400 fill-green-400" />
              <span className="text-sm font-semibold text-white">
                100% Free • No Sign-Up Required
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                number: `${tools.length}`,
                label: "Tools Available",
                gradient: "from-blue-500 to-cyan-500",
                border: "border-blue-500/50",
                shadow: "shadow-blue-500/20",
              },
              {
                number: "2K+",
                label: "Active Users",
                gradient: "from-cyan-500 to-teal-500",
                border: "border-cyan-500/50",
                shadow: "shadow-cyan-500/20",
              },
              {
                number: "100%",
                label: "Free Forever",
                gradient: "from-teal-500 to-blue-500",
                border: "border-teal-500/50",
                shadow: "shadow-teal-500/20",
              },
              {
                number: "0",
                label: "Sign-Ups Needed",
                gradient: "from-green-500 to-emerald-500",
                border: "border-green-500/50",
                shadow: "shadow-green-500/20",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative group p-5 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-md border ${stat.border} rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl ${stat.shadow}`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />

                <div className="relative text-center">
                  <div
                    className={`text-2xl md:text-3xl font-black bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300 font-semibold">
                    {stat.label}
                  </div>
                </div>

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-12 h-12 bg-linear-to-br ${stat.gradient} opacity-10 rounded-bl-full`}
                />
              </div>
            ))}
          </div>
        </div>

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
      </section>

      {/* Category Filter */}
      <section className="relative py-8 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter by:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="relative py-12 pb-20 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className={`group relative p-8 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border ${tool.borderColor} rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl flex flex-col`}
                >
                  {/* Featured Badge */}
                  {tool.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                      Popular
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${tool.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />

                  <div className="relative flex flex-col h-full">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 bg-linear-to-r ${tool.gradient} bg-opacity-10 rounded-xl mb-6 self-start`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>

                    {/* Content */}
                    <div className="grow">
                      {/* Category Tag */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3">
                        <span className="text-xs text-gray-400">
                          {tool.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {tool.name}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {tool.description}
                      </p>

                      {/* Stats */}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <span className="text-sm text-gray-400">
                          {tool.stats}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    {tool.url === "#" ? (
                      <div className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-full font-semibold text-sm text-gray-400 w-full cursor-not-allowed">
                        Coming Soon
                      </div>
                    ) : (
                      <Link
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r ${tool.gradient} hover:opacity-90 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl w-full text-white`}
                      >
                        Use Tool
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">
                No tools found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                View All Tools
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Have a Tool Idea?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Suggest a free tool that would help the community. I&apos;m always
            looking for new ideas!
          </p>
          <Link
            href="mailto:mkhizarfreelancer@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 text-white"
          >
            Suggest a Tool
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
