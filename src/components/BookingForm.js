import React, { useState } from 'react';
import axiosInstance from '../axios';
import useStore from '../store/useStore';

const BookingForm = () => {
  const [guestName, setGuestName] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const selectedHotel = useStore((state) => state.selectedHotel);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedHotel || !guestName || !checkInDate || !checkOutDate) {
      alert('Please fill in all fields.');
      return;
    }

    const bookingData = {
      hotelId: selectedHotel,
      guestName,
      checkInDate,
      checkOutDate,
    };

    try {
      await axiosInstance.post('/bookings', bookingData);
      alert('Booking Successful!');
    } catch (error) {
      alert('Failed to book the hotel.');
    }
  };

  if (!selectedHotel) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-red-500">Please select a hotel to book.</p>
      </div>
    );
  }

  return (
    <form className="bg-white p-6 rounded-lg shadow-md mt-8" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold text-center mb-4">Book a Hotel</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-lg font-semibold" htmlFor="guestName">
            Guest Name
          </label>
          <input
            type="text"
            id="guestName"
            className="w-full p-3 border rounded-lg"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="checkInDate">
            Check-in Date
          </label>
          <input
            type="date"
            id="checkInDate"
            className="w-full p-3 border rounded-lg"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-lg font-semibold" htmlFor="checkOutDate">
            Check-out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            className="w-full p-3 border rounded-lg"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg mt-4 hover:bg-blue-700"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
