import { Jomhuria, Open_Sans } from "next/font/google";
import "./globals.css"
import Script from "next/script";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const opensans = Open_Sans({ subsets: ["latin"], variable: "--font-opensans" });
const jomhuria = Jomhuria({
    subsets: ["latin"],
    variable: "--font-jomhuria",
    weight: ["400"],
});

export const metadata = {
    title: "Bruktglede",
    description:
        "Utviklet av Lisa Mari Myrene, Alexandra Eloise Vanje & Anosh Chaudhry.",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            {/* Fjerne navbar fra mobil når er på [id] */}
            <body className={`${opensans.variable} ${jomhuria.variable}`}>
                <Navbar />
                {children}
                <Footer />
                {/* <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script> */}
                {/* <script src="../path/to/flowbite/dist/datepicker.js"></script> */}
            </body>
        </html>
    );
}
