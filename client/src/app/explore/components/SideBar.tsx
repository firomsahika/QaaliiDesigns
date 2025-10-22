"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
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
  const pathname = usePathname() || "";
  const searchParams = useSearchParams();
  const categoryParam = searchParams?.get("category")?.toLowerCase() ?? "all";

  return (
    <aside className="w-54 pt-5 border  bg-white/80 backdrop-blur-md rounded-2xl h-screen sticky top-0">
      <ScrollArea className="h-full p-5 space-y-10">
        <p>Select Category</p>
        {categories.map((cat) => {
          const slug = cat.toLowerCase().replace(/\s+/g, "-");
          const href = `/explore/categories?category=${encodeURIComponent(slug)}`;

          const isActive =
            pathname === "/explore/categories" && categoryParam === slug;

          return (
            <Link
              key={cat}
              href={href}
              aria-current={isActive ? "page" : undefined}
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