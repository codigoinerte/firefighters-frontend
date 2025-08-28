import { create } from 'zustand';

interface UserInterface {
    name: string;
    setName: (name:string) => void;
}

const getDefaultUser = ():string => {
    return (localStorage.getItem('user') ?? 'welcome').toString();
}

export const authStore = create<UserInterface>()((set) => ({
    name: getDefaultUser(),
    setName: (name:string) => {
        set({ name });
    }
}));