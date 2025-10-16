import React from 'react'
import Link from 'next/link';


const Footer = () => {
  return (
    <header className=" border w-full h-20 z-50 ">
      {/* Background animation inside header */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-10 -left-20 w-60 h-60 bg-pink-300 rounded-full filter blur-3xl opacity-40"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-16 -right-10 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-40"
          animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div> */}

      {/* Header Content */}
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 md:px-20 relative z-10 ">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-2xl cursor-pointer text-gray-900">
            <Link href="/">Qaalii</Link>
          </h1>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-8 font-semibold text-gray-700">
            <li>
              <Link
                href="/explore"
                className="hover:text-gray-900 transition-colors"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                href="/find-talent"
                className="hover:text-gray-900 transition-colors"
              >
                Find Talent
              </Link>
            </li>
            <li>
              <Link
                href="/get-hired"
                className="hover:text-gray-900 transition-colors"
              >
                Get Hired
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-gray-900 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login / CTA */}
        <div className="hidden md:block lg:flex gap-x-4">
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
            register
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="p-2 rounded-md hover:bg-gray-100 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Footer
