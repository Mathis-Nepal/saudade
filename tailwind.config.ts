import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
                melodrama: ["Melodrama"],
                garcia: ["GarciaMarquez"],
            },
            fontSize: {
                sm: "0.8rem",
                base: "1rem",
                xl: "1.25rem",
                "2xl": "1.563rem",
                "3xl": "1.953rem",
                "4xl": "2.441rem",
                "5xl": "3.052rem",
            },
        },
    },
    plugins: [daisyui],

    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    background: "#F5F5F5",
                    normal: "#0000",
                    primary: "#FEFEFE",
                    secondary: "#131313",
                    accent: "#EBEBEB66",
                },
            },
        ],
        // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
};
export default config;
