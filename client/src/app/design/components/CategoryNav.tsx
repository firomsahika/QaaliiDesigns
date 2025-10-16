"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import categories from "../designDatas/CategoryRoutes";
import { SelectDemo } from "@/components/SelectDropdown";
const CategoryNav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between  gap-10 py-4">
      {/* Left side - Select dropdown */}
      <SelectDemo />

      {/* Right side - scrollable categories */}
      <div className="flex gap-10 overflow-x-auto scrollbar-hide">
        {categories.map((category) => {
          const active = pathname.includes(category.href);
          return (
            <Link
              key={category.label}
              href={category.href}
              className={`text-sm font-medium capitalize whitespace-nowrap px-4 py-2 rounded-full transition
                ${
                  active
                    ? "bg-black text-white"
                    : "border hover:bg-gray-200"
                }`}
            >
              {category.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default CategoryNav;
