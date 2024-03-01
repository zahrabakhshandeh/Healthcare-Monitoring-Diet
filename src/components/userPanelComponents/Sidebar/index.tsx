import Link from "next/link";
import Profile from "../profile";

const Sidebar = () => {
    return(
        <div className="flex flex-col text-white text-2xl gap-10 justify-center items-center">
            <Profile userName="نام‌کاربری"/>
            <ul className="flex gap-6 flex-col justify-center">
               <li>
                    <Link href="./">حساب کاربری</Link>
               </li>
               <li>
                    <Link href="./">ویرایش پروفایل</Link>
               </li>
               <li>
                    <Link href="./">تنظیمات</Link>
               </li>
               <li>
                    <Link href="./">پشتیبانی</Link>
               </li>
               <li>
                    <Link href="./">تنظیمات</Link>
               </li>
               <li>
                    <Link href="./">خروج</Link>
               </li>
            </ul>
        </div>
    )
};
export default Sidebar;