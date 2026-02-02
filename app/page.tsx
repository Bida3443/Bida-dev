// import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import social from "@/components/social";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto mt-20 h-full">
        <div className="flex flex-col xl:flex-row md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            
            <h1 className="h1 mb-6 text-blue-700 ">Idowu Alexander Bamise</h1>
            <span className="text-xl mb-20">I'm Front end developer/designer</span>
            <p className="max-w-125 mb-9 mt-4 text-white/80 text-justify">I excel at crafting elegant digital experience and i am proficient in various programming languages and technologies</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 hover:text-white hover:bg-blue-700">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">socials</div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>

    </section>
    
  );
}
