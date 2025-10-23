"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

interface Placeholder {
    placeholder?: string
}

export function SearchInput({placeholder= "Search..."}: Placeholder) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative  w-full max-w-md self-start"
    >
      <Input
        type="text"
        placeholder={placeholder}
        className="pl-12 pr-4  py-6 rounded-full border border-gray-200  text-gray-800 placeholder:text-gray-400 shadow-md"
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
        <Search size={20} />
      </div>
    </motion.div>
  );
}
