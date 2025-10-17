"use client";

import Image from "next/image";
import { useEffect } from "react";
import datas from "@/app/design/designDatas/CardData";

const users = datas.slice(0, Math.ceil(datas.length / 2)).map((item) => ({
  id: item.id,
  name: item.name,
  avatar: item.avatar,
  category: item.category,
}));

export default function UserProfileSlider() {
  // Inject CSS animation globally at runtime
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes smoothSlide {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      .animate-smooth-slide {
        display: flex;
        width: max-content;
        animation: smoothSlide 25s linear infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="w-full rounded-4xl py-16 lg:my-20 relative overflow-hidden bg-gray-50">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
        Meet Our Top Designers
      </h2>

      {/* Slider container */}
      <div className="relative overflow-hidden">
        {/* Infinite sliding track */}
        <div className="animate-smooth-slide">
          {[...users, ...users].map((user, i) => (
            <div
              key={`${user.id}-${i}`}
              className="min-w-[140px] sm:min-w-[160px] flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow mx-3 p-4"
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
        </div>

        {/* Soft gradient edges for depth */}
        <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
        <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>
      </div>
    </section>
  );
}
