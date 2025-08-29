import { AddCircleHalfDotIcon, Calendar03Icon, Fire03Icon, Location04Icon, ToggleOffIcon } from '@hugeicons/core-free-icons';
import { Icons } from '../Icons';
import './CustomPin.css';
import { Incident } from '../../interface/Incident';

interface CustomPinProps {
   position: google.maps.LatLng | google.maps.LatLngLiteral | null | undefined,
   incident: Incident
}
const KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const CustomPin = ({position, incident}:CustomPinProps) => {

    const image = (position?.lat && position?.lng) 
    ? `https://maps.googleapis.com/maps/api/streetview?size=600x400&location=${position?.lat},${position?.lng}&key=${KEY}`
    : `/images/pin-preload.jpg`
    return (
        <>
            <div className='custom-pin'>
                <div className='image-container'>
                    <div className="photo">
                        <img src={image} alt="Imagen de la ubicación por latitud y longitud" width={30} height={30}/>
                    </div>
                    <div className="icon">
                        <Icons icon={Fire03Icon} color='#fff' size={30} fill='#000'/>
                    </div>
                </div>
                <div className="details-container">
                    <b className='title'>{incident.type}</b>
                    <ul>
                        <li><Icons icon={Calendar03Icon} /> <p>{incident.date}</p></li>
                        <li><Icons icon={Location04Icon} /> <p>{incident.address.full_address}</p></li>
                        <li><Icons icon={AddCircleHalfDotIcon} /> <p>{incident.nro}</p></li>
                        <li><Icons icon={ToggleOffIcon} /> <p>{incident.state}</p></li>
                        <li><a className='open-linnk' target='_blank' href={`https://sgonorte.bomberosperu.gob.pe/24horas/Home/Map?numparte=${incident.nro}`}>Abrir en pagina oficial</a></li>
                    </ul>
                </div>
            </div>
            <div className="tip" />
        </>
    )
}
