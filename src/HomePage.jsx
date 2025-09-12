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