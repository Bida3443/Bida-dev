// "use client"


// import { AnimatePresence } from "framer-motion";
// import { Children } from "react";


 

//     const PageTransition = ({Children}) => {
//         return<AnimatePresence>
//         {Children}
//     </AnimatePresence>;

//     };
// export default PageTransition;
    
        
    
"use client";

import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
