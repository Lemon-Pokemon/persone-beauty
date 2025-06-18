
import styles from "./footer.module.scss";

export default function Footer() {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.ticker}>
                    <h1>
                        LET`S TALK.
                    </h1>
                    <h1>
                        LET`S TALK.
                    </h1>
                    <h1>
                        LET`S TALK.
                    </h1>
                </div>

                <div className={styles.footer_block}>
                    <div className={styles.col}>
                        <div className={styles.img}>
                            <img src={require("assets/img/avatar.png")} alt="" />
                        </div>
                    </div>
                    <div className={styles.col}>
                        <p className={styles.title}>
                            Meet Tamila
                        </p>
                        <p className={styles.descr}>
                            Founder of Persona Beauty Academy
                        </p>
                        <p className={styles.quote}>
                            «My mission is to show as many girls as possible that you can do what you love and earn decent money»
                        </p>
                    </div>
                </div>
                <div className={styles.footer_block}>
                    <div className={styles.col}>
                        <a href="#">
                            Learn, Earn, Stabilize
                        </a>
                        <a href="#">
                            Student Experience
                        </a>
                        <a href="#">
                            Certified Classes
                        </a>
                    </div>
                    <div className={styles.col}>
                        <span>
                            +96414000432
                        </span>
                        <span>
                            personabeautyacademy@email.com
                        </span>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p className={styles.copyright_item}>
                        Persona Beauty Academy.
                    </p>
                    <p className={styles.copyright_item}>
                        Privacy Policy
                    </p>
                    <p className={styles.copyright_item}>
                        New Jersey
                    </p>
                    <p className={styles.copyright_item}>
                        2025
                    </p>
                </div>
            </div>
        </footer>
    )
}