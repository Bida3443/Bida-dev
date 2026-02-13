// import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";
import Social from "@/components/social";
import HeroTitle from "@/components/HeroTitle";
import Photo from "@/components/Photo";
import Starts from "@/components/starts";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto  h-full">
        <div className="flex flex-col xl:flex-row md:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-0">
            
            <h1 className="lg:text-5xl font-serif font-semibold text-[25px] mb-6 text-blue-500 ">Idowu Alexander Bamise</h1>
            <span className="text-xl mb-20">
              <HeroTitle/>
            </span>
            <p className=" max-w-125 mb-9 mt-4 text-white/80 lg:text-justify justify-center">I craft elegant digital experiences as a Frontend Developer, Website Designer, and Problem Solver - prioritizing performance, accessibility, responsiveness, and clean design.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/Alexander_resume.pdf"
                  target="_blank"
                  className="inline-block">
                <Button 
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2 hover:text-white hover:bg-blue-700">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-0 mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
        <Starts/>
      </div>

    </section>
    
  );
}
