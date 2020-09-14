import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
	const [selectedSection, setSelectedSection] = useState('About');
	return (
		<>
			<header>
				<Header
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
				/>
			</header>
			<main>
				{selectedSection === 'About' && <About />}
				{selectedSection === 'Portfolio' && <Portfolio />}
				{selectedSection === 'Contact' && <Contact />}
				{selectedSection === 'Resume' && <Resume />}
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
