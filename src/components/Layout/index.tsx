import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './styles.module.css'
import Logo from '../../../public/logo.webp'
import Link from 'next/link'
import { Footer } from '../Footer'
import { Header } from '../Header'

export function Layout({children}:{children:ReactNode}){
    return(
        <div className={styles.main}>
            <Header />
            <div className={styles.body}>
                {children}
            </div>
            <Footer />
        </div>
    )

}