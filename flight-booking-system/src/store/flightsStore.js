import axios from 'axios';
import { create } from 'zustand';

export const useFlightsStore = create((set) => {
    return {
        flights: [],
        loadData: async () => {
            const { data } = await axios.get('/flights');

            set({ flights: data });
        }
    };
});