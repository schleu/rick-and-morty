import { iEpisode } from "@/types"
import { format } from "date-fns";
import swr,{ Fetcher } from "swr"
import styles from './styles.module.css';

type props={
    urlEpisode: string
}
export function Episode({urlEpisode}:props){


    const fetcher:Fetcher<iEpisode> = (args:RequestInfo|URL)=>fetch(args).then(res=>res.json()) 
    const { data, isLoading } = swr(urlEpisode,fetcher)
    
    const formatedDate = format(new Date(data?.created||0),'dd/MM/yyyy')

    return(
        <div className={styles.card}>
            <p className={styles.season}>{data?.episode}</p>
            <p className={styles.name}>{data?.name}</p>
            <p className={styles.date}>{formatedDate}</p>
        </div>
    )

}