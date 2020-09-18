import React from 'react';
import photo from '../../assets/images/me.jpg';
import './style.css';

function About() {
	const bioText = `fdsfdsafasf
	dfadsfasd
	safads
	fdas
	fds
	af
	asf
	dasfasfsdafdsafdsa`;

	return (
		<section>
			<h1>About me</h1>
			<div className='photo frame'>
				<img src={photo} alt='Zachary Q. Whiting' />
			</div>
			{bioText.split(/(?:\r\n)/g).map((paragraph, i) => (
				<p key={'paragraph' + i} className='bio-text'>
					{paragraph}
				</p>
			))}
		</section>
	);
}

export default About;
