import { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import rightArrow from '../assets/right-arrow.svg';
import udinna from '../assets/udinna-logo-small.svg';
import style from './Navigation.module.css';

export default function Navigation() {
    const navRef = useRef(null);
    const mobileMenuRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // Store animation functions in refs so they persist
    const mobileMenuAnimations = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const nav = navRef.current;
            const mobileMenu = mobileMenuRef.current;

            // Start in place
            gsap.set(nav, { y: 0 });
            
            // Set initial mobile menu state
            gsap.set(mobileMenu, { 
                opacity: 0, 
                y: -20,
                pointerEvents: 'none'
            });

            const show = () => gsap.to(nav, {
                y: 0,
                duration: 0.35,
                ease: "power2.out",
                overwrite: "auto"
            });

            const hide = () => gsap.to(nav, {
                y: -(nav.offsetHeight + 8),
                duration: 0.35,
                ease: "power2.in",
                overwrite: "auto"
            });

            let last = 0;
            let downAcc = 0;
            let upAcc = 0;

            ScrollTrigger.create({
                start: 0,
                end: "max",
                onUpdate(self) {
                    const y = self.scroll();

                    // Always show near the very top
                    if (y < 80) {
                        show();
                        last = y;
                        downAcc = upAcc = 0;
                        return;
                    }

                    const delta = y - last; // > 0 = down, <0 = up
                    last = y;

                    if (delta > 0) {
                        downAcc += delta;
                        upAcc = 0;
                        if (downAcc > 24) hide(); //require ~24px continuous down scroll before hiding
                    } else if (delta < 0) {
                        upAcc += -delta;
                        downAcc = 0;
                        if (upAcc > 12) show(); //smaller threshold to reveal quickly
                    }
                },
                invalidateOnRefresh: true,
            });

            // Mobile menu animations - store in ref
            mobileMenuAnimations.current = {
                show: () => {
                    gsap.to(mobileMenu, {
                        opacity: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                        pointerEvents: 'auto'
                    });
                },
                hide: () => {
                    gsap.to(mobileMenu, {
                        opacity: 0,
                        y: -20,
                        duration: 0.25,
                        ease: "power2.in",
                        pointerEvents: 'none'
                    });
                }
            };

        }, navRef);

        return () => ctx.revert();

    }, []);

    // Handle menu state changes
    // Handle menu state changes
    useLayoutEffect(() => {
        if (mobileMenuAnimations.current) {
            if (isMenuOpen) {
                mobileMenuAnimations.current.show();
            } else {
                mobileMenuAnimations.current.hide();
            }
        }
    }, [isMenuOpen]);

    // Handle window resize to close mobile menu on larger screens
    useLayoutEffect(() => {
        const handleResize = () => {
            // Close mobile menu if window is wider than mobile breakpoint (768px)
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        
        // Also check on mount in case component mounts on desktop size
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className={style.nav} ref={navRef} data-nav>
                <a href="#" className={style.logo}>
                    <img src={udinna} alt="home" />
                </a>
                
                {/* Desktop nav links */}
                <ul className={style.navLinks}>
                    <li>
                        <a 
                            href="#what-we-do"
                            className={style.navLink}
                        >
                            What We Do
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#work"
                            className={style.navLink}
                        >
                            Our Past Work
                        </a>
                    </li>
                </ul>

                {/* Desktop CTA button */}
                <a 
                    href="calendly-link-goes-here"
                    className={`btn-small btn-pry ${style.desktopCTA}`}
                >
                    <p>Book a Call</p>
                    <img src={rightArrow} alt="" />
                </a>

                {/* Hamburger button */}
                <button 
                    className={`${style.hamburger} ${isMenuOpen ? style.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile menu */}
            <div 
                className={style.mobileMenu} 
                ref={mobileMenuRef}
                role="navigation"
                aria-label="Mobile navigation"
            >
                <div className={style.mobileMenuContent}>
                    <ul className={style.mobileNavLinks}>
                        <li>
                            <a 
                                href="#what-we-do"
                                className={style.mobileNavLink}
                                onClick={closeMenu}
                            >
                                What We Do
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#work"
                                className={style.mobileNavLink}
                                onClick={closeMenu}
                            >
                                Our Past Work
                            </a>
                        </li>
                    </ul>
                    
                    <a 
                        href="calendly-link-goes-here"
                        className={`btn btn-pry ${style.mobileCTA}`}
                        onClick={closeMenu}
                    >
                        <p>Book a Call</p>
                        <img src={rightArrow} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}