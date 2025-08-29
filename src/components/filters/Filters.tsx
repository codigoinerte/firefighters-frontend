import { Cancel01Icon, FilterHorizontalIcon, Location01Icon, MapsRefreshIcon, Search01Icon, ToggleOffIcon } from '@hugeicons/core-free-icons';
import { FilterItemSelect } from '../filteritemselect';
import { menuStore } from '../../store/menu.store';
import { Icons } from '../Icons';
import './Filters.css';
import { FilterSelectOption } from '../../interface/FilterSelect';
import { filterValue } from '../../interface/Search';

interface Props {
  cities: FilterSelectOption[];
  states: FilterSelectOption[];

  city: filterValue;
  state: filterValue;

  onChangeCity: (value: filterValue) => void;
  conChangeState: (value: filterValue) => void;

  onSubmit: () => void;
  onClear: () => void;
}

export const Filters = ({ onSubmit, onClear, onChangeCity, conChangeState, cities, states, city, state }: Props) => {
    const isActive = menuStore(state => state.isActive );
    const setActive = menuStore(state => state.setActive);

    const onCloseMenu = () => {
      setActive(!isActive);
    }
    
    return (
      <>
      <div className={`filters ${isActive ? 'active' : ''}`}>
          <div className="header" onClick={onCloseMenu}>
              <h3><Icons icon={FilterHorizontalIcon} />Filters</h3>

              <button><Icons icon={Cancel01Icon}/></button>
          </div>
          <div className="body">
            <FilterItemSelect
              key={"cities"} 
              icon={Location01Icon} 
              label='Location (district)'
              placeholder='Select an option'
              selectProps={{
                onChange : (event) => {
                  onChangeCity(event.target.value ?? null);
                }
              }}
              options={cities}
              value={city} />
              
            <FilterItemSelect 
              key={"states"}
              icon={ToggleOffIcon} 
              label='State'
              placeholder='Select an option'
              selectProps={{
                onChange : (event) => {
                  conChangeState(event.target.value ?? null);
                }
              }}
              options={states}
              value={state} />
              <div className='buttons'>
                <button onClick={onSubmit} className='primary'><Icons icon={Search01Icon} color='#fff' />Filter</button>
                <button onClick={onClear}><Icons icon={MapsRefreshIcon} color='#374151'/>Clear</button>
              </div>
          </div>
      </div>
      <div className='backdrop'></div>
      </>
    )
}
