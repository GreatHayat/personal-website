"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Star, Check } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-teal-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-linear-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full mb-8 shadow-lg shadow-cyan-500/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-white">
              Top Rated Plus Freelancer on Upwork
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            I Build{" "}
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              MVPs That Ship in Weeks
            </span>{" "}
            &{" "}
            <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI Systems That Never Miss a Lead
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
            Full-stack developer specializing in MVP development, AI automation,
            and lead capture systems for businesses.
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "5+ Years Experience",
              "NextJS • Supabase • NodeJS",
              "AI Voice • Workflow Automation",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full"
              >
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-gray-300">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button
              data-cal-link="muhammad-khizar-hayat/30min"
              className="cursor-pointer group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 transform"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 rounded-full text-base font-semibold transition-all duration-300 hover:scale-105"
            >
              View Live Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              {
                number: "5+",
                label: "Years of Experience",
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
                number: "100+",
                label: "Projects Delivered",
                gradient: "from-teal-500 to-blue-500",
                border: "border-teal-500/50",
                shadow: "shadow-teal-500/20",
              },
              {
                number: "99%",
                label: "Success Rate",
                gradient: "from-green-500 to-emerald-500",
                border: "border-green-500/50",
                shadow: "shadow-green-500/20",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className={`relative group p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border ${stat.border} rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl ${stat.shadow}`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}
                />

                <div className="relative text-center">
                  <div
                    className={`text-3xl md:text-4xl font-black bg-linear-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
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
    </div>
  );
};

export default Hero;
