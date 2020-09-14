import React from 'react';
import './style.css';

function Project({ title, image, deployed, repo }) {
	return (
		<div>
			<div>{title}</div>
			<div>{image}</div>
			<div>
				<a href={deployed} target='_blank' rel='noopener noreferrer'>
					{deployed}
				</a>
			</div>
			<div>
				<a href={repo} target='_blank' rel='noopener noreferrer'>
					{repo}
				</a>
			</div>
		</div>
	);
}

export default Project;
