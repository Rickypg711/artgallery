'use client'
import Nav from "../components/Nav";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e:  React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href =
      "mailto:paredesricardopg@gmail.com?subject=Message from " +
      name +
      " (" +
      email +
      ")" +
      "&body=" +
      message;
  }

  return (
    <div className="bg-luz dark:bg-blackHole">
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-center max-w-md text-dreamBlue dark:text-burntOrange text-lg">
          If you have any questions or comments about my dream gallery, or if
          you just want to say hello, please don&apos;t hesitate to contact me! You
          can reach me by email filling out the form below. I always love hearing from fellow
          dreamers and exploring the fascinating world of dreams together!
        </p>
        <form className="mt-8 max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-dreamBlue dark:text-burntOrange text-sm font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-dreamBlue dark:focus:ring-burntOrange focus:border-dreamBlue dark:focus:border-burntOrange"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-dreamBlue dark:text-burntOrange text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-dreamBlue dark:focus:ring-burntOrange focus:border-dreamBlue dark:focus:border-burntOrange"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-dreamBlue dark:text-burntOrange text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 placeholder-gray-400 focus:outline-none focus:ring-dreamBlue dark:focus:ring-burntOrange focus:border-dreamBlue dark:focus:border-burntOrange"
              placeholder="Your message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-dreamBlue dark:bg-burntOrange text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


