

import Button from "components/Button/Button";
import styles from "./preview.module.scss";

export default function Preview() {
    return (
        <section className={styles.preview}>
            <div className={styles.container}>
                <div className={styles.img_block}>
                    <img src={require("assets/img/preview-1.png")} alt="" />
                </div>
                <div className={styles.text_block}>
                    <div className={styles.upper_block}>
                        <a href="#stages">
                            <div className={styles.title}>
                                <span>
                                    01
                                </span>
                                <p>
                                    Learn, Earn, Stabilize
                                </p>
                            </div>
                        </a>
                        <a href="#experience">
                            <div className={styles.title}>
                                <span>
                                    02
                                </span>
                                <p>
                                    Student experience
                                </p>
                            </div>
                        </a>
                        <a href="#classes">
                            <div className={styles.title}>
                                <span>
                                    03
                                </span>
                                <p>
                                    Certified Classes
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className={styles.lower_block}>
                        <Button />
                        <div className={styles.meta_data}>
                            <span>
                                New Jersey
                            </span>
                            <span>
                                2025
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}