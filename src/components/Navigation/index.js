import React from 'react';
import './style.css';

function Navigation(props) {
	const { selectedSection, setSelectedSection } = props;
	const navLinks = [
		{ name: 'About me' },
		{ name: 'Portfolio' },
		// { name: 'Contact me' },
		{ name: 'Resume' },
	];
	return (
		<ul className='nav-menu'>
			{navLinks.map(({ name }) => {
				name = name.split(' ');
				return (
					<li className='nav-link' key={name[0]}>
						<a
							href={`#${name[0]}`}
							className={
								selectedSection === name[0] ? 'isActive' : ''
							}
							onClick={() => setSelectedSection(`${name[0]}`)}
						>
							<span>{name.join(' ')}</span>
						</a>
					</li>
				);
			})}
		</ul>
	);
}

export default Navigation;
