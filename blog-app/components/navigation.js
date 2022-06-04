import Link from 'next/link';
import styles from '../styles/navigation.module.css'; 
import DarkMode from '@mui/icons-material/DarkMode';

export default function Navigation() {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <ul className={styles.nav}>
                    <Link href="/"><a><li className={styles.nav}>Home</li></a></Link>
                    <Link href="/"><a><li className={styles.nav}>About</li></a></Link>
                    <Link href="/"><a><li className={styles.nav}>Contact</li></a></Link>
                </ul>
                <div className={styles.settings}>
                    <DarkMode />  
                </div>
            </div>
        </div>
    );
}