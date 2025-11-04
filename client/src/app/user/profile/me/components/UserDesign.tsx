import React from "react";
import Image from "next/image";
import datas from "@/app/design/designDatas/CardData";
import { Heart } from "lucide-react";
import Link from "next/link"


export const UserDesigns = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-6">Your Designs</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((item) => (
         <Link href={`/design/${item.id}`}>
            <div
            key={item.id}
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative w-full h-32 overflow-hidden">
              <Image
                src={item.img}
                alt={item.category || "Design"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{item.category}</h3>
              <p className="text-sm text-gray-400 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Heart className="text-red-500" size={18} />
                <span className="text-sm text-gray-300">{item.likeCount}</span>
              </div>
            </div>
          </div>
         </Link>
        ))}
      </div>
    </div>
  );
};
