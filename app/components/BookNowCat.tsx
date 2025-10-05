"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const BookNowCat = () => {
  return (
    <section className="relative py-16 lg:py-24 bbg-white" id="contact">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Perfect Getaway
          <span className="block text-amber-500">Awaits</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Experience luxury and tranquility at Royal Comfort Beach Resort. 
          Your dream vacation is just a click away.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link href="/book">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
            >
              Book Your Stay
            </motion.button>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-8 text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <span>⭐</span>
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🔄</span>
            <span>Free Cancellation</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🏆</span>
            <span>Luxury Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookNowCat;