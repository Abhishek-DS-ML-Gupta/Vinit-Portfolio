import React, { useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const MENU_SLIDE_ANIMATION = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: {
        x: "calc(100% + 100px)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
};

const defaultNavItems = [
    { heading: "Home", href: "#home" },
    { heading: "Skills", href: "#skills" },
    { heading: "Projects", href: "#projects" },
    { heading: "Contact", href: "#contact" },
];

const NavLink = ({ heading, href, setIsActive, index }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <motion.div
            onClick={() => setIsActive(false)}
            initial="initial"
            whileHover="whileHover"
            className="group relative flex items-center justify-between border-b border-black/30 py-3 md:py-6 uppercase"
        >
            <a 
                ref={ref} 
                onMouseMove={handleMouseMove} 
                href={href} 
                className="w-full flex items-start"
                onClick={(e) => {
                    // If it's an anchor on the same page, we might want to handle it specifically
                    // but for now, standard anchor behavior or Link works.
                }}
            >
                <span className="text-black text-2xl md:text-4xl font-thin mr-4">{index}.</span>
                <motion.span className="text-2xl md:text-4xl font-extralight text-black">
                    {heading}
                </motion.span>
            </a>
        </motion.div>
    );
};

const Curve = () => {
    const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    return (
        <svg className="absolute top-0 -left-[99px] w-[100px] h-full fill-white stroke-none">
            <motion.path
                variants={{
                    initial: { d: initialPath },
                    enter: { d: targetPath, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
                    exit: { d: initialPath, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
                }}
                initial="initial"
                animate="enter"
                exit="exit"
            />
        </svg>
    );
};

export const CurvedMenu = ({ setIsActive, navItems = defaultNavItems }) => {
    return (
        <motion.div
            variants={MENU_SLIDE_ANIMATION}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-screen w-screen max-w-[90vw] md:max-w-screen-sm fixed right-0 top-0 z-[200] bg-white shadow-2xl flex flex-col"
        >
            <div className="flex-1 pt-16 md:pt-20 px-6 md:px-24">
                <div className="text-black border-b border-black/30 uppercase text-xs md:text-sm mb-4 md:mb-8 pb-2">
                    <p>Navigation</p>
                </div>
                {navItems.map((item, index) => (
                    <NavLink key={index} {...item} setIsActive={setIsActive} index={index + 1} />
                ))}
            </div>
            <div className="p-6 md:p-10 text-black/50 text-xs md:text-sm">
                <p>© 2026 Vinit Ghanekar | ML Engineer</p>
            </div>
            <Curve />
        </motion.div>
    );
};
