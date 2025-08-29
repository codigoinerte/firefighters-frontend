import { useRef } from 'react';
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import { themeStore } from '../../store/theme.store';
import MapaStyle from '../../helpers/MapaStyle';
import MapaStyleDark from '../../helpers/MapaStyleDark';
import { googleType, MapaProps } from '../../interface/MapaProps';
import './Mapa.css';
import { MapsDefault } from '../../helpers/MapsDefault';

const key = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
const containerStyle = {
  width: '100%',
  height: '100%'
};

export const Mapa = ({incidents, coordsPath, onRef}: MapaProps) => {

  const isDark = themeStore(state => state.isDarkMode);
  const mapRef = useRef<googleType>(null);
  onRef(mapRef.current);

  return (
    <>
        <LoadScript googleMapsApiKey={key}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={MapsDefault.center}
                zoom={MapsDefault.zoom}
                options={{
                    styles:isDark ? MapaStyleDark : MapaStyle,
                    mapTypeControl: false,
                    fullscreenControl: false,
                    streetViewControl:false
                }}
                onLoad={map => { mapRef.current = map; }}
                // onLoad={map => (mapRef.current = map)}
                
            >
                {
                  coordsPath.length > 0 &&
                  (
                    <Polygon path={coordsPath} 
                      options={{
                            strokeColor: '#FF0000',
                            strokeOpacity: 0.8,
                            strokeWeight: 2,
                            fillColor: '#FF0000',
                            fillOpacity: 0.2,
                            visible:true,
                            zIndex: 5
                          }}
                    />
                  )
                }

                {
                  incidents.map((incident)=> (
                    <Marker 
                      key={incident.nro} 
                      position={{lat: incident.address.coords.lat, lng: incident.address.coords.lng }} 
                      icon={'/images/marker.png'}
                      />
                  ))
                }
            </GoogleMap>
        </LoadScript>
    </>
  )
}
