import Image from 'next/image';
import { useContext } from 'react';
import swr, { Fetcher } from 'swr';
import styles from './styles.module.css';
import { BiArrowBack } from 'react-icons/bi'

import { Episode } from '@/components/Episode';
import { ApiRoutes } from '@/contants/ApiRoutes';
import { FavoriteCharacterContext } from '@/context/FavoritesCharactersContext';
import { iCharacter } from '@/types';
import { useRouter } from 'next/router';
import starIcon from '../../../public/star.svg';
import starFilledIcon from '../../../public/starFilled.svg';
import { Title } from '@/components/Title';
import Link from 'next/link';
import { AppRoutes } from '@/contants/AppRoutes';

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

      <div className={styles.back}>
          <Link href={AppRoutes.HOME} aria-label='Back to home'>
            <BiArrowBack />
            Voltar
          </Link>
      </div>
      <Title category='Personagem' title={data.name} description='Mais informações desse personagem!'/>
      <div key={data.id} className={styles.card}>
        <div className={styles.information}>
          <Image className={styles.profile} src={data.image} alt="" width={300} height={300}/>
          <div className={styles.description}>
            <div className={styles.top}>
              <h3 className={styles.title}>{data.name}</h3>
              <div className={styles.favorite} onClick={()=>handleFavoriteCharacter(data.id)}>
                <Image src={isFavorite ? starFilledIcon : starIcon} alt="" width={40} height={40}  className={""}/>
              </div>
            </div>

            <div className={styles.info}>
              <label htmlFor="">Especie:</label>
              {data.species}
            </div>
            
            <div className={styles.info}>
              <label htmlFor="">Gender:</label>
              {data.gender}
            </div>
            
            <div className={styles.info}>
              <label htmlFor="">First seen in:</label>
              {data.origin.name}
            </div>
            
            <div className={styles.info}>
              <label htmlFor="">Last known location:</label>
              {data.location.name}
            </div>

            <div className={styles.info}>
              <label htmlFor="">Status: </label>
              <div className={styles.characterStatusPointer} />
              <p>{data.status}</p>
            </div>
            
            <div className={styles.info}>
              <label htmlFor="">Tipo:</label>
              {data.type}
            </div>
            
          </div>
        </div>

        <div className={styles.episodes}>
            {data.episode.map(e=>
              <Episode key={e} urlEpisode={e} />
            )}
        </div>
      </div>
      
    </main>
  ):null
}