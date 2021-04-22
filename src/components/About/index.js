import React, { useEffect } from 'react';
import photo from '../../assets/images/me.jpg';
import bioText from '../../assets/content/bio_text';
import className from 'classnames';
import './style.css';

function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<section>
			<h1>
				<span>About Me</span>
			</h1>
			<div className='photo frame'>
				<img src={photo} alt='Zachary Q. Whiting' />
			</div>
			<div id='bio-text-wrapper'>
				{bioText.split(/(?:\r\n)/g).map((paragraph, i) => (
					<p
						key={'paragraph' + i}
						className={className(
							'bio-text',
							i === 0 && 'newspaper'
						)}
					>
						{paragraph}
					</p>
				))}
			</div>
		</section>
	);
}

export default About;
