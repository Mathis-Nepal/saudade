"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Carousel from "../components/carousel/carousel";
import EmblaCarousel from "../components/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

gsap.registerPlugin(ScrollTrigger);

const LogoWithName = ({ name, path, link }) => {
    return (
        <a href={link} className="flex flex-col items-center justify-center">
            <Image src={path} alt="" width={50} height={50}></Image>
            <p className={"text-primary"}>{name}</p>
        </a>
    );
};

export default function Home() {
    const refs = {
        part1_h1: useRef(null),
        part2_h2: useRef(null),
        part3_h3: useRef(null),
        deezer: useRef(null),
        // spotify: useRef(null),
        // apple_music: useRef(null),
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
    const OPTIONS: EmblaOptionsType = {};
    const SLIDE_COUNT = 4;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: section1.current,
    //             start: "top center", // Start when the top of part3_h3 is 100px past the center
    //             end: "bottom top", // End when the bottom of part3_h3 is 100px past the center
    //             scrub: 2,
    //             // markers: true,
    //             toggleActions: "restart pause reverse pause",
    //         },
    //         defaults: { ease: "power3.out" },
    //     });

    //     tl.add(gsap.fromTo(carouselSection.current, { top: 0 }, { top: -500 }));

    //     return () => {
    //         tl.kill();
    //     };
    // });
    const images = [{ src: "/cover.png" }, { src: "/logo.png" }, { src: "/josman.png" }];

    // useEffect(() => {
    //   const handleScroll = () => {
    //     // const sticky = stickyRef.current;
    //     const stopPoint = carouselSection.current.getBoundingClientRect().top;

    //     if (stopPoint <= section1.current.offsetTop + section1.current.offsetHeight) {
    //         console.log('stopPoint', stopPoint);
    //       section1.current.classList.remove('sticky', 'top-40');
    //       section1.current.classList.add('relative');
    //     } else {
    //         console.log('stopPoint', stopPoint);
    //         // section1.current.classList.add('sticky', 'top-40');
    //         // section1.current.classList.remove('relative');
    //     }
    //   };

    //   window.addEventListener('scroll', handleScroll);

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);

    return (
        <>
            <main ref={main} className="relative h-[95svh] flex items-center justify-center flex-col pt-[5svh] overflow-hidden">
                <Image
                    className="absolute lg:w-64 max-lg:top-[18vh] max-lg:-right-[4.5rem] lg:-right-[6.25rem] lg:top-[20vh] "
                    alt=""
                    src={"/snake.png"}
                    height={180}
                    width={200}
                ></Image>
                <Image
                    className="absolute lg:w-64 max-lg:bottom-[13vh] max-lg:-left-[4.5rem] lg:-left-[6.25rem] lg:bottom-[20vh] scale-x-[-1] scale-y-[-1]"
                    alt=""
                    src={"/snake.png"}
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
                        <Image className="logo-app-streaming object-contain" src={"/deezer.png"} alt={""} width={130} height={32}></Image>
                        <Image className="logo-app-streaming object-contain" src={"/spotify.png"} alt={""} width={130} height={32}></Image>
                        <Image className="logo-app-streaming object-contain" src={"/apple_music.png"} alt={""} width={130} height={32}></Image>
                    </div>
                </div>
            </main>
            <section ref={section1} className="sticky top-40 flex items-start justify-center w-full z-0 ">
                <Image
                    className="w-1/4 absolute top-0 left-1/2 -translate-x-2/4 -translate-y-2/4 z-10"
                    src={"/saudade_title.png"}
                    alt=""
                    width={726}
                    height={102}
                ></Image>
                <div ref={cover} className="relative max-w-[80vw]  mb-20 overflow-hidden h-full rounded-lg">
                    <Image
                        ref={imgCover}
                        src={"/cover.png"}
                        style={{ transform: "translateY(-85%) scale(1.5)" }}
                        alt={""}
                        width={1920}
                        height={1080}
                    ></Image>
                </div>
            </section>
            <section ref={carouselSection} className={` bg-secondary relative h-[100svh] py-36 flex justify-center flex-col items-start`}>
                <div className="w-[80vw]">
                    <h2 className="text-primary text-4xl font-garcia">FEATURINGS</h2>
                </div>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </section>
            <section className="relative bg-[#F5F5F5] opacity-100 z-1 w-full h-[100svh] grid place-items-center">
                <div className="p-10 bg-primary max-w-[70vw] flex flex-col items-center justify-center">
                    <Image alt={""} src={"/vinyle.png"} width={1920} height={1080}></Image>
                    <a className="font-melodrama btn btn-secondary rounded-[80px] h-auto py-4 px-8 text-xl group relative flex justify-center items-center w-[15.5rem] transition-all duration-300 ease-in-out">
                        <span className="basis-full text-center transition-all duration-300 ease-in-out group-hover:mr-4">acheter le vinyle</span>
                        <span className="flex items-center opacity-0 group-hover:opacity-100 absolute right-4 transition-opacity duration-300 ease-in-out">
                            →
                        </span>
                    </a>
                </div>
            </section>
            <section className="relative z-10 h-[100svh] bg-secondary grid place-items-center">
                <div className="absolute -top-16 w-[80vw] h-full flex gap-5">
                    {/* <div className="h-full"> */}
                        <iframe
                            style={{ borderRadius: "12px" }}
                            src="https://open.spotify.com/embed/album/5ORwfRIZBQiJ1dQ2cQDIFO?utm_source=generator&theme=0"
                            width={"100%"}
                            height="100%"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        ></iframe>
                    {/* </div> */}
                    <div className="w-56 flex flex-col bg-secondary/50 items-center justify-around max-h-[24rem] rounded-xl p-5 backdrop-blur-xl border-2 border-[#5E5E5E]/30">
                        <p className="font-melodrama text-primary">Ecouter plus sur</p>
                        <LogoWithName name={"Deeze"} path={"/deezer_white.png"} link={"undefined"}></LogoWithName>
                        <LogoWithName name={"Spotify"} path={"/spotify_white.png"} link={"undefined"}></LogoWithName>
                        <LogoWithName name={"Apple Music"} path={"/apple_music_white.png"} link={"undefined"}></LogoWithName>
                    </div>
                </div>
            </section>
        </>
    );
}
