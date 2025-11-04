"use client";

import React, {useState} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {User } from "lucide-react";
import DropDownMenuCheckboxes from "./DropDown";
import {MessageCircleMore} from "lucide-react"
import {Bell} from "lucide-react"

const Header = () => {
  const pathName = usePathname() || "/";
  const [isloggedin, setIsloggedin ] = useState(true);

  const normalize = (p: string) => p.replace(/\/+$/, "") || "/";
  const isActive = (href: string) => {
    const p = normalize(pathName);
    const h = normalize(href);

    if (h === "/") return p === h;
    return p === h || p.startsWith(h + "/");
  };

  const navLinkClass = (href: string) =>
    `transition-colors px-3 py-1 rounded-full font-semibold ${
      isActive(href) ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:text-gray-900"
    }`;

  return (
    <header className="w-full shadow-sm z-50 bg-white fixed top-0 left-0">
      <div className="mx-auto flex items-center justify-between h-16 px-6 md:px-20 relative z-10">
        {/* Logo (Left) */}
        <div className="flex items-center">
          <h1 className="font-bold text-xl cursor-pointer text-gray-900">
            <Link href="/">talentED</Link>
          </h1>
        </div>

        {/* Navigation (Center) */}
        <nav className=" hidden md:flex justify-center text-nowrap">
          <ul className="flex items-center space-x-4 text-sm">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              {/* go to categories route with query param (e.g. ?category=all) */}
              <Link href="/explore/categories?category=all" className={navLinkClass("/explore")}>
                Explore
              </Link>
            </li>
            <li>
              <Link href="/find-talent" className={navLinkClass("/find-talent")}>
                Find Talent
              </Link>
            </li>
            <li>
              <Link href="/get-hired" className={navLinkClass("/get-hired")}>
                Get Hired
              </Link>
            </li>
            <li>
              <Link href="/blog" className={navLinkClass("/blog")}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register (Right) */}
        <div className=" flex items-center justify-between gap-10">
             <div className="flex items-center justify-center gap-5 ">
               <MessageCircleMore  className="cursor-pointer"/>
               <Bell className="cursor-pointer"/>
             </div>
          {
          isloggedin ? (
            <div className="pr-10  flex items-center justify-center gap-4">
              <DropDownMenuCheckboxes />
            </div>
          )
            :
            (
          <div className="flex-1 hidden md:flex text-sm justify-end gap-x-4">
          <Link
            href="/login"
            className="px-6 py-2 rounded-full bg-black text-white font-semibold hover:bg-gray-800 transition-colors"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-6 py-2 rounded-full border text-slate-800 font-semibold hover:bg-gray-800 transition-colors"
          >
            Register
          </Link>
        </div>
          )
        }
      </div>
        
      </div>
    </header>
  );
};

export default Header;