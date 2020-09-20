import React from 'react';
import Project from '../Project';
import projects from '../../assets/content/projects';
import './style.css';

function Portfolio() {
	return (
		<section>
			<h1>Portfolio</h1>
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
