import {motion} from "framer-motion"
import Image from "next/image"
import Bida from "../../Bida-dev/public/Bida.png"


export default function Photo () {
    return(
        <div className="w-full h-full relative">
            <motion.div>
            <div className=" xl:">
                <Image
                priority
                quality={100}
                fill
                src={Bida}
                alt=""
                
                />
            </div>
        </motion.div>
        </div>
    )
}