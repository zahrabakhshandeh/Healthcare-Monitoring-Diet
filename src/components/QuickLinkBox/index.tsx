import QuickLinkBoxTypes from "@/types/index"
const QuickLinkBox = ({subject, bodyText, badgeLogo, badgeColor}:QuickLinkBoxTypes) => {
    return(
        <div>
            <h1>{subject}</h1>
            <p>{bodyText}</p>
            <div>{badgeLogo}</div>
        </div>
    )
};
export default QuickLinkBox;