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

let zIndex = {
    left: 2,
    left1: 2,
    left2: 2,
    left3: 3,
    center: 5,
    right4: 3,
    right3: 1,
    right2: 1,
    right1: 1,
    right: 1,
};
const Carousel = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 10);
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 9) % 10);

            return updatedIndexes;
        });
    };
    const images = [
        { src: "/assets/theodore.jpeg", name: "Théodore", ref: useRef(null) },
        { src: "/assets/isha.jpg", name: "Isha", ref: useRef(null) },
        { src: "/assets/josman.jpg", name: "Josman", ref: useRef(null) },
        { src: "/assets/tiakola.jpg", name: "TiaKola", ref: useRef(null) },
        { src: "/assets/sdm.jpg", name: "Sdm", ref: useRef(null) },
        { src: "/assets/theodore.jpeg", name: "Théodore", ref: useRef(null) },
        { src: "/assets/isha.jpg", name: "Isha", ref: useRef(null) },
        { src: "/assets/josman.jpg", name: "Josman", ref: useRef(null) },
        { src: "/assets/tiakola.jpg", name: "TiaKola", ref: useRef(null) },
        { src: "/assets/sdm.jpg", name: "Sdm", ref: useRef(null) },
    ];

    const positions = ["left", "left1", "left2", "left3", "center", "right4", "right3", "right2", "right1", "right"];
    const imageVariants = useResponsiveVariants();

    const container = useRef(null);

    return (
        <>
            <div className="flex gap-3 absolute right-[5vw] sm:top-[15rem] max-sm:top-[4rem] z-10 ">
                <button
                    style={{
                        width: "clamp(3.5rem,9vw,4.5rem)",
                        // border: "clamp(3px,1px + 10vw,4px)"
                    }}
                    className="aspect-square border-4 text-white rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleBack}
                >
                    <img className="relative z-10" src={LinkCustom({ src: "/assets/arrow.svg" })} alt="" />
                </button>
                <button
                    style={{
                        width: "clamp(3.5rem,9vw,4.5rem)",
                        //  border: "clamp(3px,1px + 10vw,4px)"
                    }}
                    className="aspect-square border-4 text-white rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleNext}
                >
                    <img className="relative z-10 -scale-x-100" src={LinkCustom({ src: "/assets/arrow.svg" })} alt="" />
                </button>
            </div>
            <motion.div
                ref={container}
                className={` //sm:mt-32 max-sm:h-[65vw] //md:mb-[-4.5vw] sm:h-[47vw] mb-[15vh] relative left-0 right-0 bottom-0 w-full flex items-center flex-col-reverse flex-1 justify-center max-w-[1920px]`}
            >
                {images.map((image, index) => {
                    return (
                        <motion.div
                            // style={{ translateY: y, opacity: opacity }}
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
            } else if (width >= 640 && width <= 1920) {
                setScreenType("desktop");
                setPrincipalElementHeight(38);
            } else {
                setScreenType("big_desktop");
                setPrincipalElementHeight(29);
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
                left: "-45vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
            left1: {
                left: "-45vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
            left2: {
                left: "-30vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left2,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 100,
            },
            left3: {
                left: "-17vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 100,
            },
            center: {
                left: "10vw",
                width: principalElementWidth,
                height: `${princpalElementHeight}vw`,
                zIndex: zIndex.center,
                y: "-4.2vw",
                filter: "grayscale(0%) brightness(1)",
            },
            right4: {
                left: "51vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right4,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            right3: {
                left: "77.8vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right3,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 100,
            },
            right2: {
                left: "110vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right2,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
            right1: {
                left: "110vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
            right: {
                left: "110vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
            right: {
                left: "110vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                opacity: 0,
            },
        },
        big_desktop: {
            left: {
                left: "-30vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            left1: {
                left: "-19.4vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
                display: "hidden",
            },
            center: {
                left: "10vw",
                width: principalElementWidth,
                height: `${princpalElementHeight}vw`,
                zIndex: zIndex.center,
                y: "-4.5vw",
                filter: "grayscale(0%) brightness(1)",
            },
            right1: {
                left: "55vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            right: {
                left: "84.4vw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
        },
        mobile: {
            left: {
                left: "-60svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            left1: {
                left: "-45svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.left1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            center: {
                left: "4svw",
                width: principalElementWidth,
                height: `${princpalElementHeight}vw`,
                zIndex: zIndex.center,
                y: "-6.4vw",
                filter: "grayscale(0%) brightness(1)",
            },
            right1: {
                left: "70svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right1,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
            right: {
                left: "100svw",
                width: secondElementWidth,
                height: `${secondElementHeight}vw`,
                zIndex: zIndex.right,
                y: "0",
                filter: "grayscale(100%) brightness(0.7)",
            },
        },
    };

    return variants[screenType];
}
