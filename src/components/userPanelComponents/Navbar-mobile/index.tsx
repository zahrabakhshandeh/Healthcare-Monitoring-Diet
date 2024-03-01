import Link from "next/link";
import HambergerSvg from "/public/svg/hambergerSVG.svg"

const NavbarMobile = () => {
    return(
        <div>
            <ul className="flex flex-row text-white items-center
            md:text-3xl sm:h-16 gap-28">
                <li ><HambergerSvg /></li>
                <li><Link href="./">Logo</Link></li>
            </ul>
        </div>
    )
};
export default NavbarMobile;