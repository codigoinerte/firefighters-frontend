import { Map } from '@vis.gl/react-google-maps'
import { MapaAdvanceProps } from '../../interface/MapaProps';
import { MapsDefault } from '../../helpers/MapsDefault';
import { themeStore } from '../../store/theme.store';
import { Polygon } from '../Polygon';
import { CustomAdvancedMarker } from '../customadvancedmarker';
import './MapaAdvance.css';

const idDark = import.meta.env.VITE_GOOGLE_MAPS_ID_DARK;
const idLight = import.meta.env.VITE_GOOGLE_MAPS_ID_LIGHT;

export const MapaAdvance = ({incidents, coordsPath}: MapaAdvanceProps) => {

    const isDark = themeStore(state => state.isDarkMode);
        
    return (
        <>    
        
            <Map
                id={'mapa'}
                mapId={ isDark ? idDark : idLight}
                defaultCenter={MapsDefault.center}
                defaultZoom={MapsDefault.zoom}
                mapTypeControl={false}
                fullscreenControl={false}
                streetViewControl={false}
                gestureHandling={'greedy'}
                className='mapa'
            >
                {
                    coordsPath.length > 0 &&
                    (
                        <Polygon 
                            paths={coordsPath}
                            strokeColor={"#FF0000"}
                            strokeOpacity={0.8}
                            strokeWeight={2}
                            fillColor={"#FF0000"}
                            fillOpacity={0.2}
                        />
                    )
                }
                {
                    incidents.length > 0 &&    
                        incidents.map((incident)=> (
                        <CustomAdvancedMarker 
                            key={incident.nro} 
                            position={{lat: incident.address.coords.lat, lng: incident.address.coords.lng }}
                            incident={incident}
                            />
                        ))
                }  
            </Map>
        </>
    )
}
