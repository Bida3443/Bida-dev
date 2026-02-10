"use client"


import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,

} from "@/components/ui/select";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Icon } from "lucide-react";

const info=  [
    {
        Icon:<FaPhoneAlt/>,
        title:"phone",
        description:"(+234) 810 281 3443"
    },
    {
        Icon:<FaEnvelope/>,
        title:"Email",
        description:"Alexanderbamise@gmail.com"
    },
    {
        Icon:<FaMapMarkerAlt/>,
        title:"Address",
        description:"55, Oyemekun College Road, Ogba Lagis state."
    },
]

import {motion} from "framer-motion";
export default function Service ()  {

    return(
        <motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
        }}
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-7.5">
                    {/* form */}
                    <div className="lg:h-[54%] order-2 lg:order-0">
                        <form action="">form</form>
                    </div>
                    <div>
                        {/* info */}
                        <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-0 mb-8 lg:mb-0">info</div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}



