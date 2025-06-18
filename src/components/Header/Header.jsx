import { useState } from "react";
import { useModal } from "ModalContext";

import styles from "./header.module.scss";
import Button from "components/Button/Button";
import Layout from "components/Layout/Layout";

export default function Header() {

    const { setIsOpen, isOpen } = useModal();

    const [isHeaderOpen, setHeaderOpen] = useState(false);

    function handleModale() {
        setIsOpen(!isOpen);
        closeHeader();
    }

    function closeHeader() {
        setHeaderOpen(false);
    }

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        setHeaderOpen(false);
    }
    return (
        <header className={isHeaderOpen ? styles.open : ""}>
            <Layout >
                <nav className={`${styles.container} `}>
                    <div className={`${styles.header_item} ${styles.logo}`} onClick={() => scrollTop()}>
                        <p>
                            Persona Beauty Academy.
                        </p>
                    </div>
                    <ul className={styles.header_item}>
                        <li>
                            <a href="#stages" onClick={closeHeader}>
                                Learn, Earn, Stabilize
                            </a>
                        </li>
                        <li>
                            <a href="#experience" onClick={closeHeader}>
                                Student Experience
                            </a>
                        </li>
                        <li>
                            <a href="#classes" onClick={closeHeader}>
                                Certified Classes
                            </a>
                        </li>
                    </ul>
                    {isHeaderOpen ?
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
                        :
                        <div className={styles.header_item} onClick={() => handleModale()}>
                            <span>
                                LET`S TALK
                            </span>
                        </div>
                    }
                    <div className={styles.burger} onClick={() => setHeaderOpen(!isHeaderOpen)}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </nav>
            </Layout>

        </header>
    )
}