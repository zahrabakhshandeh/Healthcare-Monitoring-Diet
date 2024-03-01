import {QuickLinkBoxTypes} from "@/types/index";
import Link from "next/link";

const QuickLinkBox = ({subject, bodyText, badgeLogo}:QuickLinkBoxTypes) => {
    return(
        <Link href="./">
            <div className="flex justify-center flex-col bg-[var(--box-gray)] ps-10 lg:pe-3 lg:pt-4 pb-5 rounded-2xl relative z-0 shadow-lg xl:mt-24 lg:p-2 scale-75   sm:scale-100">
                <div className="flex flex-col gap-1 ">
                    <h1 className="sm:text-2xl text-lg ps-3 pb-3 lg:ps-16">{subject}</h1>
                    <p className="2xl:text-lg sm:text-base px-2 text-xs">{bodyText}</p>
                </div>
                <div className="-top-5 -right-2 rounded-full flex justify-center items-center xl:w-20 xl:h-20 h-16 w-16 bg-[var(--primary-blue)] z-10 x;:scale-90  lg:scale-75  absolute scale-75">
                    <div>
                        {badgeLogo}
                    </div>
                </div> 
            </div>
        </Link>
    )
};
export default QuickLinkBox;