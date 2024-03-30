import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MovingArray({ strings, intervalTime }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [strings.length, intervalTime]);
    return (
        <div style={{ position: "relative", height: "60px", width: "100%", display: "flex",
        justifyContent: "center"}}>
            <AnimatePresence>
                {strings.map(
                    (string, index) =>
                        index === currentIndex && (
                            <motion.div
                                key={index}
                                style={{ position: "absolute", bottom: 0 }}
                                initial={{ opacity: 0, y: "100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "-100%" }}
                                transition={{ duration: 0.5 }}
                            >
                                {string}
                            </motion.div>
                        )
                )}
            </AnimatePresence>
        </div>
    )
}
