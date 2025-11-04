// app/explore/components/DesignCard.tsx
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function DesignCard({ item }: { item: any }) {
  const pathname = usePathname();
  const isActive = pathname === `/explore/${item.category.toLowerCase().replace(/\s+/g, "-")}`;
  

  return (
    <Link href={`/design/${item.id}`}>
      <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer"
    >
      <Image
        src={item.img}
        alt={item.name}
        width={400}
        height={300}
        className="w-full h-52 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">{item.category}</h3>
        <p className="text-xs text-gray-500">{item.name}</p>
      </div>
    </motion.div>
    </Link>                     
  );
}
