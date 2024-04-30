"use client";
import config from "../next.config";

const Font = () => {
    return (
        <style jsx global>{`
            @layer base {
                @font-face {
                    font-family: "Melodrama";
                    font-weight: 700;
                    letter-spacing: 2%;
                    line-height: 27px;
                    src: url("${config.basePath}/fonts/Melodrama-Variable.woff2") format("woff2");
                }
                @font-face {
                    font-family: "GarciaMarquez";
                    line-height: 105px;
                    letter-spacing: 2%;
                    font-weight: 400;
                    src: url("${config.basePath}/fonts/GarciaMarquez.otf") format("openType");
                }
            }
        `}</style>
    );
};
export default Font;
