import Link from 'next/link';
import styles from '../styles/navigation.module.css'; 
import DarkMode from '@mui/icons-material/DarkMode';

export default function Navigation() {
    return(
        <div className={styles.navContainer}>
            <div className={styles.navContent}>
                <ul className={styles.navList}>
                    <Link href="/"><a><li>Home</li></a></Link>
                </ul>
                <div className={styles.navSettings}>
                    <DarkMode />  
                </div>
            </div>
        </div>
    );
}