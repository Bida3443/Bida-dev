   
"use client";

import { AnimatePresence, motion} from "framer-motion";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";


type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
    const pathname = usePathname();
  return (

    <>
    {children}
    <AnimatePresence mode="wait">
        <div key={pathname}>
            <motion.div 
            initial={{opacity: 1}} 
            animate={{opacity: 0, transition: {delay: 1, duration: 0.4, ease: "easeInOut"},}}
            className ="h-screen w-screen fixed bg-primary top-0 pointer-events-none">
                
            </motion.div>
        </div>
      
    </AnimatePresence>
    </>
  );
};

export default PageTransition;

// "use client";

// import { AnimatePresence, motion } from "framer-motion";
// import { ReactNode } from "react";
// import { usePathname } from "next/navigation";

// type Props = {
//   children: ReactNode;
// };

// const PageTransition = ({ children }: Props) => {
//   const pathname = usePathname();

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div key={pathname}>
//         {/* Transition overlay */}
//         <motion.div
//           initial={{ opacity: 1 }}
//           animate={{
//             opacity: 0,
//             transition: {
//               delay: 1,
//               duration: 0.4,
//               ease: "easeInOut",
//             },
//           }}
//           className="fixed inset-0 bg-primary pointer-events-none z-50"
//         />

//         {/* Page content (normal flow) */}
//         <div className="relative z-10">
//           {children}
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

// export default PageTransition;
