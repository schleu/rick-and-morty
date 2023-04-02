import { useContext } from 'react';
import swr, { Fetcher } from 'swr';

import { ListCard } from '@/components/ListCards';
import { ApiRoutes } from '@/contants/ApiRoutes';
import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext';
import { iCharacter } from '@/types';

import styles from './styles.module.css';
import { AppRoutes } from '@/contants/AppRoutes';
import { Title } from '../Title';

export function Favorites(){



    const {favorites} = useContext(FavoriteCharacterContext)

    const url = ApiRoutes.characters+favorites
    const fetcher:Fetcher<iCharacter[] | iCharacter> = (args: RequestInfo | URL) => fetch(args).then(res => res.json())
    const { data, isLoading } = swr(url,fetcher)

    const characters:iCharacter[] =  Array.isArray(data) ? data : data ? [data] : []

    const haveFavoriteCharacters = characters && characters.length && favorites.length 

    return  (
        <main className={styles.main} id={AppRoutes.FAVORITES}>
            <Title category='Personagens' description='Blá blá blá blá blá algum texto relevante!' title='Meus Favoritos' />
            <div className={styles.container}>
                {haveFavoriteCharacters ? (
                    <ListCard isLoading={isLoading} characters={characters} />
                ):(
                    "Sem personagem favorito."
                )}
            </div>
        </main>
    )
}