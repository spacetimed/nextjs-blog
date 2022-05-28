import styles from './layout.module.css';
import Navigation from './navigation';

export default function Layout({ children }) {
    return(
        <div className={styles.appContainer}>
            <Navigation/>
            <div className={styles.contentContainer}>
                {children}
            </div>
        </div>
    );
}