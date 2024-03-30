import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const FadeInOnScroll = ({ children, threshold, duration }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: threshold || 1 });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                visibility: "visible",
                transition: {
                    duration: duration || 1,
                    ease: [0, 0, 0.5, 1], // cubic-bezier(0,0,0.5,1)
                },
            });
        } else {
            controls.start({
                opacity: 0,
                y: 20,
                visibility: "hidden",
                transition: {
                    duration: duration || 1,
                    ease: [0, 0, 0.5, 1], // cubic-bezier(0,0,0.5,1)
                },
            });
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20, visibility: "hidden" }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default FadeInOnScroll;
