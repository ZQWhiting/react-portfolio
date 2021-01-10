import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
	const [selectedSection, setSelectedSection] = useState('About');

	return (
		<>
			<Router basename={process.env.PUBLIC_URL}>
				<Header
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
				/>
				<main>
					<Switch>
						<Route exact path={['/', '/about']} component={About} />
						<Route
							exact
							path={'/portfolio'}
							component={Portfolio}
						/>
						<Route exact path={'/contact'} component={Contact} />
						<Route exact path={'/resume'} component={Resume} />
						<Route component={NotFound} />
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
