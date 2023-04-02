import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { FavoriteCharacterContext } from '../../context/FavoritesCharactersContext'
import { iCharacter } from '../../types/index'

import { FavoriteButton } from '../FavoriteButton'
import styles from './styles.module.css'

type Props = {
  character:iCharacter
}

export const Card = ({character}:Props) => {

  const {favorites} = useContext(FavoriteCharacterContext)
  const isFavorite = favorites.find(e=>e === character.id)

  const shortedName = `${character.name.split(' ')[0]} ${character.name.split(' ')[1]}`;

  return (
    <div className={styles.card}  data-testid="card">
      
      <Link href={`/character/${character.id}`}>
        <Image src={character.image} alt="" width={235} height={246} priority={true}/>
      </Link>
      <div className={styles.favoriteButton}>
        <FavoriteButton characterId={character.id} isFavorite={Boolean(isFavorite)} />
      </div>
      <div className={styles.cardDescription}>
        <div className={styles.cardName}>
          <h3>{shortedName}</h3>
          {/* <FavoriteButton isFavorite={Boolean(isFavorite)} characterId={character.id} /> */}
        </div>
        
      <div className={styles.tags}>
        <div className={styles.tag}>{character.gender}</div>
        
        <div className={styles.tag}>{character.status}</div>

        <div className={styles.tag}>{character.species}</div>
      </div>

      </div>       
    </div>
  )
}


export const CardSkeleton = ()=>(
  <div className={classNames(styles.card)}  data-testid="card-skeleton">
    <div className={classNames(styles.cardSkeletonImage,styles.skeleton)}></div>
    <div className={styles.cardDescription}>
          <div className={styles.cardTitle}>
            <h3 className={classNames(styles.skeleton,styles.cardSkeletonTitle)}></h3>
            <div className={classNames(styles.cardSkeletonFavorite,styles.skeleton)}></div>
          </div>
          <p className={classNames(styles.cardSkeletonStatus, styles.skeleton)}></p>
          <p className={classNames(styles.characterStatus,styles.skeleton)}>
            <span className={classNames(styles.characterStatusPointer,styles.skeleton)} />
          </p>
        </div>
  </div>
)