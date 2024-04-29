"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ButtonArrow } from "./components";

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

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: nav.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                // markers: true,
                toggleActions: "restart pause reverse pause",
            },
            defaults: { ease: "power3.out" },
        });

        tl.fromTo(
            nav.current,
            {
                css: {
                    border: "2px solid transparent",
                    backdropFilter: "none",
                    backgroundColor: "rgba(255, 255, 255, 0)",
                },
            },
            {
                css: {
                    border: "2px solid rgba(235, 235, 235, 0.4)",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                },
            }
        );
    });
    return (
        <>
            <div className="z-50 fixed w-full flex justify-center items-center top-0">
                <nav
                    ref={nav}
                    className=" transition-colors navbar flex justify-between items-center border-2 border-transparent mt-[24px] m-auto max-md:mx-5 rounded-2xl font-melodrama p-2.5 md:max-w-[80vw]  "
                >
                    <div className="navbar-start w-auto">
                        <label onClick={toggleDrawer} className="btn btn-primary btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>

                        <Image className="max-md:hidden" src={"/logo.png"} alt={""} width={100} height={100}></Image>
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
                        <Image className="md:hidden max-vsm:hidden" src={"/logo.png"} alt={""} width={100} height={100}></Image>
                    </div>
                    <div className="navbar-end w-auto">
                        <ButtonArrow direction={"#"} text={"écouter"}></ButtonArrow>
                    </div>
                </nav>
            </div>
            <div className={`${isDrawerOpen ? "block" : "hidden"} fixed inset-0 z-50 bg-black bg-opacity-50`} onClick={closeDrawer}></div>
            <ul
                className="fixed z-[100] top-0 w-80 bg-base-200 h-full p-4 gap-5 text-xl font-melodrama menu overflow-y-auto transition-transform duration-500 ease-in-out"
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
