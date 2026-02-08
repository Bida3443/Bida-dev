"use client"

import {motion} from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        title: "Dental Clinic Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5,"}, {name: "TailwindCss,"}, {name:"JavaScript,"}, {name:"NextJs,"},{name:"TyprScript,"}, {name:"API"}],
        Image: "/home.JPG",
        live: "https://k-dental-3b3i.vercel.app/",
        githhub: "",
        
    },
    {
        num: "02",
        category: "Frontend Project",
        title: "project 2",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5,"}, {name: "TailwindCss,"}, {name:"JavaScript,"}, {name:"NextJs,"},{name:"TyprScript"}],
        Image: "/Inu.JPG",
        live: "https://hokkaidu-inu.vercel.app/",
        githhub: "",
        
    },
    {
        num: "03",
        category: "Frontend Project",
        title: "Forest Information System Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "WordPress,"}, {name: "Figma"}],
        Image: "/forest.png",
        live: "",
        githhub: "",
        
    },
    {
        num: "04",
        category: "Frontend Project",
        title: "Portfolio Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ab veritatis quos tenetur quisquam fugiat, repellendus fugit rerum reiciendis placeat explicabo ut ullam doloribus. Culpa dolores unde optio quo odio!",
        stack: [{name: "Html 5,"}, {name: "TailwindCss,"}, {name:"JavaScript,"}, {name:"NextJs,"},{name:"TyprScript"}],
        Image: "/portfolio.JPG",
        live: "https://bida-dev.vercel.app/",
        githhub: "",
        
    },
]

export default function Service ()  {

    const [project, setProject] = useState(projects[0]);
    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex ;

        setProject(projects[currentIndex]);
    };

    return(
        <motion.section initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className="min-h-[80vh] flex flex-col justify-center m-2 py-12 lg:px-0"
                    >
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-7.5 ">
                    <div className="w-full lg:w-[50%] lg:h-115 flex flex-col lg:justify-between order-2 lg:order-0 lg:gap-5 gap-20">
                        <div className="flex flex-col gap-7.5 h-[50%]">
                            <div className="text-6xl leading-0 font-extrabold text-transparent text-outline ">{project.num}</div>
                        </div>
                        <div className="space-y-7">
                            <h2 className="text-[42px] font-bold leading-0 text-white group-hover:text-blue-400 transition-all duration-500 gap-4 capitalize">{project.category}</h2>

                            <p className="text-white/60">{project.description}</p>

                            {/* stack */}
                            <ul className="flex gap-2">
                                {project.stack.map((item,index)=>{
                                    return <li key={index} className="lg:text-lg text-[12px]  text-blue-600">{item.name}</li>
                                })}
                            </ul>
                            <div className="border border-white/20 "></div>
                          
                               <div className="flex gap-4 items-center">
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
                    </div>


                    <div className="w-full lg:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="lg:h-100 mb-12"
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            navigation
                            onSlideChange={handleSlideChange}
                            >
                            {projects.map((project, index) =>{
                                return <SwiperSlide key={index} className="">
                                    <div className="relative w-full h-65 sm:h-80 overflow-hidden"></div>
                                    {/* {project.title} */}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/30" />

                                    {/* image */}

                                    <div className="w-full h-full">
                                        <Image
                                        src={project.Image}
                                        alt=""
                                        fill
                                        className="object-cover"/>

                                        <h3 className="absolute bottom-4 left-4 text-white text-lg z-10">
                                            
                                        </h3>
                                    </div>
                                    
                                    
                                    </SwiperSlide>;
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}