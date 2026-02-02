"use client"

import {delay, motion} from "framer-motion"
import Image from "next/image"
import Bida from "../public/Bidaa.png";


export default function Photo () {
    return(
        <div className="w-full h-full relative mr-10">
            <motion.div
             initial={{opacity: 0}} 
             animate={{opacity: 1,
             transition:
             {delay: 2, duration: 0.4, ease: "easeIn"},
        }}>
                <div className="w-100 h-100 mix-blend-lighten">
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
            
        </div>
    )
}