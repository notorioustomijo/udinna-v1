import udinnaLogo from '../assets/udinna-logo-large.svg';
import rightArrow from '../assets/right-arrow.svg';
import ig from '../assets/instagram-logo.svg';
import linkedin from '../assets/linkedin-logo.svg';
import style from './Footer.module.css';

export default function Footer() {
    
    return (
        <footer className={style.footer}>
            <div className={style.footerText}>
                <p className={style.footerDesc}>
                    Partner with a creative team designed to move at your speed, 
                    surpass your expectations, and turn your vision into reality.
                </p>
                <a 
                    href="https://calendly.com/udinnadrive/30min" 
                    className={style.footerCTA}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={style.btnHeader}>
                        <p>Book a Call</p>
                        <img src={rightArrow} alt="" />
                    </div>
                    <p>Let's talk about your project</p>
                </a>
            </div>

            <div className={style.footerBottom}>
                <img src={udinnaLogo} alt="" className={style.udinnaLogo} />
                <div className={style.footerLabel}>
                    <p>
                        ©2025 UDINNA. All rights reserved.
                    </p>

                    <div className={style.footerSocials}>
                        <a 
                            href="https://www.instagram.com/udinna.africa/"
                            target="blank"
                            rel="noopener noreferrer"
                        >
                            <img src={ig} alt="" />
                        </a>
                        <a 
                            href="https://www.linkedin.com/company/udinna/posts/?feedView=all"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}