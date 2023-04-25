import Nav from "../components/Nav";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-luz dark:bg-blackHole">
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen sm:py-8">
        <p className="text-center max-w-md text-dreamBlue dark:text-burntOrange text-lg">
          <span className="dark:text-dreamBlue text-burntOrange">
            Do you ever wake up from a dream feeling like you&apos;ve just
            witnessed something truly extraordinary?
          </span>{" "}
          As someone who has always been fascinated by the power and mystery of
          dreams, I&apos;ve found that there&apos;s something magical about
          exploring the content of our unconscious minds. That&apos;s why I
          created my dream gallery, where I share images that I remember from my
          own dreams. I use{" "}
          <Link
            href="https://openai.com/dall-e-2/"
            className="dark:text-dreamBlue text-burntOrange hover:underline"
          >
            DALL-E 2
          </Link>
          , an AI program developed by{" "}
          <Link
            href="https://openai.com/"
            className="dark:text-dreamBlue text-burntOrange hover:underline"
          >
            OpenAI
          </Link>{" "}
          that can generate stunning images based on textual input. I provide
          descriptions of the scenes and objects that I remember from my dreams,
          and{" "}
          <Link
            href="https://openai.com/dall-e-2/"
            className="dark:text-dreamBlue text-burntOrange hover:underline"
          >
            DALL-E 2
          </Link>{" "}
          brings them to life in ways that never fail to amaze me. Whether
          you&apos;re a dreamer yourself or simply someone who appreciates the
          beauty and complexity of the human mind, I hope that my dream gallery
          will inspire you to pay closer attention to your own dreams. Who knows
          what amazing adventures and insights may be waiting for you just
          beneath the surface of your consciousness? Thank you for visiting, and
          sweet dreams!
        </p>
      </div>
    </div>
  );
}
