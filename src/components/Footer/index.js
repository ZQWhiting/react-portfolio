import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faFacebook,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './style.css';

function Footer() {
	return (
		<footer>
			<div>
				<a
					href='https://github.com/ZQWhiting'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href='https://www.linkedin.com/in/zqwhiting'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
				<a
					href='https://www.facebook.com/zachary.whiting.796'
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon icon={faFacebook} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
