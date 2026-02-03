"use client"

import {delay, motion} from "framer-motion"
import Image from "next/image"
import Bida from "../public/Bidaa.png";


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

            <motion.svg className="lg:w-100 w-70 lg:h-100 h-70" fill="transparent"
            viewBox="0 0 506 506"
            xmlns="http://www.w3.org/2000/svg">
                <motion.circle  cx="253" cy="253" r="250" stroke="#1D4ED8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"
                initial={{strokeDasharray: "24 10 0 0"}}
                animate={{
                    strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                    rotate:[120, 360],
                }}
                transition={{
                    duration:20,
                    repeat: Infinity,
                    repeatType:"reverse",
                }}
                />
            </motion.svg>
            
        </div>
    )
}