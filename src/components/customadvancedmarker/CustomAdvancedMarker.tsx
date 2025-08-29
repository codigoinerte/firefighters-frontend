import { AdvancedMarker } from "@vis.gl/react-google-maps"
import classNames from "classnames";
import { useState } from "react";
import { CustomPin } from "../custompin/CustomPin";
import { Incident } from "../../interface/Incident";

interface CustomAdvanceMarkerProps {
    position : google.maps.LatLng | google.maps.LatLngLiteral | null | undefined
    incident: Incident
}
export const CustomAdvancedMarker = ({position, incident}: CustomAdvanceMarkerProps) => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    // 
    return (
        <>
            <AdvancedMarker
                position={position}
                title={'AdvancedMarker with custom html content.'}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={classNames('iconmarker', {clicked, hovered})}
                onClick={(e) =>{
                    const target = e.domEvent.target as HTMLElement;
                    if(target!.classList.value.includes('open-linnk')) return;
                    setClicked(!clicked);
                }}>
                <CustomPin position={position} incident={incident}/>
            </AdvancedMarker>
        </>
    )
}
