import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=" w-full shadow-sm  z-50 bg-white fixed top-0 left-0 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6 md:px-20 relative z-10">
        {/* Logo (Left) */}
        <div className="flex-1 flex items-center">
          <h1 className="font-bold text-xl cursor-pointer  text-gray-900">
            <Link href="/">talentED</Link>
          </h1>
        </div>

        {/* Navigation (Center) */}
        <nav className="flex-1 hidden md:flex justify-center">
          <ul className="flex items-center space-x-8 text-sm font-semibold text-gray-700">
            <li>
              <Link href="/explore" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/explore" className="hover:text-gray-900 transition-colors">
                Explore
              </Link>
            </li>
            <li>
              <Link href="/find-talent" className="hover:text-gray-900 transition-colors">
                Find Talent
              </Link>
            </li>
            <li>
              <Link href="/get-hired" className="hover:text-gray-900 transition-colors">
                Get Hired
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-gray-900 transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login/Register (Right) */}
        <div className="flex-1 hidden md:flex  text-sm justify-end gap-x-4">
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
      </div>
    </header>
  )
}

export default Header;