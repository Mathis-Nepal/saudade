"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Carousel, Footer, ButtonArrow, LinkCustom, LogoWithName } from "../components/components";
import { motion, useScroll, useTransform } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

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
    // const section1 = useRef(null);
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
        const from = window.innerWidth > 768 ? "translateY(-85%) scale(150%)" : "scale(150%)";
        const to = window.innerWidth > 768 ? "translateY(0%) scale(100%)" : "scale(100%)";

        tl.add(gsap.fromTo(imgCover.current, { transform: from }, { transform: to }));

        return () => {
            tl.kill();
        };
    });

    const vinyle = useRef(null);
    const { scrollYProgress } = useScroll({
        target: vinyle,
        offset: ["start end", "0.8 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <>
            <main
                ref={main}
                className="max-md:mt-6 relative md:h-[95svh] max-md:h-[65svh] /max-md:h-[65vh] /max-md:h-[65dvh] flex items-center justify-center flex-col pt-[5svh] overflow-hidden"
            >
                <Image
                    className="max-lg:hidden absolute lg:w-64 max-lg:top-[16vh] max-lg:-right-[4.5rem] lg:-right-[6.25rem] lg:top-[20vh] "
                    alt=""
                    src={LinkCustom({ src: "/assets/snake.png" })}
                    height={180}
                    width={200}
                ></Image>
                <Image
                    className="max-lg:hidden absolute lg:w-64 max-lg:bottom-[11vh] max-lg:-left-[4.5rem] lg:-left-[6.25rem] lg:bottom-[20vh] scale-x-[-1] scale-y-[-1]"
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
                <div className="flex gap-7 md:mt-12 max-md:mt-6 overflow-hidden">
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
            <section id="cover" className="sticky md:top-[20svh] max-md:top-32 flex items-start justify-center w-full z-0 ">
                <Image
                    className="w-1/4 absolute top-0 left-1/2 -translate-x-2/4 -translate-y-3/4 z-10"
                    src={LinkCustom({ src: "/assets/saudade_title.png" })}
                    alt=""
                    width={726}
                    height={102}
                ></Image>
                <div
                    ref={cover}
                    className=" relative md:max-w-[80vw] max-md:max-w-[90vw] md:mb-[11vw] max-md:mb-[6vw] overflow-hidden h-full rounded-lg"
                >
                    <Image
                        className="md:translate-y-[-85%] scale-[1.5]"
                        ref={imgCover}
                        src={LinkCustom({ src: "/assets/cover.png" })}
                        alt={""}
                        width={1920}
                        height={1080}
                    ></Image>
                </div>
            </section>
            <section
                id="featurings"
                ref={carouselSection}
                className={`relative //flex items-center justify-center bg-secondary max-w-[100svw] overflow-hidden //md:h-[100svh] //max-md:h-[80svh] `}
            >
                    <div className="z-10 max-sm:mt-16 sm:mt-40 max-sm:mb-12 sm:mb-20 relative max-sm:left-[4vw] sm:left-[10vw]">
                        <h2 className="text-primary md:text-5xl text-4xl max-sm:text-[6vw] font-garcia">FEATURINGS</h2>
                    </div>

                    <Carousel></Carousel>
            </section>
            <section id="vinyle" className="relative bg-[#F5F5F5] opacity-100 z-1 w-full flex items-start justify-center  ">
                <Image
                    className="absolute max-md:-top-20 md:-top-28 md:w-72 -rotate-[125deg] z-10 "
                    alt=""
                    src={LinkCustom({ src: "/assets/snake.png" })}
                    height={180}
                    width={200}
                ></Image>
                <motion.div
                    ref={vinyle}
                    style={{ scale: scaleProgress, opacity: scrollYProgress }}
                    className=" max-sm:p-8  max-md:p-14 md:p-24 bg-primary flex flex-col items-center  justify-center max-md:max-w-[90%] md:max-w-[80%] md:mt-24 max-md:mt-16 md:mb-48  max-md:mb-36"
                >
                    <Image className="w-[100%] mb-14" alt={""} src={LinkCustom({ src: "/assets/vinyle.png" })} width={1920} height={1080}></Image>
                    <ButtonArrow direction={"#"} text={"acheter le vinyle"}></ButtonArrow>
                </motion.div>
            </section>
            <section className="relative z-10  bg-secondary grid place-items-center">
                <div className="relative max-md:flex-col -top-24 -mb-24 max-md:w-[90vw] md:w-[80vw] flex gap-5 md:items-start">
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
                        <p className="text-xl text-center font-melodrama text-primary ">Ecouter plus sur</p>
                        <div className="flex md:flex-col justify-around w-full gap-2 flex-1 p-2 ">
                            <LogoWithName
                                className={"spotify "}
                                name={"Spotify"}
                                path={LinkCustom({ src: "/assets/spotify.svg" })}
                                link={"undefined"}
                            ></LogoWithName>
                            <LogoWithName
                                className={"deezer"}
                                name={"Deezer"}
                                path={LinkCustom({ src: "/assets/deezer.svg" })}
                                link={"undefined"}
                            ></LogoWithName>
                            <LogoWithName
                                className={"apple-music"}
                                name={"Apple Music"}
                                path={LinkCustom({ src: "/assets/apple_music.svg" })}
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
