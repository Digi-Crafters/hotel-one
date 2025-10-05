"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import data from "../../data/rooms.json"

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

const BookNowPage = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    specialRequests: ''
  });

  const roomsData: Room[] = data.rooms;
  const categories = ['All', ...new Set(roomsData.map(room => room.category))];

  const filteredRooms = selectedCategory === 'All' 
    ? roomsData 
    : roomsData.filter(room => room.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBookingModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 overflow-x-hidden">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Book Your <span className="text-amber-500">Stay</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">Select your perfect room and book instantly</p>
            </div>
            <div className="flex gap-2 sm:gap-3 self-start sm:self-auto">
              <Link
                href="/rooms"
                className="px-3 sm:px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
              >
                All Rooms
              </Link>
              <Link
                href="/"
                className="px-3 sm:px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                🏠 Home
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Left Side - Rooms List */}
          <div className="xl:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-2 no-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-amber-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredRooms.map(room => (
                <motion.div
                  key={room.id}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
                    selectedRoom?.id === room.id 
                      ? 'border-amber-500 shadow-xl' 
                      : 'border-transparent hover:shadow-xl'
                  }`}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                      <span className="text-xs sm:text-sm font-semibold text-amber-600">
                        {room.category}
                      </span>
                    </div>
                    {room.featured && (
                      <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-amber-500 text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full">
                        <span className="text-xs sm:text-sm font-semibold">Featured</span>
                      </div>
                    )}
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 line-clamp-1 text-sm sm:text-base pr-2">{room.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg sm:text-xl font-bold text-amber-600">${room.price}</div>
                        <div className="text-xs text-gray-500">per night</div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-2">
                      {room.shortDescription}
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-gray-500 overflow-x-auto whitespace-nowrap no-scrollbar pb-1">
                      <span className="mr-3">👤 {room.maxGuests}</span>
                      <span className="mr-3 line-clamp-1">🛏️ {room.bedType}</span>
                      <span>📐 {room.size}{room.sizeUnit}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="xl:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  {selectedRoom ? 'Booking Details' : 'Select a Room'}
                </h2>

                {selectedRoom ? (
                  <form onSubmit={handleBookNow} className="space-y-4 sm:space-y-6">
                    {/* Room Info */}
                    <div className="bg-gray-50 rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedRoom.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-600 font-bold text-xl">${selectedRoom.price}/night</span>
                        <span className="text-sm text-gray-500">{selectedRoom.category}</span>
                      </div>
                    </div>

                    {/* Guest Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    {/* Dates & Guests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Check-in
                        </label>
                        <input
                          type="date"
                          name="checkIn"
                          required
                          value={formData.checkIn}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                          Check-out
                        </label>
                        <input
                          type="date"
                          name="checkOut"
                          required
                          value={formData.checkOut}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      >
                        {[...Array(selectedRoom.maxGuests)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} Guest{i + 1 > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                        Special Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        rows={2}
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Any special requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 sm:py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-sm sm:text-base transition-colors shadow-lg hover:shadow-amber-500/25"
                    >
                      Confirm Booking
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">🏝️</div>
                    <p className="text-gray-500">Please select a room to book</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Success Modal */}
      <AnimatePresence>
        {showBookingModal && selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={() => setShowBookingModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl p-5 sm:p-8 max-w-md w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-xl sm:text-2xl">✅</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Booking Confirmed!
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
                  Your stay at <strong className="line-clamp-1">{selectedRoom.name}</strong> has been successfully booked.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg text-sm sm:text-base transition-colors"
                  >
                    Done
                  </button>
                  <Link
                    href="/"
                    className="px-4 sm:px-6 py-2 sm:py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold rounded-lg text-sm sm:text-base transition-colors"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Add CSS for hiding scrollbars while allowing scrolling */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default BookNowPage;