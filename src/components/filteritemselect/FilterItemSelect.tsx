import { Icons } from "../Icons"
import { IconSvgElement } from "@hugeicons/react";
import { FilterSelectOption, FilterSelectProps } from "../../interface/FilterSelect";
import "./FilterItemSelect.css"
import { filterValue } from "../../interface/Search";

interface FilterItemProps {
    icon: IconSvgElement
    label: string,
    selectProps : FilterSelectProps,
    placeholder?: string;
    options: FilterSelectOption[];
    value: filterValue;
}

export const FilterItemSelect = ({icon, label, placeholder, options, selectProps, value = ''}: FilterItemProps) => {
  
  return (
    
    <div className='filter-item'>
        <label htmlFor='filter-location'>
            <Icons icon={icon} />
            {label}
        </label>
        
            
          <select {...selectProps} value={value??''}>
            {placeholder && <option value="">{placeholder}</option>}
            {options.sort((a, b) => a.label.localeCompare(b.label)).map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
    </div>
    
  )
}
