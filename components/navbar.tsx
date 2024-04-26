"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Navbar = () => {
    const nav = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: nav.current,
                start: "top top",
                end: "bottom top",
                scrub: 1,
                markers: true,
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
                    backgroundColor: "rgba(255, 255, 255, 0)"
                }
            }, 
            {
                css: {
                    border: "2px solid rgba(235, 235, 235, 0.4)",
                    backdropFilter: "blur(10px)",
                    backgroundColor: "rgba(255, 255, 255, 0.3)"
                }
            }
        );
    });
    return (
        <div className="z-10 fixed w-full flex justify-center items-center top-0">
            <nav
                ref={nav}
                className=" transition-colors navbar flex justify-between items-center border-2 border-transparent mt-[24px] m-auto max-md:mx-5 rounded-2xl font-melodrama p-2.5 md:max-w-[80vw]  "
            >
                <div className="navbar-start lg:w-32">
                    <div className="drawer">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content w-1 z-10">
                            <label htmlFor="my-drawer" className="btn btn-primary btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                        </div>
                        <div className="drawer-side z-50">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content text-xl">
                                <li>
                                    <a className="p-4">COVER</a>
                                </li>
                                <li>
                                    <a className="p-4">FEATURINGS</a>
                                </li>
                                <li>
                                    <a className="p-4">VINYLE</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Image src={"/logo.png"} alt={""} width={100} height={100}></Image>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1 text-xl">
                        <li>
                            <a>COVER</a>
                        </li>
                        <li>
                            <a>FEATURINGS</a>
                        </li>
                        <li>
                            <a>VINYLE</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end w-32">
                    <a className="btn btn-secondary rounded-[80px] h-auto py-4 px-8 text-xl group relative flex justify-center items-center w-auto transition-all duration-300 ease-in-out">
                        <span className="basis-full text-center transition-all duration-300 ease-in-out group-hover:mr-4">écouter</span>
                        <span className="flex items-center opacity-0 group-hover:opacity-100 absolute right-4 transition-opacity duration-300 ease-in-out">
                            →
                        </span>
                    </a>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;
{
    /* <span className=" opacity-0 group-hover:opacity-100 absolute right-[-5px] transition-all duration-300 ease-in-out transform group-hover:right-2">
                            →
                        </span> */
}
