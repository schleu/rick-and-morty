import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.webp'
import styles from './styles.module.css'
import { AppRoutes } from '@/contants/AppRoutes'

export function Header(){

    return(
        <header className={styles.header}>
            <Link aria-label='Home' href={AppRoutes.HOME}>        
                <Image src={Logo} alt="" width={70} height={70}  />
            </Link>
            <div className={styles.navigation}>
                <Link aria-label='Home' href={AppRoutes.HOME}>
                    Home
                </Link>
                <Link aria-label='Favorites' href={`#${AppRoutes.FAVORITES}`}>
                    Favorites
                </Link>
                <Link aria-label='Contact' href={`#${AppRoutes.CONTACT}`}>
                    Contato
                </Link>
            </div>
        </header>
    )

}