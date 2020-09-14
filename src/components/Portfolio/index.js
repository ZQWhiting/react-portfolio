import React from 'react';
import './style.css';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			title: 'Hello',
			image: 'abcdefg',
			deployed: 'asdf',
			repo: 'vahiuvda',
		},
		{ title: 'ABC', image: 'abcdefg', deployed: 'asdf', repo: 'asdf' },
		{ title: 'World', image: 'abcdefg', deployed: 'asdf', repo: 'asdfwva' },
		{ title: 'DFE', image: 'abcdefg', deployed: 'fdsa', repo: 'asdf' },
		{ title: 'FAD', image: 'abcdefg', deployed: 'asdf', repo: 'asdf' },
		{ title: 'fdsa', image: 'abcdefg', deployed: 'asdf', repo: 'asdf' },
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
				/>
			))}
		</section>
	);
}

export default Portfolio;
