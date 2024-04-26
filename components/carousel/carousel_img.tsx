import React from "react";
import Image from "next/image";

interface CarouselImgProps {
    src: string;
    alt: string;
}

const CarouselImg = ({ src, alt }: CarouselImgProps) => {
    return (
        <div className="relative w-56 h-56 border-4 border-primary rounded-sm">
            <Image src={src} alt={alt} fill={true} objectFit="cover" />
        </div>
    );
};

export default CarouselImg;
