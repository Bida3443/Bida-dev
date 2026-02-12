"use client"


// import { Tabs, TabsContent } from "@/components/ui//tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Bida from "../../public/pac.png";




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

const watch = {
   svg: <svg 
   xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 512 512"
   className=""><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"/></svg>,
   text:"Integrity",
   
};

    

export default function About ()  {

    return(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        
        className=" min-h-screen p-2 lg:p-12 bg-black">
            <div className=" max-w-6xl mx-auto bg-[#1a1a1b] rounded-2xl lg:p-8 p-0">
                
                <h1 className="text-white/80 lg:text-4xl p-10 text-[18px] font-bold">ALLOW ME TO INTRODUCE MYSELF</h1>
                <div className="flex lg:flex-row flex-col px-5">
                    <Image
                    src={Bida}
                    alt=""
                    height={50}
                    width={300}
                    className="w-full lg:max-w-75 md:max-w-50 h-auto rounded-2xl border-15 border-white"/>
                    
                    {/* <h2 className="text-blue-600 text-4xl font-bold">Frontend Developer</h2> */}
                    
                    <div className="w-full lg:ml-10 text-center lg:text-left">
                      <div className="flex flex-col gap-7.5">
                        <div className="space-y-5 lg:w-full">
                            <h3 className="lg:text-4xl mt-3 text-[20px] text-blue-700 font-bold">{about.title}</h3>
                         
                         <p className="max-w-150 text-justify text-white/60 mx-auto lg:mx-0">{about.Description}</p>
                       <ul  className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 max-w-155 mx-auto xl:mx-0 ">
                             {about.info.map((item,index)=>{
                             return <li key={index} className="flex items-center lg:justify-start justify-start  gap-4">
                            <span className="text-white/60">{item.fieldName}</span>
                            <span className="text-xl">{item.fieldValue}</span>
                                    </li>
                                         })}
                                        </ul>

                        </div>
                         
                                                </div>
                                            </div>
                                            
                    
                </div>
                <div className="m-5">
                    <div className="flex">
                        <h4>WATCHWARDS <span className="border-b border-blue-700 w-50"></span></h4>
                        <div className="border-b-3 border-blue-700 w-50"></div>
                    </div>
                    <div>ssss</div>
                </div>
            </div>
        </motion.div>
    )
}
