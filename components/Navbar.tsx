"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  /* ---------------- Scroll Effect ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- Cal.com Embed ---------------- */
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  /* ---------------- Navigation Links ---------------- */
  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ];

  /* ---------------- Unified Navigation Handler ---------------- */
  const handleNavigate = (href: string) => {
    setIsMobileMenuOpen(false);

    // If already on home → normal hash navigation
    if (pathname === "/") {
      router.push(href);
      return;
    }

    // If on another page → go home first, then hash
    router.replace("/");

    setTimeout(() => {
      router.push(href);
    }, 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ---------------- Logo ---------------- */}
          <button
            onClick={() => handleNavigate("/")}
            className="group cursor-pointer"
          >
            <span className="text-3xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-cyan-300 hover:to-teal-300 transition-all duration-300">
              Khizar Hayat
            </span>
          </button>

          {/* ---------------- Desktop Navigation ---------------- */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium hover:scale-105 transform"
              >
                {link.name}
              </Link>
            ))}

            <button
              data-cal-link="muhammad-khizar-hayat/30min"
              className="text-white cursor-pointer px-6 py-3 bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500 hover:from-blue-600 hover:via-cyan-600 hover:to-teal-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 transform"
            >
              Book a Call
            </button>
          </div>

          {/* ---------------- Mobile Toggle ---------------- */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ---------------- Mobile Menu ---------------- */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-t border-blue-500/20" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-slate-950/95 backdrop-blur-xl space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigate(link.href)}
              className="block w-full text-left text-gray-300 hover:text-white text-lg transition-colors py-2"
            >
              {link.name}
            </button>
          ))}

          <button
            data-cal-link="muhammad-khizar-hayat/30min"
            className="text-white cursor-pointer block w-full px-6 py-3 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full text-center font-semibold mt-4"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
