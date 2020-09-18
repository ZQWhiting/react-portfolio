import React from 'react';
import './style.css';
import Project from '../Project';
import img1 from '../../assets/images/media4u.jpg';
import img2 from '../../assets/images/budget_tracker.jpg';
import img3 from '../../assets/images/photo_port.jpg';
import img4 from '../../assets/images/food_festival.jpg';
import img5 from '../../assets/images/weather_dashboard.jpg';
import img6 from '../../assets/images/tech_blog.jpg';

function Portfolio() {
	const projects = [
		{
			title: 'Media4U',
			image: img1,
			deployed: 'https://zqwhiting.github.io/media4u/',
			repo: 'http://github.com/zqwhiting/media4u',
		},
		{
			title: 'Budget Tracker',
			image: img2,
			deployed: 'https://zqwhiting-budget-tracker-pwa.herokuapp.com/',
			repo: 'http://github.com/zqwhiting/budget-tracker-pwa',
		},
		{
			title: 'Photo Port',
			image: img3,
			deployed: 'https://zqwhiting.github.io/photo-port/',
			repo: 'http://github.com/zqwhiting/photo-port',
		},
		{
			title: 'Food Festival',
			image: img4,
			deployed: 'https://zqwhiting.github.io/food-festival/',
			repo: 'http://github.com/zqwhiting/food-festival',
		},
		{
			title: 'Weather Dashboard',
			image: img5,
			deployed: 'https://zqwhiting.github.io/weather-dashboard/',
			repo: 'http://github.com/zqwhiting/weather-dashboard',
		},
		{
			title: 'Tech Blog',
			image: img6,
			deployed: 'https://zqw-tech-blog.herokuapp.com/',
			repo: 'http://github.com/zqwhiting/tech-blog',
		},
	];
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
