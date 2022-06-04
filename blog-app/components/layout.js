import styles from '../styles/layout.module.css';
import Navigation from './navigation';
import Banner from '../components/banner';
import Footer from '../components/footer';

export default function Layout({ children }) {
    return(
        <div className={styles.container}>
            <Navigation />
            <Banner />
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    );
}