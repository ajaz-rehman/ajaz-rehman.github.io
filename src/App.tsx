import "./App.css";
import { Cta } from "./components/Cta";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { Team } from "./components/Team";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Features } from "./components/Features";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Newsletter } from "./components/Newsletter";
import { ScrollToTop } from "./components/ScrollToTop";
import { Testimonials } from "./components/Testimonials";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<HowItWorks />
			<Features />
			<Services />
			<Cta />
			<Testimonials />
			<Team />
			<Pricing />
			<Newsletter />
			<FAQ />
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
