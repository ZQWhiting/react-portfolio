import React, { useEffect } from 'react';
import Project from '../Project';
import projects from '../../assets/content/projects';
import './style.scss';

function Portfolio() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section>
			<h1>
				<span>Portfolio</span>
			</h1>
			{/* For Each project, render a Project component with a title, and image, and links to the deployed app and the repository*/}
			<div id='project-grid'>
				{projects.map(({ title, image, deployed, repo }) => (
					<Project
						title={title}
						image={image}
						deployed={deployed}
						repo={repo}
						key={title}
					/>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
