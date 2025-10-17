"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart } from "lucide-react";
import datas from "@/app/design/designDatas/CardData";

export default function TestimonialPage() {
  const testimonials = datas.slice(0, 10);

  // Duplicate list to create infinite looping illusion
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What Our Clients Say
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          Designers, founders, and creators share their love for Qaalii.
        </p>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 50, // slower for smooth scrolling
            repeat: Infinity,
          }}
        >
          {repeatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[340px] max-w-[340px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-5">
                “{item.description.slice(0, 150)}...”
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.category}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-pink-500">
                  <Heart size={16} fill="currentColor" />
                  <span className="text-sm font-medium text-gray-600">
                    {item.likeCount}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Gradient Edges */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white via-white/70 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white via-white/70 to-transparent"></div>

      {/* Call to Action */}
      <div className="text-center mt-24">
        <p className="text-gray-500 mb-4">
          Trusted by <span className="text-gray-900 font-semibold">500+</span>{" "}
          creators worldwide
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-gray-800 transition-all"
        >
          Join Them Today
        </motion.button>
      </div>
    </section>
  );
}
