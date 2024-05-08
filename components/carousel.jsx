"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LinkCustom } from "./components";

const secondElementRatio = 530 / 457;
const principalElementRatio = 680 / 710;
const ratioHeight = 530 / 680;

function getWidthFromHeight(height, aspectRatio) {
    return height / aspectRatio;
}

const Carousel = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 5);
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 4) % 5);

            return updatedIndexes;
        });
    };
    const images = [
        { src: "/assets/theodore.jpeg", name: "Théodore", ref: useRef(null) },
        { src: "/assets/isha.jpg", name: "Isha", ref: useRef(null) },
        { src: "/assets/josman.jpg", name: "Josman", ref: useRef(null) },
        { src: "/assets/tiakola.jpg", name: "TiaKola", ref: useRef(null) },
        { src: "/assets/sdm.jpg", name: "Sdm", ref: useRef(null) },
    ];

    const positions = ["left", "left1", "center", "right1", "right"];
    const imageVariants = useResponsiveVariants();

    const container = useRef(null);

    // useEffect(() => {
    //     const tl = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: container.current,
    //             start: "center bottom", // Start when the top of part3_h3 is 100px past the center
    //             end: "center bottom", // End when the bottom of part3_h3 is 100px past the center
    //             scrub: 1,
    //             markers: true,
    //             toggleActions: "reverse none none none",
    //             // once: true,
    //         },
    //         defaults: { ease: "power1.inOut" },
    //     });
    //     for (let i = 0; i < images.length; i++) {
    //         const transform = i === 1 ? "translateY(0)" : "translateY(2.4vw)";
    //         tl.add(gsap.fromTo(images[i].ref.current, { transform: "translateY(50vh)" }, { transform: transform }));
    //     }

    //     return () => {
    //         tl.kill();
    //     };
    // });

    // const { scrollYProgress } = useScroll({
    //     target: container,
    //     offset: ["start end", "0.8 1"],
    // });

    return (
        <>
            <div className="flex gap-3 absolute right-[5vw] sm:top-[13rem] max-sm:top-[8.5rem] //md:right-[8vw] //md:top-[10svh] //max-md:right-[10vw] //max-md:bottom-[3svh] z-10 //absolute">
                <button
                    style={{ width: "clamp(4rem,9vw,4.5rem)" }}
                    className="aspect-square text-white  border-4 rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleBack}
                >
                    <img className="relative z-10" src={LinkCustom({ src: "/assets/arrow.svg" })} alt="" />
                </button>
                <button
                    style={{ width: "clamp(4rem,9vw,4.5rem)" }}
                    className="aspect-square text-white border-4 rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleNext}
                >
                    <img className="relative z-10 -scale-x-100" src={LinkCustom({ src: "/assets/arrow.svg" })} alt="" />
                </button>
            </div>
            <motion.div
                ref={container}
                className={` //sm:mt-32 max-md:h-[65vw] md:h-[47vw] mb-[15vh] relative left-0 right-0 bottom-0 w-full flex items-center flex-col-reverse flex-1 justify-center max-w-[1920px]`}
            >
                {images.map((image, index) => {
                    console.log(image.name);
                    const { scrollYProgress } = useScroll({
                        target: image.ref,
                        offset: ["start end", "1 1"],
                    });
                    const multiplier = 0.2 * index;
                    const sclae = useTransform(scrollYProgress, [0, 1], [500 * (index + 1), 0]);
                    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

                    return (
                        <motion.div
                            style={{ translateY: sclae, opacity: opacity }}
                            initial="center"
                            ref={image.ref}
                            key={index}
                            className={`object-cover absolute`}
                            animate={positions[positionIndexes[index]]}
                            variants={imageVariants}
                            transition={{ duration: 0.45 }}
                        >
                            <img
                                className="w-full h-full rounded-[12px] border-[6px] border-white object-cover"
                                src={LinkCustom({ src: image.src })}
                                alt={image}
                            />
                            <p className="text-white font-garcia text-xxl text-cover mt-2">{image.name}</p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default Carousel;

function useResponsiveVariants() {
    const [screenType, setScreenType] = useState("desktop");
    const [princpalElementHeight, setPrincipalElementHeight] = useState(null);
    useEffect(() => {
        function determineScreenType() {
            const width = window.innerWidth;

            if (width < 640) {
                setScreenType("mobile");
                setPrincipalElementHeight(60);
            } else if (width >= 640 && width < 1084) {
                setScreenType("desktop");
                setPrincipalElementHeight(42);
            } else {
                setScreenType("desktop");
                setPrincipalElementHeight(42);
            }
        }

        determineScreenType();

        window.addEventListener("resize", determineScreenType);
        return () => window.removeEventListener("resize", determineScreenType);
    }, []);
    const secondElementHeight = ratioHeight * princpalElementHeight;
    const secondElementWidth = `${getWidthFromHeight(secondElementHeight, secondElementRatio)}vw`;
    const principalElementWidth = `${getWidthFromHeight(princpalElementHeight, principalElementRatio)}vw`;

    const variants = {
        desktop: {
            left: {
                left: "-30vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            left1: {
                left: "-19.4vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 4,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            center: {
                left: "10vw",
                width: principalElementWidth,
                height: `${princpalElementHeight}vw`,
                zIndex: 5,
                y: "-3.9vw",
                filter: "grayscale(0%) brightness(1)",
            },
            right1: {
                left: "55vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 4,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            right: {
                left: "84.4vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
        },
        mobile: {
            left: {
                left: "-60svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            left1: {
                left: "-45svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 4,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            center: {
                left: "4svw",
                width: principalElementWidth,
                height: `${princpalElementHeight}vw`,
                zIndex: 5,
                y: "-3.9vw",
                filter: "grayscale(0%) brightness(1)",
            },
            right1: {
                left: "70svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 4,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            right: {
                left: "100svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: 3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
        },
        // mobile: {
        //     center: { x: "-22%", y: "-24px", width: "250px", height: "250px", scale: 1, zIndex: 5 },
        //     left1: { x: "-117%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 3 },
        //     left: { x: "-120%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 2 },
        //     right: { x: "145%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 1 },
        //     right1: { x: "70%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 3 },
        // },
        // tablet: {
        //     center: { x: "-40%", y: "-42px", width: "400px", height: "400px", scale: 1, zIndex: 5 },
        //     left1: { x: "-135%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 3 },
        //     left: { x: "180%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 2 },
        //     right: { x: "124%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 1 },
        //     right1: { x: "50%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 3 },
        // },
        // desktop: {
        //     center: { x: "-50%", y: "-56px", width: "500px", height: "500px", scale: 1, zIndex: 5 },
        //     left1: { x: "-140%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 4 },
        //     left: { x: "190%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 3 },
        //     right: { x: "115%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 3 },
        //     right1: { x: "40%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 4 },
        // },
    };

    return variants[screenType];
}
