import Link from "next/link";
import CalArt from "/public/svg/calArt.svg"

const CalenderBox = () => {
    return(
        <div className="flex justify-center flex-col items-center mt-24 rounded-3xl">
            <CalArt />
            <Link href="./" className="text-[var(--link-blue)]"> برای جزئیات بیشتر کلیک کنید</Link>
        </div>
    )
};
export default CalenderBox;