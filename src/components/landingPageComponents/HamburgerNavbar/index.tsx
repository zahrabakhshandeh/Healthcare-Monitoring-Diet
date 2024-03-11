"use client";
import React, { useState } from "react";
import Styles from "./navbar.module.scss";
import { motion } from "framer-motion";
import NavElement from "../NavElement";

const HamburgerNavbar = () => {
    const [burgerMenuActive, setBurgerMenuActive] = useState(false);

    const toggleBurgerMenu = () => {
        setBurgerMenuActive(!burgerMenuActive);
    };

    const motionVariants = {
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                ease: "easeOut",
                type: "spring",
            },
        },
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0,
                duration: 0,
            },
        },
    };

    const listItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.35,
                ease: "easeOut",
            },
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: {
                duration: 0,
            },
        },
    };

    return (
        <div className="lg:hidden shadow-lg">
            <div
            className={`${Styles.navbar} ${
                burgerMenuActive ? Styles.active : ""
            }`}
            >
                <div className={Styles.navigation}>
                    <div
                        className={Styles.burgerMenuContainer}
                        onClick={() => toggleBurgerMenu()}
                    >
                        <div className={Styles.burgerMenuTrigger}></div>
                        <div className={Styles.burgerMenu}></div>
                    </div>
                    <button className={Styles.button}>LOGO</button>
                </div>
                <div className={Styles.content}>
                    <motion.ul
                        animate={burgerMenuActive ? "open" : "closed"}
                        variants={motionVariants}>
                        <motion.li variants={listItemVariants}>
                            <NavElement text=" خانه" link='./s' />
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <NavElement text=" خانه" link='./s' />
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <NavElement text="درباره ما " link='./s' />
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <NavElement text=" کمک" link='./s' />
                        </motion.li>
                        <motion.li variants={listItemVariants}>
                            <NavElement text=" فرم‌ها" link='./s' />
                        </motion.li>
                    </motion.ul>
                </div>
            </div>
        </div>
    );
};

export default HamburgerNavbar;