"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ButtonArrow, LinkCustom } from "./components";
import { motion, useScroll, useTransform } from "framer-motion";

const Navbar = () => {
    const nav = useRef(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };

    const closeDrawer = () => {
        if (isDrawerOpen) {
            setIsDrawerOpen(false);
        }
    };

    const { scrollY } = useScroll({
        target: nav,
        offset: ["start end", "0.8 1"],
    });
    const border = useTransform(scrollY, [0, 1], ["2px solid transparent", "2px solid rgba(235, 235, 235, 0.4)"]);
    const filter = useTransform(scrollY, [0, 1], ["blur(0px)", "blur(5px)"]);
    const background = useTransform(scrollY, [0, 1], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.3)"]);
    return (
        <>
            <div className="z-50 fixed w-full flex justify-center items-center top-0">
                <motion.nav
                    style={{
                        border: border,
                        backdropFilter: filter,
                        backgroundColor: background,
                    }}
                    ref={nav}
                    className=" transition-colors navbar flex justify-between items-center mt-[24px] m-auto  rounded-2xl font-melodrama p-2.5 md:max-w-[80vw] max-md:max-w-[90vw]  "
                >
                    <div className="navbar-start flex-1">
                        <label onClick={toggleDrawer} className="btn btn-primary btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <Image className="max-md:hidden m-auto" src={LinkCustom({ src: "/assets/logo.png" })} alt={""} width={100} height={100}></Image>
                    </div>
                    <div className="navbar-center  md:flex ">
                        <ul className=" max-md:hidden menu menu-horizontal px-1 text-xl">
                            <li>
                                <a href="#cover">COVER</a>
                            </li>
                            <li>
                                <a href="#featurings">FEATURINGS</a>
                            </li>
                            <li>
                                <a href="#vinyle">VINYLE</a>
                            </li>
                        </ul>
                        <Image
                            className="md:hidden max-sm:hidden"
                            src={LinkCustom({ src: "/assets/logo.png" })}
                            alt={""}
                            width={100}
                            height={100}
                        ></Image>
                    </div>
                    <div className="navbar-end flex-1">
                        <ButtonArrow direction={"#"} text={"écouter"}></ButtonArrow>
                    </div>
                </motion.nav>
            </div>
            <div className={`${isDrawerOpen ? "block" : "hidden"} fixed inset-0 z-50 bg-black bg-opacity-50`} onClick={closeDrawer}></div>
            <ul
                className="fixed z-[100] top-0 w-2/3 bg-base-200 h-full p-4 gap-5 text-xl font-melodrama menu overflow-y-auto transition-transform duration-500 ease-in-out"
                style={{ transform: isDrawerOpen ? "translateX(0)" : "translateX(-100%)", transition: "transform 0.5s ease-in-out" }}
            >
                <li>
                    <a className="p-4" href="#">
                        COVER
                    </a>
                </li>
                <li>
                    <a className="p-4" href="#">
                        FEATURINGS
                    </a>
                </li>
                <li>
                    <a className="p-4" href="#">
                        VINYLE
                    </a>
                </li>
            </ul>
        </>
    );
};
export default Navbar;
