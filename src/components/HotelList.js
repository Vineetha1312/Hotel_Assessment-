import React from 'react';
import { useQuery } from 'react-query';
import axiosInstance from '../axios';
import useStore from '../store/useStore';
import HotelCard from './HotelCard';
import BookingForm from './BookingForm';

// Fetch hotels from the JSON server using React Query
const HotelList = () => {
  const { data, isLoading, isError } = useQuery('hotels', async () => {
    const response = await axiosInstance.get('/hotels');
    return response.data;
  });

  const setSelectedHotel = useStore((state) => state.setSelectedHotel);

  const handleHotelClick = (id) => {
    setSelectedHotel(id); // Set selected hotel in Zustand
  };

  if (isLoading) return <div className="text-center">Loading hotels...</div>;
  if (isError) return <div className="text-center text-red-500">Error fetching hotels.</div>;

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Available Hotels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} onClick={handleHotelClick} />
        ))}
      </div>
      <BookingForm />
    </div>
  );
};

export default HotelList;
