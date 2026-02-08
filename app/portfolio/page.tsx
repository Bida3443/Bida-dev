"use client"

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, 
        TooltipContent, 
        TooltipProvider, 
        TooltipTrigger, 
    } from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects =[
    {
        num: "01",
        category: "Frontend Project",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5,"}, {name: "TailwindCss,"}, {name:"JavaScript,"}, {name:"NextJs,"},{name:"TyprScript,"}, {name:"API"}],
        Image: "/public/home.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "02",
        category: "Frontend Project",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5"}, {name: "TailwindCss"}, {name:"JavaScript"}, {name:"NextJs"},{name:"TyprScript"}],
        Image: "/public/page.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "03",
        category: "Frontend Project",
        title: "project 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "WordPress"}, {name: "Figma"}],
        Image: "/public/forest.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "02",
        category: "Frontend Project",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5"}, {name: "TailwindCss"}, {name:"JavaScript"}, {name:"NextJs"},{name:"TyprScript"}],
        Image: "",
        live: "",
        githhub: "",
        
    },
]

export default function Service ()  {

    const [project, setProject] = useState(projects[0]);

    return(
        <motion.section initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
                    >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-7.5 ">
                    <div className="w-full lg:w-[50%] lg:h-115 flex flex-col lg:justify-between order-2 lg:order-0 lg:gap-5 gap-20">
                        <div>
                            <div className="text-6xl leading-0 font-extrabold text-transparent text-outline ">{project.num}</div>
                        </div>
                        <div className="space-y-7">
                            <h2 className="text-[42px] font-bold leading-0 text-white group-hover:text-blue-400 transition-all duration-500 gap-4 capitalize">{project.category}</h2>

                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stack.map((item,index)=>{
                                    return <li key={index} className="text-lg text-blue-600">{item.name}</li>
                                })}
                            </ul>
                            <div className="border border-white/20 -mt-5"></div>
                          
                                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href={project.live}
                            className="w-17.5 h-17.5 rounded-full bg-white/50 flex justify-center items-center group cursor-pointer"
                        >
                            <BsArrowUpRight className="text-white text-3xl group-hover:text-blue-700" />
                        </Link>
                        </TooltipTrigger>

                        <TooltipContent className="bg-white text-black rounded-xl p-2">
                        <p>Live Project</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>

                {/* Github Project Button */}
                     <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <Link
                            href={project.githhub}
                            className="w-17.5 h-17.5 rounded-full bg-white/50 flex justify-center items-center group cursor-pointer"
                        >
                            <BsGithub className="text-white text-3xl group-hover:text-blue-700" />
                        </Link>
                        </TooltipTrigger>

                        <TooltipContent className="bg-white text-black rounded-xl p-2">
                        <p>Github Repository</p>
                        </TooltipContent>
                    </Tooltip>
                    </TooltipProvider>

                            
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%]">slider</div>
                </div>
            </div>

        </motion.section>
    )
}