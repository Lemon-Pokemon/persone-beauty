
import styles from "./founder.module.scss";

export default function Founder() {
    return (
        <section className={styles.founder}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.founder_title}>
                        <span>Meet Tamila</span> THE FOUNDER OF PERSONA BEAUTY ACADEMY
                    </div>
                    <div className={styles.quote}>
                        «My mission is to show as many girls as possible that you can do what you love and earn decent money»
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={require("assets/img/founder.png")} alt="" />
                    
                </div>
                <div className={styles.right}>
                    <div className={styles.right_wrapp}>
                        <p className={styles.descr}>
                            Over 20 years in the beauty industry:
                        </p>
                        <p className={styles.descr}>
                            1999-2001 studied esthetician at The Lia Schorr Institute, Manhattan, NY
                        </p>
                        <p className={styles.descr}>
                            2008-2010 studied cosmetology at Empire Beauty Schools, Pittsburgh, PA
                        </p>
                        <p className={styles.descr}>
                            2019 studied as a beauty imagemaker at American Women’s Coaching Academy, Miami, FL
                        </p>
                        <p className={styles.descr}>
                            Philip Pelusi Salons team member in the past. She gained invaluable experience from one of the top US stylists Philip Pelusi
                        </p>
                        <p className={styles.descr}>
                            The founder of salon @personabeautyspa in PA since 2012
                        </p>
                        <p className={styles.descr}>
                            Trained over 100 students since 2020
                        </p>
                        <p className={styles.descr}>
                            Her students earn $48,000 and up per WEEK right from the start
                        </p>
                        <p className={styles.descr}>
                            Each of her training includes an extensive block on marketing, earnings and sales
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}