import React from 'react';
import resume from '../../assets/content/resume.pdf';
import proficiencies from '../../assets/content/proficiencies';
import './style.css';

function Resume() {
	return (
		<section id='resume'>
			{/* link to resume */}
			<h1>Resume</h1>
			<a href={resume} download rel='noopener noreferrer' target='_blank'>
				Download my resume
			</a>
			{/* a list of developer's proficiencies */}
			<div>
				<h2>Proficiencies:</h2>
				<ul id='proficiencies'>
					{proficiencies.map(({ name }) => (
						<li key={name}>{name}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default Resume;
