import React from "react";
import { Sparkles, Code, Workflow } from "lucide-react";
import Link from "next/link";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Sparkles,
      title: "Generative AI",
      gradient: "from-cyan-500 to-teal-500",
      bgGradient: "from-cyan-500/10 to-teal-500/10",
      borderColor: "border-cyan-500/50",
      iconBg: "bg-cyan-500/10",
      iconColor: "text-cyan-400",
      skills: [
        "AI Chatbot Development",
        "AI Voice Assistant",
        "Agentic RAG",
        "Vector Database",
        "LLMs (Gemini, OpenAI, Claude)",
      ],
    },
    {
      icon: Code,
      title: "Web Development",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/50",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      skills: [
        "Python, TypeScript, JavaScript",
        "NodeJS, FastAPI",
        "ReactJS, NextJS, TailwindCSS",
        "PostgreSQL, MongoDB",
        "Docker, GitHub",
        "GCP, AWS, Digital Ocean",
        "Stripe",
        "Supabase",
      ],
    },
    {
      icon: Workflow,
      title: "Workflow Automation & CRMs",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/50",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      skills: ["Make.com", "N8N", "Go High Level", "PipeDrive"],
    },
  ];

  return (
    <section className="relative py-16 lg:py-16 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            Core technologies and tools I work with to deliver exceptional
            results
          </p>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Not limited to these skills only—I can adapt and use any tools
            necessary to solve your specific problem
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-linear-to-br ${category.bgGradient} backdrop-blur-sm border ${category.borderColor} rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:shadow-xl`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 ${category.iconBg} rounded-xl mb-6`}
                  >
                    <Icon
                      className={`w-8 h-8 ${category.iconColor}`}
                      strokeWidth={2}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <ul className="space-y-3">
                    {category.skills.map((skill, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${category.iconColor.replace("text-", "bg-")} mt-1.5 shrink-0`}
                        />
                        <span>
                          {skill === "Supabase" ? (
                            <span className="font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                              {skill}
                            </span>
                          ) : (
                            skill
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Have a specific technology requirement?{" "}
            <Link
              target="_blank"
              href="https://cal.com/muhammad-khizar-hayat/30min"
              className="text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              Let&apos;s discuss how I can help
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
