import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './style.scss';

function Project({ title, image, deployed, repo }) {
	return (
		<div>
			<div className='img-wrapper'>
				<img src={image} alt={title} />
				<div className='project-link-container'>
					<a
						href={deployed}
						target='_blank'
						rel='noopener noreferrer'
					>
						{title}
					</a>
					<a href={repo} target='_blank' rel='noopener noreferrer'>
						<FontAwesomeIcon icon={faGithub}     />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Project;
