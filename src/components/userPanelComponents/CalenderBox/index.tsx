import Link from "next/link";
import CalArt from "/public/svg/calArt.svg"

const CalenderBox = () => {
    return(
        <div className="flex justify-center flex-col items-center lg:pt-24 rounded-3xl scale-90 md:scale-100">
            <CalArt />
            <Link href="./" className="text-[var(--link-blue)]"> برای جزئیات بیشتر کلیک کنید</Link>
        </div>
    )
};
export default CalenderBox;