import axios from 'axios';
import { create } from 'zustand';

export const useIdentificationDocumentInfoStore = create((set) => {
    return {
        documentInfo: [],
        loadData: async (id) => {
            const { data } = await axios.get('/identificationDocument', { params: { identificationNumber: id } });

            set({ documentInfo: data });
        }
    };
});