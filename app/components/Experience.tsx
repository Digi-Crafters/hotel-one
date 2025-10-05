"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="about">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586611292717-f828b167408c?auto=format&fit=crop&w=1374&q=80"
          alt="Luxury resort pool and ocean view"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-teal-800/50 to-amber-900/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-transparent to-gray-950/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-amber-300/20 rounded-full"
            animate={{
              y: [0, -30, -60],
              x: [0, Math.sin(i) * 20],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.7
            }}
            style={{
              left: `${20 + (i * 10)}%`,
              bottom: '10%'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            className="text-white space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Private{" "}
              <span className="text-amber-300 block">Paradise Awaits</span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-cyan-100 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Step into a world where luxury meets nature. Infinity pools blending 
              with ocean horizons, private villas with breathtaking views, and 
              moments that become lifelong memories.
            </motion.p>

            {/* Feature List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                "✨ Infinity Pool with Ocean View",
                "🏝️ Private Beach Access", 
                "🍹 Premium All-Inclusive Packages",
                "🎯 Personalized Concierge Service"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 text-cyan-50"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-2 h-2 bg-amber-400 rounded-full" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="/book"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold rounded-xl text-center text-lg shadow-2xl"
              >
                Book Now & Save 20%
              </motion.a>
              
              <motion.a
                href="#gallery"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-amber-400 text-amber-400 font-bold rounded-xl text-center text-lg backdrop-blur-sm hover:bg-amber-400/10 transition-colors"
              >
                View Gallery
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="relative bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 border border-amber-400/30 shadow-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-amber-300 mb-2">
                  Limited Time Offer
                </h3>
                <p className="text-cyan-100">
                  Book 3 nights, get 1 night free!
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Pool View Suite", price: "$299", popular: true },
                  { label: "Ocean Front Villa", price: "$499", popular: false },
                  { label: "Private Residence", price: "$899", popular: false }
                ].map((room, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      room.popular 
                        ? "border-amber-400 bg-amber-400/10" 
                        : "border-white/20 hover:border-amber-400/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">{room.label}</span>
                      <span className="text-amber-300 font-bold">{room.price}</span>
                    </div>
                    {room.popular && (
                      <motion.span 
                        className="text-xs text-amber-400 mt-1 block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Most Popular
                      </motion.span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-center">
            <span className="text-amber-300 text-sm mb-2 block">Discover More</span>
            <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center mx-auto">
              <motion.div
                className="w-1 h-3 bg-amber-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;