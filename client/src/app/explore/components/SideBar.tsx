"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  "All",
  "Branding",
  "Website",
  "Mobile",
  "Product Design",
  "LandingPage",
  "Logo Design",
  "Illustration",
  "Typography",
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-50 pt-10 border bg-white/80 backdrop-blur-md rounded-2xl h-screen sticky top-0">
      <ScrollArea className="h-full p-4 space-y-10">
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/\s+/g, "-");
          const href = slug === "all" ? "/explore/all" : `/explore/${slug}`;

          // ✅ Fix active state logic
          const isActive =
            pathname === href ||
            (cat === "All" &&
              (pathname === "/explore/categories" || pathname === "/explore/categories"));

          return (
            <Link
              key={cat}
              href={href}
              className={cn(
                "block px-4 border my-5 py-2.5 rounded-lg text-sm font-medium transition-all",
                isActive
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
