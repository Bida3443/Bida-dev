"use client"


// import { Tabs, TabsContent } from "@/components/ui//tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Bida from "../../public/pac.png";
// import { text } from "stream/consumers";




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

const watch = [
    {
        svg: (
             <svg 
   xmlns="http://www.w3.org/2000/svg" 
   viewBox="0 0 512 512"
   className="w-7 h-7 stroke-white fill-blue-700"><path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.8 82.8c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0-172.4-82.5-213.1-264-213.6-363.2-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.9 1 251.4 0 256 0zm0 66.8l0 378.1c138-66.8 175.1-214.8 176-303.4l-176-74.6 0 0z"/>
   </svg>
        ),
        text:"INTEGRITY",
    },
    {
        svg: (
     <svg 
     xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 512 512"
     className="w-7 h-7 stroke-white fill-blue-700">
    <path d="M480.1 192l7.9 0c13.3 0 24-10.7 24-24l0-144c0-9.7-5.8-18.5-14.8-22.2S477.9 .2 471 7L419.3 58.8C375 22.1 318 0 256 0 127 0 20.3 95.4 2.6 219.5 .1 237 12.2 253.2 29.7 255.7s33.7-9.7 36.2-27.1C79.2 135.5 159.3 64 256 64 300.4 64 341.2 79 373.7 104.3L327 151c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 192 344 192l136.1 0zm29.4 100.5c2.5-17.5-9.7-33.7-27.1-36.2s-33.7 9.7-36.2 27.1c-13.3 93-93.4 164.5-190.1 164.5-44.4 0-85.2-15-117.7-40.3L185 361c6.9-6.9 8.9-17.2 5.2-26.2S177.7 320 168 320L24 320c-13.3 0-24 10.7-24 24L0 488c0 9.7 5.8 18.5 14.8 22.2S34.1 511.8 41 505l51.8-51.8C137 489.9 194 512 256 512 385 512 491.7 416.6 509.4 292.5z"/></svg>
        ),
        text:"VERSATALITY",
    },
    {
        svg: (
     <svg 
     xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 512 512"
     className="w-7 h-7 stroke-white fill-blue-700"><path d="M448 256a192 192 0 1 0 -384 0 192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0 256 256 0 1 1 -512 0zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
        ),
        text:"PRECISION",
    },
    {
        svg: (
     <svg 
     xmlns="http://www.w3.org/2000/svg" 
     viewBox="0 0 512 512"
     className="w-7 h-7 stroke-white fill-blue-700"><path d="M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>
        ),
        text:"PERFORMANCE",
    }
]
    
   



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
                    <div className="flex m-5 justify-center ">
                        <div className="flex flex-wrap justify-center gap-10 ">{watch.map((item, index)=>(
                            <div className="flex flex-col items-center justify-center bg-[#3c3c41]  w-40 p-8 rounded-xl text-center space-y-5 min-w-37" key={index}>
                                <div className="text-3xl bg-[#2a2a30] rounded-full p-2 ">{item.svg}</div>
                                <div className="font-semibold">{item.text}</div>
                            </div>
                        ))}</div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
