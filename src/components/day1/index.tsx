import styles from '../../styles/day1.module.scss'

const Day1: React.FC = () => {
    return (
        <>
            <div className={`frame ${styles.day1}`}>
                <div className="center">
                    <div className={styles.number}>
                        <div className={styles.one}></div>
                        <div className={`${styles.zero} ${styles.first}`}></div>
                        <div className={`${styles.zero} ${styles.second}`}></div>

                    </div>
                    <div className={styles.text}>
                        <span className={styles.bigText}>Days</span>
                        <span className={styles.smallText}>CSS Chalenge</span>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Day1