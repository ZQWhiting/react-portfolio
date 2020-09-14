import React, { useState } from 'react';
import logo from './logo.svg';
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
		<div>
			<Header
				selectedSection={selectedSection}
				setSelectedSection={setSelectedSection}
			/>
			{selectedSection === 'Contact' && <Contact />}
			{selectedSection === 'About' && <About />}
			{selectedSection === 'Portfolio' && <Portfolio />}
			{selectedSection === 'Resume' && <Resume />}
			<Footer />
		</div>
  );
}

export default App;
