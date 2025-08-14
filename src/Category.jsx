import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { GiNoodles } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
import { FaPizzaSlice } from "react-icons/fa6";
import { FaHamburger } from "react-icons/fa";

export const Categories =[
  {
    id:1,
    name:'All',
    icon:<TiThSmallOutline className="w-[60px] h-[60px] text-yellow-600"/>
  },
    {
    id:2,
    name:'breakfast',
    icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-yellow-600"/>

  },
    {
    id:3,
    name:'soups',
    icon: <LuSoup className="w-[60px] h-[60px] text-yellow-600"/>

  },
    {
    id:4,
    name:'pasta',
    icon: <GiNoodles className="w-[60px] h-[60px] text-yellow-600"/>

  },
    {
    id:5,
      name:'main_course',
    icon: <MdFoodBank className="w-[60px] h-[60px] text-yellow-600"/>
  },
    {
    id:6,
   name:'pizza',
    icon: <FaPizzaSlice className="w-[60px] h-[60px] text-yellow-600" />

  },
    {
    id:7,
    name:'burger',
    icon: <FaHamburger className="w-[60px] h-[60px] text-yellow-600"/>

  },
 ]


 export default Categories