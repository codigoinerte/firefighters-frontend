import { FilterSelectOption } from "./FilterSelect";

export type filterValue = string | null;

export interface SearchProps {
    shouldSearch: boolean;
    isLoading: boolean;
    cities: FilterSelectOption[];
    city : filterValue;
    states: FilterSelectOption [];
    state: filterValue;
}