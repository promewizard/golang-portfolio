import { Cairo_Play } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Theme Provider
import { ThemeProvider } from "@/components/ThemeProvider";

const cairoPlay = Cairo_Play({ subsets: ["latin"] });

export const metadata = {
    title: "@Kri.sato - Portfolio",
    description: "Golang Portfolio of Kri.sato",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cairoPlay.className}>
                <ThemeProvider attributeName="class" defaultTheme="light">
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
