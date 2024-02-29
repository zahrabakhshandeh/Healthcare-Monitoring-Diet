import QuickLinkBoxTypes from "@/types/index";

const QuickLinkBox = ({subject, bodyText, badgeLogo, badgeColor}:QuickLinkBoxTypes) => {
    return(
        <div className="flex justify-center flex-col bg-[var(--box-gray)] w-52z  rounded-2xl">
            <div className="flex flex-col gap-1">
                <h1 className="text-xl font-bold">{subject}</h1>
                <p className="text-base">{bodyText}</p>
            </div>
            <div>{badgeLogo}</div>
        </div>
    )
};
export default QuickLinkBox;