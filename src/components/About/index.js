import React from 'react';
import photo from '../../assets/images/me.jpg';
import './style.css';

function About() {
	return (
		<section>
			<div className='photo'>
				<img src={photo} alt='Zachary Q. Whiting' />
			</div>
			<div className='bio'>This is my bio.</div>
		</section>
	);
}

export default About;
