"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroTitle() {
  return (
    <h1 className="text-3xl font-bold">
      I'm a creative {" "}
      <span className="text-blue-700 border-b-2 border-white">
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
