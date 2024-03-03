import Link from "next/link";
import HamburgerSvg from "/public/svg/hambergerSVG.svg"

const NavbarMobile = () => {
    return(
        <div>
            <ul className="flex flex-row text-white items-center
            md:text-3xl sm:h-16 md:gap-5">
                <li>
                    <button className="flex justify-center items-center ">
                        <HamburgerSvg />
                    </button>
                </li>
                <li>
                    <Link href="./">Logo</Link>
                </li>
            </ul>
        </div>
    )
};
export default NavbarMobile;