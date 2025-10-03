import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import delightvetHero from './assets/delightvetHero.webp';
import delightvet1 from './assets/delightvet-1.webp';
import delightvet2 from './assets/delightvet-2.webp';
import delightvet3 from './assets/delightvet-3.webp';
import delightvet4 from './assets/delightvet-4.webp';
import delightvet5 from './assets/delightvet-5.webp';
import delightvet6 from './assets/delightvet-6.webp';

export default function DelightVet() {
    return (
        <>  
            <Helmet>
                <title>Udinna Projects - DelightVet</title>
                <meta name="description" content="Visual identity for a modern veterinarian" />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>
                            Delight Vet – Modern Veterinary Identity
                            </h1>
                            <img src={delightvetHero} alt="" className={styles.projectHeroImg} />
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>
                                We created Delight Vet’s brand and visual identity, positioning them as a modern, digitally inclined veterinary clinic. With a strong identity and clear vision, the brand launched quickly, establishing itself as a trusted name in Nigeria’s evolving pet-care landscape.
                                </p>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={delightvet1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={delightvet2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={delightvet3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={delightvet4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={delightvet5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={delightvet6} alt="Project shot 6" className={styles.projectImg} />
                        </div>
                    </section>

                </div>
                <Footer />
            </div>
        </>
    )
}