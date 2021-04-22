import React, { useEffect } from 'react';
import wordResume from '../../assets/content/resume.docx';
import pdfResume from '../../assets/content/resume.pdf';
import proficiencies from '../../assets/content/proficiencies';
import './style.css';

function Resume() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section id='resume'>
			<h1>
				<span>Resume</span>
			</h1>
			<embed
				src={pdfResume}
				type='application/pdf'
				width='100%'
				height='600px'
				style={{ maxHeight: 80 + 'vh' }}
			/>
			<a
				href={wordResume}
				download='ZQWhitingResume.docx'
				rel='noopener noreferrer'
				target='_blank'
			>
				Download Resume.docx
			</a>
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
