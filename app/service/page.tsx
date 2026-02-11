"use client"

import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";
import {motion} from "framer-motion";

const Services = [
    
     {
    num: "01",
    title: "Frontend Development",
    Descripton: "I build fast, scalable, and maintainable web applications using modern technologies like React and Next.js. I focus on clean code, reusable components, and delivering smooth user experiences."
},
{
    num: "02",
    title: "API Integration",
    Descripton: "I connect frontend applications to APIs and backend services to deliver dynamic, real-time data. I handle data fetching, state management, and error handling to ensure seamless functionality."
},
{
    num: "03",
    title: "UI/UX Implementation",
    Descripton: "I transform design mockups into pixel-perfect, interactive interfaces. I pay attention to spacing, typography, and user flow to create intuitive and engaging digital experiences."
},
{
    num: "04",
    title: "Responsive Web Design",
    Descripton: "I design and develop websites that adapt smoothly across mobile, tablet, and desktop devices. I ensure consistency, accessibility, and performance on every screen size."
},
]

export default function Service ()  {

    return(
        <section className="min-h-[80vh] lg:m-2 m-2 flex flex-col items-center justify-center py-12 xl:p-0">
            <div className="flex justify-start">
                
            </div>
            <div className="container max-auto">
                <h1 className="text-[40px] font-bold leading-none  mb-3 text-blue-700 transition-all duration-500">MY SERVICES</h1>
                <div className="border-b border-white/20 mb-5 w-65"></div>
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