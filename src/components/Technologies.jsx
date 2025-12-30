import React from "react";
// 1. Icons Import (Changed SiMicrosoft to FaWindows)
import { DiJavascript } from "react-icons/di";
import { IoLogoFirebase, IoLogoSass } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiHtml5, SiCss3 } from "react-icons/si"; 
import { FaWindows } from "react-icons/fa"; // <--- Yeh naya import hai (Microsoft logo ke liye)
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl "
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap item-center justify-center gap-4"
      >
        {/* HTML5 */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS3 */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <DiJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        {/* React */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Tailwind */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Firebase */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <IoLogoFirebase className="text-7xl text-yellow-400" />
        </motion.div>

        {/* Sass */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <IoLogoSass className="text-7xl text-red-400" />
        </motion.div>

        {/* Microsoft / Power Platform (Using FaWindows icon) */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants(4)}
          className="p-4"
        >
          <FaWindows className="text-7xl text-blue-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;