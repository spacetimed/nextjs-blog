import styles from '../styles/footer.module.css';
// import Code from '@mui/icons-material/Code';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div></div>
            <ul className={styles.nav}>
                <li className={styles.nav}>Source</li>
                <li className={styles.nav}>License</li>
                <li className={styles.nav}>Privacy Policy</li>
            </ul>
            <div></div>
        </div>
    )
}