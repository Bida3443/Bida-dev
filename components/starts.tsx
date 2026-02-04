"use client"

import CountUp from "react-countup";
// import { text } from "stream/consumers";

const Stat = [
    {
        num: 5,
        text: "Years of experience",
    },
    {num: 8,
    text: "Projects completed",
},
{
    num: 8,
    text: "Technologiesmastered",
},
{
    num:200,
    text: "code commits",
},
]

export default function Starts(){
    return(
        <section>
            <div className="container mx-auto">
                <div>
                   {Stat.map((item, index)=> {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp 
                        end={item.num}
                        duration={5}
                        delay={2}
                        className="text-4xl xl:text-6xl font-extrabold"/>
                        <p>{item.text}</p>
                    </div>
                   })}

                </div>
            </div>
        </section>
    )
}


