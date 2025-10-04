"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Amenities = () => {
  const amenities = [
    {
      title: "Luxury Dining",
      description:
        "Gourmet beachfront restaurant with panoramic ocean views and world-class cuisine",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Spa & Wellness",
      description:
        "Rejuvenating treatments in our ocean-view spa with traditional therapies",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Pool & Beach",
      description:
        "Infinity pool blending into ocean horizon with private beach access",
      image:
        "https://images.unsplash.com/photo-1693643450276-546a07ecb684?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Experiences",
      description: "Sunset cruises, cultural evenings and curated activities",
      image:
        "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center  overflow-x-hidden" id="amenities">
      <div className="w-full max-w-full">
        {/* Grid layout with position for the button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* First 2 items */}
          {amenities.slice(0, 2).map((amenity, index) => (
            <motion.div
              key={`first-${index}`}
              className="group relative aspect-square lg:aspect-auto lg:h-screen min-h-[250px] sm:min-h-[350px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-t lg:from-black/70 lg:via-black/30 lg:to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-end lg:justify-center text-white w-full">
                <div className="text-center mx-auto w-full">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2 lg:mb-4 line-clamp-1">
                    {amenity.title}
                  </h3>

                  {/* Description - Hidden on mobile, shown on desktop */}
                  <motion.p className="text-sm lg:text-lg hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs mx-auto leading-relaxed">
                    {amenity.description}
                  </motion.p>

                  {/* Mobile - Show short version always */}
                  <p className="text-xs sm:text-sm lg:hidden text-center max-w-[90%] mx-auto">
                    {amenity.description.split(" ").slice(0, 5).join(" ")}...
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Last 2 items */}
          {amenities.slice(2, 4).map((amenity, index) => (
            <motion.div
              key={`last-${index}`}
              className="group relative aspect-square lg:aspect-auto lg:h-screen min-h-[250px] sm:min-h-[350px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <Image
                src={amenity.image}
                alt={amenity.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 lg:bg-gradient-to-t lg:from-black/70 lg:via-black/30 lg:to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-4 lg:p-8 flex flex-col justify-end lg:justify-center text-white w-full">
                <div className="text-center mx-auto w-full">
                  <h3 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2 lg:mb-4 line-clamp-1">
                    {amenity.title}
                  </h3>

                  {/* Description - Hidden on mobile, shown on desktop */}
                  <motion.p className="text-sm lg:text-lg hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs mx-auto leading-relaxed">
                    {amenity.description}
                  </motion.p>

                  {/* Mobile - Show short version always */}
                  <p className="text-xs sm:text-sm lg:hidden text-center max-w-[90%] mx-auto">
                    {amenity.description.split(" ").slice(0, 5).join(" ")}...
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Book Now button - positioned absolutely for large screens to be between 2nd and 3rd item */}
          <motion.div
            className="hidden lg:flex absolute left-1/2 bottom-10 transform -translate-x-1/2 z-10 justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-lg shadow-xl hover:shadow-amber-500/25 transition-all duration-300"
            >
              Book Your Stay Now
            </motion.button>
          </motion.div>
        </div>
        
        {/* Mobile/Tablet Book Now button - shown below the grid */}
        <motion.div
          className="lg:hidden text-center mt-6 mb-4 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full max-w-xs sm:max-w-md px-6 sm:px-10 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm sm:text-base shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            Book Your Stay Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Amenities;
