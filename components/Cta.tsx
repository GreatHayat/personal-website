"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { getCalApi } from "@calcom/embed-react";
import { Calendar, Mail, ArrowRight } from "lucide-react";

const FinalCTA: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <section className="relative py-20 lg:py-28 bg-slate-950" id="contact">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-[600px] h-[600px] bg-linear-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Ready to Build{" "}
          <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Something Great
          </span>{" "}
          Together?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss your project and see how I can help you build an
          MVP, automate your business, or capture more leads.
        </p>

        {/* What happens next */}
        <div className="mb-10">
          <p className="text-sm text-gray-400 mb-3">
            Here&apos;s what happens next:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-blue-500/20 border border-blue-500/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-blue-400 text-xs font-bold">1</span>
              </div>
              <span>Schedule a free 30-min call</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-cyan-500/20 border border-cyan-500/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-cyan-400 text-xs font-bold">2</span>
              </div>
              <span>Discuss your goals & challenges</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 bg-teal-500/20 border border-teal-500/50 rounded-full flex items-center justify-center shrink-0">
                <span className="text-teal-400 text-xs font-bold">3</span>
              </div>
              <span>Get a custom proposal</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <button
            data-cal-link="muhammad-khizar-hayat/30min"
            className="cursor-pointer text-white group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <Calendar className="w-5 h-5" />
            Schedule a Free Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <Link
            href="mailto:mkhizarfreelancer@gmail.com"
            className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 border-2 border-white/30 hover:border-white/50 rounded-full text-lg font-semibold text-white transition-all duration-300 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Or Email Me
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span>Usually respond within 2 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full" />
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full" />
            <span>Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
