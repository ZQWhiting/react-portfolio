import React from 'react';
import './style.css';
import Project from '../Project';
import img1 from '../../assets/images/runbuddy.jpg';
import img2 from '../../assets/images/puzzle.jpg';
import img3 from '../../assets/images/calendar.jpg';
import img4 from '../../assets/images/Calculator.jpg';
import img5 from '../../assets/images/LED.jpg';
import img6 from '../../assets/images/surf.jpg';

function Portfolio() {
	const projects = [
		{
			title: 'Hello',
			image: img1,
			deployed: 'deployed',
			repo: 'repo',
		},
		{ title: 'ABC', image: img5, deployed: 'deployed', repo: 'repo' },
		{
			title: 'World',
			image: img2,
			deployed: 'deployed',
			repo: 'repo',
		},
		{ title: 'DFE', image: img3, deployed: 'deployed', repo: 'repo' },
		{ title: 'FAD', image: img4, deployed: 'deployed', repo: 'repo' },
		{ title: 'fdsa', image: img6, deployed: 'deployed', repo: 'repo' },
	];
	return (
		<section>
			{/* For Each project, render a Project component with a title, and image, and links to the deployed app and the repository*/}
			{projects.map(({ title, image, deployed, repo }) => (
				<Project
					title={title}
					image={image}
					deployed={deployed}
					repo={repo}
					key={title}
				/>
			))}
		</section>
	);
}

export default Portfolio;
