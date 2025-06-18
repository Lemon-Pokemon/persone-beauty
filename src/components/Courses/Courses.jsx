
import Button from "components/Button/Button";
import styles from "./courses.module.scss";

export default function Courses() {
    return (
        <section className={styles.courses}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.empty}>
                        <h2>
                            OUR Courses
                        </h2>
                        <h3>
                            The best of the best: top courses for future stars of the beauty industry
                        </h3>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.col}>
                            <h4>
                                Carbon Peel
                            </h4>
                            <h5>
                                Duration
                            </h5>
                            <p className={styles.descr}>
                                3 days theory & practice
                            </p>
                            <h5>
                                Description
                            </h5>
                            <p className={styles.descr}>
                                The laser treatment is suitable for all ages and can lighten age spots and dark spots, fade freckles, reduce wrinkles and fine lines, shrink pores, and remove blackheads and acne.<br />
                                “It can also lift and tighten the skin, improve elasticity, moisturise and give a bright and radiant complexion
                            </p>
                            <h5>
                                Your income
                            </h5>
                            <p className={styles.descr}>
                                from $3,500 and up per day
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.img}>
                                <img src={require("assets/img/course.png")} alt="" />
                            </div>
                            <div className={styles.button}>
                                <p>
                                    Enroll in a course
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.empty}>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.col}>
                            <h4>
                                Carbon Peel
                            </h4>
                            <h5>
                                Duration
                            </h5>
                            <p className={styles.descr}>
                                3 days theory & practice
                            </p>
                            <h5>
                                Description
                            </h5>
                            <p className={styles.descr}>
                                The laser treatment is suitable for all ages and can lighten age spots and dark spots, fade freckles, reduce wrinkles and fine lines, shrink pores, and remove blackheads and acne.<br />
                                “It can also lift and tighten the skin, improve elasticity, moisturise and give a bright and radiant complexion
                            </p>
                            <h5>
                                Your income
                            </h5>
                            <p className={styles.descr}>
                                from $3,500 and up per day
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.img}>
                                <img src={require("assets/img/course.png")} alt="" />
                            </div>
                            <div className={styles.button}>
                                <p>
                                    Enroll in a course
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.empty}>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.col}>
                            <h4>
                                Carbon Peel
                            </h4>
                            <h5>
                                Duration
                            </h5>
                            <p className={styles.descr}>
                                3 days theory & practice
                            </p>
                            <h5>
                                Description
                            </h5>
                            <p className={styles.descr}>
                                The laser treatment is suitable for all ages and can lighten age spots and dark spots, fade freckles, reduce wrinkles and fine lines, shrink pores, and remove blackheads and acne.<br />
                                “It can also lift and tighten the skin, improve elasticity, moisturise and give a bright and radiant complexion
                            </p>
                            <h5>
                                Your income
                            </h5>
                            <p className={styles.descr}>
                                from $3,500 and up per day
                            </p>
                        </div>
                        <div className={styles.col}>
                            <div className={styles.img}>
                                <img src={require("assets/img/course.png")} alt="" />
                            </div>
                            <div className={styles.button}>
                                <p>
                                    Enroll in a course
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.button}>
                <Button type={"courses"} fontSize={32} />
            </div>
        </section>
    )
} 