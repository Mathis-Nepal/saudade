import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Font } from "../components/components";
import { Suspense } from "react";
import Loading from "./loading";
import { LinkCustom } from "../components/components";
import config from "../next.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Saudade - Green Montana",
    description: "Green Montana - The best music in the world",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <head>
            <link
            rel="preload"
            href={`${config.basePath}/fonts/Melodrama-Variable.woff2`}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={`${config.basePath}/fonts/GarciaMarquez.otf`}
            as="font"
            type="font/opentype"
            crossOrigin="anonymous"
          />
            <link rel="icon" href={LinkCustom({src : "/assets/favicon.ico"})} />
            </head>
            <Font></Font>
            <body className={inter.className}>
                {/* <Suspense fallback={<Loading/>}> */}

                <Navbar />
                {children}
                {/* </Suspense> */}
            </body>
        </html>
    );
}
