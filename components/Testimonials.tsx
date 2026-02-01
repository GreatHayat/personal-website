"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Muhammad delivered excellent work and was shown to have critical subject matter expertise in the area of applied AI. His communication was top-notch, highly responsive, and he was proactive in describing his needs and working through technical issues with me. I enjoyed working with him and already have additional jobs for him to continue in working together.",
      author: "Upwork Client",
      role: "AI Project",
      rating: 5,
    },
    {
      text: "Working with Muhammad has been an outstanding experience from start to finish. He is such a talented full-stack developer that I truly wish I could hire him full time. His broad range of expertise and deep technical knowledge allowed him to confidently manage every aspect of my website development project. What stood out the most was his patience and support throughout the process.",
      author: "Upwork Client",
      role: "Full-Stack Development",
      rating: 5,
    },
    {
      text: "Excellent Developer – Highly Recommended! Muhammad delivered beyond expectations. Communication was clear, timelines were met, and the code quality was top-notch. They were proactive in identifying potential issues and provided an innovative solution.",
      author: "Upwork Client",
      role: "Web Development",
      rating: 5,
    },
    {
      text: "Another successful collaboration ended. I always feel that I have a highly skilled and devoted professional on my project. He is my first choice on any needed project. I would recommend him with no doubt for React - Next - Supabase projects.",
      author: "Upwork Client",
      role: "React/Next/Supabase Project",
      rating: 5,
    },
    {
      text: "Mohammed is an absolute expert with SupaBase. He was able to accomplish tasks that that were challenging quickly and efficiently. He had very good suggestions that saved our company a lot of time and money. I highly recommend Mohammed for full stack development.",
      author: "Upwork Client",
      role: "Supabase Expert",
      rating: 5,
    },
    {
      text: "He is extremely responsive and adaptive to our needs. I really liked the fact that he went out of the way to make sure things worked the way we wanted it. For things that he didn't have an answer to, he spent time to figure it out and implemented it correctly.",
      author: "Upwork Client",
      role: "Custom Development",
      rating: 5,
    },
    {
      text: "Khizar delivered amazing work on our project, and we enjoyed working with him. His communication was top-notch, he met all deadlines, and his skills were reasonably strong. Many times we asked for additional milestones and requirements and he was very forthcoming towards the amendments. Exceptionally talented and professional individual.",
      author: "Upwork Client",
      role: "Full-Stack Project",
      rating: 5,
    },
    {
      text: "Another great collaboration with Muhammad. I am extremely satisfied with his work and service. He delivers exactly what I need (and more) and has an excellent understanding of project requirements. He is also multi-talented and can handle a wide variety of challenges.",
      author: "Upwork Client",
      role: "Ongoing Collaboration",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-slate-950" id="testimonials">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-6">
            Don&apos;t just take my word for it - here&apos;s what clients say
            about working with me
          </p>

          {/* Upwork Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-linear-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-base font-semibold text-white">
              30+ Five-Star Reviews on Upwork
            </span>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="group p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 leading-relaxed mb-6 line-clamp-6">
                  &quot;{testimonial.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-linear-to-r from-blue-400 to-cyan-400"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Reviews CTA */}
        <div className="text-center mt-12">
          <Link
            href="https://www.upwork.com/freelancers/~01e66b9a5da26e47be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
          >
            Read All 30+ Reviews on Upwork
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
