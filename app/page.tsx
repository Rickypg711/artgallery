"use client";
import Image from "next/image";
import Link from "next/link";
import huitzil from "./images/huitzil.png";
import Nav from "./components/Nav";
import ImageData from './data/huitzil.json'



export default function Gallery() {
  const currentDate = new Date().toLocaleDateString();
  const data = ImageData
  const {src, alt, title, date, description} = data;

  console.log(src, 'kjgkj')
  console.log(alt, 'kjgj')
  
  return (
    <div className="">
      <Nav />
      <div className="max-w-2xl mx-auto my-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 gap-x-1 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          <Link href="" className="group relative">
            <div className="aspect-auto w-full overflow-hidden rounded-lg bg-red-200">
              <Image
                src={huitzil}
                alt=""
                width={400}
          height={400}
                className="group-hover:scale-105 group-hover:opacity-75 object-cover transition-all"
              />
              <div className="group-hover-overlay">
                <p>
                  a hummingbird like the mexican god hutchilopostly with corn in
                  the background
                </p>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-amber-400 text-center">
              Huitzilopochtli
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {currentDate}
            </p>
          </Link>
          {/*  */}
         
   {ImageData.map((image) => (
    <Link href="/" className="group relative" key={image.title}>
      <div className="aspect-auto w-full overflow-hidden rounded-lg bg-red-200">
        <Image
          src={image.src}
          alt={image.title}
          width={300}
          height={300}
          className="group-hover:scale-105 group-hover:opacity-75 object-cover transition-all"
        />
        <div className="group-hover-overlay">
          <p>{image.description}</p>
        </div>
      </div>
      <h3 className="mt-4 text-sm text-amber-400 text-center">
        {image.title}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.date}</p>
    </Link>
  ))}
  
          {/*  */}

          <Link href="" className="group relative">
            <div className="aspect-auto w-full overflow-hidden rounded-lg bg-red-200">
              <Image
                src={ImageData[0].src}
                width={400}
          height={400}
                alt=""
                className="group-hover:scale-105 group-hover:opacity-75 object-cover transition-all"
              />
              <div className="group-hover-overlay">
                <p>Some text on top of the image</p>
              </div>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">Ricardo Paredes</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              @RicardoParedes
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
