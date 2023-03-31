import Image from 'next/image';
import { useContext } from 'react';
import swr, { Fetcher } from 'swr';
import styles from './styles.module.css';

import { iCharacter } from '@/types';
import { useRouter } from 'next/router';
import starIcon from '../../../public/star.svg';
import starFilledIcon from '../../../public/starFilled.svg';
import maleIcon from '../../../public/male.svg'
import femaleIcon from '../../../public/female.svg'
import arrowLeftIcon from '../../../public/arrowLeft.svg'
import { Episode } from '@/components/Episode';
import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext';
import { ApiRoutes } from '@/contants/ApiRoutes';

export default function CharacterDetail(){
  const router = useRouter()
  const idCharacter = router.query.idCharacter as string
  const url = ApiRoutes.characterById.replace(':id',idCharacter)

  const fetcher:Fetcher<iCharacter> = (args:RequestInfo|URL)=>fetch(args).then(res=>res.json()) 
  const { data, isLoading } = swr(url,fetcher)

  const {handleFavoriteCharacter, favorites} = useContext(FavoriteCharacterContext)
  const isFavorite = favorites.find(e=>e === data?.id)
  

  return data ? (
    <main className={styles.main}>
      <div key={data.id} className={styles.card}>
        <Image src={data.image} alt="" width={300} height={300}/>
        <div className={styles.description}>
          <div className={styles.top}>
            <h3 className={styles.title}>{data.name}</h3>
            <div className={styles.favorite} onClick={()=>handleFavoriteCharacter(data.id)}>
              <Image src={isFavorite ? starFilledIcon : starIcon} alt="" width={40} height={40}  className={""}/>
            </div>
          </div>

          <div className={styles.data}>
            <p>{data.species} - {data.gender} <Image src={data.gender==='Female' ? femaleIcon : maleIcon} alt="" width={15} height={15} /> </p>
          </div>

          <div className={''}>
            <p className={styles.characterStatus}>
              <div className={styles.characterStatusPointer} />
              <p>{data.status}</p>
            </p>
            <div className={''}>
              <label htmlFor="">Last known location:</label>
              {data.location.name}
            </div>
          </div>

          <div className={''}>
            <div className={''}>
              <label htmlFor="">Tipo:</label>
              {data.type}
            </div>
            <div className={''}>
              <label htmlFor="">First seen in:</label>
              {data.origin.name}
            </div>
          </div>

          <div className={styles.episodes}>
              {data.episode.map(e=>
                <Episode key={e} urlEpisode={e} />
              )}
          </div>

        </div>
      </div>
    </main>
  ):null
}