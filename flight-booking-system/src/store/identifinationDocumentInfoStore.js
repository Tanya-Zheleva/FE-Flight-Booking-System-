import axios from 'axios';
import { create } from 'zustand';

export const useIdentificationDocumentInfoStore = create((set) => {
    return {
        creditCards: [],
        loadData: async (id) => {
            const { data } = await axios.get('/identificationDocument', { params: { identificationNumber: id } });

            set({ creditCards: data });
        }
    };
});