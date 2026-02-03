"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTitle() {
  return (
    <h1 className="lg:text-3xl text-[22px] font-bold">
      I'm a creative {" "}
      <span className="text-blue-500 border-b-2 border-white">
        <Typewriter
          words={[
            "Frontend Developer",
            "Website Designer",
            "Problem Solver",
            
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </h1>
  );
}
