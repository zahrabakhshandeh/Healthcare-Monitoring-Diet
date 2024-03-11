import MainButton from "@/components/MainButton";
import NavElement from "../NavElement";

const Navbar = () => {
    return(
        <nav className="py-10 justify-between bg-[var(--back-ground-white)] p-2  shadow-lg px-10 hidden lg:flex"> 
            <div className="text-5xl">
                LOGO
            </div>
            <ul className="flex flex-row gap-7 justify-center items-center md:hidden lg:flex">
                <li>
                    <NavElement text=" خانه" link='./s' />
                </li>
                <li>
                    <NavElement text="خدمات" link='./s'/>
                </li>
                <li>
                    <NavElement text="درباره ما" link='./s'/>
                </li>
                <li>
                    <NavElement text="کمک" link='./s'/>
                </li>
                <li>
                    <NavElement text="فرم ها" link='./s'/>
                </li>
            </ul>
            <MainButton value="ورود/ثبت نام " className="bg-[var(--orange-color)]"/>

        </nav>
    )
};
export default Navbar;