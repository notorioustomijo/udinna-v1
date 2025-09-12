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
                <a href="calendly" className={style.footerCTA}>
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
                    <div className={style.footerTandCs}>
                        <a href="/terms">Terms of Service</a>
                        <a href="/privacy">Privacy Policy</a>
                    </div>
                    <div className={style.footerSocials}>
                        <a href="">
                            <img src={ig} alt="" />
                        </a>
                        <a href="">
                            <img src={linkedin} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}