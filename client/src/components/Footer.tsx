"use client";

import Link from "next/link";
import { FaTwitter, FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">Qaalii</h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            A creative hub connecting Ethiopian designers and clients through
            design, innovation, and collaboration.  
          </p>
        </div>

        {/* Links */}
        <div className="flex justify-between md:justify-center md:space-x-16">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              Explore
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/explore" className="hover:text-gray-900">
                  Discover Designs
                </Link>
              </li>
              <li>
                <Link href="/find-talent" className="hover:text-gray-900">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/get-hired" className="hover:text-gray-900">
                  Get Hired
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              Support
            </h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex md:justify-end items-start space-x-5">
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaTwitter size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaInstagram size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <FaDribbble size={20} />
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Qaalii Design Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
