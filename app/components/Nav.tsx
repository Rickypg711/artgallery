"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="sticky top-0 z-10 text-white">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium text-burntOrange">
            <Link href="/">SueñAI</Link>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={toggleMobileMenu}
            >
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
            <nav className="hidden md:flex space-x-8 text-xl" aria-label="main">
              <Link href="#rockets" className="hover:opacity-90 text-amber-400">
                Home
              </Link>
              <Link
                href="#testimonials"
                className="hover:opacity-90 text-amber-400"
              >
                About
              </Link>
              <Link href="#contact" className="hover:opacity-90 text-amber-400">
                Contact
              </Link>
              <div className="flex items-center space-x-4 md:ml-4">
                <FaInstagram className="text-amber-400 hover:text-white" />
                <FaLinkedin className="text-amber-400 hover:text-white" />
                <FaTwitter className="text-amber-400 hover:text-white" />
              </div>
            </nav>
          </div>
        </section>
        




        <section
  id="mobile-menu"
  className={`top-0 justify-content-center absolute w-full origin-top animate-open-menu flex-col bg-black text-5xl ${
    isMobileMenuOpen ? "" : "hidden"
  }`}
  onClick={toggleMobileMenu}
>
  <button className="text-8xl self-end px-6" onClick={toggleMobileMenu}>
    &times;
  </button>
  <nav
    className="flex min-h-screen flex-col items-center py-8"
    aria-label="mobile"
  >
    <Link
      href="#hero"
      className="w-full py-6 text-center hover:opacity-90 text-amber-400"
    >
      Home
    </Link>
    <Link
      href="#About"
      className="w-full py-6 text-center hover:opacity-90 text-amber-400"
    >
      About
    </Link>
    <Link
      href="#contact"
      className="w-full py-6 text-center hover:opacity-90 text-amber-400"
    >
      Contact Us
    </Link>
    <div className="flex justify-center">
      <FaInstagram className="text-3xl text-amber-400 hover:text-white mx-4" />
      <FaLinkedin className="text-3xl text-amber-400 hover:text-white mx-4" />
      <FaTwitter className="text-3xl text-amber-400 hover:text-white mx-4" />
    </div>
  </nav>
</section>

      </header>
    </div>
  );
}
