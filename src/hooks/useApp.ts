import { useMap } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
import { api } from "../api/base";
import { 
        BoundaryResponse, 
        coordinatesType ,
        FilterSelectOption, 
        filterValue, 
        Incident, 
        IncidentResponse, 
        latlng, 
        SearchProps, 
} from "../interface";
import { MapsDefault, getParams, setHistoryUpdate } from "../helpers";
import { menuStore } from "../store/menu.store";

export const useApp = () => {

    const map = useMap('mapa');
    const { paramsUrl } = getParams();
    const [coordsPath, setCoordsPath] = useState<latlng[]>([])
    const [incidents, setIncidents] = useState<Incident[]>([])

    const setActiveMenu = menuStore(state => state.setActive);

    const [filterState, setFilterState] = useState<SearchProps>({
        cities: [],
        states: [],
        city: paramsUrl?.city ?? null,
        state: paramsUrl?.state ?? null,
        shouldSearch: false,
        isLoading: false
    });

    const getBoundary = async (city: filterValue): Promise<coordinatesType | null> => {
        if(!city) return null;

        try {
            const response = await api.post<BoundaryResponse>('boundary', {district:city});
            return response.data.data.coordinates ?? [];                    
        } catch (error) {
            console.error(error);
            return [];
        }
    }

    const getBoundaryCenter = (markers: number[][]) => {
        let lat = 0;
        let lng = 0;
    
        for(let i = 0; i < markers.length; ++i) {
            lat += markers[i][1];
            lng += markers[i][0];
        }

        lat /= markers.length;
        lng /= markers.length;

        return {lat: lat, lng: lng}
    };

    const processBoundaryApi = async () => {
        const coords = await getBoundary(filterState.city);

        if(coords && coords?.length > 0){
            const center = getBoundaryCenter(coords);
            const coordsFilter = coords.map((item:number[])=> ({lat: item[1] ?? '', lng: item[0] ?? ''}));
            setCoordsPath(coordsFilter);
            map?.panTo(center);
        }else{
            setCoordsPath([]);
            map?.panTo(MapsDefault.center);
            map?.setZoom(MapsDefault.zoom);
        }
    }
    const getIncidents = async () => {

        setFilterState(ps => ({...ps, isLoading: true}));
        setIncidents([]);

        const data = {
            ...(filterState.city && filterState.city?.length > 0 ? {city: filterState.city}: {}),
            ...(filterState.state && filterState.state?.length > 0 ? {state: filterState.state}: {}),
        };
        
        setHistoryUpdate({
            "city": filterState.city,
            "state": filterState.state
        })

        const response = await api.post<IncidentResponse>('data', data);
        
        setIncidents(response.data.incidents ?? []);

        const cities: FilterSelectOption[] = response.data.cities
                        .filter((item) => !item.includes("."))
                        .map((item) => ({value:item, label:item }));
        const states: FilterSelectOption[] = response.data.states.map((item) => ({value:item, label:item }));

        setFilterState(ps => ({...ps, cities, states, isLoading: false, shouldSearch: false }));        
    }

    const main = async ()=>{
        try {
            await Promise.all([getIncidents(), processBoundaryApi()]);            
        } catch (error) {            
            console.warn(error);
        }
    }

    useEffect(() => {
      main();
      // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        if(filterState.shouldSearch && !filterState.isLoading){
            main()
        }
        // eslint-disable-next-line
    }, [filterState.city, filterState.state, filterState.shouldSearch]);

    const handleSubmit = ()=>{
        setFilterState(ps => ({...ps, shouldSearch: true }));
        setActiveMenu(false);
    }

    const handleClear = async ()=>{
        setFilterState(ps => ({...ps, city: '', state: '', shouldSearch: true }));
        map?.panTo(MapsDefault.center);
        map?.setZoom(MapsDefault.zoom);
        setCoordsPath([]);
        setActiveMenu(false);
    }

    const handleChangeCity = (value: filterValue)=>{
        setFilterState(ps => ({...ps, city: value }));        
    }
    const handleChangeState = (value: filterValue)=>{
        setFilterState(ps => ({...ps, state: value }));
    }
    
    return {
        // properties
        filterState,
        incidents,
        coordsPath,  
        // methods      
        handleSubmit,
        handleClear,
        handleChangeCity,
        handleChangeState,

        //
        displayLoading: filterState.isLoading ? 'flex' : 'none'
    }
}
