import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import landgirlHero from './assets/landgirlHero.webp';
import landgirl1 from './assets/landgirl-1.webp';
import landgirl2 from './assets/landgirl-2.webp';
import landgirl3 from './assets/landgirl-3.webp';
import landgirl4 from './assets/landgirl-4.webp';
import landgirl5 from './assets/landgirl-5.webp';
import landgirl6 from './assets/landgirl-6.webp';
import landgirl7 from './assets/landgirl-7.webp';
import landgirl8 from './assets/landgirl-8.webp';
import landgirl9 from './assets/landgirl-9.webp';

export default function LandGirl() {
    return (
        <>
            <Helmet>
                <title>Udinna Projects - LandGirl</title>
                <meta name="description" content="Creating impact for a Real estate brand." />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>
                            LandGirl – Real Estate with Impact
                            </h1>
                            <img src={landgirlHero} alt="" className={styles.projectHeroImg}/>
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>
                                Through marketing, brand identity, and digital campaigns, we helped LandGirl achieve ₦200M+ in sales and launch 5+ real estate projects within two years. Our creative support positioned the brand as a trusted and innovative force in Nigeria’s competitive property market.
                                </p>
                            </div>
                            <div className={styles.projectImpact}>
                                <h2>Impact</h2>
                                <ul>
                                    <li>
                                    ₦200M+ in sales
                                    </li>
                                    <li>
                                    5+ real estate project launches in 2 years
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={landgirl1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={landgirl2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={landgirl3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={landgirl4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={landgirl5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={landgirl6} alt="Project shot 6" className={styles.projectImg} />
                            <img src={landgirl7} alt="Project shot 7" className={styles.projectImg} />
                            <img src={landgirl8} alt="Project shot 8" className={styles.projectImg} />
                            <img src={landgirl9} alt="Project shot 9" className={styles.projectImg} />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}