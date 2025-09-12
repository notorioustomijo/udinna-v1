import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import project from '../assets/project-grey.svg';
import ods from '../assets/onedrugstore.webp';
import washryte from '../assets/washryte.webp';
import frutta from '../assets/frutta.webp';
import healthbanc from '../assets/healthbanc.webp';
import landgal from '../assets/landgirl.webp';
import delightvet from '../assets/delightvet.webp';
import style from './Project.module.css';

export default function Project() {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                return;
            }

            const scope = gridRef.current;
            if (!scope) return;

            const cards = scope.querySelectorAll(`.${style.card}`);

            // Start cards pushed down 60px
            gsap.set(cards, {
                y: 60
            });

            // Create simple scroll trigger for each card
            cards.forEach((card, index) => {
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 80%",
                    once: true,
                    onEnter: () => {
                        gsap.to(card, {
                            y: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            delay: index * 0.1
                        });
                    }
                });
            });
        }, sectionRef);

        return () => ctx.revert();
        
    }, []);

      
    return (
        <section className={style.projectSection} ref={sectionRef}>
            {/* watermark behind */}
            <div className={style.watermark}>
                <img src={project} alt="Projects" />    
            </div>

            <div className={style.grid} ref={gridRef}>
                {/* ODS */}
                <a href="#" className={`${style.card} ${style.cardOds} ${style.span12}`} aria-label="Onedrugstore">
                    <img src={ods} alt="Onedrugstore" className={style.cover}/>

                    {/* Overlay panel */}
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                    Bringing OneDrugStore to life
                                </h3>
                                <span className={style.tags}>PRODUCT DESIGN</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Row 2 */}
                <a href="#" className={`${style.card} ${style.span7}`} aria-label="Washryte">
                    <img src={washryte} alt="Washryte" className={style.cover}/>
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                    Growing Washryte's social media
                                </h3>
                                <span className={style.tags}>SOCIAL MEDIA MARKETING</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a href="#" className={`${style.card} ${style.span5}`} aria-label="Frutta">
                    <img src={frutta} alt="Frutta" className={style.cover}/>
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                    Frutta's Social Media Levels Up
                                </h3>
                                <span className={style.tags}>SOCIAL MEDIA MARKETING, CAMPAIGNS</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Healthbanc wide strip */}
                <a href="#" className={`${style.card} ${style.cardHb} ${style.span12}`} aria-label="Healthbanc">
                    <img src={healthbanc} alt="Healthbanc" className={style.cover}/>
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                    Healthbanc comes to life
                                </h3>
                                <span className={style.tags}>PRODUCT DESIGN</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>

                {/* Row 4 */}
                <a href="#" className={`${style.card} ${style.span5}`} aria-label="LandGirl">
                    <img src={landgal} alt="LandGirl" className={style.cover}/>
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                    LandGirl's Brand Comes Alive
                                </h3>
                                <span className={style.tags}>BRAND IDENTITY</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
                
                <a href="#" className={`${style.card} ${style.span7}`} aria-label="Delight Vet">
                    <img src={delightvet} alt="DelightVet" className={style.cover}/>
                    <div className={style.overlayPanel}>
                        <div className={style.overlayContent}>
                            <div className={style.overlayContentTitle}>
                                <h3 className={style.headline}>
                                   Delight Vet - Branding a veterinarian
                                </h3>
                                <span className={style.tags}>BRAND IDENTITY</span>
                            </div>
                            
                            <div className={style.bottomRow}>
                                <span className={style.cta}>
                                    View Case Study <span className={style.arrow}>→</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}