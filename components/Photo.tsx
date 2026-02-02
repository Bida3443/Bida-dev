"use client"

import {motion} from "framer-motion"
import Image from "next/image"
import Bida from "../public/Bidaa.png";


export default function Photo () {
    return(
        <div className="w-full h-full relative">
            <motion.div>
                <div className="w-100 h-100">
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