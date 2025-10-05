"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "../../data/rooms.json";

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

interface RoomsData {
  rooms: Room[];
}

const RoomsPage = () => {
  const roomsData: RoomsData = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Our <span className="text-amber-500">Rooms</span>
              </h1>
              <p className="text-gray-600 mt-2">
                Discover your perfect stay with our luxury accommodations
              </p>
            </div>
            <Link
              href="/"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
            >
              <span>←</span>
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Rooms Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {roomsData.rooms.map((room: Room, index: number) => (
            <motion.div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-64 lg:h-72 overflow-hidden">
                <Image
                  src={room.images[0]}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-amber-600">
                    {room.category}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {room.featured && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">Featured</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">
                      ${room.price}
                    </div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {room.shortDescription}
                </p>

                {/* Room Details */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <span>👤</span>
                    <span>{room.maxGuests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🛏️</span>
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📐</span>
                    <span>{room.size} {room.sizeUnit}</span>
                  </div>
                </div>

                {/* View Type */}
                <div className="mb-4">
                  <span className="text-sm text-gray-600 bg-blue-50 px-3 py-1 rounded-full">
                    {room.view}
                  </span>
                </div>

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 3 && (
                    <span className="text-gray-500 text-xs">
                      +{room.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/rooms/${room.slug}`}
                  className="block w-full text-center bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  View Details & Book
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {roomsData.rooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No rooms available at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;