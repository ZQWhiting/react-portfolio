import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigation(props) {
	const { selectedSection, setSelectedSection } = props;
	const navLinks = [
		{ name: 'About me' },
		{ name: 'Resume' },
		{ name: 'Portfolio' },
		{ name: 'Contacts' },
	];
	return (
		<ul className='nav-menu'>
			{navLinks.map(({ name }) => {
				name = name.split(' ');
				return (
					<li className='nav-link' key={name[0]}>
						<Link
							to={`${name[0]}`.toLowerCase()}
							className={
								selectedSection === name[0] ? 'isActive' : ''
							}
							onClick={() => setSelectedSection(`${name[0]}`)}
						>
							<span>{name.join(' ')}</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Navigation;
