import "./App.css";
import { FAQ } from "./components/FAQ";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { ScrollToTop } from "./components/ScrollToTop";
import { Testimonials } from "./components/Testimonials";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Services />
			<Projects />
			<Testimonials />
			<FAQ />
			<Footer />
			<ScrollToTop />
		</>
	);
}

export default App;
