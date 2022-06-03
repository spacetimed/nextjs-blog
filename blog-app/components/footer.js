import styles from '../styles/footer.module.css';
import Code from '@mui/icons-material/Code';

export default function Footer() {
    return (
        <div className={styles.footerContainer}>
            <h1 className={styles.logoText}>nextjs-blog</h1>
            <ul className={styles.list}>
                <li className={styles.list}>About</li>
                <li className={styles.list}>Contact</li>
                <li className={styles.list}>Source</li>
                <li className={styles.list}>License</li>
                <li className={styles.list}>Privacy Policy</li>
            </ul>
            <h3 className={styles.credText}>FFFFFF-base16<Code /></h3>
        </div>
    )
}