import React from 'react';
import Navigation from '../Navigation';
import './style.css';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	return (
		<section>
			<h1>Zachary Q. Whiting</h1>
			<Navigation
				selectedSection={selectedSection}
				setSelectedSection={setSelectedSection}
			/>
		</section>
	);
}

export default Header;
