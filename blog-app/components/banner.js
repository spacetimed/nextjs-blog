import styles from '../styles/banner.module.css';

export default function Banner() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.head}>Welcome to <span className={styles.gradient}>nextjs-blog</span></h1>
                <h3 className={styles.sub}>a demonstration of React, Next.js, and Express.</h3>
            </div>
        </div>
    )
}