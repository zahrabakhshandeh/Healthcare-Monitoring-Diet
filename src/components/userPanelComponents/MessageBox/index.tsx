import Link from "next/link";
import Message from "../Message";

const MessageBox = () => {
    return(
        <div className="bg-[var(--back-ground-white)] flex flex-col gap-2 shadow-md w-full p-10 pb-2 rounded-2xl justify-center ">
            <div></div>
            <ul className="flex flex-col gap-2">
                <li><Message text="پیغام" type=""/></li>
                <li><Message text="مشکل" type="error"/></li>
                <li><Message text="هشدار" type="warning"/> </li>
                <li><Message text="تایید" type="accept"/></li>
            </ul>
            <Link href="./" className="text-[var(--link-blue)] flex justify-center mt-7">
                دیدن بقیه
            </Link>
        </div>
    )
};
export default MessageBox;