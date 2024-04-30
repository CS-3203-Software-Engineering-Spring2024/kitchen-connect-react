import Home from './Home';
import About from './About';
import Work from './Work';
import Testimonial from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import './welcomepage.css';

function WelcomePage() {
    return (
        <div className="App">
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
}

export default WelcomePage;
