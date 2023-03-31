
import { createContext } from "react";

type iFavoriteCharacter = {
    favorites: number[],
    handleFavoriteCharacter: (n:number)=> void,
}

export const FavoriteCharacterContext = createContext<iFavoriteCharacter>({
    favorites:[],
    handleFavoriteCharacter: ()=>{},
})