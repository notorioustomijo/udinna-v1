import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import styles from '../Project.module.css';

// Images
import fruttaHero from './assets/fruttaHero.webp';
import frutta1 from './assets/frutta-1.webp';
import frutta2 from './assets/frutta-2.webp';
import frutta3 from './assets/frutta-3.webp';
import frutta4 from './assets/frutta-4.webp';
import frutta5 from './assets/frutta-5.webp';
import frutta6 from './assets/frutta-6.webp';
import frutta7 from './assets/frutta-7.webp';
import frutta8 from './assets/frutta-8.webp';
import frutta9 from './assets/frutta-9.webp';

export default function Frutta() {
    return (
        <>
            <Helmet>
                <title>Udinna Projects - Frutta</title>
                <meta name="description" content="Building a digital presence for a beverage consumer brand." />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <div className="projects-container">
                    <section className="project-section">
                        <div className={styles.projectHero}>
                            <h1>
                            Frutta Juice – From Zero to Digital Hero
                            </h1>
                            <img src={fruttaHero} alt="" className={styles.projectHeroImg}/>
                        </div>
                        <div className={styles.projectContext}>
                            <div className={styles.projectOverview}>
                                <h2>Overview</h2>
                                <p>
                                We built Frutta’s digital presence from scratch across LinkedIn, TikTok, Instagram, Facebook, and Twitter. The brand grew from 0 to 9k+ LinkedIn followers and 7k+ Instagram fans, while 10+ creative campaigns and influencer collaborations turned Frutta into a fast-rising FMCG success story.
                                </p>
                            </div>
                            <div className={styles.projectImpact}>
                                <h2>Impact</h2>
                                <ul>
                                    <li>0 → 9K+ LinkedIn followers and 7K+ IG fans</li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.projectImages}>
                            <img src={frutta1} alt="Project shot 1" className={styles.projectImg} />
                            <img src={frutta2} alt="Project shot 2" className={styles.projectImg} />
                            <img src={frutta3} alt="Project shot 3" className={styles.projectImg} />
                            <img src={frutta4} alt="Project shot 4" className={styles.projectImg} />
                            <img src={frutta5} alt="Project shot 5" className={styles.projectImg} />
                            <img src={frutta6} alt="Project shot 6" className={styles.projectImg} />
                            <img src={frutta7} alt="Project shot 7" className={styles.projectImg} />
                            <img src={frutta8} alt="Project shot 8" className={styles.projectImg} />
                            <img src={frutta9} alt="Project shot 9" className={styles.projectImg} />
                        </div>
                    </section>

                </div>
                <Footer />
            </div>
        </>
    )
}