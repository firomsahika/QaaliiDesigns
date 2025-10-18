"use client";

import { motion } from "framer-motion";
import { DesignCard } from "./DesignCard";

export default function DesignGrid({ designs }: { designs: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="grid  py-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
    >
      {designs.map((item) => (
        <DesignCard key={item.id} item={item} />
      ))}
    </motion.div>
  );
}
