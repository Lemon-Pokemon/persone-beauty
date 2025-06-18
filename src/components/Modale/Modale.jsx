
import { useModal } from "ModalContext";

import styles from "./modale.module.scss";

export default function Modale() {

    const { isOpen, setIsOpen } = useModal();


    if (!isOpen) return null;

    return (
        <div className={styles.modale} onClick={()=>setIsOpen(!isOpen)}>
            <div className={styles.modale_wrapp} onClick={e => e.stopPropagation()}>
                    <h2>Contact Us</h2>
                    <form>
                        <input placeholder="Name" />
                        <input placeholder="Phone" />
                        <input placeholder="Email" type="email" />
                        <textarea placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
            </div>

            <div className={styles.button} onClick={()=>setIsOpen(!isOpen)}>
                <img src={require("assets/img/close.png")} alt="" />
            </div>
        </div>
    )
}