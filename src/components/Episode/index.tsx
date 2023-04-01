import { iEpisode } from "@/types"
import { format } from "date-fns";
import swr,{ Fetcher } from "swr"
import styles from './styles.module.css';

type props={
    urlEpisode: string
}
export function Episode({urlEpisode}:props){

    const fetcher:Fetcher<iEpisode> = (args:RequestInfo|URL)=>fetch(args).then(res=>res.json()) 
    const { data } = swr(urlEpisode,fetcher)
    
    const formatedDate = format(new Date(data?.created||0),'dd/MM/yyyy')

    return data ? (
        <div className={styles.card}>
            <p data-testid="episode" className={styles.season}>{data?.episode}</p>
            <p data-testid="name" className={styles.name}>{data?.name}</p>
            <p data-testid="date" className={styles.date}>{formatedDate}</p>
        </div>
    ): (
        <div className={styles.card}>
            <p>Error loading episode data</p>
        </div>
    )

}