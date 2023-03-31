import { localStorageKeys } from '@/contants'
import {FavoriteCharacterContext} from '@/context/FavoritesCharactersContext'
import {ReactNode, useState, useEffect} from 'react'
import { useLocalStorage } from 'react-use'

type Props = {
    children: ReactNode
}

export function FavoritesCharactersProvider({children}:Props){
    
    const [favoritesLS] = useLocalStorage<number[]>(localStorageKeys.FAVORITES);
    const [favorites, setFavorites] = useState<number[]>(favoritesLS || [])

    useEffect(()=>{
        localStorage.setItem(localStorageKeys.FAVORITES ,JSON.stringify(favorites))
    },[favorites])

    const handleFavoriteCharacter = (id:number) => {
        const isFavorite = favorites.find(e=> e === id)

        if(!isFavorite){
            setFavorites(prev => [...prev, id])
        } else{
            removeFavorite(id)
        }
    }

    const removeFavorite = (id:number) => {
        const newFavorites = favorites.filter(e=> e !== id)
        setFavorites(newFavorites)
    }

    return <FavoriteCharacterContext.Provider value={{
        favorites:favorites,
        handleFavoriteCharacter,
    }}>
        {children}
    </FavoriteCharacterContext.Provider>
}