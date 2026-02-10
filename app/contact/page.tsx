"use client"


import {Button} from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,

} from "@/components/ui/select";


import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { Icon } from "lucide-react";

const info=  [
    {
        Icon:<FaPhoneAlt/>,
        title:"phone",
        description:"(+234) 810 281 3443"
    },
    {
        Icon:<FaEnvelope/>,
        title:"Email",
        description:"Alexanderbamise@gmail.com"
    },
    {
        Icon:<FaMapMarkerAlt/>,
        title:"Address",
        description:"55, Oyemekun College Road, Ogba Lagis state."
    },
]
export default function Service ()  {

    return(
        <div>Contact</div>
    )
}



