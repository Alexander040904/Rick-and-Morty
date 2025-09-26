import { Episode } from "../domain/episode.entity";

type ApiResponse = {
    info:{
        count: number,
        peges: 3,
        next: string | null,
        prev: string | null
    },
    results: Episode[],
    
}

export async function fetchEpisode(page:number): Promise<ApiResponse>{
    const url = `https://rickandmortyapi.com/api/episode/?page=${page}`;

    const response = await fetch(url);
    const data = await response.json();
    //Convertir data a Character[]
    //mapper
    return data;
}