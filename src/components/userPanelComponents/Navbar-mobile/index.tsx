import Link from "next/link";
import HamburgerSvg from "/public/svg/hambergerSVG.svg"

const NavbarMobile = () => {
    return(
        <div>
            <ul className="flex flex-row text-white items-center
            md:text-3xl sm:h-16 space-x-60">
                <li>
                    <button className="flex justify-center items-center scale-100">
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