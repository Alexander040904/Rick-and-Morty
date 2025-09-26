//Funcion para traer los personajes desde la API

import { Character } from "../domain/character.entity";

type ApiResponse = {
    info:{
        count: number,
        peges: 42,
        next: string | null,
        prev: string | null
    },
    results: Character[],
    
}

export async function fetchCharacters(page:number): Promise<ApiResponse>{
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    const response = await fetch(url);
    const data = await response.json();
    //Convertir data a Character[]
    //mapper
    return data;
}