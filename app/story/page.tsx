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
            My Tech Journey
          </h1>
          <p className="mt-1 lg:leading-20 leading-12 text-[20px] text-center md:text-4xl font-bold">The Code He Feared Became <br /> His <br /> Voice in a Journey <br /> Through Impossible Lines <br /> from <br /> Shadows to Syntax</p>
        </div>

        {/* PAGE 1 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">INTRODUCTION</h1>
          <p className="lg:leading-10 leading-5 text-justify lg:text-[20px] text-[10px] font-serif">I am Alexander, A front-end developer focused on building clean, responsive web applications using Next.js.</p>
          <h2 className="justify-center text-center lg:text-2xl text-[10px] font-bold py-5 font-serif">In the Begining</h2>
          <p className="lg:leading-10 leading-5 text-justify lg:text-[20px] text-[10px] font-serif"> 
            
            A few years ago, I had absolutely no idea what tech was about. I saw websites, but I never imagined real people like me could build them. I even believed that programming was something abstract, something far beyond my reach. Anytime I saw someone writing code, I thought, “I can never learn this.</p>

            <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  1
</span>
        </div>

        {/* PAGE 2 */} 
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">THE TURNING POINT</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">Everything changed in the third year of my undergraduate studies when we had a compulsory course where every student had to learn a skill or trade. I registered for phone and laptop repair, but by chance or maybe destiny, I found myself placed in a web development class. I had zero background. No idea what the internet was made of, and no clue about HTML or CSS. The first few classes were tough. I complained every day. I felt frustrated and out of place. <br /> But I kept attending.</p>
          <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  2
</span>

        </div>

        {/* PAGE 3 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">EARLY SUPPORT AND GROWTH</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">Slowly, with the help of a friend who always assisted me with assignments, things began to make sense. As time went on, I met more people who were ahead of me, and their knowledge inspired me instead of intimidating me.</p>  <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  3
</span>
        </div>

        {/* PAGE 4 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">THE CONFIDENCE MOMENT</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">After the course ended, something happened that changed everything. <br /> I went back to the HTML and CSS assignments we were given and for the first time, I solved all of them by myself, without asking anyone for help. That moment gave me confidence. It made me realize that this path wasn't impossible. I was capable.</p> <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  4
</span>
        </div>

        {/* PAGE 5 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">COMMITMENT TO LEARNING</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">From there, I started taking my learning seriously. <br /> I revisited the basics, explored resources online, followed like-minded people, and surrounded myself with friends who shared the same mindset. That environment helped me grow faster, and little by little, my interest turned into passion.</p> <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  5
</span>
        </div>

        {/* PAGE 6 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">DISCOVERING PURPOSE IN TECH</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">As I continued learning and doing my own research, tech opened my mind in ways I didn't expect. I discovered that what we build isn't just code, it's solutions. I started enjoying solving real problems, and since then, I have built several projects. It made me realize that tech can genuinely solve real-world challenges.</p> <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  6
</span>
        </div>

        {/* PAGE 7 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">CHALLENGES WITH ENVIRONMENT</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">But the journey wasn't smooth. <br /> Electricity in my school area was always a major challenge. Many times, I moved from place to place just to find power so I could practice. It was draining, but I kept going because stagnation has always been my biggest fear.</p>  <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  7
</span>
        </div>

        {/* PAGE 8 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">NYSC AND RESILIENCE</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">During my National Youth Service, I even relocated to Osun State hoping for better electricity. Instead of improving, things became worse. The light situation was barely 5% out of 100. But even in that environment, I refused to stop.</p> <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  8
</span>
        </div>

        {/* PAGE 9 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">MENTORSHIP AND SKILL EXPANSION</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">That was when I met a friend a full-stack developer who understood how tech works in the real world. He had the same mindset as me, and working with him sped up my growth. With his help, I moved beyond the basics and learned JavaScript functionality, Tailwind CSS, TypeScript, and Next.js.</p>  <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  9
</span>
        </div>

        {/* PAGE 10 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">BREAKING THROUGH JAVASCRIPT</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">Before I met him, I already knew HTML, CSS, and some JavaScript, but I couldn't apply JavaScript well. It felt like knowing A-Z but not being able to spell “communication.” He helped me connect everything together.</p> <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  10
</span>
        </div>

                {/* PAGE 11 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">PERSISTENCE DESPITE CONDITIONS</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">The environment was tough, poor electricity, terrible network but we kept moving. We tried different networks, moved around to find stable power, and even found places to work just to stay consistent. Those challenges didn't stop us; they taught us how to keep going regardless of the situation. <br /> Through all this, I still built projects. I even started an ongoing project right there in that difficult environment.</p>  <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  11
</span>
        </div>

        {/* PAGE 12 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_10px_10_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">INNER STRUGGLES AND CORE LESSON</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">Sometimes I felt bad about the situation, exhausted, discouraged, and sorry for myself. But I always reminded myself that giving up was never an option. All those challenges taught me one big lesson: <br /> Environment matters, but resilience matters more.</p> <span className="absolute bottom-4 right-6 text-sm text-gray-500">
  12
</span>
        </div>

        {/* PAGE 13 */}
        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">

         <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
          <h1 className="justify-center text-center lg:text-3xl text-2xl font-bold py-5 font-serif">WHERE I STAND TODAY</h1>
          <p className="lg:leading-10 text-justify leading-5 lg:text-[20px] text-[10px] font-serif">These experiences built in me the mindset, discipline, and resilience I carry into tech today.</p>  <span className="absolute bottom-4 lg:left-6 right-6 text-sm text-gray-500">
  13      
</span>
        </div>

        <div className="h-full flex items-center justify-center p-6 bg-[#fdfcf8] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] text-black relative shadow-inner">
        <div className="absolute right-0 top-0 h-full w-6 bg-linear-to-l from-black/20 to-transparent pointer-events-none shadow-[inset_-10px_20_20px_rgba(0,0,0,0.2)]" />
        <h1 className="justify-center lg:text-3xl text-2xl"></h1>
         
      
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
