"use client"


import { icons } from "lucide-react";
import { title } from "process";
import {FaHtml5,FaCss3, FaJs, FaReact, FaFigma, FaNodeJs,} from "react-icons/fa";

import {SiTailwindcss, SiNextdotjs} from "react-icons/si";

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
            Duration: "June2022-August2022",
        },
         {
            Company: "Federal University Of Technology Akure",
            Position: "Website Developer",
            Duration: "2023-2024",
        },
        {
            Company: "Premium Smile Dental Clinic",
            Position: "Website Developer",
            Duration: "2025-2026",
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
            Duration: "2017-2024",
        },
         {
            Company: "International College Of Safety And Management Professional",
            Position: "Post graduate Diploma",
            Duration: "2025",
        },
        {
            Company: "Premium Smile Dental Clinic",
            Position: "Website Developer In Information Technology",
            Duration: "2025-2026",
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
        
    ]

}


export default function Resume ()  {

    return(
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-15">
                    <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value={"Experience"}>Experience</TabsTrigger>
                        <TabsTrigger value={"Education"}>Education</TabsTrigger>
                        <TabsTrigger value={"About Me"}>About Me</TabsTrigger>
                        <TabsTrigger value={"Skills"}>Skills</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">

                        <TabsContent value="Experience" className="w-full">Experience</TabsContent>
                        <TabsContent value="Education" className="w-full">Education</TabsContent>
                        <TabsContent value="About Me" className="w-full">About Me</TabsContent>
                        <TabsContent value="Skills" className="w-full">Skills</TabsContent>
                        
                    </div>
                </Tabs>
            </div>
        My Resume</motion.div>
    )
}