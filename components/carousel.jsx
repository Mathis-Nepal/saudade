"use client";
import { useState, useEffect, useRef, use } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { LinkCustom } from "./components";
import { once } from "events";

const secondElementRatio = 530 / 457;
const principalElementRatio = 680 / 710;
const ratioHeight = 530 / 680;

const immmgComponent = ({ image, index }) => {};

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
	const [screenSize, setScreenSize] = useState(null);

	useEffect(() => {
		// Fonction pour déterminer la taille de l'écran et définir le chemin de l'image en conséquence
		const updateScreenSize = () => {
			if (window.innerWidth < 640) {
				setScreenSize("mobile");
			} else if (window.innerWidth >= 640 && window.innerWidth <= 1920) {
				setScreenSize("desktop");
			} else {
				setScreenSize("large");
			}
		};

		// Initialiser le chemin de l'image lors du montage du composant
		updateScreenSize();

		// Ajouter un écouteur d'événement pour mettre à jour le chemin de l'image lors du redimensionnement de la fenêtre
		window.addEventListener("resize", updateScreenSize);

		// Nettoyer l'écouteur d'événement lors du démontage du composant
		return () => window.removeEventListener("resize", updateScreenSize);
	});
	// Carousel
	const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

	const handleNext = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 9) % 10);

			return updatedIndexes;
		});
	};

	const handleBack = () => {
		setPositionIndexes((prevIndexes) => {
			const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 10);
			return updatedIndexes;
		});
	};
	const images = [
		// { src: "/assets/theodore.jpeg", name: "1", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/isha.jpg", name: "1.2", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/josman.jpg", name: "2", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/tiakola.jpg", name: "3", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/sdm.jpg", name: "4", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/theodore.jpeg", name: "5", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/isha.jpg", name: "6", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/josman.jpg", name: "7", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/tiakola.jpg", name: "8", ref: useRef(null), refImg: useRef(null) },
		// { src: "/assets/sdm.jpg", name: "9", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/theodore.jpeg", name: "Théodore", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/isha.jpg", name: "Isha", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/josman.jpg", name: "Josman", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/tiakola.jpg", name: "TiaKola", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/sdm.jpg", name: "Sdm", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/theodore.jpeg", name: "Théodore", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/isha.jpg", name: "Isha", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/josman.jpg", name: "Josman", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/tiakola.jpg", name: "TiaKola", ref: useRef(null), refImg: useRef(null) },
		{ src: "/assets/sdm.jpg", name: "Sdm", ref: useRef(null), refImg: useRef(null) },
	];

	const positions = ["left", "left1", "left2", "left3", "center", "right4", "right3", "right2", "right1", "right"];
	const imageVariants = useResponsiveVariants();

	const container = useRef(null);

	return (
		<>
			<div className="flex gap-3 absolute right-[10vw] sm:top-[11rem] md:top-[15rem] max-sm:top-[4rem] z-10 ">
				<button
					style={{
						width: "clamp(3.5rem,5vw,4.5rem)",
					}}
					className="aspect-square border-2 //md:border-4 text-white rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
					onClick={handleBack}
				>
					<img className="relative z-10" src={LinkCustom({ src: "/assets/arrow_mobile.svg" })} alt="" />
				</button>
				<button
					style={{
						width: "clamp(3.5rem,5vw,4.5rem)",
					}}
					className="aspect-square border-2 //md:border-4 text-white rounded-full grid place-items-center -scale-x-100 after:bg-slate-600 after:w-full after:h-full after:absolute after:translate-y-full hover:after:translate-y-0 after:transition-all after:duration-300 after:-z-1 overflow-hidden "
					onClick={handleNext}
				>
					<img className="relative z-10 -scale-x-100" src={LinkCustom({ src: "/assets/arrow_mobile.svg" })} alt="" />
				</button>
			</div>
			<motion.div
				ref={container}
				className={`max-sm:h-[65vw] sm:h-[40vw] max-md:mb-[8rem] md:mb-[12rem] relative left-0 right-0 bottom-0 w-full flex items-center flex-col-reverse flex-1 justify-center`}
			>
				{images.map((image, index) => {
					let isDesktop = screenSize === "desktop";
					let isLarge = screenSize === "large";

					let isDesktopOrLarge = screenSize === "desktop" || screenSize === "large";
					let isMobile = screenSize === "mobile";

					let amount = 0;
					let delay = 0;
					let duration = 0.9;

					if (index === 3 && isDesktopOrLarge) {
						amount = 0.16;
						delay = 0.3;
					} else if (index === 4) {
						amount = 0.6;
						delay = isDesktopOrLarge ? 0.6 : 0.3;
					} else if (index === 5) {
						amount = isDesktopOrLarge ? 0.5 : 0.35;
						delay = isDesktopOrLarge ? 0.9 : 0.6;
					} else if (index === 6 && isDesktopOrLarge) {
						amount = 0.5;
						delay = 1.2;
					} else if (index === 7 && screenSize === "large") {
						amount = 0.5;
						delay = 1.5;
					}

					const isInView = useInView(image.refImg, { amount: amount, once: true });

					return (
						<motion.div
							initial="center"
							ref={image.ref}
							key={index}
							className={`object-cover absolute`}
							animate={positions[positionIndexes[index]]}
							variants={imageVariants}
							transition={{ duration: 0.45 }}
						>
							{(index === 3 && isDesktopOrLarge) ||
							index === 4 ||
							index === 5 ||
							(index === 6 && isDesktopOrLarge) ||
							(index === 7 && isLarge) ? (
								<motion.div
									style={{
										height: isInView ? "0%" : "100%",
										transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
										backgroundColor: "rgba(37, 37, 37)",
									}}
									className="opacity-100 w-full box-border absolute bottom-0 flex items-center justify-center"
								>
									<motion.h2
										// animate={{ opacity: isInView ? 0 : 0.5 }}
										style={{
											opacity: isInView ? "0%" : "100%",
											transition: `all ${delay}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s`,
										}}
										className=" text-primary md:text-5xl text-4xl max-sm:text-[6vw] font-garcia"
									>
										{image.name}
									</motion.h2>
								</motion.div>
							) : null}

							<motion.img
								src={LinkCustom({ src: image.src })}
								alt={image}
								className="w-full h-full rounded-[12px] max-md:border-[4px] md:border-[6px] border-white object-cover"
								ref={image.refImg}
							></motion.img>
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
	const [princpalElementHeightNumber, setPrincipalElementHeight] = useState(null);
	useEffect(() => {
		function determineScreenType() {
			const width = window.innerWidth;
			const height = window.innerHeight;

			if (width < 640) {
				setScreenType("mobile");
				setPrincipalElementHeight(60);
			} else if (width >= 640 && width <= 1920) {
				setScreenType("desktop");
				if (width * 0.36) setPrincipalElementHeight(36);
			} else {
				setScreenType("big_desktop");
				setPrincipalElementHeight(29);
			}
		}

		determineScreenType();

		window.addEventListener("resize", determineScreenType);

		return () => window.removeEventListener("resize", determineScreenType);
	});
	// Multiplier
	const [multiplier, setMultiplier] = useState(null);

	useEffect(() => {
		// Fonction pour déterminer la taille de l'écran et définir le chemin de l'image en conséquence
		const updateMultiplier = () => {
			if (window.innerWidth <= 1920) {
				setMultiplier(1.65);
			} else {
				setMultiplier(2.2);
			}
		};

		// Initialiser le chemin de l'image lors du montage du composant
		updateMultiplier();

		// Ajouter un écouteur d'événement pour mettre à jour le chemin de l'image lors du redimensionnement de la fenêtre
		window.addEventListener("resize", updateMultiplier);

		// Nettoyer l'écouteur d'événement lors du démontage du composant
		return () => window.removeEventListener("resize", updateMultiplier);
	});
	const secondElementHeight = `min(${ratioHeight * princpalElementHeightNumber}svw, ${
		ratioHeight * princpalElementHeightNumber * multiplier
	}svh)`;
	const princpalElementHeight = `min(${princpalElementHeightNumber}svw, ${princpalElementHeightNumber * multiplier}svh)`;

	const y = `min(${princpalElementHeightNumber - ratioHeight * princpalElementHeightNumber}svw, ${
		princpalElementHeightNumber * multiplier - ratioHeight * princpalElementHeightNumber * multiplier
	}svh)`;

	const secondElementHeightNumber = ratioHeight * princpalElementHeightNumber;

	const secondElementWidth = `${getWidthFromHeight(secondElementHeightNumber, secondElementRatio)}svw`;
	const principalElementWidth = `${getWidthFromHeight(princpalElementHeightNumber, principalElementRatio)}svw`;

	const variants = {
		desktop: {
			left: {
				top: 0,
				left: "-45vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left1: {
				top: 0,
				left: "-45vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left2: {
				top: 0,
				left: "-30vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left2,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 100,
			},
			left3: {
				top: 0,
				left: "-16vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left3,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 100,
			},
			center: {
				top: 0,
				left: "10vw",
				width: principalElementWidth,
				height: princpalElementHeight,
				zIndex: zIndex.center,
				y: 0,
				filter: "grayscale(0%) brightness(1)",
			},
			right4: {
				top: 0,
				left: "49vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right4,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
			},
			right3: {
				top: 0,
				left: "74.6vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right3,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 100,
			},
			right2: {
				top: 0,
				left: "100vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right2,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right1: {
				top: 0,
				left: "110vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right: {
				top: 0,
				left: "110vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right: {
				top: 0,
				left: "110vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
		},
		big_desktop: {
			left: {
				top: 0,
				left: "-30vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left1: {
				top: 0,
				left: "-30vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left2: {
				top: 0,
				left: "-30vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left3: {
				top: 0,
				left: "-10.3vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 1,
			},
			center: {
				top: 0,
				left: "10vw",
				width: principalElementWidth,
				height: princpalElementHeight,
				zIndex: zIndex.center,
				y: 0,
				filter: "grayscale(0%) brightness(1)",
				opacity: 1,
			},
			right4: {
				top: 0,
				left: "41vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 1,
			},
			right3: {
				top: 0,
				left: "61.2vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 1,
			},
			right2: {
				top: 0,
				left: "81.35vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 1,
			},
			right1: {
				top: 0,
				left: "103vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right: {
				top: 0,
				left: "120vw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
		},
		mobile: {
			left: {
				top: 0,
				left: "-60svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left1: {
				top: 0,
				left: "-60svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left2: {
				top: 0,
				left: "-60svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			left3: {
				top: 0,
				left: "-45svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.left1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 100,
			},
			center: {
				top: 0,
				left: "4svw",
				width: principalElementWidth,
				height: princpalElementHeight,
				zIndex: zIndex.center,
				y: 0,
				filter: "grayscale(0%) brightness(1)",
			},
			right4: {
				top: 0,
				left: "70svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right1,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 100,
			},
			right3: {
				top: 0,
				left: "110svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right2: {
				top: 0,
				left: "110svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right1: {
				top: 0,
				left: "110svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
			right: {
				top: 0,
				left: "110svw",
				width: secondElementWidth,
				height: secondElementHeight,
				zIndex: zIndex.right,
				y: y,
				filter: "grayscale(100%) brightness(0.7)",
				opacity: 0,
			},
		},
	};

	return variants[screenType];
}
