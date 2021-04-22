import classNames from 'classnames';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Navigation({ selectedSection, setSelectedSection, menuSelected }) {
	const [render, setRender] = useState(menuSelected);

	useEffect(() => {
		if (menuSelected) setRender(true);
	}, [menuSelected]);

	const onAnimationEnd = () => {
		if (!menuSelected) setRender(false);
	};

	const navLinks = [
		{ name: 'About Me' },
		{ name: 'Portfolio' },
		{ name: 'Contacts' },
		{ name: 'Resume' },
	];
	return (
		render && (
			<ul
				className={classNames(
					'nav-menu',
					menuSelected ? 'fadeIn' : 'fadeOut'
				)}
				onAnimationEnd={onAnimationEnd}
			>
				{navLinks.map(({ name }) => {
					name = name.split(' ');
					return (
						<li className='nav-link' key={name[0]}>
							<Link
								to={`${name[0]}`.toLowerCase()}
								className={
									selectedSection === name[0]
										? 'isActive'
										: ''
								}
								onClick={() => setSelectedSection(`${name[0]}`)}
							>
								<span>{name.join(' ')}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		)
	);
}

export default Navigation;
