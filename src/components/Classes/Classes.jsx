
import styles from "./classes.module.scss";

export default function Classes() {
    return (
        <section id="classes">
            <div className={styles.container}>
                <h2>
                    Certified Classes
                </h2>
                <p className={styles.descr}>
                    Our instructor Tamila offers educational classes and opportunities to be a part of Persona's team
                </p>
                <h3>
                    Classes are in depth including:
                </h3>
                <p className={styles.descr}>
                    Selling packages / marketing
                    <br/><br/>
                    Theory & take home workbooks
                    <br/><br/>
                    Allows students to bring in models to practice on until fully confident
                </p>
            </div>
        </section>
    )
}