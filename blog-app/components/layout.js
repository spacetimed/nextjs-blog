import styles from '../styles/layout.module.css';
import Navigation from './navigation';
import Banner from '../components/banner';
import Footer from '../components/footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
    const router = useRouter();
    const isHome = (router.asPath == '/');
    return(
        <div className={styles.container}>
            <Navigation />
            {isHome && <Banner />}
            <div className={styles.content}>
                {children}
            </div>
            <Footer />
        </div>
    );
}