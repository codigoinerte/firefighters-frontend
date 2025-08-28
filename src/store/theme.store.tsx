import { create } from 'zustand';

interface ThemeStore {
    isDarkMode: boolean;
    setTheme : (isDarkMode: boolean) => void;
}

const getDefaultTheme = ():boolean => {
    return localStorage.getItem('isDarkMode') 
        ? Boolean(localStorage.getItem('isDarkMode')) : false;
}

export const themeStore = create<ThemeStore>()((set)=> ({
    isDarkMode: getDefaultTheme(),
    setTheme: (isDarkMode:boolean) => {
        set({
            isDarkMode
        });
        localStorage.setItem('isDarkMode', isDarkMode.toString())
    }
}))