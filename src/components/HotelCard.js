import React from 'react';

const HotelCard = ({ hotel, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
      onClick={() => onClick(hotel.id)}
    >
      <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-sm text-gray-500">{hotel.location}</p>
        <div className="flex justify-between mt-2">
          <span className="text-lg font-bold">${hotel.pricePerNight} / night</span>
          <span className="text-sm text-yellow-500">{hotel.rating} &#9733;</span>
        </div>
        <p className="text-sm mt-2">Available Rooms: {hotel.availableRooms}</p>
      </div>
    </div>
  );
};

export default HotelCard;
