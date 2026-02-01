"use client";
import React, { useState } from "react";
import { ExternalLink, Filter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "AI & Voice",
    "Web Platforms",
    "Automation",
    "SaaS",
  ];

  const projects = [
    {
      title: "Agora Voice",
      category: "AI & Voice",
      industry: "AI Voice Platform",
      description:
        "Built a revolutionary AI Voice Agent Platform for businesses using the Gemini Live API. This solution allows clients to upload their knowledge base (KBs) and instantly launch a secure, voice-enabled agent. It replaces frustrating text chatbots with natural, conversational voice interaction, dramatically improving customer experience and efficiency. Features include real-time voice processing and tool use integration (e.g., booking/scheduling). Showcase the future of customer interaction.",
      techStack: [
        "NodeJS",
        "ReactJS",
        "Gemini Live API",
        "Google Cloud",
        "MongoDB",
        "Stripe",
      ],
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "https://app.agoravoice.ai",
      type: "live", // 'live', 'github', 'demo', or 'private'
      featured: true,
      image: "/agora.webp",
    },
    {
      title: "OpenR&D",
      category: "Web Platforms",
      industry: "Research & Development Platform",
      description:
        "Phase 1 of the OpenR&D platform involves building a public-facing web app with pages for Homepage, Search Results, INCI, Raw Materials, and Suppliers, plus an admin panel for managing attribute tables. The site supports thousands of entries and enforces uppercase-only naming conventions. Features custom statuses, midnight blue theme, and legal disclaimer. Admins can manage hidden attachments. INCI data import (~23,600 records) demonstrates handling of large-scale data management.",
      techStack: [
        "NextJS",
        "Supabase",
        "PostgreSQL",
        "TypeScript",
        "TailwindCSS",
      ],
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      url: "#",
      type: "live",
      featured: true,
      image: "/openrnd.webp",
    },
    {
      title: "StyleSlots",
      category: "Web Platforms",
      industry: "Service Marketplace",
      description:
        "StyleSlots is an innovative web platform that connects professionals with clients seeking nearby services. Designed and developed as a full stack application, StyleSlots empowers users to both offer and discover a wide range of professional services in their local area. StyleSlots streamlines the process of finding and offering professional services locally, making it easier for users to connect and collaborate. The project demonstrates advanced skills in full stack development, cloud integration, and user-centric product design.",
      techStack: [
        "NextJS",
        "Supabase",
        "PostgreSQL",
        "Email Template",
        "Mobile Application",
      ],
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      url: "#",
      type: "live",
      featured: true,
      image: "/styleslots.webp",
    },
    {
      title: "Shadowsuite",
      category: "SaaS",
      industry: "Social Media Management",
      description:
        "Shadow Suite is a Facebook inbox management platform built for businesses to centralize communication. It solves the problem of managing multiple pages and agents by offering a unified dashboard to fetch conversations, assign agents, track response times, and monitor compliance. With features like URL policy violation detection, bulk messaging, labels, notes, and secure authentication, it empowers teams to engage customers efficiently while maintaining brand integrity—all from one secure workspace.",
      techStack: [
        "NodeJS",
        "ReactJS",
        "MongoDB",
        "Facebook Graph API",
        "Digital Ocean",
      ],
      gradient: "from-teal-500 to-blue-500",
      borderColor: "border-teal-500/50",
      url: "https://shadowsuite.live",
      type: "live",
      featured: true,
      image: "/shdowsuite.webp",
    },
    {
      title: "LinkedIn Post Formatter",
      category: "Web Platforms",
      industry: "Content Management",
      description:
        "LinkedIn doesn't support native formatting like bold, italic, or underlined text. This tool bridges that gap by converting your content into Unicode-styled characters that render beautifully on LinkedIn, helping your posts stand out and drive more engagement.",
      techStack: [
        "ReactJS",
        "TypeScript",
        "TailwindCSS",
        "Netlify",
        "Markdown",
      ],
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      url: "https://resonant-dodol-cf9583.netlify.app/",
      type: "live",
      featured: false,
      image: "/linkedin_tool.webp",
    },
    {
      title: "WhatsApp Appointment Bot",
      category: "AI & Voice",
      industry: "Dental Clinics",
      description:
        "This project implements a WhatsApp-based AI assistant for dental clinics, enabling patients to book appointments via text or voice messages. It leverages LangGraph for conversational flows, FastAPI for the backend, and integrates with Google Calendar for scheduling.",
      techStack: [
        "Python",
        "FastAPI",
        "OpenAI API",
        "LangGraph",
        "Meta WhatsApp API",
      ],
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "https://github.com/GreatHayat/langgraph-whatsapp-bot",
      type: "github",
      featured: false,
      image: "/whatsapp_bot.webp",
    },
    {
      title: "YouTube Shorts Generator",
      category: "Web Platforms",
      industry: "Content",
      description:
        "Generate YouTube Shorts effortlessly from any given article link using the power of Pydantic AI, Crawl4 AI, and the DALLE 3 model for image generation. The script extracts information from the provided article link and processes it using AI to generate engaging YouTube Shorts content. The DALLE 3 model is utilized to generate visually compelling images, while OpenAI and Deepgram services handle other processing tasks. Ensure your API keys are correctly configured to enable these integrations.",
      techStack: [
        "Python",
        "OpenAI Agents SDK",
        "OpenAI API",
        "DALLE 3",
        "FFMPEG",
      ],
      gradient: "from-emerald-500 to-green-500",
      borderColor: "border-emerald-500/50",
      url: "https://github.com/GreatHayat/yt-shorts-generator",
      type: "github",
      featured: false,
      image: null,
    },
    {
      title: "AI Voice Assistant",
      category: "AI & Voice",
      industry: "Healthcare",
      description:
        "Created a real-time analytics dashboard for e-commerce businesses to track sales, inventory, customer behavior, and marketing ROI. The platform processes millions of events daily and provides actionable insights through AI-powered recommendations. Features include cohort analysis, funnel visualization, A/B testing tools, and predictive analytics for inventory management. Integrated with Shopify, WooCommerce, and custom e-commerce platforms.",
      techStack: [
        "ReactJS",
        "NodeJS",
        "API Integration",
        "Gemini Live API",
        "Netlify",
        "GenerativeAI",
      ],
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      url: "https://www.loom.com/share/6f41e1c5b5724758be1be79a902b9a59",
      type: "demo",
      featured: false,
      image: "/ai_voice.webp",
    },
    {
      title: "Lead Intake Automation",
      category: "Automation",
      industry: "Business Automation",
      description:
        "I built a custom automation based on the client's job post using a Webflow form (expandable to 52+ fields). Once submitted, the workflow automatically sends an email, generates a PDF, and creates a new contact in PipeDrive CRM. This demo showcases my ability to design end-to-end, scalable automation systems tailored to client requirements. Looking forward to building more solutions like this.",
      techStack: [
        "N8N",
        "PipeDrive",
        "API Integration",
        "Google Slides",
        "Gmail API",
      ],
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "https://www.loom.com/share/cf9b4874243b422b90c23a0f2e85e60e",
      type: "demo",
      featured: false,
      image: "/webflow_pipedrive_automation.webp",
    },
    {
      title: "AI-Powered Product Ad Designer",
      category: "Automation",
      industry: "E-Commerce",
      description:
        "Nano Banana is an automated AI design workflow that transforms a single raw product photo into studio-quality marketing visuals in minutes. Built with n8n, it combines Gemini Pro 2.5 for intelligent image analysis and prompt generation with Nano Banana's visual engine to produce polished, ad-ready creatives—no designer, no Photoshop. Upload once, generate instantly, and let AI amplify creativity instead of replacing it.",
      techStack: [
        "N8N",
        "Gemini API",
        "Nano Banana",
        "API Integration",
        "Google Sheets",
      ],
      gradient: "from-teal-500 to-blue-500",
      borderColor: "border-teal-500/50",
      url: "https://www.loom.com/share/cf9b4874243b422b90c23a0f2e85e60e",
      type: "demo",
      featured: false,
      image: "/nano_banana.webp",
    },

    {
      title: "AI Video Content Automation",
      category: "Automation",
      industry: "Content Creation",
      description:
        "An end-to-end n8n automation that takes a single topic and automatically generates a complete video package—script, images, and voiceover audio—ready for publishing with minimal manual effort.",
      techStack: [
        "N8N",
        "Gemini API",
        "API Integration",
        "Google Whisk",
        "Gmail Drive API",
      ],
      gradient: "from-cyan-500 to-teal-500",
      borderColor: "border-cyan-500/50",
      url: "",
      type: "demo",
      featured: false,
      image: "/yt_automation_workflow.webp",
    },
    {
      title: "AI-Powered WhatsApp Automation with RAG",
      category: "Automation",
      industry: "Customer Support",
      description:
        "An intelligent WhatsApp automation workflow built with n8n that uses Retrieval-Augmented Generation (RAG) to automatically answer user questions from a knowledge base. It supports both text and voice messages, leveraging Qdrant Vector Store and OpenAI to deliver accurate, context-aware responses in real time.",
      techStack: [
        "N8N",
        "Meta WhatsApp API",
        "OpenAI API",
        "API Integration",
        "Qdrant VectorStore",
      ],
      gradient: "from-teal-500 to-blue-500",
      borderColor: "border-teal-500/50",
      url: "",
      type: "demo",
      featured: false,
      image: "/whatsapp_rag.webp",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const openModal = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    // document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 300);
  };

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
              A collection of MVPs, AI platforms, and full-stack applications
              I&apos;ve built for clients across different industries.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                number: `${projects.length}+`,
                label: "Projects Completed",
                gradient: "from-blue-500 to-cyan-500",
                border: "border-blue-500/50",
                shadow: "shadow-blue-500/20",
              },
              {
                number: "40+",
                label: "Happy Clients",
                gradient: "from-cyan-500 to-teal-500",
                border: "border-cyan-500/50",
                shadow: "shadow-cyan-500/20",
              },
              {
                number: "100%",
                label: "Success Rate",
                gradient: "from-teal-500 to-blue-500",
                border: "border-teal-500/50",
                shadow: "shadow-teal-500/20",
              },
              {
                number: "5+",
                label: "Years Experience",
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

      {/* Category Filter - Outside Header */}
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
                    ? "bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/50"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => openModal(project)}
                className={`group relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border ${project.borderColor} rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl flex flex-col cursor-pointer`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                    Featured
                  </div>
                )}

                {/* Type Badge */}
                {project.type !== "live" && (
                  <div
                    className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.type === "github"
                        ? "bg-slate-700 text-gray-300 border border-slate-600"
                        : project.type === "demo"
                          ? "bg-blue-700 text-blue-200 border border-blue-600"
                          : "bg-slate-800 text-gray-400 border border-slate-700"
                    }`}
                  >
                    {project.type === "github"
                      ? "📁 GitHub"
                      : project.type === "demo"
                        ? "🎬 Demo"
                        : "🔒 Private"}
                  </div>
                )}

                {/* Screenshot Placeholder */}
                <div
                  className={`relative aspect-video bg-linear-to-br ${project.gradient} overflow-hidden`}
                >
                  {project?.image ? (
                    <Image
                      src={project?.image}
                      width={382}
                      height={214.88}
                      alt={project.title}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                      <div className="text-center">
                        <div
                          className={`w-16 h-16 mx-auto mb-3 bg-linear-to-br ${project.gradient} rounded-xl opacity-50`}
                        />
                        <p className="text-gray-400 text-sm">
                          Project Screenshot
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Industry Tag */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-3 self-start">
                    <span className="text-xs text-gray-400">
                      {project.industry}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3 grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-medium bg-linear-to-r ${project.gradient} bg-opacity-10 border ${project.borderColor} rounded-full text-white`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  {project.type === "private" ? (
                    <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-700/50 border border-slate-600 rounded-full font-semibold text-sm text-gray-400 w-full cursor-not-allowed">
                      <span>🔒 Private Project</span>
                    </div>
                  ) : project.type === "demo" && !project.url ? (
                    <div className="text-white inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-700/50 border border-blue-600 rounded-full font-semibold text-sm w-full cursor-pointer">
                      <span>🎬 View Demo Details</span>
                    </div>
                  ) : (
                    <Link
                      href={project.url}
                      target="_blank"
                      onClick={(e) => {
                        if (project.type === "demo") {
                          e.preventDefault();
                          e.stopPropagation();
                          // Open modal instead
                        }
                      }}
                      className={`text-white inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-linear-to-r ${project.gradient} hover:opacity-90 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl w-full`}
                    >
                      {project.type === "github"
                        ? "View on GitHub"
                        : project.type === "demo"
                          ? "Watch Demo"
                          : "View Project"}
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg mb-4">
                No projects found in this category.
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full font-semibold hover:scale-105 transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Have a Project in Mind?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let&apos;s discuss how I can help you build your next MVP, AI
            system, or automation solution.
          </p>
          <Link
            href="https://cal.com/muhammad-khizar-hayat/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            Schedule a Free Call
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-linear-to-br from-slate-900 to-slate-950 border ${selectedProject.borderColor} rounded-2xl shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="cursor-pointer absolute top-4 right-4 z-10 p-2 bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Featured Badge */}
            {selectedProject.featured && (
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-linear-to-r from-yellow-500 to-orange-500 rounded-full text-xs font-bold text-white">
                Featured
              </div>
            )}

            {/* Type Badge */}
            {selectedProject.type !== "live" && (
              <div
                className={`absolute top-4 ${selectedProject.featured ? "left-28" : "left-4"} z-10 px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedProject.type === "github"
                    ? "bg-slate-700 text-gray-300 border border-slate-600"
                    : selectedProject.type === "demo"
                      ? "bg-blue-700 text-blue-200 border border-blue-600"
                      : "bg-slate-800 text-gray-400 border border-slate-700"
                }`}
              >
                {selectedProject.type === "github"
                  ? "📁 GitHub Repository"
                  : selectedProject.type === "demo"
                    ? "🎬 Demo / Workflow"
                    : "🔒 Private / NDA"}
              </div>
            )}

            {/* Screenshot Placeholder */}
            <div
              className={`relative aspect-video bg-linear-to-br ${selectedProject.gradient} overflow-hidden`}
            >
              {selectedProject?.image ? (
                <Image
                  src={selectedProject?.image}
                  width={1440}
                  height={568}
                  alt={selectedProject.title}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
                  <div className="text-center">
                    <div
                      className={`w-24 h-24 mx-auto mb-4 bg-linear-to-br ${selectedProject.gradient} rounded-xl opacity-50`}
                    />
                    <p className="text-gray-400 text-lg">Project Screenshot</p>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Industry Tag */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-4">
                <span className="text-sm text-gray-300">
                  {selectedProject.industry}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {selectedProject.title}
              </h2>

              {/* Full Description */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-3">
                  About This Project
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-4 py-2 text-sm font-medium bg-linear-to-r ${selectedProject.gradient} bg-opacity-10 border ${selectedProject.borderColor} rounded-full text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              {selectedProject.type === "demo" ? (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-700/30 border border-blue-600/50 rounded-xl text-blue-200">
                    <span className="text-2xl">🎬</span>
                    <div>
                      <p className="font-semibold">
                        {selectedProject.url
                          ? "Demo / Workflow Recording"
                          : "Workflow Created in Client Workspace"}
                      </p>
                      <p className="text-sm text-blue-300">
                        {selectedProject.url
                          ? "Watch the demo to see the workflow in action"
                          : "This workflow was built directly in the client's account"}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    {selectedProject.url
                      ? "This is a demonstration of an automation workflow I built. The actual implementation runs in the client's environment."
                      : "I created this automation workflow directly in the client's n8n workspace. While I can't share access to their account, I'm happy to discuss the workflow architecture, integrations used, and how similar solutions could benefit your business during a consultation call."}
                  </p>
                  {selectedProject.url && (
                    <Link
                      href={selectedProject.url}
                      target="_blank"
                      className={`inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r ${selectedProject.gradient} hover:opacity-90 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full md:w-auto`}
                    >
                      Watch Demo Video
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  )}
                </div>
              ) : selectedProject.type === "private" ? (
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-gray-300">
                    <span className="text-2xl">🔒</span>
                    <div>
                      <p className="font-semibold">Private Project</p>
                      <p className="text-sm text-gray-400">
                        Protected by NDA - Source code and live demo are
                        confidential
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
                    This project was developed under a non-disclosure agreement.
                    I can discuss the technologies and methodologies used during
                    a consultation call.
                  </p>
                </div>
              ) : (
                <Link
                  href={selectedProject.url}
                  target="_blank"
                  className={`text-white cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r ${selectedProject.gradient} hover:opacity-90 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full md:w-auto`}
                >
                  {selectedProject.type === "github"
                    ? "View on GitHub"
                    : "View Live Project"}
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
