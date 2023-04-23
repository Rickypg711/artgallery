"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import ImageData from "./data/huitzil.json";

export default function Gallery() {
  return (
    <div className="">
      <Nav />
      <div className="max-w-2xl mx-auto my-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {/* image rendering */}
          {ImageData.map((image) => (
            <Link href="/" className="group relative" key={image.title}>
              <div className="aspect-auto w-full overflow-hidden rounded-lg bg-red-200">
                <Image
                  src={image.src}
                  alt={image.title}
                  priority
                  width={400}
                  height={400}
                  className="group-hover:scale-105 group-hover:opacity-75 object-cover transition-all"
                />
                <div className="group-hover-overlay">
                  <p>{image.description}</p>
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <h3 className="text-sm text-amber-400 font-bold">
                  {image.title}
                </h3>
                <p className="text-lg font-medium text-burntOrange">
                  {image.date}
                </p>
              </div>
            </Link>
          ))}

          {/*  */}
        </div>
      </div>
    </div>
  );
}
