import Image from "next/image";
import {LinkCustom} from "./components";

const Footer = () => {
    return (
        <footer className="relative flex items-center justify-center py-10 max-md:gap-5  md:gap-10 bg-secondary z-10">
            <div className="relative" style={{ width: "clamp(1rem,25vw, 10rem)", aspectRatio: 1 / 1 }}>
                <Image className={"flex-1"} alt="" src={LinkCustom({ src: "/assets/spaak.svg" })} fill={true}></Image>
            </div>
            <div className="relative" style={{ width: "clamp(1rem,25vw, 10rem)", aspectRatio: 1 / 1 }}>
                <Image className={"flex-1"} alt="" src={LinkCustom({ src: "/assets/nostalgia.svg" })} fill={true}></Image>
            </div>
        </footer>
    );
};

export default Footer;
