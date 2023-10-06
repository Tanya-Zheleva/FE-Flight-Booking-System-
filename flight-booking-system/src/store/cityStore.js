import axios from 'axios';
import { create } from 'zustand';

export const useCityStore = create((set) => {
    return {
        cities: [],
        loadData: async () => {
            const { data } = await axios.get('/cities');

            set({ cities: data });
        }
    };
});