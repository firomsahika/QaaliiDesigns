"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MapPin, Star } from "lucide-react";
import datas from "@/app/design/designDatas/CardData";

export default function DesignerGrid() {
  const designers = datas;

  return (
    <div className="py-10 px-6">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {designers.map((designer) => (
          <div
            key={designer.id}
            className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 p-3  flex flex-col items-center text-center hover:-translate-y-1"
          >
            {/* Profile Image */}
            <div className="relative w-24 h-24 mb-5">
              <Image
                src={designer.img}
                alt={designer.name}
                fill
                className="object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Name + Role */}
            <h3 className="text-lg font-semibold text-gray-900">
              {designer.name}
            </h3>
            {/* <p className="text-gray-500 text-sm mt-1">
              {designer.category || "UI/UX Designer"}
            </p> */}

            {/* Location */}
            <div className="flex items-center justify-center text-gray-400 text-xs mt-1">
              <MapPin size={12} className="mr-1" />
              Addis Ababa, Ethiopia
            </div>

            {/* Rating */}
            {/* <div className="flex items-center justify-center mt-3 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-1 text-xs text-gray-500">(4.0)</span>
            </div> */}

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 my-3">
              {["Figma", "Branding", "UI/UX"].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Hover Button */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="default"
                className="rounded-full px-6 py-2 text-sm shadow-md"
              >
                View Profile
              </Button>
            </div>

            {/* Hover overlay effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-16">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
