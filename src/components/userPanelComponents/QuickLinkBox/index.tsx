import {QuickLinkBoxTypes} from "@/types/index";
import Link from "next/link";

const QuickLinkBox = ({subject, bodyText, badgeLogo, badgeColor}:QuickLinkBoxTypes) => {
    return(
        <Link href="./">
            <div className="flex justify-center flex-col bg-[var(--box-gray)] ps-11 lg:pe-3 pt-4 pb-5 rounded-2xl relative z-0 shadow-md mt-24">
                <div className="flex flex-col gap-1 ">
                    <h1 className="text-2xl ps-9 pb-3">{subject}</h1>
                    <p className="2xl:text-lg xl:text-base px-2">{bodyText}</p>
                </div>
                <div className="-top-5 -right-2 rounded-full flex justify-center items-center xl:w-20 xl:h-20 h-16 w-16 bg-[var(--primary-blue)] z-10 absolute">
                    <div>
                        {badgeLogo}
                    </div>
                </div> 
            </div>
        </Link>
    )
};
export default QuickLinkBox;