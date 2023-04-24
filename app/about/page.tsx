// import Nav from "../components/Nav"

// export default function About() {
//   return (
//     <div className="bg-luz dark:bg-blackHole">
//       <Nav />
//       <div className="flex flex-col items-center justify-center h-screen">
//         <p className="text-center max-w-md text-dreamBlue dark:text-burntOrange text-lg">
//           Welcome to my dream gallery! Here, I share images that I remember from
//           my dreams. As someone who has always been fascinated by the power and
//           mystery of dreams, I find that creating visual representations of my
//           dreamscapes helps me to better understand and explore the content of my
//           unconscious mind. To create these images, I use <span className="dark:stext-dreamBlue text-burntOrange">DALL-E 2</span>, an AI program
//           developed by OpenAI that can generate images based on textual input. I
//           provide descriptions of the scenes and objects that I remember from my
//           dreams, and DALL-E 2 creates stunning, surreal images that capture the
//           essence of those dreamscapes. I hope that my dream gallery will inspire
//           you to pay closer attention to your own dreams and explore the rich
//           imagery and symbolism that they contain. Thank you for visiting!
//         </p>
//       </div>
//     </div>
//   );
// }

import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="bg-luz dark:bg-blackHole">
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-center max-w-md text-dreamBlue dark:text-burntOrange text-lg">
        <span className="dark:stext-dreamBlue text-burntOrange"> Do you ever wake up from a dream feeling like you&apos;ve just witnessed
          something truly extraordinary?</span> As someone who has always been
          fascinated by the power and mystery of dreams, I&apos;ve found that there&apos;s
          something magical about exploring the content of our unconscious
          minds. That&apos;s why I created my dream gallery, where I share images
          that I remember from my own dreams. I use{" "}
          <span className="dark:stext-dreamBlue text-burntOrange">
            DALL-E 2
          </span>
          , an AI program developed by <span className="dark:stext-dreamBlue text-burntOrange">
           OpenAI
          </span> that can generate stunning images
          based on textual input. I provide descriptions of the scenes and
          objects that I remember from my dreams, and <span className="dark:stext-dreamBlue text-burntOrange">
            DALL-E 2
          </span> brings them to
          life in ways that never fail to amaze me. Whether you&apos;re a dreamer
          yourself or simply someone who appreciates the beauty and complexity
          of the human mind, I hope that my dream gallery will inspire you to
          pay closer attention to your own dreams. Who knows what amazing
          adventures and insights may be waiting for you just beneath the
          surface of your consciousness? Thank you for visiting, and sweet
          dreams!
        </p>
      </div>
    </div>
  );
}
