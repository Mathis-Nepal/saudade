import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import { Font } from "../components/components";
import { Suspense } from "react";
import Loading from "./loading";

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
        <html lang="en">
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
