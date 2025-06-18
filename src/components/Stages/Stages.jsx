

import styles from "./stages.module.scss";

export default function Stages() {
    return (
        <section id="stages" className={styles.stages}>
            <div className={styles.container}>
                <div className={styles.stage}>
                    <div className={styles.img}>
                        <img src={require("assets/img/stage.png")} alt="Stage 1" />
                    </div>
                    <h5>
                        01
                    </h5>
                    <h2>
                        Learn
                    </h2>
                    <p className={styles.descr}>
                        You will learn theory and practice in a profession that inspires you
                    </p>

                    <h3>
                        ResultS
                    </h3>

                    <p className={styles.descr}>
                        You have received modern knowledge and necessary practice
                    </p>
                </div>
                <div className={styles.stage}>
                    <div className={styles.img}>
                        <img src={require("assets/img/stage.png")} alt="Stage 1" />
                    </div>
                    <h5>
                        02
                    </h5>
                    <h2>
                        Earn
                    </h2>
                    <p className={styles.descr}>
                        You will learn marketing strategies to earn $48,000 and UP per WEEK right from the start
                    </p>

                    <h3>
                        ResultS
                    </h3>

                    <p className={styles.descr}>
                        Now you know how to earn decent money and have drawn up a strategy to steadily increase your earnings.
                    </p>
                </div>
                <div className={styles.stage}>
                    <div className={styles.img}>
                        <img src={require("assets/img/stage.png")} alt="Stage 1" />
                    </div>
                    <h5>
                        03
                    </h5>
                    <h2>
                        Stabilize
                    </h2>
                    <p className={styles.descr}>
                        Stress free - you can stay with the Persona Beauty Spa team until you feel comfortable enough to work on your own
                        <br></br><br></br>
                        No need to buy any instrument - you use the tools of the studio
                        <br></br><br></br>
                        No need to pay rent - you are part of the team
                    </p>

                    <h3>
                        ResultS
                    </h3>

                    <p className={styles.descr}>
                        You comfortably and gently move into independent work for yourself with a client base, experience, a clear business plan and support from teachers
                    </p>
                </div>
            </div>

        </section>
    );
}