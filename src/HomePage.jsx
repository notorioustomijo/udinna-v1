import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import UdinnaLoader from './loader/UdinnaLoader';

export default function HomePage() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    const handleImagesLoaded = () => {
        setImagesLoaded(true);
    };

    return (
        <>
            <Helmet>
                <title>Udinna Digital - Crafting dream brands and digital experiences</title>
                <meta name="description" content="A Lagos-based marketing, product design, and software development firm dedicated to building bold brand identities and digital experiences." />
            </Helmet>
            <UdinnaLoader />
            <div className="app-wrapper" style={{ display: imagesLoaded ? 'block' : 'none' }}>
                <Navigation />
                <Hero onImagesLoaded={handleImagesLoaded} />
                <About />
                <Project />
                <Footer />
            </div>
        </>
    );
}