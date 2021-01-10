import React from 'react';
import wordResume from '../../assets/content/resume.docx';
import pdfResume from '../../assets/content/resume.pdf';
import proficiencies from '../../assets/content/proficiencies';
import './style.css';

function Resume() {
	return (
		<section id='resume'>
			{/* link to resume */}
			<h1>Resume</h1>
			<embed
				src={pdfResume}
				type='application/pdf'
				width='100%'
				height='600px'
				style={{ maxHeight: 80 + 'vh' }}
			/>
			<a
				href={wordResume}
				download
				rel='noopener noreferrer'
				target='_blank'
			>
				Download resume.(docx)
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
