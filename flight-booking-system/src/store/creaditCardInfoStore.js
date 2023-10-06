import axios from 'axios';
import { create } from 'zustand';

export const useCreaditCardInfoStore = create((set) => {
    return {
        creditCards: [],
        loadData: async (cardNumber) => {
            const { data } = await axios.get('/creditCard', { params: { cardNumber } });

            set({ creditCards: data });
        }
    };
});