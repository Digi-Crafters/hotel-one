"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BookNowCat = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-4xl lg:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready for Your
          <span className="block text-yellow-200">Dream Escape?</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl lg:text-2xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Don&#39;t just dream about paradise - experience it. Limited rooms available for your perfect getaway.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Primary Button */}
          <Link href="/book">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-white text-amber-600 font-bold rounded-2xl text-xl shadow-2xl hover:shadow-white/40 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center gap-3">
                Book Your Stay Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
            </motion.button>
          </Link>

          {/* Secondary Button */}
          <Link href="/rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border-2 border-white text-white font-bold rounded-2xl text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Explore Rooms
            </motion.button>
          </Link>
        </motion.div>

        {/* Guarantee Text */}
        <motion.p
          className="text-amber-200 mt-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          ⭐ Best Price Guarantee • Free Cancellation • 24/7 Support
        </motion.p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default BookNowCat;