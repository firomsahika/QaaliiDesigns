"use client";

import { SearchInput } from "@/components/Search";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function TalentHero() {
  return (
    <div className="text-center py-10 md:py-20 lg:py-32 px-6 border-b border-gray-100 ">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Find Talented Designers
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        Discover Ethiopia’s top creative designers specializing in branding, web, and product design.
      </p>

      {/* Search bar */}
      <div className="relative max-w-md mx-auto">
        <SearchInput placeholder="Search for designers, skills, or projects..." />  
      </div>
    </div>
  );
}
