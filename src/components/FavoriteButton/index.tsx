import Image from "next/image";
import { useContext } from "react";

import { FavoriteCharacterContext } from "@/context/FavoritesCharactersContext";

import starIcon from '../../../public/star.svg'
import starFilledIcon from '../../../public/starFilled.svg'

import styles from './styles.module.css'


type Props={
    isFavorite: boolean;
    characterId: number;
}
export function FavoriteButton({isFavorite, characterId}:Props){

    const {handleFavoriteCharacter} = useContext(FavoriteCharacterContext)

    return(
        <button  type='button' className={styles.favorite} onClick={()=>handleFavoriteCharacter(characterId)}>
            <Image src={isFavorite ? starFilledIcon : starIcon} alt="" width={20} height={20}  />
        </button>
    )
}