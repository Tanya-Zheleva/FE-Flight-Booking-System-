import { create } from 'zustand';

export const useUserStore = create((set) => {
    return {
        users: [],
        activeUser: null,
        setActiveUser: (activeUser) => set(() => ({ activeUser }))
    };
});