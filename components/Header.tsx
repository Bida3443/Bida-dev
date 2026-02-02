import Link from "next/link"
import {Button} from "./ui/button";

import Nav from "./Nav";
import MobileNav from "./MobileNav";



export default function header () {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <link href="/" />
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    BiDa<span className="text-blue-700">.</span>
                </h1>
                </Link>

                {/* desktop Nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                    <Button className="cursor-pointer hover:bg-blue-700">Hire Me</Button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                {/* <div className="xl:hidden">mobile nav</div> */}
                <MobileNav/>
            </div>
        </header>
    )
}