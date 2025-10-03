import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(ScrollTrigger, TextPlugin);

import uLogo from '../assets/u-logo.svg';
import style from './About.module.css';

export default function About() {
    const sectionRef = useRef(null);
    const imgRef = useRef(null);
    const revealRef = useRef(null);

    const fullText="We are a Lagos-based marketing, product design, and software development firm dedicated to building bold brand identities and digital experiences, blending strategy, aesthetics, and seamless execution.";

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Image rise-in
            gsap.set(imgRef.current,
                {
                    y: 500,
                    opacity: 0
                }
            );

            // Count visible characters (ignores HTML tags)
            const charCount = revealRef.current.textContent.length;
            const steps = Math.min(220, Math.max(60, charCount)); //clamp for smoothness

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 85%", //start a bit later (adds a delay")
                    end: "+=500", // give it ~500px of scroll to play
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });

            // (Optional) tiny spacer at the start for extra delay
            tl.to({}, {duration: 0.15});

            // image rise-in
            tl.to(
                imgRef.current,
                { y: 0, opacity: 1, ease: "power2.out", duration: 0.6 },
                "<"
            );

            // reveal text left -> right with a width mask + caret
            tl.fromTo(
                revealRef.current,
                { width: 0 },
                { width: "100%", ease: `steps(${steps})`, duration: 1.4},
                "<0.1"
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section className={style.aboutSection} ref={sectionRef} id="what-we-do">
            <img src={uLogo} alt="" className={style.uLogo} ref={imgRef}/>
            <p
                className={style.aboutText}
            >
                <span
                    ref={revealRef}
                    className={`${style.reveal} ${style.typing}`}
                >
                    We are a Lagos-based <strong>marketing</strong>, <strong>product design</strong>,
                    and <strong>software development</strong> firm dedicated to building bold brand 
                    identities and digital experiences, blending strategy, aesthetics, and seamless 
                    execution.
                </span>
            </p>
        </section>
    )
}