import Link from "next/link"
import {Button} from "./ui/button";



export default function header () {
    return(
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto ">
                <link href="/" />
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    BiDa<span className="text-accent">.</span>
                </h1>
                </Link>
            </div>
        </header>
    )
}