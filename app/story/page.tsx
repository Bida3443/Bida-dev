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
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          <h1 className="justify-center text-center text-3xl font-bold py-5">INTRODUCTION</h1>
          <p className="leading-10 text-justify text-[20px]">My name is Alexander, A front-end developer focused on building clean, responsive web applications using Next.js. <br />
            A few years ago, I had absolutely no idea what tech was about. I saw websites, but I never imagined real people like me could build them. I even believed that programming was something abstract, something far beyond my reach. Anytime I saw someone writing code, I thought, “I can never learn this.</p>
        </div>

        {/* PAGE 2 */} 
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          <h1 className="justify-center text-center text-3xl font-bold py-5">THE TURNING POINT</h1>
          <p className="leading-10 text-justify text-[20px]">Everything changed in the third year of my undergraduate studies when we had a compulsory course where every student had to learn a skill or trade. I registered for phone and laptop repair, but by chance or maybe destiny, I found myself placed in a web development class. I had zero background. No idea what the internet was made of, and no clue about HTML or CSS. The first few classes were tough. I complained every day. I felt frustrated and out of place.</p>
        </div>

        {/* PAGE 3 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          I explored Next.js for building server-side rendered applications.
        </div>

        {/* PAGE 4 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          I am continuously improving my skills in frontend and backend technologies.
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
