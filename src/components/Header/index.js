import React from 'react';
import './index.css';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const navLinks = [
		{ name: 'About' },
		{ name: 'Portfolio' },
		{ name: 'Contact' },
		{ name: 'Resume' },
	];
	return (
		<header>
			Zachary Q. Whiting
			<nav>
				<ul>
					{navLinks.map((link) => {
						return (
							<li>
								<a
									href={`#${link.name}`}
									className={
										selectedSection === link.name &&
										'isActive'
									}
									onClick={() =>
										setSelectedSection(`${link.name}`)
									}
								>
									<span>{link.name}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}

export default Header;
