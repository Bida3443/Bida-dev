"use client";

import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";

// Cast to `any` to avoid TS errors
const FlipBook = HTMLFlipBook as any;

export default function StoryBook() {
  const bookRef = useRef<any>(1);

  // Responsive width/height for desktop + mobile
  const [dimensions, setDimensions] = useState({ width: 400, height: 520 });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth > 768 ? 500 : window.innerWidth - 40;
      const h = w * 1.3; // 1:1.3 aspect ratio
      setDimensions({ width: w, height: h });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextPage = () => bookRef.current.pageFlip().flipNext();
  const prevPage = () => bookRef.current.pageFlip().flipPrev();

  
 return (
    <div className="flex flex-col items-center justify-center bg-black px-4 py-2 md:py-10 gap-6">
      
      {/* FLIPBOOK */}
      <FlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        showCover
        drawShadow
        flippingTime={800}
        className="shadow-2xl bg-transparent"
      >
        
        {/* COVER PAGE */}
        <div className="h-full flex flex-col items-center justify-center bg-blue-700/20 text-white rounded-br-lg">
          <h1 className="text-3xl md:text-5xl text-center p-10 font-bold animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]">
            The Tech Journey
          </h1>
          <p className="mt-1 lg:leading-20 leading-12 text-[20px] text-center md:text-4xl font-bold">The Code He Feared Became <br /> His <br /> Voice in a Journey <br /> Through Impossible Lines <br /> from <br /> Shadows to Syntax</p>
        </div>

        {/* PAGE 1 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">INTRODUCTION</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">My name is Alexander, A front-end developer focused on building clean, responsive web applications using Next.js. <br />
            A few years ago, I had absolutely no idea what tech was about. I saw websites, but I never imagined real people like me could build them. I even believed that programming was something abstract, something far beyond my reach. Anytime I saw someone writing code, I thought, “I can never learn this.</p>
        </div>

        {/* PAGE 2 */} 
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">THE TURNING POINT</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">Everything changed in the third year of my undergraduate studies when we had a compulsory course where every student had to learn a skill or trade. I registered for phone and laptop repair, but by chance or maybe destiny, I found myself placed in a web development class. I had zero background. No idea what the internet was made of, and no clue about HTML or CSS. The first few classes were tough. I complained every day. I felt frustrated and out of place. <br /> But I kept attending.</p>
        </div>

        {/* PAGE 3 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">EARLY SUPPORT AND GROWTH</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">Slowly, with the help of a friend who always assisted me with assignments, things began to make sense. As time went on, I met more people who were ahead of me, and their knowledge inspired me instead of intimidating me.</p>
        </div>

        {/* PAGE 4 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">THE CONFIDENCE MOMENT</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">After the course ended, something happened that changed everything. <br /> I went back to the HTML and CSS assignments we were given and for the first time, I solved all of them by myself, without asking anyone for help. That moment gave me confidence. It made me realize that this path wasn't impossible. I was capable.</p>
        </div>

        {/* PAGE 5 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">COMMITMENT TO LEARNING</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">From there, I started taking my learning seriously. <br /> I revisited the basics, explored resources online, followed like-minded people, and surrounded myself with friends who shared the same mindset. That environment helped me grow faster, and little by little, my interest turned into passion.</p>
        </div>

        {/* PAGE 6 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center text-3xl font-bold py-5 font-serif">DISCOVERING PURPOSE IN TECH</h1>
          <p className="leading-10 text-justify text-[20px] font-serif">As I continued learning and doing my own research, tech opened my mind in ways I didn't expect. I discovered that what we build isn't just code, it's solutions. I started enjoying solving real problems, and since then, I have built several projects. It made me realize that tech can genuinely solve real-world challenges.</p>
        </div>
      </FlipBook>

      {/* NAVIGATION BUTTONS */}
      <div className="flex gap-4">
        <button
          onClick={prevPage}
          className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
        >
          Prev Page
        </button>
        <button
          onClick={nextPage}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

// "use client";

// import { useRef, useState, useEffect } from "react";
// import HTMLFlipBook from "react-pageflip";

// // Fix TypeScript strict typing
// const FlipBook = HTMLFlipBook as any;

// export default function StoryBook() {
//   const bookRef = useRef<any>(null);

//   // Responsive size
//   const [dimensions, setDimensions] = useState({
//     width: 400,
//     height: 520,
//   });

//   useEffect(() => {
//     const updateSize = () => {
//       const w = window.innerWidth > 768 ? 500 : window.innerWidth - 40;
//       const h = w * 1.3;
//       setDimensions({ width: w, height: h });
//     };

//     updateSize();
//     window.addEventListener("resize", updateSize);
//     return () => window.removeEventListener("resize", updateSize);
//   }, []);

//   const nextPage = () => bookRef.current?.pageFlip().flipNext();
//   const prevPage = () => bookRef.current?.pageFlip().flipPrev();

//   // Reusable Page Component (adds realistic spine shadow)
//   const Page = ({
//     children,
//     side,
//   }: {
//     children: React.ReactNode;
//     side: "left" | "right";
//   }) => {
//     return (
//       <div
//         className={`h-full flex flex-col justify-center p-8 
//         bg-[#fdfcf8] 
//         bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] 
//         text-black relative
//         ${
//           side === "left"
//             ? "shadow-[inset_-18px_0_30px_rgba(0,0,0,0.15)]"
//             : "shadow-[inset_18px_0_30px_rgba(0,0,0,0.15)]"
//         }`}
//       >
//         {children}
//       </div>
//     );
//   };

//   return (
//     <div className="flex flex-col items-center bg-black px-4 py-6 md:py-10 gap-6">
//       <FlipBook
//         ref={bookRef}
//         width={dimensions.width}
//         height={dimensions.height}
//         size="fixed"
//         showCover
//         drawShadow
//         flippingTime={800}
//         className="shadow-2xl"
//       >
//         {/* COVER PAGE */}
//         <div className="h-full flex flex-col items-center justify-center bg-blue-700 text-white rounded-r-xl shadow-inner">
//           <h1 className="text-3xl md:text-5xl text-center px-6 font-bold animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]">
//             The Tech Journey
//           </h1>

//           <p className="mt-6 text-center text-lg md:text-2xl font-semibold leading-relaxed px-6">
//             The Code He Feared Became His Voice <br />
//             in a Journey Through Impossible Lines <br />
//             from Shadows to Syntax
//           </p>
//         </div>

//         {/* PAGE 1 */}
//         <Page side="right">
//           <h1 className="text-center text-3xl font-bold py-5">
//             INTRODUCTION
//           </h1>
//           <p className="leading-8 md:leading-10 text-justify text-base md:text-lg">
//             My name is Alexander, a front-end developer focused on building
//             clean, responsive web applications using Next.js. A few years ago,
//             I had absolutely no idea what tech was about. Anytime I saw someone
//             writing code, I thought, “I can never learn this.”
//           </p>
//         </Page>

//         {/* PAGE 2 */}
//         <Page side="left">
//           <h1 className="text-center text-3xl font-bold py-5">
//             THE TURNING POINT
//           </h1>
//           <p className="leading-8 md:leading-10 text-justify text-base md:text-lg">
//             Everything changed in the third year of my undergraduate studies
//             when we had a compulsory course where every student had to learn a
//             skill. I registered for phone repair, but destiny placed me in a
//             web development class. I had zero background. The first few classes
//             were tough. I felt frustrated and out of place.
//           </p>
//         </Page>

//         {/* PAGE 3 */}
//         <Page side="right">
//           <h1 className="text-center text-3xl font-bold py-5">
//             THE STRUGGLE
//           </h1>
//           <p className="leading-8 md:leading-10 text-justify text-base md:text-lg">
//             Despite the confusion and challenges, I kept showing up. The lines
//             that once looked impossible slowly started making sense. What once
//             felt abstract became logical.
//           </p>
//         </Page>

//         {/* PAGE 4 */}
//         <Page side="left">
//           <h1 className="text-center text-3xl font-bold py-5">
//             THE GROWTH
//           </h1>
//           <p className="leading-8 md:leading-10 text-justify text-base md:text-lg">
//             Today, I build applications with confidence. The code I once feared
//             became my creative voice. What started as doubt transformed into
//             purpose.
//           </p>
//         </Page>
//       </FlipBook>

//       {/* NAVIGATION BUTTONS */}
//       <div className="flex gap-4">
//         <button
//           onClick={prevPage}
//           className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
//         >
//           Prev Page
//         </button>
//         <button
//           onClick={nextPage}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//         >
//           Next Page
//         </button>
//       </div>
//     </div>
//   );
// }
