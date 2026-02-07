
// "use client"


// import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import {CiMenuFries} from "react-icons/ci";


// const links =[
//     {
//         name: 'home',
//         path: '/'
//     },
//     {
//         name: 'about',
//         path: '/about'
//     },
//     {
//         name: 'my-Story',
//         path: '/story'
//     },
//     {
//         name: 'skills & services',
//         path: '/service'
//     },
//     {
//         name: 'resume',
//         path: '/resume'
//     },
//     {
//         name: 'contact',
//         path: '/contact'
//     },
// ]



// const MobileNav = () =>{
//     const pathname = usePathname();
//     return <Sheet>
//         <SheetTrigger className="flex justify-center items-center">
//             <CiMenuFries className="text-[32px] text-blue-700"/>
//         </SheetTrigger>
//         <SheetContent className="flex flex-col">
//             <div className="mt-32 mb-40 text-center text-2xl">
//                 <Link href="/">
//                 <h1 className="text-4xl font-semibold">
//                     BiDa <span className="text-blue-700">.</span>
//                 </h1>
//                 </Link>
//             </div>

//             <nav className="flex flex-col justify-center items-center gap-8">
//                 {links.map((link, index) =>{
//                     return (
//                         <Link href={link.path} 
//                         key={index} 
//                         className={` ${link.path === pathname && "text-blue-700 border-b-2 border-blue-700"}
//                             text-xl capitalize hover:text-blue-700 transition-all`}
//                         >
//                             {link.name}
//                         </Link>
//                     )
//                 })}

//             </nav>
//         </SheetContent>
//     </Sheet>
// };


// export default MobileNav;

"use client"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "my-story", path: "/story" },
  { name: "skills & services", path: "/service" },
  { name: "portfolio", path: "/portfolio" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex items-center justify-center md:hidden">
        <CiMenuFries className="text-[32px] text-blue-500" />
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        {/* ✅ Required for accessibility */}
        <SheetHeader>
          <VisuallyHidden>
            <SheetTitle>Mobile Navigation</SheetTitle>
          </VisuallyHidden>
        </SheetHeader>

        <div className="mt-8 mb-15 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              BiDa<span className="text-blue-500">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`${
                link.path === pathname
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : ""
              } text-xl capitalize hover:text-blue-700 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
