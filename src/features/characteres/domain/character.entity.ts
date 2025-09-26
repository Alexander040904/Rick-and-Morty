import { Location } from "../../locations/domain/location.entity";
//Representa un objeto de Character
export interface Character{
    id: number,
    name: string,
    status:string,
    species: string,
    gender: string,
    origin:Location,
    location: Location,
    image: string,
}