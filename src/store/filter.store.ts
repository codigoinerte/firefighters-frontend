import { create } from 'zustand'
import { FilterSelectOption } from '../interface/FilterSelect';

interface FilterProps{
    isSearch: boolean;
    cities: FilterSelectOption[];
    city : string | null;
    states: FilterSelectOption [];
    state: string | null;

    setCity: (city: string | null) => void;
    setState: (state:string | null) => void;

    setCities: (cities:FilterSelectOption[]) => void;
    setStates: (states:FilterSelectOption[]) => void;
}

export const filterStore = create<FilterProps>()((set)=>({
    isSearch:false,
    city: null,
    cities: [],
    state: null,
    states: [],
    setCity: (city:string | null) => {
        set({city});
    },
    setState: (state:string | null) => {
        set({state});
    },
    setCities: (cities:FilterSelectOption[]) => {
        set({cities});
    },
    setStates: (states:FilterSelectOption[]) => {
        set({states});
    },
    setIsSearch : (isSearch:boolean) => {
        set({isSearch})
    }
}));