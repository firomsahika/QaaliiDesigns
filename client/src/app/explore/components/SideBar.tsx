"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  "All",
  "Logo Design",
  "Poster Design",
  "3D Art",
  "UI/UX",
  "Illustration",
  "Typography",
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r pt-20 border-gray-200 bg-white/80 backdrop-blur-md h-screen sticky top-0">
      <ScrollArea className="h-full p-4 space-y-2">
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/\s+/g, "-");
          const active = (pathname?.endsWith(slug) ?? false) || (pathname === "/explore" && cat === "All");
          return (
            <Link
              key={cat}
              href={`/explore/${slug === "all" ? "" : slug}`}
              className={cn(
                "block px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
                active
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              {cat}
            </Link>
          );
        })}
      </ScrollArea>
    </aside>
  );
}
