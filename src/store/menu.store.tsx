import { create } from 'zustand'

interface MenuStore {
    isActive: boolean,
    setActive : (isActive: boolean) => void;
}

export const menuStore = create<MenuStore>()((state)=>({
    isActive: false,
    setActive : (isActive: boolean) => {
        state({isActive});
    }

}));