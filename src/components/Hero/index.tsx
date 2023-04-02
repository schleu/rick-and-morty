import { Filter } from '../Filter'
import styles from './styles.module.css'
export function Hero(){
    return(
        <div className={styles.main}>
            <div className={styles.logo} />
            <div className={styles.filter} >
                <Filter />
            </div>
        </div>
    )
}