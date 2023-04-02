import { useContext } from 'react';
import swr, { Fetcher } from 'swr';

import { ListCard } from '@/components/ListCards';
import { ApiRoutes } from '@/contants/ApiRoutes';
import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext';
import { iCharacter } from '@/types';

import styles from './styles.module.css';

export function Favorites(){



    const {favorites} = useContext(FavoriteCharacterContext)

    const url = ApiRoutes.characters+favorites
    const fetcher:Fetcher<iCharacter[] | iCharacter> = (args: RequestInfo | URL) => fetch(args).then(res => res.json())
    const { data, isLoading } = swr(url,fetcher)

    const characters:iCharacter[] =  Array.isArray(data) ? data : data ? [data] : []

    const haveFavoriteCharacters = characters && characters.length && favorites.length 

    return haveFavoriteCharacters ? (
        <main className={styles.main}>
        <ListCard isLoading={isLoading} characters={characters} />
        </main>
    ):(
        <main className={styles.main}>
        Sem personagem favorito.
        </main>
    )
}