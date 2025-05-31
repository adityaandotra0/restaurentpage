"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
};

type AnimatedTestimonialsProps = {
    testimonials: Testimonial[];
    autoplay?: boolean;
    colors?: {
        name?: string;
        position?: string;
        testimony?: string;
        arrowBackground?: string;
        arrowForeground?: string;
        arrowHoverForeground?: string; // Added prop for hover color
    };
    fontSizes?: {
        name?: string;
        position?: string;
        testimony?: string;
    };
    spacing?: {
        top?: string;
        bottom?: string;
        lineHeight?: string;
        imageToTestimonialSpace?: string;
        nameTop?: string;
        nameBottom?: string;
        positionTop?: string;
        positionBottom?: string;
        testimonyTop?: string;
        testimonyBottom?: string;
    };
    desktopVersionBottomThreshold?: number;
    maxImageWidth?: number;
    imageWidthPercentage?: number;
    mobile?: {
        fontSizes?: {
            name?: string;
            position?: string;
            testimony?: string;
        };
        spacing?: {
            top?: string;
            bottom?: string;
            lineHeight?: string;
            imageToTestimonialSpace?: string;
            nameTop?: string;
            nameBottom?: string;
            positionTop?: string;
            positionBottom?: string;
            testimonyTop?: string;
            testimonyBottom?: string;
        };
    };
    imageAspectRatio?: number; // Added prop for image aspect ratio
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    colors = {
        name: "black",
        position: "gray-500",
        testimony: "gray-500",
        arrowBackground: "gray-100",
        arrowForeground: "black",
        arrowHoverForeground: "white", // Default hover color
    },
    fontSizes = {
        name: "2xl",
        position: "sm",
        testimony: "lg",
    },
    spacing = {
        top: "20",
        bottom: "20",
        lineHeight: "1.5",
        imageToTestimonialSpace: "20",
        nameTop: "0",
        nameBottom: "0.5em",
        positionTop: "0",
        positionBottom: "0.25em",
        testimonyTop: "1em",
        testimonyBottom: "1em",
    },
    desktopVersionBottomThreshold = 1024,
    mobile = {},
    imageAspectRatio = 1, // Default image aspect ratio (1:1)
}: AnimatedTestimonialsProps) => {
    const [active, setActive] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const [hoveredArrow, setHoveredArrow] = useState<"prev" | "next" | null>(null);

    // Use Mobile Config (with defaults)
    const currentFontSizes = isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
    const currentSpacing = {
        ...spacing,
        ...(isMobileView && mobile.spacing ? mobile.spacing : {}),
    };

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    // Use useCallback to memoize handleResize
    const handleResize = useCallback(() => {
        setIsMobileView(window.innerWidth < desktopVersionBottomThreshold);
    }, [desktopVersionBottomThreshold]);

    useEffect(() => {
        // Call handleResize on mount
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [handleResize]); // Only re-run the effect if handleResize changes

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    const arrowStyle = (arrowType: "prev" | "next") => ({
        backgroundColor: colors.arrowBackground,
    });

    const iconArrowStyle = (arrowType: "prev" | "next") => ({
        color: hoveredArrow === arrowType ? colors.arrowHoverForeground : colors.arrowForeground,
        height: '49px',
        width: '49px',
    });

    return (
        <div
            className={`w-full mx-auto antialiased font-sans py-${currentSpacing.top} pb-${currentSpacing.bottom}`}
            style={{ lineHeight: currentSpacing.lineHeight, backgroundColor: "transparent" }}
        >
            <div className="relative" style={{ display: 'grid', gridTemplateColumns: isMobileView ? '1fr' : '1fr 1fr', gap: '86px' }}>
                <div className="w-full">
                    <div className="relative" style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}>
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        layout="fill"
                                        objectFit="cover"
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex justify-between flex-col py-4 w-full">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className={`font-bold`} style={{
                            fontSize: currentFontSizes.name,
                            color: colors.name,
                            marginTop: currentSpacing.nameTop,
                            marginBottom: currentSpacing.nameBottom,
                        }}>
                            {testimonials[active].name}
                        </h3>
                        <p style={{
                            fontSize: currentFontSizes.position,
                            color: colors.position,
                            marginTop: currentSpacing.positionTop,
                            marginBottom: currentSpacing.positionBottom,
                        }}>
                            {testimonials[active].designation}
                        </p>
                        <motion.p style={{
                            fontSize: currentFontSizes.testimony,
                            color: colors.testimony,
                            marginTop: currentSpacing.testimonyTop,
                            marginBottom: currentSpacing.testimonyBottom,
                        }}>
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span key={index} initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                                    className="inline-block">
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                    <div className={`flex gap-4 ${isMobileView ? 'pt-12' : 'md:pt-0'} w-full`}>
                        <button onClick={handlePrev}
                            className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                            style={arrowStyle("prev")}
                            onMouseEnter={() => setHoveredArrow("prev")}
                            onMouseLeave={() => setHoveredArrow(null)}
                        >
                            <IconArrowLeft className="transition-transform duration-300" style={{
                                ...iconArrowStyle("prev"),
                                transform: hoveredArrow === "prev" ? 'rotate(12deg)' : 'rotate(0deg)',
                                transition: 'color 0.3s, transform 0.3s'
                            }} />
                        </button>
                        <button onClick={handleNext}
                            className="h-[32px] w-[32px] rounded-full flex items-center justify-center"
                            style={arrowStyle("next")}
                            onMouseEnter={() => setHoveredArrow("next")}
                            onMouseLeave={() => setHoveredArrow(null)}
                        >
                            <IconArrowRight className="transition-transform duration-300" style={{
                                ...iconArrowStyle("next"),
                                transform: hoveredArrow === "next" ? 'rotate(-12deg)' : 'rotate(0deg)',
                                transition: 'color 0.3s, transform 0.3s'
                            }} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
