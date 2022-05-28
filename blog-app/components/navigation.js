import Link from 'next/link';
import styles from '../styles/navigation.module.css'; 

// 88 89 96

export default function Navigation() {
    return(
        <div className={styles.navContainer}>
            <ul className={styles.navList}>
                <Link href="/"><a><li>Link1</li></a></Link>
                <a><li>Link2</li></a>
                <a><li>Link3</li></a>
            </ul>
        </div>
    );
}