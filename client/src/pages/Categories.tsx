"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const categories = [
  {
    name: "Branding",
    description: "Bold, modern branding for businesses and startups.",
    color: "from-pink-400 to-purple-500",
    icon: "🎨",
  },
  {
    name: "Website",
    description: "Creative and responsive web designs.",
    color: "from-indigo-400 to-blue-500",
    icon: "💻",
  },
  {
    name: "LandingPage",
    description: "High-converting landing page designs.",
    color: "from-yellow-400 to-orange-500",
    icon: "🚀",
  },
  {
    name: "Logo",
    description: "Memorable logos for brands and products.",
    color: "from-green-400 to-teal-500",
    icon: "🖌️",
  },
  {
    name: "Mobile",
    description: "Modern mobile app UI designs.",
    color: "from-red-400 to-pink-500",
    icon: "📱",
  },
  {
    name: "Product Design",
    description: "Functional and minimal product designs.",
    color: "from-cyan-400 to-blue-400",
    icon: "📦",
  },
];

export default function CreativeCategories() {
  return (
    <section className="py-20 px-6 md:px-16 ">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
          Discover by Category
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore Ethiopia's most creative designers across categories with stunning, colorful previews.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat, i) => (
          <motion.a
            key={i}
            href={`/explore?type=${cat.name}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative group h-64 rounded-3xl overflow-hidden cursor-pointer shadow-lg`}
          >
            {/* Gradient block */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${cat.color} transform transition-transform duration-500 group-hover:scale-105`}
            ></div>

            {/* Abstract shapes */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="w-32 h-32 bg-white/10 rounded-full absolute -top-10 -left-10 animate-spin-slow"></div>
              <div className="w-24 h-24 bg-white/20 rounded-full absolute bottom-0 -right-10 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
              <div className="text-4xl mb-2">{cat.icon}</div>
              <h3 className="text-2xl font-bold">{cat.name}</h3>
              <p className="text-sm opacity-90 line-clamp-2">{cat.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
