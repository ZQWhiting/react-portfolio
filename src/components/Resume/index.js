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
			<h1>Resume</h1>
			<a href='#Resume'>Download my resume</a>
			{/* a list of developer's proficiencies */}
			<div>
				<h2>Front-end Proficiencies:</h2>
				<ul>
					{frontEndProficiencies.map(({ name }) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>
			<div>
				<h2>Back-end Proficiencies:</h2>
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
