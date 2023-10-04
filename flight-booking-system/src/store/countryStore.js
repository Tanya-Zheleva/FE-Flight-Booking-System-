import axios from 'axios';
import { create } from 'zustand';

export const useCountryStore = create((set) => {
    return {
        countries: [],
        loadData: async () => {
            const { data } = await axios('/countries');

            set({ countries: data });
        }
    };
});