"use client";

const ButtonArrow = ({ direction, text }) => {
    return (
        <a
            href={direction}
            className="font-melodrama overflow-hidden btn btn-secondary rounded-[80px] h-auto  py-3 md:px-8 max-md:px-6 text-xl group relative flex justify-center items-center w-auto transition-all duration-300 ease-in-out"
        >
            <span className="max-md:text-base  basis-full text-center transition-all duration-300 ease-in-out group-hover:mr-4 whitespace-nowrap">
                {text}
            </span>
            <span className="max-md:text-base  flex items-center opacity-0 group-hover:opacity-100 absolute right-4 transition-opacity duration-300 ease-in-out">
                →
            </span>
        </a>
    );
};
export default ButtonArrow;
