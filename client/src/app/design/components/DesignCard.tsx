"use client"

import Image, { StaticImageData } from "next/image";
import { Card } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface DesignCardProps {
  img: StaticImageData;
  avatar: StaticImageData;
  name: string;
  likeCount: number;
  id: number;
}

export const DesignCard = ({
  img,
  avatar,
  name,
  likeCount,
  id,
}: DesignCardProps) => {
  return (
    <Link href={`/design/${id}`}>
      <Card className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-white">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={img}
            alt={name}
            className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={200}
          />

          {/* Heart Icon - appears on hover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute flex items-center justify-center top-3 right-3 bg-white rounded-full p-2 shadow-md"
          >
            <Heart className="w-10 h-10 text-black transition-colors duration-300" />
          </motion.div>
        </div>

        {/* Footer Section */}
        <div className="flex items-center justify-between px-4 py-2">
          {/* Avatar & Name */}
          <div className="flex items-center gap-2">
            <Image
              src={avatar}
              alt={name}
              width={30}
              height={30}
              className="rounded-full object-cover aspect-square border border-gray-200"
            />
            <span className="text-sm font-semibold text-gray-800">{name}</span>
          </div>

          {/* Like Count */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <Heart className="w-4 h-4 " />
            {likeCount}
          </div>
        </div>
      </Card>
    </Link>
  );
};
