import {create} from 'zustand';

const useStore = create((set) => ({
  selectedHotel: null, // Store the selected hotel ID
  setSelectedHotel: (id) => set({ selectedHotel: id }), // Action to set selected hotel
}));

export default useStore;
