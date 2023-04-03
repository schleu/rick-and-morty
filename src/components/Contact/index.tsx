import { AppRoutes } from '@/contants/AppRoutes'
import styles from './styles.module.css'

export function Contact(){

    const socialMedia = {
        portfolio: "https://portfolio-danilo-schleu.netlify.app/#contact",
        curriculum: "https://portfolio-danilo-schleu.netlify.app/CV_Danilo_Schleu.pdf"
    }
    

    return(
        <div className={styles.main} id={AppRoutes.CONTACT}>
            <div className={styles.card}>
                <h2>Sobre o desenvolvedor</h2>
                <div className={styles.buttons}>
                    <a href={socialMedia.portfolio} aria-label='Portifólio' target='_blank'>
                        <button aria-label='My portfolio' title="My portfolio" className={styles.buttonFilled}>Portfólio</button>
                    </a>
                    <a href={socialMedia.curriculum} aria-label='Curriculum' target='_blank'>
                        <button aria-label='Download CV' title="Download CV" className={styles.buttonFill}>Download CV</button>
                    </a>
                </div>
            </div>
        </div>
    )
}