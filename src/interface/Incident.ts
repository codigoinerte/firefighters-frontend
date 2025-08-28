export interface IncidentResponse {
    cities:    string[];
    incidents: Incident[];
    states:    string[];
}

export interface Incident {
    address: Address;
    date:    string;
    fila:    number;
    machine: string;
    map:     string;
    nro:     string;
    state:   string;
    type:    string;
}

export interface Address {
    city:         string;
    coords:       Coords;
    full_address: string;
}

export interface Coords {
    lat: number;
    lng: number;
}