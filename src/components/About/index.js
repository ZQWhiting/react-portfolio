import React from 'react';
import photo from '../../assets/images/me.jpg';
import bioText from '../../assets/content/bio_text';
import './style.css';

function About() {
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
