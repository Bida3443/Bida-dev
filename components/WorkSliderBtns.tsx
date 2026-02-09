"use client"

import { useSwiper } from "swiper/react"
import {PiCaretLeftBold, PiCaretRightBold,} from "react-icons/pi";
import { icons } from "lucide-react";

const WorkSliderBtn = ({containerStyles, btnStyles, iconsStyle }) => {

    const Swiper = useSwiper()
}

export default function WorkSliderBtns() {
 return(
        <div className={containerStyles}>
            <button className={btnStyles}>
                <PiCaretLeftBold/>
            </button>
        </div>
    )

}
   
