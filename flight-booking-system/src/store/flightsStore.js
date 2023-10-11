import axios from 'axios';
import { create } from 'zustand';

export const useFlightsStore = create((set) => {
    return {
        flights: [],
        activeFlightBooking: null,
        loadData: async () => {
            const { data } = await axios.get('/flights');

            set({ flights: data });
        },
        searchFlights: async (searchData) => {
            axios.post('/search', searchData)
                .then((response) => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        setActiveFlightBooking: (activeFlightBooking) => set(() => ({ activeFlightBooking }))
    };
});