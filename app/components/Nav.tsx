"use client";

import { useState } from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaTwitter, FaMoon } from "react-icons/fa";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <header className="sticky top-0 z-10">
        <section className="mx-auto flex max-w-4xl items-center justify-between p-4">
          <h1 className="text-3xl font-medium text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue">
            <Link href="/" className="flex items-center">
              SueñAI <FaMoon className="ml-2 text-base" />
            </Link>
          </h1>
          <div>
            <button
              id="hamburger-button"
              className="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={toggleMobileMenu}
            >
              <div className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-burntOrange dark:bg-dreamBlue transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-burntOrange before:dark:bg-dreamBlue before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-burntOrange after:dark:bg-dreamBlue after:transition-all after:duration-500 after:content-['']"></div>
            </button>
            <nav className="hidden md:flex space-x-8 text-xl" aria-label="main">
              <Link
                href="/"
                className="hover:opacity-90 text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:opacity-90 text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange "
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:opacity-90 text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange"
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 md:ml-4">
                <Link
                  href="https://www.instagram.com/ricardoparedesgaytan/ "
                  target="_blank"
                >
                  <FaInstagram className="text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/ "
                  target="_blank"
                >
                  <FaLinkedin className="text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange" />
                </Link>
                <Link href="https://twitter.com/Rickypg711 " target="_blank">
                  <FaTwitter className="text-burntOrange dark:text-dreamBlue hover:text-dreamBlue dark:hover:text-burntOrange" />
                </Link>
              </div>
            </nav>
          </div>
        </section>

        <section
          id="mobile-menu"
          className={`top-0 justify-content-center absolute w-full origin-top animate-open-menu flex-col bg-blackHole dark:bg-luz text-5xl ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
          onClick={toggleMobileMenu}
        >
          <button
            className="text-8xl self-end px-6 text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue"
            onClick={toggleMobileMenu}
          >
            &times;
          </button>
          <nav
            className="flex min-h-screen flex-col items-center py-8"
            aria-label="mobile"
          >
            <Link
              href="/"
              className="w-full py-6 text-center hover:opacity-90 text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="w-full py-6 text-center hover:opacity-90 text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="w-full py-6 text-center hover:opacity-90 text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue"
            >
              Contact Us
            </Link>
            <div className="flex items-center space-6 md:ml-4">
              <Link
                href="https://www.instagram.com/ricardoparedesgaytan/ "
                target="_blank"
              >
                <FaInstagram className="text-3xl text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue mr-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ricardo-paredes-a2993a205/ "
                target="_blank"
              >
                <FaLinkedin className="text-3xl text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue mr-4" />
              </Link>
              <Link href="https://twitter.com/Rickypg711 " target="_blank">
                <FaTwitter className="text-3xl text-dreamBlue hover:text-burntOrange dark:text-burntOrange dark:hover:text-dreamBlue mr-4" />
              </Link>
            </div>
          </nav>
        </section>
      </header>
    </div>
  );
}
