"use client"


// import { Tabs, TabsContent } from "@/components/ui//tabs";
import { motion } from "framer-motion";




const about = {
    title:"Frontend Developer",
    Description: "I'm Idowu Alexander Bamise, a passionate Front-End Developer specializing in building responsive, high-performance web applications. I enjoy transforming ideas into clean, scalable digital experiences that users can navigate effortlessly. With hands-on experience working on real-world projects for startups, academic institutions, and NGOs, I focus on delivering intuitive interfaces, clean code, and seamless user experiences.",

    info: [
        {
            fieldName: "Name:",
            fieldValue: "Idowu Alexander Bamise"
        },
        {
            fieldName: "Birthday:",
            fieldValue: "25th of June"
        },
        {
            fieldName: "Phone:",
            fieldValue: "(+234) 810 281 3443"
        },
        {
            fieldName: "Experience:",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Email:",
            fieldValue: "alexanderbamise@gmail.com"
        },
        {
            fieldName: "Nationality:",
            fieldValue: "Nigerian"
        },
        {
            fieldName: "Work Status:",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages:",
            fieldValue: "English, French"
        },
        

    ]
    
};
export default function About ()  {

    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        
        className="container h-screen mx-auto bg-[#1a1a1b]">
            <div className="container bg-amber-200 mx-auto">
                <h1 className="text-white/80 lg:text-4xl p-10 text-[24px] font-bold">ALLOW ME TO INTRODUCE MYSELF</h1>
                <div>
                    {/* <h2 className="text-blue-600 text-4xl font-bold">Frontend Developer</h2> */}
                    
                    <div className="w-full ml-20 mx-auto text-center lg:text-left">
                      <div className="flex flex-col gap-7.5">
                         <h3 className="text-4xl text-blue-700 font-bold">{about.title}</h3>
                         <p className="max-w-150 text-justify text-white/60 mx-auto lg:mx-0">{about.Description}</p>
                       <ul  className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-155 mx-auto xl:mx-0 ">
                             {about.info.map((item,index)=>{
                             return <li key={index} className="flex items-center lg:justify-center  flex-start lg:justify-start gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                         })}
                                        </ul>
                                                </div>
                                            </div>
                    
                </div>
            </div>
        </motion.div>
    )
}


