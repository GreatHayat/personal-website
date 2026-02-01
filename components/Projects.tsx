import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Agora Voice",
      industry: "AI Voice Platform",
      description:
        "Built a revolutionary AI Voice Agent Platform for businesses using the Gemini Live API. This solution allows clients to upload their knowledge base (KBs) and instantly launch a secure, voice-enabled agent. It replaces frustrating text chatbots with natural, conversational voice interaction, dramatically improving customer experience and efficiency. Features include real-time voice processing and tool use integration (e.g., booking/scheduling).",
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
      liveUrl: "https://app.agoravoice.ai",
      image: "/agora.webp",
    },
    {
      title: "OpenR&D",
      industry: "Research & Development Platform",
      description:
        "Phase 1 of the OpenR&D platform involves building a public-facing web app with pages for Homepage, Search Results, INCI, Raw Materials, and Suppliers, plus an admin panel for managing attribute tables. The site supports thousands of entries and enforces uppercase-only naming conventions. Features custom statuses, midnight blue theme, and legal disclaimer. Admins can manage hidden attachments with INCI data import (~23,600 records).",
      techStack: [
        "NextJS",
        "Supabase",
        "PostgreSQL",
        "TypeScript",
        "TailwindCSS",
      ],
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/50",
      liveUrl: "https://theopenrnd.com",
      image: "/openrnd.webp",
    },
    {
      title: "StyleSlots",
      industry: "Service Marketplace",
      description:
        "StyleSlots is an innovative web platform that connects professionals with clients seeking nearby services. Designed and developed as a full stack application, StyleSlots empowers users to both offer and discover a wide range of professional services in their local area. The project demonstrates advanced skills in full stack development, cloud integration, and user-centric product design.",
      techStack: [
        "NextJS",
        "Supabase",
        "PostgreSQL",
        "Email Template",
        "Mobile Application",
      ],
      gradient: "from-green-500 to-emerald-500",
      borderColor: "border-green-500/50",
      liveUrl: "https://styleslots.gr/",
      image: "/styleslots.webp",
    },
    {
      title: "Shadowsuite",
      industry: "Social Media Management",
      description:
        "Shadow Suite is a Facebook inbox management platform built for businesses to centralize communication. It solves the problem of managing multiple pages and agents by offering a unified dashboard to fetch conversations, assign agents, track response times, and monitor compliance. Features include URL policy violation detection, bulk messaging, labels, notes, and secure authentication—all from one secure workspace.",
      techStack: [
        "NodeJS",
        "ReactJS",
        "MongoDB",
        "Facebook Graph API",
        "Digital Ocean",
      ],
      gradient: "from-teal-500 to-blue-500",
      borderColor: "border-teal-500/50",
      liveUrl: "https://shadowsuite.live",
      image: "/shdowsuite.webp",
    },
  ];

  return (
    <section
      id="work"
      className="relative py-20 lg:py-28 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real solutions built for real businesses. From AI platforms to
            full-stack applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12 lg:space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Project Image/Screenshot */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div
                  className={`relative aspect-video bg-linear-to-br ${project.gradient} rounded-2xl overflow-hidden border ${project.borderColor} group-hover:scale-[1.02] transition-all duration-300 shadow-xl group-hover:shadow-2xl`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={590}
                    height={331}
                    className="object-fit"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div
                className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}
              >
                {/* Industry Tag */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-4">
                  <span className="text-sm text-gray-400">
                    {project.industry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium bg-linear-to-r ${project.gradient} bg-opacity-10 border ${project.borderColor} rounded-full text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r ${project.gradient} hover:opacity-90 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  Visit Live Site
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            href="/projects"
            className="text-white inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
