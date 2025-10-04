"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-950 overflow-hidden pt-16 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury beach resort view"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />

      {/* Floating Light Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.12),transparent)] z-10"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 max-w-4xl mx-auto text-center text-white px-4 sm:px-6 py-12 sm:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Escape to Serenity at{" "}
          <span className="text-amber-400">Royal Comfort Beach Resort</span>
        </motion.h1>

        <motion.p
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-light text-gray-200 leading-relaxed max-w-2xl mx-auto"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Experience world-class luxury by the ocean — where warm sands meet
          timeless elegance. Wake up to golden sunrises and sleep under starry
          skies.
        </motion.p>

        <motion.div
          className="flex justify-center mt-8 sm:mt-10"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.a
            href="#booking"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(255, 193, 7, 0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-amber-500/90 backdrop-blur-sm text-base sm:text-lg font-semibold shadow-lg hover:bg-amber-400 text-black transition-all"
          >
            Book Your Stay
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Subtle Wave at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 md:h-[180px] bg-gradient-to-t from-gray-950/95 to-transparent z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </section>
  );
};

export default Hero;
