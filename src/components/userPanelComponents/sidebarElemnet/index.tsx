import { sideBarElementType } from "@/types"
import Link from "next/link"

const SidebarElement = ({text, logo, link}: sideBarElementType) => {
    return(
        <Link
          href={`${link}`}
          className="cursor-pointer group hover:bg-white w-full py-4 flex items-center ps-6 rounded-s-3xl hover:ease-in-out hover:duration-150 gap-2"
        >
          {logo}
          <p className="group-hover:text-slate-900 text-white text-xl md:text-4xl lg:text-xl">{text}</p>
    </Link>
    )
};
export default SidebarElement;