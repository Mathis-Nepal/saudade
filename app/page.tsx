"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Carousel, Footer, ButtonArrow, LinkCustom } from "../components/components";

gsap.registerPlugin(ScrollTrigger);

const LogoWithName = ({ name, path, link }) => {
    return (
        <a href={link} className=" flex flex-1 flex-col items-center rounded-lg mt-5 justify-center hover:bg-green-600 duration-300">
            <Image className="max-sm:w-10" src={path} alt="" width={50} height={50}></Image>
            <p className={"text-primary max-sm:text-sm max-sm:text-ellipsis max-sm:whitespace-nowrap"}>{name}</p>
        </a>
    );
};

export default function Home() {
    const refs = {
        part1_h1: useRef(null),
        part2_h2: useRef(null),
        part3_h3: useRef(null),
        deezer: useRef(null),
    };
    const cover = useRef(null);
    const imgCover = useRef(null);

    const main = useRef(null);
    const section1 = useRef(null);
    const carouselSection = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        Object.entries(refs).forEach(([key, ref]) => {
            tl.fromTo(
                ref.current,
                { autoAlpha: 0, transform: "translateY(100px)" },
                {
                    autoAlpha: 1,
                    transform: "translateY(0)",
                    duration: key.includes("part") ? 0.5 : 0.3,
                    onStart: () => ref.current.classList.remove("opacity-0"),
                }
            );
        });
    });

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: refs.part3_h3.current,
                start: "top+=100 center", // Start when the top of part3_h3 is 100px past the center
                end: "bottom+=230 center", // End when the bottom of part3_h3 is 100px past the center
                scrub: 2,
                // markers: true,
                toggleActions: "restart pause reverse pause",
            },
            defaults: { ease: "linear" },
        });

        tl.add(gsap.fromTo(imgCover.current, { transform: "translateY(-85%) scale(150%)" }, { transform: "translateY(0%) scale(100%)" }));

        return () => {
            tl.kill();
        };
    });

    return (
        <>
            <main ref={main} className="relative h-[95svh] flex items-center justify-center flex-col pt-[5svh] overflow-hidden">
                <Image
                    className="absolute lg:w-64 max-lg:top-[16vh] max-lg:-right-[4.5rem] lg:-right-[6.25rem] lg:top-[20vh] "
                    alt=""
                    src={LinkCustom({ src: "/assets/snake.png" })}
                    height={180}
                    width={200}
                ></Image>
                <Image
                    className="absolute lg:w-64 max-lg:bottom-[11vh] max-lg:-left-[4.5rem] lg:-left-[6.25rem] lg:bottom-[20vh] scale-x-[-1] scale-y-[-1]"
                    alt=""
                    src={LinkCustom({ src: "/assets/snake.png" })}
                    height={180}
                    width={200}
                ></Image>
                <h1 className=" font-garcia text-center flex flex-col items-center justify-center">
                    <div className="overflow-hidden w-full text-center">
                        <span ref={refs.part1_h1} className="block opacity-0">
                            Discover The New Album
                        </span>
                    </div>
                    <div className="overflow-hidden w-full text-center">
                        <span ref={refs.part2_h2} className="block opacity-0">
                            Of
                        </span>
                    </div>
                    <div className="overflow-hidden w-full text-center">
                        <span ref={refs.part3_h3} className="block opacity-0">
                            GREEN MONTANA
                        </span>
                    </div>
                </h1>
                <div className="flex gap-7 mt-12 overflow-hidden">
                    <div ref={refs.deezer} className="opacity-0 flex gap-7">
                        <Image
                            className="logo-app-streaming object-contain"
                            src={LinkCustom({ src: "/assets/deezer.png" })}
                            alt={""}
                            width={130}
                            height={32}
                        ></Image>
                        <Image
                            className="logo-app-streaming object-contain"
                            src={LinkCustom({ src: "/assets/spotify.png" })}
                            alt={""}
                            width={130}
                            height={32}
                        ></Image>
                        <Image
                            className="logo-app-streaming object-contain"
                            src={LinkCustom({ src: "/assets/apple_music.png" })}
                            alt={""}
                            width={130}
                            height={32}
                        ></Image>
                    </div>
                </div>
            </main>
            <section id="cover" ref={section1} className="sticky top-40 flex items-start justify-center w-full z-0 ">
                <Image
                    className="w-1/4 absolute top-0 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10"
                    src={LinkCustom({ src: "/assets/saudade_title.png" })}
                    alt=""
                    width={726}
                    height={102}
                ></Image>
                <div ref={cover} className="relative max-w-[80vw]  mb-20 overflow-hidden h-full rounded-lg">
                    <Image
                        ref={imgCover}
                        src={LinkCustom({ src: "/assets/cover.png" })}
                        style={{ transform: "translateY(-85%) scale(1.5)" }}
                        alt={""}
                        width={1920}
                        height={1080}
                    ></Image>
                </div>
            </section>
            <section
                id="featurings"
                ref={carouselSection}
                className={`relative flex items-center justify-center bg-secondary max-w-[100vw] overflow-hidden md:h-[100svh] max-md:h-[80svh] `}
            >
                <div className="z-10 absolute m-auto left-[10vw] top-[5svh]">
                    <h2 className="text-primary text-4xl font-garcia">FEATURINGS</h2>
                </div>
                <Carousel></Carousel>
            </section>
            <section id="vinyle" className="relative bg-[#F5F5F5] opacity-100 z-1 w-full flex items-start justify-center  ">
                <Image
                    className="absolute max-md:-top-20 md:-top-28 md:w-72 -rotate-[125deg] "
                    alt=""
                    src={LinkCustom({ src: "/assets/snake.png" })}
                    height={180}
                    width={200}
                ></Image>
                <div className="max-w-full max-md:p-4 md:p-10 bg-primary flex flex-col items-center justify-center md:m-24  max-md:m-16 md:mb-48  max-md:mb-32">
                    <Image className="w-[100%]" alt={""} src={LinkCustom({ src: "/assets/vinyle.png" })} width={1920} height={1080}></Image>
                    <ButtonArrow direction={"#"} text={"acheter le vinyle"}></ButtonArrow>
                </div>
            </section>
            <section className="relative z-10  bg-secondary grid place-items-center">
                <div className="relative max-md:flex-col -top-24 -mb-24 w-[80vw] flex gap-5 md:items-start">
                    <iframe
                        style={{ borderRadius: "12px" }}
                        className="h-[40rem]"
                        src="https://open.spotify.com/embed/album/5ORwfRIZBQiJ1dQ2cQDIFO?utm_source=generator&theme=0"
                        width={"100%"}
                        height="100%"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                    <div className="md:w-56 flex-col bg-secondary/50 justify-center items-center block rounded-xl md:p-5 max-md:pt-4 backdrop-blur-xl border-2 border-[#5E5E5E]/30">
                        <p className="text-center font-melodrama text-primary ">Ecouter plus sur</p>
                        <div className="flex md:flex-col justify-around w-full flex-1 p-2 ">
                            <LogoWithName name={"Spotify"} path={LinkCustom({ src: "/assets/spotify.svg" })} link={"undefined"}></LogoWithName>
                            <LogoWithName name={"Deezer"} path={LinkCustom({ src: "/assets/deezer.svg" })} link={"undefined"}></LogoWithName>
                            <LogoWithName
                                name={"Apple Music"}
                                path={LinkCustom({ src: "/assets/apple_music.png" })}
                                link={"undefined"}
                            ></LogoWithName>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>
    );
}
