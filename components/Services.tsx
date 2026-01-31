import React from "react";
import { Rocket, Zap, Phone, Workflow, ArrowRight } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Rocket,
      title: "MVP Development",
      tagline: "Ship Your SaaS in 4-6 Weeks",
      description:
        "From concept to launch, I build production-ready MVPs with clean code, scalable architecture, and modern tech stack.",
      features: [
        "Full-stack development",
        "NextJS & Supabase",
        "Database design & API integration",
        "Deployment & hosting setup",
      ],
      linear: "from-blue-500 to-cyan-500",
      bglinear: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/50",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
    },
    {
      icon: Zap,
      title: "AI Lead Automation",
      tagline: "Never Miss Another Lead",
      description:
        "AI-powered lead capture systems that work 24/7. Integrated with CRMs like Go High Level to track every opportunity.",
      features: [
        "Intelligent lead capture",
        "GHL/CRM integration",
        "Automated follow-ups",
        "Real-time notifications",
      ],
      linear: "from-purple-500 to-pink-500",
      bglinear: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/50",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
    },
    {
      icon: Phone,
      title: "AI Voice Assistants",
      tagline: "Scale Your Customer Support",
      description:
        "Build intelligent voice agents that handle customer inquiries naturally, reducing support costs while improving response times.",
      features: [
        "Natural conversations",
        "Multi-language support",
        "Call routing & transfers",
        "Analytics & insights",
      ],
      linear: "from-green-500 to-emerald-500",
      bglinear: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/50",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      tagline: "Eliminate Manual Tasks",
      description:
        "Custom automation solutions that connect your tools, streamline processes, and save your team 20+ hours per week.",
      features: [
        "API integrations",
        "Data synchronization",
        "Custom workflows",
        "Error handling & monitoring",
      ],
      linear: "from-orange-500 to-red-500",
      bglinear: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/50",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section id="services" className="relative py-20 lg:py-28 bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-blue-950/20 to-slate-950" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What I Can Build For You
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
            Specialized in building MVPs, AI automation, and systems that drive
            real business results
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-linear-to-br ${service.bglinear} backdrop-blur-sm border ${service.borderColor} rounded-2xl hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-${service.borderColor}/20`}
              >
                {/* linear overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${service.linear} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* Corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${service.linear} opacity-10 rounded-bl-full`}
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 ${service.iconBg} rounded-xl mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm font-semibold bg-linear-to-r ${service.linear} bg-clip-text text-transparent mb-4`}
                  >
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-300 text-sm"
                      >
                        <ArrowRight
                          className={`w-4 h-4 mt-0.5 shrink-0 ${service.iconColor}`}
                        />
                        <span>
                          {feature.includes("Supabase") ? (
                            <>
                              NextJS &{" "}
                              <span className="font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                Supabase
                              </span>
                            </>
                          ) : (
                            feature
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

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Not sure which service you need? Let&apos;s discuss your project.
          </p>
          <a
            href="https://cal.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
