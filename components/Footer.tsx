import React from "react";
import Link from "next/link";
import { Linkedin, Github, Mail, ExternalLink, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
  ];

  const socialLinks = [
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~01e66b9a5da26e47be",
      icon: ExternalLink,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-khizar-hayat/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/GreatHayat",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/great_hayat",
      icon: Instagram,
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Khizar Hayat
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Full-stack developer specializing in MVP development, AI
              automation, and lead capture systems.
            </p>
            <a
              href="mailto:mkhizarfreelancer@gmail.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              mkhizarfreelancer@gmail.com
            </a>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="https://cal.com/muhammad-khizar-hayat/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 rounded-lg transition-all duration-300 hover:scale-105"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Khizar Hayat. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Built with NextJS, React & TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
