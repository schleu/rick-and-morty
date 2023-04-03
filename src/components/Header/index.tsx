import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.webp'
import styles from './styles.module.css'
import { AppRoutes } from '@/contants/AppRoutes'

export function Header(){

    return(
        <header className={styles.header}>
            <Link href={'/'}>        
                <Image src={Logo} alt="" width={70} height={70}  />
            </Link>
            <div className={styles.navigation}>
                <Link href={'/'}>
                    Home
                </Link>
                <Link href={`#${AppRoutes.FAVORITES}`}>
                    Favorites
                </Link>
                <Link href={`#${AppRoutes.CONTACT}`}>
                    Contato
                </Link>
            </div>
        </header>
    )

}