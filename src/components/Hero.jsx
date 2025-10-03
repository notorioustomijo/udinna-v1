import { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import sterling from '../assets/sterling-small.svg';
import frutta from '../assets/frutta-small.svg';
import washryteSmall from '../assets/washryte-small.svg';
import delightSmall from '../assets/delight-vet-small.svg';
import skydd from '../assets/skydd-small.svg';
import landGirl from '../assets/landgirl-small.svg';
import rightArrow from '../assets/right-arrow.svg';
import landGirlflyer from '../assets/landgirl-flyer.webp';
import ceegold from '../assets/ceegold-logo.webp';
import washryteflyer from '../assets/washryte-flyer.webp';
import fruttapost from '../assets/frutta-post.webp';
import delightvet from '../assets/delightvet-post.webp';

import style from './Hero.module.css';

export default function Hero({ onImagesLoaded }) {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);
    const brandsWrapRef = useRef(null);
    const brandsTrackRef = useRef(null);

    // Track image loading
    useEffect(() => {
        const brandImages = brandsTrackRef.current?.querySelectorAll('img') || [];
        const heroImages = trackRef.current?.querySelectorAll('img') || [];
        const allImages = [...brandImages, ...heroImages];

        // Check if all images are already loaded
        const allLoaded = allImages.every(img => img.complete && img.naturalWidth > 0);

        if (allLoaded) {
            onImagesLoaded();
            return;
        }

        // Add load event listeners for images that aren't loaded yet
        let loadedCount = 0;
        const totalImages = allImages.length;

        const handleImageLoad = () => {
            loadedCount += 1;
            if (loadedCount === totalImages) {
                onImagesLoaded();
            }
        };

        allImages.forEach(img => {
            if (!img.complete || img.naturalWidth === 0) {
                img.addEventListener('load', handleImageLoad);
                img.addEventListener('error', handleImageLoad); // Count errored images as "loaded" to avoid hanging
            } else {
                loadedCount += 1;
            }
        });

        // Initial check in case some images load before listeners are attached
        if (loadedCount === totalImages) {
            onImagesLoaded();
        }

        // Cleanup
        return () => {
            allImages.forEach(img => {
                img.removeEventListener('load', handleImageLoad);
                img.removeEventListener('error', handleImageLoad);
            });
        };
    }, [onImagesLoaded]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const maxShift = () => {
                const track = trackRef.current;
                const wrap = track.parentElement;
                const diff = track.scrollWidth - wrap.clientWidth;
                return -Math.min(15000, Math.max(60, diff * 0.5));
            };

            gsap.to(trackRef.current, {
                x: maxShift,
                ease: "none",
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            });

            const wrap = brandsWrapRef.current;
            const track = brandsTrackRef.current;

            let cleanup;

            const buildMarquee = () => {
                [...track.querySelectorAll('[data-clone]')].forEach(n => n.remove());

                const originalItems = [...track.children];
                originalItems.forEach(el => {
                    const clone = el.cloneNode(true);
                    clone.setAttribute('aria-hidden', 'true');
                    clone.dataset.clone = 'true';
                    track.appendChild(clone);
                });

                let tween;

                const init = () => {
                    const total = track.scrollWidth;
                    const wrapWidth = total / 2;

                    gsap.set(track, { x: 0, force3D: true });

                    const speed = 70;
                    const dur = wrapWidth / speed;

                    tween = gsap.to(track, {
                        x: -wrapWidth,
                        duration: dur,
                        ease: "none",
                        repeat: -1,
                        onUpdate() {
                            const x = gsap.getProperty(track, "x");
                            if (x <= -wrapWidth) gsap.set(track, { x: x + wrapWidth });
                        }
                    });

                    const onEnter = () => tween.pause();
                    const onLeave = () => tween.play();
                    wrap.addEventListener('mouseenter', onEnter);
                    wrap.addEventListener('mouseleave', onLeave);

                    cleanup = () => {
                        tween?.kill();
                        wrap.removeEventListener('mouseenter', onEnter);
                        wrap.removeEventListener('mouseleave', onLeave);
                    };
                };

                const imgs = [...track.querySelectorAll('img')];
                const allLoaded = imgs.every(i => i.complete && i.naturalWidth);
                if (allLoaded) {
                    requestAnimationFrame(init);
                } else {
                    const onLoadOnce = () => {
                        if (imgs.every(i => i.complete && i.naturalWidth)) {
                            imgs.forEach(i => i.removeEventListener('load', onLoadOnce));
                            requestAnimationFrame(init);
                        }
                    };
                    imgs.forEach(i => i.addEventListener('load', onLoadOnce));
                }
            };

            buildMarquee();

            const onRefresh = () => {
                cleanup?.();
                buildMarquee();
            };
            ScrollTrigger.addEventListener('refreshInit', onRefresh);

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                cleanup?.();
            }

            return () => {
                cleanup?.();
                ScrollTrigger.removeEventListener('refreshInit', onRefresh);
            };
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className={style.heroSection} ref={sectionRef}>
            <div className={style.trustSignal}>
                <p>Trusted by:</p>
                <div className={style.brandViewport} ref={brandsWrapRef}>
                    <div className={style.brandTrack} ref={brandsTrackRef}>
                        <img src={sterling} alt="Sterling" className={style.brandLogo} />
                        <img src={frutta} alt="Frutta" className={style.brandLogo} />
                        <img src={washryteSmall} alt="Washryte" className={style.brandLogo} />
                        <img src={delightSmall} alt="Delight Vet" className={style.brandLogo} />
                        <img src={skydd} alt="Skydd" className={style.brandLogo} />
                        <img src={landGirl} alt="LandGirl" className={style.brandLogo} />
                    </div>
                </div>
            </div>
            <div className={style.heroText}>
                <h1>Crafting dream brands and digital experiences</h1>
                <a
                    href="https://calendly.com/udinnadrive/30min"
                    className="btn btn-pry"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p>Get Started</p>
                    <img src={rightArrow} alt="" />
                </a>
            </div>
            <div className={style.heroStrip}>
                <div className={style.heroTrack} ref={trackRef}>
                    <img src={landGirlflyer} alt="" className={style.heroImage} />
                    <img src={ceegold} alt="" className={style.heroImage} />
                    <img src={washryteflyer} alt="" className={style.heroImage} />
                    <img src={fruttapost} alt="" className={style.heroImage} />
                    <img src={delightvet} alt="" className={style.heroImage} />
                </div>
            </div>
        </section>
    );
}