"use client"

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const Services = [
    {
        num: "01",
        title: "Landing Page",
        Descripton:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati inventore earum dolores tempore, eligendi molestiae vitae ratione quia excepturi porro saepe ut corporis eaque tempora quaerat minus voluptate praesentium"
    },
    {
        num: "02",
        title: "Web Development & API",
        Descripton:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati inventore earum dolores tempore, eligendi molestiae vitae ratione quia excepturi porro saepe ut corporis eaque tempora quaerat minus voluptate praesentium"
    },
    {
        num: "03",
        title: "Web Development",
        Descripton:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati inventore earum dolores tempore, eligendi molestiae vitae ratione quia excepturi porro saepe ut corporis eaque tempora quaerat minus voluptate praesentium"
    },
    {
        num: "04",
        title: "Website Design",
        Descripton:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, obcaecati inventore earum dolores tempore, eligendi molestiae vitae ratione quia excepturi porro saepe ut corporis eaque tempora quaerat minus voluptate praesentium"
    },
]

export default function Service ()  {

    return(
        <section className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:p-0">
            <div className="container max-auto">
                <motion.div 
                initial= {{opacity:0}} 
                animate={{opacity: 1,  transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
                className="grid grid-cols-1 md:grid-cols-2 gap-15"
                >
                    {Services.map((Services, index) =>{
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group"> 
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-blue-700  transition-all duration-500">
                            {Services.num}</div>

                            <Link href="Services.href" className="w-17.5 h-17.5 rounded-full bg-white group-hover:bg-blue-700 group-hover:blue-500 transition-all duration-500 flex justify-center items-center hover:-rotate-45">

                            <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        <h1 className="text-[42px] font-bold leading-none text-white group-hover:text-blue-700 transition-all duration-500">{Services.title}</h1>
                        <p className="text-white/60">{Services.Descripton}</p>
                        <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}
                </motion.div>
            </div>
            <div></div>
        </section>
    )
};