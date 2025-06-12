"use client";
import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 w-[96%] mx-auto rounded-t-3xl">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left">
          <div className="flex-shrink-0">
            <Image
              src="/whitelogo.svg"
              alt="logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-300">
            <a href="#" className="hover:underline">About us</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Use Cases</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Blog</a>
          </div>

          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" aria-label="LinkedIn" className="bg-white text-gray-800 p-2 rounded-full hover:bg-lime-400 transition">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Facebook" className="bg-white text-gray-800 p-2 rounded-full hover:bg-lime-400 transition">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Twitter" className="bg-white text-gray-800 p-2 rounded-full hover:bg-lime-400 transition">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center text-center sm:text-left w-full gap-10 mt-4">
          <div className="flex-1 min-w-[250px]">
            <div className="mb-4">
              <span className="inline-block bg-[#B9FF66] text-black font-semibold px-3 py-1 rounded">
                Contact us:
              </span>
            </div>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                Email:{" "}
                <a href="mailto:info@positivus.com" className="hover:underline">
                  info@positivus.com
                </a>
              </li>
              <li>Phone: 555-567-8901</li>
              <li>
                Address: 1234 Main St<br />
                Moonstone City, Stardust State 12345
              </li>
            </ul>
          </div>

          <div className="flex-1 max-w-2xl bg-[#292A32] rounded-lg flex flex-col sm:flex-row items-center justify-center p-4 gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-auto flex-grow rounded border border-gray-400 focus:outline-none text-white px-4 py-2 bg-transparent placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-[#B9FF66] rounded text-black font-semibold hover:bg-lime-300 px-6 py-2 w-full sm:w-auto"
            >
              Subscribe to news
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-sm text-gray flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
