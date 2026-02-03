"use client"

import {delay, motion} from "framer-motion"
import Image from "next/image"
import Bida from "../public/pac.png";


export default function Photo () {
    return(
        <div className="w-full h-full relative">
            <motion.div
             initial={{opacity: 0}} 
             animate={{opacity: 1,
             transition:
             {delay: 2, duration: 0.4, ease: "easeIn"},
        }}>
                <div className="lg:w-100 w-70 lg:h-100 h-70 mix-blend-lighten absolute">
                    <Image
            src={Bida}
            // fill
            alt="Bida"
            // width={400}
            // height={100}
            className=""
            priority
            quality={100}
            fill
            />
                </div>
            </motion.div>

            <motion.svg
  className="lg:w-100 w-70 lg:h-100 h-70"
  fill="transparent"
  viewBox="0 0 506 506"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Static square border */}
  <rect
    x="3"
    y="3"
    width="500"
    height="500"
    rx="20" // change to 20 for rounded square
    stroke="#E5E7EB"
    strokeWidth="4"
  />

  {/* Rotating dashed border */}
  <motion.rect
    x="3"
    y="3"
    width="500"
    height="600"
    rx="0"
    stroke="#1D4ED8"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    fill="transparent"
    strokeDasharray="40 20"
    animate={{
      strokeDashoffset: [0, 600],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</motion.svg>

            
        </div>
    )
}