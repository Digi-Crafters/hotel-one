"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import data from "../../../data/rooms.json";
import {
  FaBed,
  FaUsers,
  FaRulerCombined,
  FaMountain,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";

interface Room {
  id: number;
  name: string;
  slug: string;
  category: string;
  price: number;
  currency: string;
  priceUnit: string;
  maxGuests: number;
  size: number;
  sizeUnit: string;
  bedType: string;
  view: string;
  quantity: number;
  description: string;
  shortDescription: string;
  images: string[];
  amenities: string[];
  featured: boolean;
  available: boolean;
}

const RoomDetailPage = () => {
  const params = useParams();
  const roomId = params.id;
  const [activeImage, setActiveImage] = useState(0);

  // Find the room by slug
  const room: Room | undefined = data.rooms.find(
    (r: Room) => r.slug === roomId
  );

  // If room not found
  if (!room) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Room Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The room you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/rooms"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View All Rooms
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-x-hidden">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 line-clamp-1">
                {room.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-medium">
                  {room.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 text-sm">{room.view}</span>
              </div>
            </div>
            <div className="flex gap-2 self-start sm:self-center mt-3 sm:mt-0">
              <Link
                href="/rooms"
                className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-1.5 text-sm"
              >
                <FaArrowLeft size={12} /> All Rooms
              </Link>
              <Link
                href="/"
                className="px-3 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors flex items-center gap-1.5 text-sm"
              >
                <FaHome size={12} /> Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12"
        >
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={room.images[activeImage]}
                alt={room.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {room.featured && (
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {room.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-16 sm:h-20 rounded-lg overflow-hidden cursor-pointer transition-all ${
                    activeImage === index
                      ? "ring-2 ring-amber-500 transform scale-[0.97]"
                      : "hover:opacity-80"
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${room.name} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 25vw, 150px"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Room Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Price and Booking Status */}
            <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-amber-600">
                  ${room.price}
                  <span className="text-sm sm:text-base text-gray-500 font-normal">
                    {" "}
                    / {room.priceUnit}
                  </span>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      room.available ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></span>
                  <span>{room.available ? "Available" : "Not Available"}</span>
                  <span>•</span>
                  <span>
                    {room.quantity} room{room.quantity > 1 ? "s" : ""} left
                  </span>
                </div>
              </div>
              <Link href="/book">
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-sm sm:text-base disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {room.available ? "Book Now" : "Not Available"}
                </button>
              </Link>
            </div>

            {/* Description */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block mr-3"></span>
                Description
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Room Specifications */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FaUsers className="text-amber-600" size={18} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {room.maxGuests} Guests
                  </div>
                  <div className="text-xs text-gray-500">Maximum</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FaRulerCombined className="text-amber-600" size={18} />
                </div>
                <div>
                  <div className="font-medium text-gray-900">
                    {room.size} {room.sizeUnit}
                  </div>
                  <div className="text-xs text-gray-500">Room Size</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FaBed className="text-amber-600" size={18} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 line-clamp-1">
                    {room.bedType}
                  </div>
                  <div className="text-xs text-gray-500">Bed Type</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-md">
                <div className="bg-amber-100 p-2 rounded-lg">
                  <FaMountain className="text-amber-600" size={18} />
                </div>
                <div>
                  <div className="font-medium text-gray-900 line-clamp-1">
                    {room.view}
                  </div>
                  <div className="text-xs text-gray-500">View</div>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-1.5 h-5 bg-amber-500 rounded-full inline-block mr-3"></span>
                Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <span className="text-amber-500 flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2 sm:pt-4">
              <Link href="/book">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-xl text-base sm:text-lg shadow-lg hover:shadow-amber-500/25 transition-all disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed"
                  disabled={!room.available}
                >
                  {room.available
                    ? "Book This Room Now"
                    : "Currently Unavailable"}
                </motion.button>
              </Link>
              <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                Instant confirmation • Free cancellation 48h before arrival
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional room info - placeholder for future expansion */}
        <div className="mt-10 mb-6 hidden">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            More Information
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailPage;
