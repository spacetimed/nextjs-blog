import styles from '../styles/banner.module.css';

export default function Banner() {
    return(
        <div className={styles.bannerContainer}>
            <h1 className={styles.largeText}>Welcome to <span className={styles.gradientText}>nextjs-blog</span></h1>
            a demonstration of React, Next.js, and Express.
        </div>
    )
}