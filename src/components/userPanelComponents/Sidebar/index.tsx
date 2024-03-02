import Link from "next/link";
import Profile from "../Profile";

const Sidebar = () => {
    return(
        <div className="flex flex-col text-white w-full bg-[var(--primary-blue)] text-xl gap-10 justify-start items-center xl:pt-11 h-screen">
            <Profile userName="نام‌کاربری"/>
            <ul className="flex gap-6 flex-col justify-center">
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/userPanel/userAccount"}>حساب کاربری</Link>
               </li>
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/userPanel/editProfile"}>ویرایش پروفایل</Link>
               </li>
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/userPanel/Settings"}>تنظیمات</Link>
               </li>
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/"}>پشتیبانی</Link>
               </li>
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/"}>تنظیمات</Link>
               </li>
               <li className="cursor-pointer hover:bg-white hover:text-slate-900">
                    <Link href={"/"}>خروج</Link>
               </li>
            </ul>
        </div>
    )
};
export default Sidebar;