"use client";
import Link from "next/link";
import Profile from "../Profile";
import SettingsSvg from "/public/svg/settings.svg";
import SidebarElement from "../sidebarElemnet";

const Sidebar = () => {
  return (
    <div className="flex flex-col text-white w-full bg-[var(--primary-blue)] text-xl gap-10 justify-start items-center xl:pt-11 h-screen">
      <Profile userName="نام‌کاربری"/>

      <ul className="flex gap-6 flex-col justify-center w-full ms-10 ">
        <li>
          <SidebarElement text="حساب کاربری" logo={<SettingsSvg />} link="/userPanel/userAccount"/>
        </li>
        <li>
          <SidebarElement  text="ویرایش پروفایل" link="/userPanel/Settings"/>
        </li>
        <li>
          <SidebarElement text="پشتیبانی"/>
        </li>
        <li>
          <SidebarElement text="پروفایل"/>
        </li>
        <li>
          <SidebarElement text="پروفایل"/>
        </li>
        <li>
          <SidebarElement text="خروج" link="/"/>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
