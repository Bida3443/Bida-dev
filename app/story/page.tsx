"use client";

import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";


export default function Story ()  {
//   const bookRef = useRef("top");

//   const nextPage = () => {
//     bookRef.current.pageFlip().flipNext();
//   };
                    
//   const prevPage = () => {
//     bookRef.current.pageFlip().flipPrev();
//   };
 const book = useRef<any>(null);

  return (

    
    <HTMLFlipBook
    
      ref={book}
      width={400}
      height={400}
      size="stretch"
      minWidth={315}
      maxWidth={1000}
      minHeight={200}
      maxHeight={536}
      maxShadowOpacity={0.5}
      showCover
      mobileScrollSupport
      drawShadow
      flippingTime={1000}
      usePortrait
      startZIndex={0}
      autoSize
      clickEventForward
      useMouseEvents
      swipeDistance={30}
      showPageCorners
      disableFlipByClick={false}
      startPage={0}
      className=""
      style={{}}
    >
      {/* <div className="flex justify-between">
        <div className="relative h-full w-full flex flex-col items-center justify-center rounded-r-xl bg-linear-to-br from-blue-900 via-black to-black text-white overflow-hidden max-w-6xl mx-auto">

      Subtle light overlay
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]"></div>

      Glowing Animated Title
      <h1 className="relative text-3xl md:text-4xl font-bold tracking-wide animate-pulse drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]">
        The Tech Journey
      </h1>
      
      <p className="relative mt-4 text-sm opacity-80">
        By BiDa
      </p> */}
      
    {/* </div>
      </div> */}
      
      <div className="h-full flex items-center justify-center bg-blue-700 text-black p-6">Cover Page</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 1</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 2</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 3</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 4</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 6</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 7</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 8</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 9</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 10</div>
      <div className="h-full flex items-center justify-center bg-white text-black p-6">Page 11</div>

    </HTMLFlipBook>
  

  );
    
}
