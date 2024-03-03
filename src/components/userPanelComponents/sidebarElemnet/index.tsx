import { sideBarElementType } from "@/types"
import Link from "next/link"

const SidebarElement = ({text, logo, link}: sideBarElementType) => {
    return(
        <Link
          href={`${link}`}
          className="cursor-pointer group md:hover:bg-white hover:bg-white  sm:px-8 px-1 py-4 w-full lg:py-4 
          md:py-6 md:px-52 flex items-center justify-center lg:ps-4 lg:rounded-s-3xl rounded-3xl hover:ease-in-out hover:duration-150 gap-2"
        >
          {logo}
          <p className="group-hover:text-slate-900 text-white text-2xl lg:text-xl ">{text}</p>
    </Link>
    )
};
export default SidebarElement;