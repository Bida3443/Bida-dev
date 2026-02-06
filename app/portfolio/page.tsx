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
        category: "frontend",
        title: "project 1",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5"}, {name: "TailwindCss"}, {name:"JavaScript"}, {name:"NextJs"},{name:"TyprScript"}, {name:"API"}],
        Image: "/public/home.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "02",
        category: "frontend",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5"}, {name: "TailwindCss"}, {name:"JavaScript"}, {name:"NextJs"},{name:"TyprScript"}],
        Image: "/public/page.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "03",
        category: "website design",
        title: "project 3",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "WordPress"}, {name: "Figma"}],
        Image: "/public/forest.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "02",
        category: "frontend",
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
                <div className="flex flex-col lg:flex-row lg:gap-7.5">
                    <div className="w-full lg:w-[50%] lg:h-115 flex flex-col lg:justify-between order-2 lg:order-0">text</div>
                    <div className="w-full">slider</div>
                </div>
            </div>

        </motion.section>
    )
}