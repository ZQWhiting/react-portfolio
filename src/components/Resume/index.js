import React from 'react';
import './style.css';

function Resume() {
	const frontEndProficiencies = [
		{ name: 'MongoDB' },
		{ name: 'Express.js' },
		{ name: 'React.js' },
		{ name: 'Node.js' },
	];
	const backEndProficiencies = [{ name: 'Apis' }];
	return (
		<section id='resume'>
			{/* link to resume */}
			<h2>Resume</h2>
			<a href='#Resume'>Download my resume</a>
			{/* a list of developer's proficiencies */}
			<div>
				<h3>Front-end Proficiencies:</h3>
				<ul>
					{frontEndProficiencies.map(({ name }) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>
			<div>
				<h3>Back-end Proficiencies:</h3>
				<ul>
					{backEndProficiencies.map(({ name }) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Resume;
