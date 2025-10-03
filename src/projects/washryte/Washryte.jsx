import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import washryteHero from './assets/washryteHero.webp';
import washryte1 from './assets/washryte-1.webp';
import washryte2 from './assets/washryte-2.webp';
import washryte3 from './assets/washryte-3.webp';
import washryte4 from './assets/washryte-4.webp';
import washryte5 from './assets/washryte-5.webp';
import washryte6 from './assets/washryte-6.webp';
import washryte7 from './assets/washryte-7.webp';
import washryte8 from './assets/washryte-8.webp';
import washryte9 from './assets/washryte-9.webp';



export default function Washryte() {
    return (
        <>
            <Helmet>
                <title>Udinna Projects - WashRyte </title>
                <meta name="description" content="Digital growth engine for a laundromat" />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>Washryte Laundromat – Digital Growth Engine</h1>
                            <img src={washryteHero} alt="" className={styles.projectHeroImg}/>
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>
                                We transformed Washryte’s visibility with digital campaigns, ads, influencer partnerships, and social engagement. Awareness soared, new segments were reached, and sales grew significantly. Today, Washryte’s digital presence has become the go-to channel for loyal and prospective customers.
                                </p>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={washryte1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={washryte2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={washryte3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={washryte4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={washryte5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={washryte6} alt="Project shot 6" className={styles.projectImg} />
                            <img src={washryte7} alt="Project shot 7" className={styles.projectImg} />
                            <img src={washryte8} alt="Project shot 8" className={styles.projectImg} />
                            <img src={washryte9} alt="Project shot 9" className={styles.projectImg} />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}