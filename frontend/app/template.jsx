"use client";

import useScrollProgress from "@/hooks/useScrollProgress";
import { motion } from "framer-motion";

const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
    return (
        <>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="enter"
                transition={{ type: "linear", duration: 0.4, delay: 0.2 }}
            >
                {children}
            </motion.main>
            <span
                style={{ transform: "translateX(${completion - 100}%)" }}
                className="fixed top-0 right-0 bottom-0 z-50 w-1 transition-all duration-700 bg-primary"
            ></span>
        </>
    );
};

export default Template;
