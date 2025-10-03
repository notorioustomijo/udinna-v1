import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import healthbancHero from './assets/healthbancHero.webp';
import healthbanc1 from './assets/healthbanc-1.webp';
import healthbanc2 from './assets/healthbanc-2.webp';
import healthbanc3 from './assets/healthbanc-3.webp';
import healthbanc4 from './assets/healthbanc-4.webp';
import healthbanc5 from './assets/healthbanc-5.webp';
import healthbanc6 from './assets/healthbanc-6.webp';
import healthbanc7 from './assets/healthbanc-7.webp';
import healthbanc8 from './assets/healthbanc-8.webp';
import healthbanc9 from './assets/healthbanc-9.webp';

export default function Healthbanc() {
    return (
        <>
            <Helmet>
                <title>Udinna Projects - Healthbanc</title>
                <meta name="description" content="Creating an ecosystem of healthtech products." />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>Healthbanc – Healthy Lifestyle Ecosystem</h1>
                            <img src={healthbancHero} alt="" className={styles.projectHeroImg}/>
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>We designed Healthbanc’s web, mobile, vendor, and admin platforms, bringing the solution from beta to launch in under six months. Beta testing generated ₦400k+ revenue; post-launch, 120k+ customers onboarded with millions in sales, connecting users to meals, gyms, and diagnostics for better living.</p>
                            </div>
                            <div className={styles.projectImpact}>
                                <h2>Impact</h2>
                                <ul>
                                    <li>
                                    ₦400K+ revenue generated in beta.
                                    </li>
                                    <li>
                                    120K+ customers onboarded post launch with millions in sales
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={healthbanc1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={healthbanc2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={healthbanc3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={healthbanc4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={healthbanc5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={healthbanc6} alt="Project shot 6" className={styles.projectImg} />
                            <img src={healthbanc7} alt="Project shot 7" className={styles.projectImg} />
                            <img src={healthbanc8} alt="Project shot 8" className={styles.projectImg} />
                            <img src={healthbanc9} alt="Project shot 9" className={styles.projectImg} />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}