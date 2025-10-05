"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import data from "../data/rooms.json";

// Type definitions
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

const Rooms = () => {
  const roomsData: RoomsData = data;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories: string[] = ["All", "Suite", "Villa", "Penthouse", "Bungalow", "Family"];
  
  const filteredRooms: Room[] = selectedCategory === "All" 
    ? roomsData.rooms 
    : roomsData.rooms.filter(room => room.category === selectedCategory);

  return (
    <section className="relative min-h-screen py-12 lg:py-20" id="rooms">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg"
          alt="Luxury resort background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-amber-500">Luxury</span> Accommodations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect stay with our curated selection of rooms and suites
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-amber-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room: Room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
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
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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

                {/* Key Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.amenities.slice(0, 3).map((amenity: string, index: number) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs"
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
                  className="block w-full bg-amber-500 hover:bg-amber-600 text-white text-center font-semibold py-3 rounded-xl transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredRooms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No rooms found in this category. Please try another filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Rooms;