import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const Carousel = ({ images }) => {
    const [viewportRef, embla] = useEmblaCarousel({
        loop: true,
        align: "start", // Modifier 'center' en 'start' pour voir plus d'images
        containScroll: "keepSnaps", // Ajouter pour maintenir les slides dans le viewport
        // draggable: true,
        slidesToScroll: 1,
        // slidesToShow: 4, // Définir combien de slides doivent être visibles
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (embla) {
            setSelectedIndex(embla.selectedScrollSnap());
        }
    }, [embla]);

    useEffect(() => {
        if (embla) {
            embla.on("select", onSelect);
            onSelect(); // for initial selection
        }
    }, [embla, onSelect]);

    return (
        <div className="overflow-hidden relative w-full">
            <div className="flex" ref={viewportRef}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`transition-transform duration-500 ease-out ${index === selectedIndex ? "scale-110" : "scale-90"} flex-none w-1/4`}
                    >
                        <Image
                            src={image.src}
                            alt={`Image ${index}`}
                            width={500}
                            height={300}
                            layout="responsive"
                            objectFit="cover"
                            priority={index === 0} // Preload the first image
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 cursor-pointer"
                onClick={() => embla && embla.scrollPrev()}
            >
                Prev
            </button>
            <button
                className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-4 cursor-pointer"
                onClick={() => embla && embla.scrollNext()}
            >
                Next
            </button>
        </div>
    );
};

export default Carousel;
