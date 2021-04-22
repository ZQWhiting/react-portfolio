import React, { useEffect } from 'react';
import wordResume from '../../assets/content/resume.docx';
import pdfResume from '../../assets/content/resume.pdf';
import proficiencies from '../../assets/content/proficiencies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileDownload,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
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
			<a href={pdfResume} rel='noopener noreferrer' target='_blank'>
				Link to Resume.pdf
				<FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
			</a>
			<a
				href={wordResume}
				download='ZQWhitingResume.docx'
				rel='noopener noreferrer'
				target='_blank'
			>
				Download Resume.docx
				<FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
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
