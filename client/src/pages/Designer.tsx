"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import datas from "@/app/design/designDatas/CardData";

// Take half of the data for unique user profiles
const users = datas.slice(0, Math.ceil(datas.length / 2)).map((item) => ({
  id: item.id,
  name: item.name,
  avatar: item.avatar,
  category: item.category,
}));

export default function UserProfileSlider() {
  return (
    <section className="w-full py-16  relative overflow-hidden">
      {/* Only one title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Meet Our Top Designers
      </h2>

      {/* Slider wrapper */}
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-6"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }} // Move full width for seamless scroll
          transition={{
            ease: "linear",
            duration: users.length * 5, // Adjust speed based on number of users
            repeat: Infinity,
          }}
        >
          {[...users].map((user) => (
            <div
              key={user.id}
              className="min-w-[140px] sm:min-w-[160px] flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-4"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3">
                <Image
                  src={user.avatar}
                  alt={user.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-gray-900 font-semibold text-sm sm:text-base text-center">
                {user.name}
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                {user.category}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Left/right gradient overlay */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent"></div>
      <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent"></div>
    </section>
  );
}
