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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const navLinks = [
    { name: "About", id: "/#about" },
    { name: "Services", id: "/#services" },
    { name: "Work", id: "/#work" },
    { name: "Reviews", id: "/#testimonials" },
    { name: "Contact", id: "/#contact" },
  ];

  const handleNavigate = (id?: string) => {
    setIsMobileMenuOpen(false);

    // If not on home, go home first
    if (pathname !== "/") {
      router.replace("/");

      // Wait for route change before scrolling
      setTimeout(() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
          });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
      return;
    }

    // Already on home → just scroll
    if (id) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
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
          {/* Logo */}
          <button
            onClick={() => handleNavigate()}
            className="group relative cursor-pointer"
          >
            <span className="text-3xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-300 hover:to-pink-300 transition-all duration-300">
              Khizar Hayat
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.id}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium hover:scale-105 transform"
              >
                {link.name}
              </Link>
            ))}

            <button
              data-cal-link="muhammad-khizar-hayat/30min"
              className="text-white cursor-pointer px-6 py-3 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 transform"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-blue-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 border-t border-blue-500/20" : "max-h-0"
        }`}
      >
        <div className="px-6 py-6 bg-slate-950/95 backdrop-blur-xl space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.id}
              className="cursor-pointer block w-full text-left text-gray-300 hover:text-white text-lg transition-colors py-2"
            >
              {link.name}
            </Link>
          ))}

          <button
            data-cal-link="muhammad-khizar-hayat/30min"
            className="text-white cursor-pointer block w-full px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-center font-semibold mt-4"
          >
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}
