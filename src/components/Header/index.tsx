import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/logo.png'
import styles from './styles.module.css'

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
                <Link href={'/favorites'}>
                    My Favorites
                </Link>
            </div>
        </header>
    )

}