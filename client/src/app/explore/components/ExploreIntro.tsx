"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ExploreIntro() {
  return (
    <section className="relative  flex flex-col justify-center items-center  text-center px-6 pt-30 pb-10 overflow-hidden">
      {/* Soft geometric background */}
      <div className="absolute inset-0 opacity-40">
        <svg
          className="absolute -top-20 left-0 w-full h-[120%]"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            fillOpacity="1"
            d="M0,64L80,74.7C160,85,320,107,480,122.7C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192V0H1360C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0H0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl flex flex-col items-center space-y-8">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase font-semibold tracking-widest text-gray-500"
        >
          Discover & Connect
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Explore <span className="text-gray-700">Ethiopia’s Design Talent</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl"
        >
          <strong>talentED</strong> is where creativity meets opportunity.  
          Designers share their unique projects and build visibility — while 
          businesses, startups, and creators discover the perfect Ethiopian talent 
          to bring their vision to life.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/explore/categories">
            <Button className="rounded-full px-10 py-5 text-base font-semibold bg-black text-white hover:bg-gray-800 transition">
              Explore Designs
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
