"use client";
import Link from "next/link";
import Profile from "../Profile";
import SettingsSvg from "/public/svg/settings.svg";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-white w-full bg-[var(--primary-blue)] text-xl gap-10 justify-start items-center xl:pt-11 h-screen">
      <Profile userName="نام‌کاربری" />
      <ul className="flex gap-6 flex-col justify-center w-full ms-10 ">
        <Link
          href={"/userPanel/userAccount"}
          className="cursor-pointer group hover:bg-white w-full py-4 flex items-center ps-6 rounded-s-3xl hover:ease-in-out hover:duration-150 gap-2"
        >
          <SettingsSvg />
          <p className="group-hover:text-slate-900 text-white">حساب کاربری</p>
        </Link>

        <Link
          href={"/userPanel/editProfile"}
          className="cursor-pointer hover:bg-white group w-full py-4 flex items-center ps-6 rounded-s-3xl hover:ease-in-out hover:duration-150"
        >
          <p className="group-hover:text-slate-900 text-white">
            ویرایش پروفایل
          </p>
        </Link>
        <Link
          href={"/userPanel/Settings"}
          className="cursor-pointer hover:bg-white w-full group py-4 flex items-center ps-6 rounded-s-3xl hover:ease-in-out hover:duration-150"
        >
          <p className="group-hover:text-slate-800 text-white">تنظیمات</p>
        </Link>
        <Link
          href={"/"}
          className="cursor-pointer hover:bg-white w-full py-4 flex items-center ps-6 rounded-s-3xl group hover:ease-in-out hover:duration-150"
        >
          <p className="group-hover:text-slate-900 text-white">پشتیبانی</p>
        </Link>
        <Link
          href={"/"}
          className="cursor-pointer hover:bg-white w-full py-4 flex items-center ps-6 group rounded-s-3xl hover:ease-in-out hover:duration-150"
        >
          <p className="group-hover:text-slate-900 text-white">تنظیمات</p>
        </Link>
        <Link
          href={"/"}
          className="cursor-pointer group hover:bg-white w-full py-4 flex items-center ps-6 rounded-s-3xl hover:ease-in-out hover:duration-150"
        >
          <p className="group-hover:text-slate-900 text-white">خروج</p>
        </Link>
      </ul>
    </div>
  );
};
export default Sidebar;
