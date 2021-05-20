import React, { useEffect } from 'react';
import wordResume from '../../assets/content/resume.docx';
import pdfResume from '../../assets/content/resume.pdf';
import proficiencies from '../../assets/content/proficiencies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileDownload,
	faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Resume() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section id='resume'>
			<h1>
				<span>Resume</span>
			</h1>
			<h2>
				<a href={pdfResume} rel='noopener noreferrer' target='_blank'>
					Resume.pdf
					<FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
				</a>
			</h2>
			<h2>
				<a
					href={wordResume}
					download='ZQWhitingResume.docx'
					rel='noopener noreferrer'
					target='_blank'
				>
					Resume.docx
					<FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
				</a>
			</h2>
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
