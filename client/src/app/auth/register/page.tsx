import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectDemo } from "@/components/SelectDropdown";
import Link from "next/link";


const page = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="space-y-8 px-5 py-6 w-sm  shadow-2xl flex flex-col items-center rounded-3xl ">
        <p className="font-bold text-2xl ">Register</p>
        <div className="w-xs flex flex-col space-y-3 px-6">
          <Input type="text" placeholder="Username" className="bg-gray-100" />
          <Input type="email" placeholder="Email" className="bg-gray-100" />

          <Input
            type="password"
            placeholder="Password"
            className="bg-gray-100"
          />
          <Input type="text" placeholder="Skill   e.g UI/UX Designer" className="bg-gray-100" />
          {/* <SelectDemo /> */}
          <Button>Register</Button>
        </div>

        <div className="flex gap-x-4">
          <p>Already have an account? </p>
          <Link href="/auth/login" className="text-blue-400 font-medium">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
