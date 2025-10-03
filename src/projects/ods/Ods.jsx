import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import odsHero from './assets/odsHero.webp';
import ods1 from './assets/ods-1.webp';
import ods2 from './assets/ods-2.webp';
import ods3 from './assets/ods-3.webp';
import ods4 from './assets/ods-4.webp';
import ods5 from './assets/ods-5.webp';
import ods6 from './assets/ods-6.webp';
import ods7 from './assets/ods-7.webp';
import ods8 from './assets/ods-8.webp';
import ods9 from './assets/ods-9.webp';

export default function Ods() {
    return (
        <>
            <Helmet>
                <title>Udinna Projects - OneDrugStore</title>
                <meta name="description" content="Pharmatech product design" />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>Onedrugstore: Pharmatech for Fast Access</h1>
                            <img src={odsHero} alt="" className={styles.projectHeroImg} />
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>
                                    We designed the full Onedrugstore ecosystem: web, mobile, vendor, and admin platforms to deliver fast, reliable access to medication. At launch, 7k+ users onboarded, ₦1M+ in revenue generated, and top pharma vendors integrated. Streamlined onboarding boosted orders by 20% month-on-month.
                                </p>
                            </div>
                            <div className={styles.projectImpact}>
                                <h2>Impact</h2>
                                <ul>
                                    <li>
                                    7K+ users onboarded
                                    </li>
                                    <li>
                                    ₦1M in revenue generated
                                    </li>
                                    <li>
                                    Orders boosted by 20% month-on-month
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={ods1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={ods2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={ods3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={ods4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={ods5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={ods6} alt="Project shot 6" className={styles.projectImg} />
                            <img src={ods7} alt="Project shot 7" className={styles.projectImg} />
                            <img src={ods8} alt="Project shot 8" className={styles.projectImg} />
                            <img src={ods9} alt="Project shot 9" className={styles.projectImg} />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    )
}