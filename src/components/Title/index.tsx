import styles from './styles.module.css'

type Props={
    category:string;
    title: string;
    description:string;
}

export function Title({category, description, title}:Props){

    return(
        <div className={styles.main}>
            <div className={styles.category}>
                {category}
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.description}>
                {description}
            </div>
        </div>
    )
}