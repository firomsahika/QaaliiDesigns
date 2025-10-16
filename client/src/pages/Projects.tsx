"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const projects = [
  { name: "Firomsa Branding", category: "Branding", likes: 24, color: "from-pink-400 to-purple-500" },
  { name: "Orbix Web", category: "Website", likes: 56, color: "from-indigo-400 to-blue-500" },
  { name: "Mobile UI Kit", category: "Mobile", likes: 18, color: "from-green-400 to-teal-500" },
  { name: "Landing Magic", category: "LandingPage", likes: 12, color: "from-yellow-400 to-orange-500" },
  { name: "Logo Master", category: "Logo", likes: 34, color: "from-red-400 to-pink-500" },
  { name: "Product Flow", category: "Product Design", likes: 44, color: "from-cyan-400 to-blue-400" },
];

export default function ExploreProjects() {
  return (
    <section className="py-20 px-6 md:px-16  min-h-screen">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Explore Creative Projects</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Browse unique projects from Ethiopia’s top designers. Hover to reveal details and interact with the work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
          >
            {/* Gradient background */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr ${project.color} transition-transform duration-500 group-hover:scale-105`}
            ></div>

            {/* Decorative floating shapes */}
            <div className="absolute inset-0">
              <div className="w-24 h-24 bg-white/10 rounded-full absolute -top-8 -left-8 animate-spin-slow"></div>
              <div className="w-16 h-16 bg-white/20 rounded-full absolute bottom-4 right-4 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 flex flex-col justify-between h-64">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-sm text-white/80">{project.category}</p>
              </div>
              <div className="flex items-center justify-end gap-2 text-white bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                <Heart size={16} className="text-pink-400 fill-pink-400" />
                <span>{project.likes}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
