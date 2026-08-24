"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const HeroParallax = ({ products }) => {
  // console.log(products)
  const firstRow = products?.slice(0, 5);
  const secondRow = products?.slice(5, 10);
  const thirdRow = products?.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="xl:h-[240vh] h-[270vh] sm:h-[200vh] md:h-[205vh]  lg:h-[280vh] overflow-hidden  antialiased relative flex flex-col self-auto perspective-[1000px] transform-3d "
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-16">
          {firstRow?.map((product, i) => (
            <ProductCard product={product} translate={translateX} key={i} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-16 space-x-10  h-auto">
          {secondRow?.map((product, i) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={i}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse  space-x-10 h-auto">
          {thirdRow?.map((product, i) => (
            <ProductCard product={product} translate={translateX} key={i} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-28 px-4 w-full left-0 top-0">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        What I’ve Been <br />
        <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Working On
        </span>
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-lg mt-6 text-slate-300">
        A curated collection of the applications, designs, and experiments I’ve
        built—showcasing my skills in UI development, backend architecture, and
        full-stack problem-solving.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  const imageSrc = product?.image;

  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      key={product?.title}
      className="group/product h-90 w-120 relative shrink-0"
    >
      <Link
        href={product?.live || "#"}
        target="_blank"
        className="block group-hover/product:shadow-2xl"
      >
        {/* ✅ Render Image only if src exists */}
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={product?.title || "Project Image"}
            width={600}
            height={600}
            className="object-cover  absolute h-full w-full inset-0 rounded-2xl"
          />
        ) : (
          /* Fallback skeleton */
          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </Link>

      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-black pointer-events-none"></div>

      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product?.title}
      </h2>
    </motion.div>
  );
};
