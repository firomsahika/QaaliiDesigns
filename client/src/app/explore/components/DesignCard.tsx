// app/explore/components/DesignCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";

export function DesignCard({ item }: { item: any }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
    >
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className="w-full h-52 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
        <p className="text-xs text-gray-500">{item.designer}</p>
      </div>
    </motion.div>
  );
}
