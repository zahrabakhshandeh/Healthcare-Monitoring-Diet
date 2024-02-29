import Link from "next/link";
import Message from "../Message";
import MessageArt from "/public/svg/messageBoxArt.svg";

const MessageBox = () => {
    return(
        <div className="bg-[var(--back-ground-white)] flex flex-col gap-2 shadow-md w-full mt-24 pt-24 mx-4 p-8 pb-2 rounded-2xl justify-center relative z-0 ">

            <div className="z-10 absolute -top-2 -right-4 flex items-center justify-center gap-4">
                <div className="rounded-full bg-[var(--green-btn)] w-24 h-24 flex justify-center items-center  shadow-lg">
                    <MessageArt />
                </div>  
                <p className="text-4xl" >پیام‌ها</p>
            </div>
            <ul className="flex flex-col gap-2 ">
                <li><Message text="پیغام" type=""/></li>
                <li><Message text="مشکل" type="error"/></li>
                <li><Message text="هشدار" type="warning"/> </li>
                <li><Message text="تایید" type="accept"/></li>
            </ul>
            <Link href="./" className="text-[var(--link-blue)] flex justify-center mt-10 mb-2">
                دیدن بقیه
            </Link>
        </div>
    )
};
export default MessageBox;