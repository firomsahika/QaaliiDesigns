"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import datas from "@/app/design/designDatas/CardData";

const FeaturedDesigns = () => {
  // Split into two rows
  const half = Math.ceil(datas.length / 2);
  const row1 = datas.slice(0, half);
  const row2 = datas.slice(half);

  return (
    <section className="w-full py-20 overflow-hidden ">
      {/* Title */}
      <div className="text-center mb-12 ">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
          Featured Creative Projects
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Explore some of the most stunning design work shared by talented Ethiopian designers — 
          from branding and web design to product and mobile interfaces.
        </p>
      </div>

      {/* Row 1 - scrolls left */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
        className="flex space-x-6 mb-10"
      >
        {[...row1, ...row1].map((item, i) => (
          <div
            key={i}
            className="min-w-[140px] sm:min-w-[240px] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group relative"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={item.img}
                alt={item.category}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 flex items-center space-x-1 text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all">
                <Heart size={16} className="text-pink-400 fill-pink-400" />
                <span>{item.likeCount}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center rounded-3xl gap-3 mb-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Row 2 - scrolls right */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ["-50%", "0%"] }}
        transition={{
          ease: "linear",
          duration: 40,
          repeat: Infinity,
        }}
        className="flex space-x-6"
      >
        {[...row2, ...row2].map((item, i) => (
          <div
            key={i}
            className="min-w-[140px] sm:min-w-[240px] rounded-3xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group relative"
          >
            <div className="relative h-48 rounded-3xl w-full -hidden">
              <Image
                src={item.img}
                alt={item.category}
                fill
                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"

              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-4 right-4 flex items-center space-x-1 text-white bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all">
                <Heart size={16} className="text-pink-400 fill-pink-400" />
                <span>{item.likeCount}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeaturedDesigns;
