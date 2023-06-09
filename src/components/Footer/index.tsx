import Link from 'next/link'
import styles from './styles.module.css'
import { Contact } from '../Contact'
import {DiGithub } from 'react-icons/di'
import { IoLogoLinkedin } from 'react-icons/io'

export function Footer(){
    return(
        <div className={styles.main}>
            <Contact />
            <div className={styles.footer}>
                <div className={styles.socialMedia}>
                    <a href={'https://www.linkedin.com/in/danilo-schleu/'} target={"_blank"}>    
                        <IoLogoLinkedin className={styles.icone}/>
                    </a>
                    <a href={'https://github.com/schleu/rick-and-morty'} target={"_blank"}>    
                        <DiGithub  className={styles.icone}/>
                    </a>
                </div>
            </div>
        </div>
    )
}