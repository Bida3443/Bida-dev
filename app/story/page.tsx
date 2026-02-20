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
        <div className="h-full flex flex-col items-center justify-center bg-white/10 text-white rounded-br-lg">
          <h1 className="text-3xl md:text-4xl font-bold animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]">
            My Tech Journey
          </h1>
          <p className="mt-2 text-sm md:text-base">By BiDa</p>
        </div>

        {/* PAGE 1 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          I started learning frontend development with HTML, CSS, and JavaScript.
        </div>

        {/* PAGE 2 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black">
          I built my first React project and discovered the power of components and hooks.
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
