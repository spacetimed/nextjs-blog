import styles from '../styles/banner.module.css';

export default function Banner() {
    return(
        <div className={styles.bannerContainer}>
            <div className={styles.close}></div>
            <h1 className={styles.largeText}>Welcome to <span className={styles.gradientText}>nextjs-blog</span></h1>
            <h3 className={styles.subText}>a demonstration of React, Next.js, and Express.</h3>
        </div>
    )
}