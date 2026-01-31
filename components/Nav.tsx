"use client"


import Link from "next/link"
import { usePathname } from "next/navigation"

const Links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "my-story",
        path: "/my-story",
    },
    {
        name: "skills & Services",
        path: "/skills",
    },
    {
        name: "Portfolio",
        path: "/portfolio",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact",
        path: "/contact",
    },
];




export default function Nav () {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {Links.map((link,index) => {
                return(
                     <Link href={link.path} key={index} className={`${link.path === pathname && "text-blue-700 border-b-2 border-blue-700"} capitalize font-medium hover:text-blue-700 transition-all `}>
            {link.name}
        </Link>

                );
            })}

       
        </nav>
    )
};