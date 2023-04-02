import Link from 'next/link'
import styles from './styles.module.css'
import { Contact } from '../Contact'
import {DiGithub } from 'react-icons/di'
import { IoLogoLinkedin } from 'react-icons/io'

export function Footer(){
    return(
        <>
            <Contact />
            <div className={styles.main}>
                <div className={styles.socialMedia}>
                    <a href={'https://www.linkedin.com/in/danilo-schleu/'} target={"_blank"}>    
                        <IoLogoLinkedin className={styles.icone}/>
                    </a>
                    <a href={'https://github.com/schleu/'} target={"_blank"}>    
                        <DiGithub  className={styles.icone}/>
                    </a>
                </div>
            </div>
        </>
    )
}