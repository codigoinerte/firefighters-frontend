import { Incident } from "./Incident";

export interface latlng { 
    lat: number, 
    lng: number 
}

export type googleType = google.maps.Map | null;

export interface MapaProps {
    incidents: Incident[];
    coordsPath: latlng[];
    onRef: (google: googleType) => void;
}
export interface MapaAdvanceProps {
    incidents: Incident[];
    coordsPath: latlng[];
}