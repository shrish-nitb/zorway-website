import { motion, useScroll, useTransform } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Second({
  purple,
  white,
  subtitle,
  left,
  right,
  destination,
}) {
  const { scrollYProgress } = useScroll();
  const [FSV, setFSV] = useState();

  // Update FSV based on scrollYProgress
  useEffect(() => {
    const updateFSV = () => {
      setFSV(floatingShineBlur.get());
    };
    const unsubscribe = scrollYProgress.onChange(updateFSV);
    return () => unsubscribe();
  }, []);

  let floatingShineBlur = useTransform(scrollYProgress, [0, 0.17], [9, 0]);
  let popAppearance = useTransform(scrollYProgress, [0.05, 0.14], [100, 0]);
  let popzAppearance = useTransform(scrollYProgress, [0.05, 0.14], [-500, 0]);
  let hidePop = useTransform(scrollYProgress, [0.15, 0.23], [1, 0]);
  let anim02 = useTransform(scrollYProgress, [0, 0.14], [0, 1]);
  let anim03 = useTransform(scrollYProgress, [0, 0.14], [0, 1.2]);

  return (
    <section className="home-second">
      <motion.div className="floating-shine" style={{ filter: `blur(${FSV}px)`, opacity: hidePop }} />
      <div className="gapper" style={{ textAlign: "center" }}>
        <div style={destination === "homepage" && window.innerWidth > 639 ? { height: "60rem" } : {}}>
          <div className="title-white purple-head">{purple}</div>
          <div style={destination === "homepage" && window.innerWidth > 639 ? { position: "sticky", top: "308px", perspective: "1000px" } : {}}>
            <motion.div style={{ y: popAppearance, z: popzAppearance, opacity: anim02, scale: anim03 }}>
              <motion.div className="title-white" style={{ opacity: hidePop }}>{white}</motion.div>
              <motion.div className="subtitle" style={{ opacity: hidePop }}>{subtitle}</motion.div>
            </motion.div>
          </div>
        </div>
        <div style={{ overflowX: "hidden" }}>
          <div className="second-grid" style={destination === "homepage" ? { paddingTop: "12.5rem" } : {}}>
            {left}
            {right}
          </div>
        </div>
      </div>
    </section>
  );
}
