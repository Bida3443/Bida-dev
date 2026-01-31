import Link from "next/link"
import {Button} from "./ui/button";

import Nav from "./Nav";



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
                    <Link href="/Contact">
                    <button>Hire Me</button>
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}