import axios from 'axios';
import { create } from 'zustand';

export const useTicketStore = create((set) => {
    return {
        tickets: [],
        loadData: async () => {
            const { data } = await axios.get('/tickets');

            set({ tickets: data });
        }
    };
});