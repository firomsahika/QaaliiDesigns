"use client"

import { motion } from "framer-motion";

export default function AboutQaalii() {
  return (
    <section className="bg-gray-50 text-gray-900 py-24 rounded-4xl border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center gap-16">
        
        {/* Left side — Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-xl md:text-5xl font-semibold leading-tight">
            What is <span className="font-bold text-black">TalentED</span>?
          </h2>

          <p className="text-gray-600 text-md leading-relaxed">
            TalentED is Ethiopia’s design hub — a place where creativity meets collaboration. 
            It’s built for designers to share their projects, showcase their talent, and connect 
            with business owners looking for top creative minds.
          </p>

          <p className="text-gray-600 text-md leading-relaxed">
            Whether you’re a visual artist, UI designer, or brand creator, talentED helps you gain visibility, 
            get inspired, and grow your creative network in a modern and professional community.
          </p>

          <blockquote className="border-l-4 border-gray-300 text-sm pl-4 italic text-gray-700">
            “We’re building the home for Ethiopian creativity — a platform that celebrates design and connects opportunity.”
          </blockquote>

          <div className="flex justify-center md:justify-start gap-4 pt-6">
            <button className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition-all">
              Explore Designs
            </button>
            <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-white transition-all">
              Join as Designer
            </button>
          </div>
        </motion.div>

        {/* Right side — Abstract Minimal Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-72 h-72 bg-white rounded-3xl shadow-sm border border-gray-200 flex items-center justify-center">
            <div className="absolute inset-4 border border-dashed border-gray-300 rounded-2xl"></div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">Design. Share. Inspire.</h3>
              <p className="text-gray-500 mt-2 text-sm">
                The creative space for Ethiopia’s new generation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
