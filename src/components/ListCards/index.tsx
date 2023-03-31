import { iCharacter } from "@/types"
import { Card, CardSkeleton } from "../Card"
import styles from './styles.module.css'
type Props={
    characters: iCharacter[],
    isLoading?: boolean
}

export function ListCard({characters, isLoading}:Props){
    return(
        <div className={styles.description}>
          {isLoading || !characters ? 
            Array(20).fill('').map((_,i)=><CardSkeleton key={i}/>)
            :
            characters.map(character=>(
              <Card key={character.id} character={character} />
            ))  
          }
        </div>
    )
}