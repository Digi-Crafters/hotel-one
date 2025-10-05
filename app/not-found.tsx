"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated 404 */}
          <div className="text-9xl font-bold text-gray-800 mb-4">
            <motion.span
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              4
            </motion.span>
            <motion.span
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-amber-500"
            >
              0
            </motion.span>
            <motion.span
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, type: "spring" }}
            >
              4
            </motion.span>
          </div>

          {/* Message */}
          <motion.h1
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Page Not Found
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Oops! The page you&#39;re looking for seems to have drifted away with the ocean tide.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-colors shadow-lg hover:shadow-amber-500/25"
            >
              🏠 Back to Home
            </Link>
            <Link
              href="/rooms"
              className="px-8 py-4 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-xl transition-colors"
            >
              🏝️ Explore Rooms
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-12 text-6xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌊
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;