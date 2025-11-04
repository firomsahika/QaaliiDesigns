"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart } from "lucide-react";
import { UserDesigns } from "./UserDesign"; // separate component
import showit2 from "@/../public/showit2.webp";
import {Pencil} from "lucide-react"

const ProfilePage = () => {
  const user = {
    id: 14,
    img: showit2,
    name: "Firomsa Hika",
    role:"UI/UX Designer",
    category: "Website Designer",
    phone: "+251 927 839 40",
    email: "firomsahika2022@gmail.com",
    likeCount: 120,
    bio: "Creative developer passionate about building visually stunning",
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="flex gap-3">
          <Button variant="outline"><Pencil />Edit Profile</Button>
          <Button>Upload Design</Button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-50 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row gap-8 items-center shadow-md backdrop-blur">
        <div className="w-[120px] h-[120px] rounded-full overflow-hidden ring-4 ring-indigo-500/40">
          <Image
            src={user.img}
            alt="avatar"
            width={120}
            height={120}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-muted-foreground">{user.role}</p>
          <p className="max-w-2xl text-sm text-gray-400">{user.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3">
            <div>
              <p className="text-xs uppercase text-gray-400">Category</p>
              <p className="font-medium">{user.category}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-400">Phone</p>
              <p className="font-medium">{user.phone}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-400">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4">
            <Heart className="text-red-500" size={20} />
            <span className="font-semibold">{user.likeCount} Total Likes</span>
          </div>
        </div>
      </div>

      {/* User Designs List */}
      <UserDesigns />
    </div>
  );
};

export default ProfilePage;
