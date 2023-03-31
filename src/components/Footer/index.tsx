import Link from 'next/link'
import styles from './styles.module.css'

export function Footer(){
    return(
        <div className={styles.main}>
            Desenvolvidor por  <Link href={'https://www.linkedin.com/in/danilo-schleu/'}> @Danilo Schleu </Link>
        </div>
    )
}