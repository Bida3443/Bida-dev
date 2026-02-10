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
        icon:<FaPhoneAlt/>,
        title:"phone",
        description:"(+234) 810 281 3443",
    },
    {
        icon:<FaEnvelope/>,
        title:"Email",
        description:"Alexanderbamise@gmail.com",
    },
    {
        icon:<FaMapMarkerAlt/>,
        title:"Address",
        description:"55, Oyemekun College Road, Ogba Lagos Nigeria.",
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
                        <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-blue-700 font-bold">Let's work Together</h3>
                            <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab maiores neque voluptatum illum, quidem modi. Odit nemo, eligendi magnam laborum quia ipsa dignissimos necessitatibus reiciendis tenetur eveniet in quos est!</p>

                            {/* input */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                                <Input type="Firstname" placeholder="Firstname" />
                                <Input type="Lastname" placeholder="Lastname" />
                                <Input type="Emails" placeholder="Email Address" />
                                <Input type="Phone" placeholder="Phone Number" />
                            </div>
                            {/* Select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service </SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">Frontend Development</SelectItem>
                                        <SelectItem value="mst">Api Integration</SelectItem>
                                        <SelectItem value="set">Website Designs</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* textarea */}
                            <Textarea className="h-50"
                            placeholder="Type Your Message Here."/>
                        <Button className="max-w-40" size="md">Send Message</Button>
                        </form>
                    </div>
                    
                        {/* info */}
                        <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-0 mb-8 lg:mb-0">
                            <ul className="flex flex-col gap-10">
                                {info.map((item, index)=> {
                                    return <li key={index} className="flex items-center gap-6">

                                        <div className="w-13 h-13 lg:w-18 lg:[72px] bg-[#27272c] text-blue-700 rounded-md flex items-center justify-center">
                                    <div className="text-[28px]">{item.icon}</div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                    <h3 className="text-lg">{item.description}</h3>
                                </div>
                                    </li>
                                })}

                            </ul>
                        </div>
                    
                </div>
            </div>
        </motion.section>
    )
}



