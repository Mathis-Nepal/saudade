import Image from "next/image";

const LogoWithName = ({ name, path, link, className }) => {
    return (
        <a href={link} className={`px-10 py-4 flex flex-1 flex-col items-center rounded-lg justify-center ${className}`}>
            <Image className={`max-sm:w-10 sm:w-10`} src={path} alt="" width={50} height={50}></Image>
            <p className={"text-primary max-sm:text-sm max-sm:text-ellipsis whitespace-nowrap"}>{name}</p>
        </a>
    );
};
export default LogoWithName;
