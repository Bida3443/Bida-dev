"use client"


import { icons } from "lucide-react";
import { title } from "process";
import {FaHtml5,FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs, SiTypescript} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui//tabs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@radix-ui/react-tooltip";

import { ScrollArea } from '@/components/ui/scroll-area';
import {motion} from "framer-motion";

const about = {
    title:"About me",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iste impedit! Commodi repellat magnam et eos in quam placeat, unde maxime? Quasi vel similique, ex illo nisi mollitia. Quos, doloribus.",

    info: [
        {
            fieldName: "Name",
            fieldValue: "Idowu Alexander Bamise"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+234 810 281 3443)"
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Email",
            fieldValue: "Alexanderbamise@gmail.com"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigerian"
        },
        {
            fieldName: "Frelance",
            fieldValue: "Available"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, French"
        },
        

    ]
    
};

const experience = {
    icon: "/public/Bida.png",
    title: "My experience",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iste impedit! Commodi repellat magnam et eos in quam placeat, unde maxime? Quasi vel similique, ex illo nisi mollitia. Quos, doloribus.",
    items: [
        {
            Company: "AmondSouls",
            Position: "Freelance Website Designer",
            Duration: "June 2022 - August 2022",
        },
         {
            Company: "Federal University Of Technology Akure",
            Position: "Website Developer",
            Duration: "2023 - 2024",
        },
        {
            Company: "Premium Smile Dental Clinic",
            Position: "Website Developer",
            Duration: "2025 - 2026",
        },
        
    ]

}

const education = {
    icon: "/public/Bida.png",
    title: "My education",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iste impedit! Commodi repellat magnam et eos in quam placeat, unde maxime? Quasi vel similique, ex illo nisi mollitia. Quos, doloribus.",
    items: [
        {
            Institution: "Federal University Of Technology Akure",
            Degree: "Bachelor In Forestry And Wood Technology",
            Duration: "2017 - 2024",
        },
         {
            Institution: "International College Of Safety And Management Professional",
            Degree: "Post graduate Diploma In Information Technology",
            Duration: "2025",
        },
        
    ]

};

const Skills = {
    title: "My Skills",
    Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, iste impedit! Commodi repellat magnam et eos in quam placeat, unde maxime? Quasi vel similique, ex illo nisi mollitia. Quos, doloribus.",
    Skilllist: [
        {
            icon: <FaHtml5/>,
            name: "html-5",
            Duration: "2017-2024",
        },
          {
            icon: <FaCss3/>,
            name: "css-3", 
        },
        {
            icon: <FaJs/>,
            name: "javascript", 
        },
        {
            icon: <SiNextdotjs/>,
            name: "Next.js", 
        },
        {
            icon: <FaReact/>,
            name: "React.js", 
        },
        {
            icon: <SiTailwindcss/>,
            name: "tailwind.css", 
        },
        {
            icon: <FaFigma/>,
            name: "Figma", 
        },
        {
            icon: <SiTypescript/>,
            name: "Typscript", 
        },
        
    ]

}


export default function Resume ()  {

    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="min-h-[80vh] flex items-center lg:m-2 m-2 justify-center py-12 lg:py-0"
        
        >
            <div className="container  flex flex-col mx-auto">

                 <Tabs      
                    defaultValue="Experience"
                    className="flex flex-col lg:flex-row lg:items-start gap-6">
                        
                    <div className="flex flex-col lg:flex-row gap-10">
                        <TabsList className="flex flex-col w-full lg:w-120 mx-auto lg:mx-0 gap-6">
                        <TabsTrigger value={"Experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"Education"}>Education</TabsTrigger>
                        <TabsTrigger value={"About Me"}>About Me</TabsTrigger>
                        <TabsTrigger value={"Skills"}>Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh]  w-full">

                        <TabsContent value="Experience" className="w-full">
                            <div className="flex flex-col gap-7.5 text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-150 text-white/60 mx-auto lg:mx-0">{experience.Description}</p>
                                <ScrollArea className="h-100">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">{experience.items.map((item, index)=>{
                                        return <li key={index} className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-blue-500">{item.Duration}</span>
                                            <h3 className="text-lg max-w-65 min-h-15 text-center lg:text-left">{item.Position}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                                <p className="text-white/60">{item.Company}</p>
                                            </div>
                                        </li>
                                    })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="Education" className="w-full">
                            <div className="flex flex-col gap-7.5 text-center lg:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-150 text-white/60 mx-auto lg:mx-0">{education.Description}</p>
                                <ScrollArea className="h-100">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-7.5">{education.items.map((item, index)=>{
                                        return <li key={index} className="bg-[#232329] h-46 py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-blue-500">{item.Duration}</span>
                                            <h3 className="text-lg max-w-65 min-h-15 text-center lg:text-left">{item.Degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                                <p className="text-white/60">{item.Institution}</p>
                                            </div>
                                        </li>
                                    })}</ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="About Me" className="w-full text-center lg:text-left">
                            <div className="flex flex-col gap-7.5">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-150 tetx-white/60 mx-auto lg:mx-0">{about.Description}</p>
                                <ul  className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-155 mx-auto xl:mx-0 ">
                                    {about.info.map((item,index)=>{
                                        return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        <TabsContent value="Skills" className="w-full h-full">
                            <div className="flex flex-col gap-7.5">
                                <div className="flex flex-col gap-7.5 text-center lg:text-left">
                                    <h3 className="text-4xl font-bold">{Skills.title}</h3>
                                    <p className="max-w-150 text-white/60 mx-auto lg:mx-0">{Skills.Description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-7.5">
                                    {Skills.Skilllist.map((skill, index) =>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-37.5 rounded-xl flex bg-[#232329] justify-center items-center group">
                                                        <div className="text-6xl hover:text-blue-500 transition-all duration-300 cursor-pointer" >{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="bg-white rounded-xl text-[#232329] p-2 capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                        
                    </div>  
                </Tabs>
 


            </div>
        </motion.div>
    )
}