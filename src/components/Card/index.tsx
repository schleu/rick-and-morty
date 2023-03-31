import { iCharacter } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext'
import classNames from 'classnames'
import femaleIcon from '../../../public/female.svg'
import maleIcon from '../../../public/male.svg'
import starIcon from '../../../public/star.svg'
import starFilledIcon from '../../../public/starFilled.svg'

import styles from './styles.module.css'

type Props = {
  character:iCharacter
}

export const Card = ({character}:Props) => {

  const {handleFavoriteCharacter, favorites} = useContext(FavoriteCharacterContext)
  const isFavorite = favorites.find(e=>e === character.id)

  const shortedName = `${character.name.split(' ')[0]} ${character.name.split(' ')[1]}`;

  return (
    <div className={styles.card}>
      <Link href={`/character/${character.id}`}>
        <Image src={character.image} alt="" width={200} height={150} priority={true}/>
      </Link>
      <div className={styles.cardDescription}>
        <div className={styles.cardTitle}>
          <h3>{shortedName}</h3>
          <div className={styles.favorite} onClick={()=>handleFavoriteCharacter(character.id)}>
            <Image src={isFavorite ? starFilledIcon : starIcon} alt="" width={20} height={20}  />
          </div>
        </div>
        <p>{character.species} - <Image src={character.gender==='Female' ? femaleIcon : maleIcon} alt="" width={10} height={10} /> {character.gender}</p>
        <p className={styles.characterStatus}>
          <span className={styles.characterStatusPointer} />
          <span>{character.status}</span>
        </p>
      </div>       
    </div>
  )
}


export const CardSkeleton = ()=>(
  <div className={classNames(styles.card)}>
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