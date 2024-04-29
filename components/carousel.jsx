"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

    const images = ["/tiakola.png", "/josman.png", "/tiakola.png", "/isha.png", "/josman.png"];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = useResponsiveVariants();

    return (
        <>
            <div className={` sm:mt-20 absolute w-full flex items-center flex-col flex-1 justify-center bg-black`}>
                {images.map((image, index) => (
                    <motion.img
                        key={index}
                        src={image}
                        alt={image}
                        className={`rounded-[12px] //max-md:w-[55%] //md:w-[40%] //md:max-w-[28rem]  object-cover absolute border-4 border-white`}
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={imageVariants}
                        transition={{ duration: 0.45 }}
                    />
                ))}
            </div>
            <div className="flex gap-3 md:right-[8vw] md:top-[10svh] max-md:right-[10vw] max-md:bottom-[3svh] z-10 absolute">
                <button
                    style={{ width: "clamp(4rem,9vw,5rem)" }}
                    className="aspect-square text-white  border-4 rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleBack}
                >
                    <img className="relative z-10" src="/arrow.svg" alt="" />
                </button>
                <button
                    style={{ width: "clamp(4rem,9vw,5rem)" }}
                    className="aspect-square text-white border-4 rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
                    onClick={handleNext}
                >
                    <img className="relative z-10 -scale-x-100" src="/arrow.svg" alt="" />
                </button>
            </div>
        </>
    );
};

export default Carousel;

function useResponsiveVariants() {
    const [screenType, setScreenType] = useState("desktop");

    useEffect(() => {
        function determineScreenType() {
            const width = window.innerWidth;
            if (width < 670) {
                setScreenType("mobile");
            } else if (width >= 670 && width < 1084) {
                setScreenType("tablet");
            } else {
                setScreenType("desktop");
            }
        }

        determineScreenType();

        window.addEventListener("resize", determineScreenType);
        return () => window.removeEventListener("resize", determineScreenType);
    }, []);

    const variants = {
        mobile: {
            center: { x: "-22%", y: "-24px", width: "250px", height: "250px", scale: 1, zIndex: 5 },
            left1: { x: "-117%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 3 },
            left: { x: "-120%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 2 },
            right: { x: "145%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 1 },
            right1: { x: "70%", y: "0", width: "235px", height: "285px", scale: 0.7, zIndex: 3 },
        },
        tablet: {
            center: { x: "-40%", y: "-42px", width: "400px", height: "400px", scale: 1, zIndex: 5 },
            left1: { x: "-135%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 3 },
            left: { x: "180%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 2 },
            right: { x: "124%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 1 },
            right1: { x: "50%", y: "0", width: "375px", height: "450px", scale: 0.7, zIndex: 3 },
        },
        desktop: {
            center: { x: "-50%", y: "-56px", width: "500px", height: "500px", scale: 1, zIndex: 5 },
            left1: { x: "-140%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 4 },
            left: { x: "190%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 3 },
            right: { x: "115%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 3 },
            right1: { x: "40%", y: "0", width: "500px", height: "550px", scale: 0.7, zIndex: 4 },
        },
    };

    return variants[screenType];
}
