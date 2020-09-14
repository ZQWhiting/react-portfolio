import React from 'react';
import './style.css';

function Resume() {
	const proficiencies = [
		{ name: 'MongoDB' },
		{ name: 'Express.js' },
		{ name: 'React.js' },
		{ name: 'Node.js' },
	];
	return (
		<section>
			{/* link to resume */}
			<h2>Resume</h2>
			<a href='#Resume'>Resume</a>
			{/* a list of developer's proficiencies */}
			<h3>Proficiencies:</h3>
			<ul>
				{proficiencies.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</section>
	);
}

export default Resume;
