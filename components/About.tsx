import React from "react";
import { Linkedin, Github, Award, Users, Code, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  //   const skills = [
  //     "Supabase",
  //     "NextJS",
  //     "NodeJS",
  //     "Stripe",
  //     "Google Cloud",
  //     "Digital Ocean",
  //     "TypeScript",
  //     "React",
  //     "PostgreSQL",
  //     "MongoDB",
  //     "API Integration",
  //     "AI Development",
  //   ];

  const highlights = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description:
        "Building production-ready applications for startups and businesses",
      linear: "from-blue-500 to-cyan-500",
    },
    {
      icon: Users,
      title: "Direct Client Collaboration",
      description:
        "Worked with CTOs, Product Managers, and CEOs to deliver results",
      linear: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Expertise in modern tech stack and best practices",
      linear: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
      title: "Problem Solver",
      description:
        "Passionate about solving real problems that add business value",
      linear: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            A developer who cares about solving real problems and delivering
            business value
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Photo Placeholder */}
              <div className="relative aspect-square max-w-md mx-auto bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-2xl overflow-hidden border border-blue-500/30">
                <Image
                  src="/hayat.webp"
                  alt="Khizar Hayat"
                  width={446}
                  height={446}
                  className="object-fit"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-linear-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </div>

          {/* Right Side - Story */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Building Solutions That Matter
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed text-base">
              <p>
                With over{" "}
                <span className="text-white font-semibold">
                  5 years of experience
                </span>{" "}
                in software development, I&apos;ve had the privilege of working
                directly with clients ranging from startups to established
                businesses, collaborating closely with{" "}
                <span className="text-white font-semibold">
                  CTOs, Product Managers, and CEOs
                </span>
                .
              </p>

              <p>
                What drives me isn&apos;t just writing code—it&apos;s{" "}
                <span className="text-white font-semibold">
                  solving real problems that add tangible value
                </span>{" "}
                to businesses. Whether it&apos;s building an MVP that ships in
                weeks, creating an AI system that never misses a lead, or
                automating workflows that save hours of manual work, I&apos;m
                passionate about delivering solutions that make a real impact.
              </p>

              <p>
                I specialize in modern, scalable technologies like{" "}
                <span className="text-white font-semibold">
                  NextJS, Supabase, and Node.js
                </span>
                , and I have deep expertise in payment integrations, cloud
                infrastructure, and AI development. But more importantly, I
                understand that technology is just a means to an end—the real
                goal is helping your business grow.
              </p>

              <p>
                When you work with me, you&apos;re not just hiring a
                developer—you&apos;re partnering with someone who cares about
                your success as much as you do.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <Link
                href="https://www.upwork.com/freelancers/~01e66b9a5da26e47be"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
              >
                Upwork Profile
              </Link>
              <a
                href="https://www.linkedin.com/in/muhammad-khizar-hayat/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-white" strokeWidth={2} />
              </a>
              <a
                href="https://github.com/GreatHayat"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-full transition-all duration-300 hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-white" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`inline-flex p-3 bg-linear-to-r ${highlight.linear} rounded-lg mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-gray-300">{highlight.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Core Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/5 border border-white/10 hover:border-white/30 rounded-full text-sm font-medium text-gray-300 transition-all duration-300 hover:scale-105"
              >
                {skill === "Supabase" ? (
                  <span className="font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    {skill}
                  </span>
                ) : (
                  skill
                )}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;
