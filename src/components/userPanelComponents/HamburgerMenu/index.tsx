import SidebarElement from "../sidebarElemnet";

const HamburgerMenu = () => {
    return(
        <div className="m-14 sm:col-span-4 col-span-2x">
            <ul className="flex flex-col bg-[var(--primary-blue)] text-white text-5xl w-full h-screen gap-12">
                <li>
                <SidebarElement text="حساب کاربری" link="/userPanel/userAccount"/>
                </li>
                <li>
                    <SidebarElement  text="ویرایش پروفایل" link="/userPanel/Settings"/>
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
    )
};
export default HamburgerMenu;