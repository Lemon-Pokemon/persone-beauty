
import Button from "components/Button/Button";
import styles from "./callback.module.scss";

export default function Callback () {
    return (
        <section className={styles.callback}>
            <div className={styles.container}>
                <h2>
                    Callback request
                </h2>
                <Button />
            </div>
        </section>
    )
}