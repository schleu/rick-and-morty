import styles from './styles.module.css'

export function Contact(){



    return(
        <div className={styles.main}>
            <div className={styles.card}>
                <h2>Lorem impsun dolor</h2>
                <div className={styles.buttons}>
                    <button  className={styles.buttonFilled}>Contact Me</button>
                    <button  className={styles.buttonFill}>Download CV</button>
                </div>
            </div>
        </div>
    )
}