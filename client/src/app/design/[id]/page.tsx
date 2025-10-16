"use client";

import React from "react";
import { useParams } from "next/navigation";
import datas from "../designDatas/CardData";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DesignDetailPage() {
  const params = useParams();
  const id = Number(params.id); // id is a number
  const design = datas.find((d) => d.id === id);

  if (!design) return <p>Design not found</p>;

  const { img, avatar, name, category, description, likeCount } = design;

  return (
    <div className="max-w-6xl mx-auto px-6 pt-20">
      {/* Profile & Category */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Image
            src={avatar}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover aspect-square"
          />
          <div>
            <p className="font-semibold text-lg">{name}</p>
            <p className="text-sm text-gray-500">{category}</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            <span>{likeCount}</span>
          </div>
          <Button className="rounded-full" >Get in touch</Button>
        </div>
      </div>

      {/* Design Image */}
      <div className="w-full mb-8">
        <Image
          src={img}
          alt={`${name}'s design`}
          width={1200}
          height={800}
          className="w-full rounded-xl object-cover shadow-lg"
        />
      </div>

      {/* Description */}
      <div className="prose mx-10 md:mx-16 lg:mx-24 flex items-center justify-center">
        <p >{description}</p>
      </div>
    </div>
  );
}
