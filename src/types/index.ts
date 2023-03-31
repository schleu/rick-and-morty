  
  export const status = ["Alive", "Dead", "unknown"] as const
  export type Status = typeof status[number];
  
  export const gender = ["Female", "Male", "Genderless",  "unknown"] as const
  export type Gender = typeof gender[number]
  
  export interface iCharacter  {
    "id": number,
    "name": string,
    "status": Status,
    "species": string,
    "type": string,
    "gender": Gender,
    "origin": {
        "name": string,
        "url": string,
    },
    "location": {
        "name": string,
        "url": string,
    },
    "image": string;
    "episode": string[],
    "url": string,
    "created": string,
  }

  export interface iFilterCharacter {
    name?:string;
    status?:Status;
    gender?:Gender;
    species?:string;
    type?:string;
  }

  interface iFilterEpisode{
    name:string;
    code: number;
  }


export  interface iFilter{
    page?:number;
    character?:iFilterCharacter;
    epsode?:iFilterEpisode
  }

export interface response {
    info:{
      "count": number,
      "pages": number,
      "next": string,
      "prev": string
  },
    results:iCharacter[]
  }



  export interface iEpisode{
    id:number;
    name:string;
    air_date:string;
    episode: string;
    characters: string[];
    url: string;
    created:string;
  }