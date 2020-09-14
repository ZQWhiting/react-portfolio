import React from 'react';
import './index.css';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const navLinks = [
		{ name: 'About Me' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' },
	];
	return (
		<>
			<div>Zachary Q. Whiting</div>
			<nav>
				<ul>
					{navLinks.map(({ name }) => {
						name = name.split(' ');
						return (
							<li key={name[0]}>
								<a
									href={`#${name[0]}`}
									className={
										selectedSection === name[0]
											? 'isActive'
											: undefined
									}
									onClick={() =>
										setSelectedSection(`${name[0]}`)
									}
								>
									<span>{name.join(' ')}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}

export default Header;
