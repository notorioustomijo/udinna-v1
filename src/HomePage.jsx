import { Helmet } from '@dr.pogodin/react-helmet';
import Navigation from "./components/Navigation";
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>Udinna Digital - Crafting dream brands and digital experiences</title>
                <meta name="description" content="A Lagos-based marketing, product design, and software development firm dedicated to building bold brand identities and digital experiences." />
            </Helmet>
            <div className="app-wrapper">
                <Navigation />
                <Hero />
                <About />
                <Project />
                <Footer />
            </div>
        </>
    )
}