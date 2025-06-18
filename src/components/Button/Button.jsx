import { ReactComponent as Arrow_svg } from "assets/svg/arrow.svg";
import { useModal } from "ModalContext";
import styles from "./button.module.scss";

export default function Button({type="talk", fontSize=40}) {

    const {setIsOpen} = useModal();
    function handleOpen () {
        setIsOpen(true);
        console.log("click");
    };

    if( type === "talk"){
        return (
            
            <div className={styles.block_button} onClick={()=>handleOpen()}>
                <div className={styles.button_text}>LET`S TALK!</div>
                <div className={styles.button}>
                    <Arrow_svg />
                </div>
            </div>
    
        )
    }
    if(type === "courses"){
        return (
            
            <div className={styles.block_button}>
                <div className={styles.button_text} style={{fontSize: fontSize}}>ALL COURSES</div>
                <div className={styles.button}>
                    <Arrow_svg />
                </div>
            </div>
    
        )
    }
}