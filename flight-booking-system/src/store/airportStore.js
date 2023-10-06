import axios from 'axios';
import { create } from 'zustand';

export const useAirportStore = create((set) => {
    return {
        airports: [],
        loadData: async () => {
            const { data } = await axios.get('/airports');

            set({ airports: data });
        }
    };
});