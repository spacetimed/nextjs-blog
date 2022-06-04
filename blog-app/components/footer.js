import styles from '../styles/footer.module.css';
import Code from '@mui/icons-material/Code';

export default function Footer() {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>nextjs-blog</h1>
            <ul className={styles.nav}>
                <li className={styles.nav}>Source</li>
                <li className={styles.nav}>License</li>
                <li className={styles.nav}>Privacy Policy</li>
            </ul>
            <h3 className={styles.creds}>FFFFFF-base16<Code sx={{fontSize: '1rem'}} /></h3>
        </div>
    )
}