import QuickLinkBoxTypes from "@/types/index";
import Link from "next/link";

const QuickLinkBox = ({subject, bodyText, badgeLogo, badgeColor}:QuickLinkBoxTypes) => {
    return(
        <Link href="./">
            <div className="flex justify-center flex-col bg-[var(--box-gray)] 2xl:ps-11 pe-3 pt-10 pb-5 rounded-2xl relative z-0 shadow-md">
                <div className="flex flex-col gap-1 ">
                    <h1 className="text-xl ps-2">{subject}</h1>
                    <p className="text-sm px-2">{bodyText}</p>
                </div>
                <div className={`bottom-2/3 left-56 rounded-full flex justify-center items-center w-16 h-16 absolute bg-[var(--${badgeColor})] z-10`}>{badgeLogo} wh</div> 
            </div>
        </Link>
    )
};
export default QuickLinkBox;