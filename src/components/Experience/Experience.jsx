
import styles from "./experience.module.scss";

export default function Experience() {
    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.title}>
                    Student Experience
                </h2>

                <div className={styles.table}>
                    <div className={styles.table_head}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                NAME
                            </div>
                            <div className={styles.col}>
                                What the student has achieved
                            </div>
                            <div className={`${styles.col} ${styles.descr}`}>
                                What do our students say?
                            </div>
                            <div className={styles.col}>
                                course name
                            </div>
                        </div>
                    </div>
                    <div className={styles.table_body}>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <span>
                                    Lollita Shmakova
                                </span>
                                <div className={styles.img}>
                                    <img src={require("assets/img/student-avatar.png")} alt="" />
                                </div>
                            </div>
                            <div className={styles.col}>
                                $55,000 in 1 month
                            </div>
                            <div className={`${styles.col} ${styles.descr}`}>
                                Hey girl! Just wanted to say a huge thank you for the amazing classes!
                                Last month I hit my highest income ever — $55k from Emsculpt, Vacuum Therapy, Laser, and Carbon Peeling!
                                Your marketing section was a game changer. I’m so grateful you let me bring my clients to your beautiful salon — it helped me earn back the class cost fast! Can’t thank you enough, Tamila!
                            </div>
                            <div className={styles.col}>
                                Carbon Peel
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <span>
                                    Lollita Shmakova
                                </span>
                                <div className={styles.img}>
                                    <img src={require("assets/img/student-avatar.png")} alt="" />
                                </div>
                            </div>
                            <div className={styles.col}>
                                $55,000 in 1 month
                            </div>
                            <div className={`${styles.col} ${styles.descr}`}>
                                Hey girl! Just wanted to say a huge thank you for the amazing classes!
                                Last month I hit my highest income ever — $55k from Emsculpt, Vacuum Therapy, Laser, and Carbon Peeling!
                                Your marketing section was a game changer. I’m so grateful you let me bring my clients to your beautiful salon — it helped me earn back the class cost fast! Can’t thank you enough, Tamila!
                            </div>
                            <div className={styles.col}>
                                Carbon Peel
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <span>
                                    Lollita Shmakova
                                </span>
                                <div className={styles.img}>
                                    <img src={require("assets/img/student-avatar.png")} alt="" />
                                </div>
                            </div>
                            <div className={styles.col}>
                                $55,000 in 1 month
                            </div>
                            <div className={`${styles.col} ${styles.descr}`}>
                                Hey girl! Just wanted to say a huge thank you for the amazing classes!
                                Last month I hit my highest income ever — $55k from Emsculpt, Vacuum Therapy, Laser, and Carbon Peeling!
                                Your marketing section was a game changer. I’m so grateful you let me bring my clients to your beautiful salon — it helped me earn back the class cost fast! Can’t thank you enough, Tamila!
                            </div>
                            <div className={styles.col}>
                                Carbon Peel
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.col}>
                                <span>
                                    Lollita Shmakova
                                </span>
                                <div className={styles.img}>
                                    <img src={require("assets/img/student-avatar.png")} alt="" />
                                </div>
                            </div>
                            <div className={styles.col}>
                                $55,000 in 1 month
                            </div>
                            <div className={`${styles.col} ${styles.descr}`}>
                                Hey girl! Just wanted to say a huge thank you for the amazing classes!
                                Last month I hit my highest income ever — $55k from Emsculpt, Vacuum Therapy, Laser, and Carbon Peeling!
                                Your marketing section was a game changer. I’m so grateful you let me bring my clients to your beautiful salon — it helped me earn back the class cost fast! Can’t thank you enough, Tamila!
                            </div>
                            <div className={styles.col}>
                                Carbon Peel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}