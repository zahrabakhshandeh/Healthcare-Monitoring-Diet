'use client'
import Link from "next/link";
import HamburgerSvg from "/public/svg/hambergerSVG.svg"
import React from "react";
import HamburgerMenu from "../HamburgerMenu";

const NavbarMobile = () => {
    const [show, setShow] = React.useState(false)

    const toggle = () =>{
        setShow(!show)
    }

    return(
        <div>
            <ul className="flex flex-row text-white items-center
            md:text-3xl sm:h-16 md:gap-5 bg-[var(--primary-blue)]">
                <li>
                    <button onClick={toggle} className="flex justify-center items-center">
                        <HamburgerSvg />
                    </button>
                </li>
                <li>
                    <Link href="./">Logo</Link>
                </li>
            </ul>
            {
                show? <HamburgerMenu />: null
            }
        </div>
    )
};
export default NavbarMobile;