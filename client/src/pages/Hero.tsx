"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DesignCarousel } from "@/components/DesignCarousel";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-2 md:py-2 lg:py-4 flex h-screen items-center justify-center px-4">
      {/* Main Content */}
      <div className="relative flex flex-col items-center text-center space-y-6 max-w-2xl z-10">
        {/* Subtitle */}
        <p className="font-semibold shadow-2xl text-lg tracking-wide text-pink-300">
          Qaalii Designs
        </p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-2xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
            bg-gradient-to-r from-gray-800 via-primary to-gray-900 
            bg-clip-text text-transparent tracking-tight"
        >
          Discover{" "}
          <span className="text-primary">Ethiopian’s Top Designers</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg lg:text-md text-gray-600 max-w-xl"
        >
          Browse creative projects, connect directly with designers, or buy
          unique designs all in one hub for Ethiopian talent.
        </motion.p>

        {/* Search Input */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="w-full flex items-center justify-center relative max-w-md"
        >
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full bg-white placeholder-gray-400 px-6 py-4 rounded-full text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary shadow-lg"
          />
          <div className="absolute flex right-4 text-white bg-primary hover:bg-primary/90 p-3 rounded-full transition">
            <Search size={20} />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/auth/register">
            <Button className="rounded-full px-14 py-6 text-md">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Optional Carousels (Left & Right) */}
      {/* <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 shadow-lg">
        <DesignCarousel />
      </div>
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2">
        <DesignCarousel />
      </div> */}
    </section>
  );
};

export default Hero;
