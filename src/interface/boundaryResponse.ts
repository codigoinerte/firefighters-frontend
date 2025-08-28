export type coordinatesType = Array<number[]>;
export interface BoundaryResponse {
    data: Boundary;
}

export interface Boundary {
    coordinates: coordinatesType;
    department:  string;
    district:    string;
    id:          number;
    province:    string;
    ubigeo:      string;
}