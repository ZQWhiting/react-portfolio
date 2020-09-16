import React, { useState } from 'react';
import Navigation from '../Navigation';
import './style.css';
import logo from '../../assets/images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const [menuSelected, setMenuSelected] = useState(false);

	return (
		<>
			<header
				className='header'
				onClick={() => setMenuSelected(!menuSelected)}
			>
				<div></div>
				<div className='logo-container'>
					<img
						src={logo}
						alt='Zachary Q Whiting. Full-Stack Developer'
					></img>
				</div>
				<div className='nav-btn-container'>
					<button
						className={`nav-menu-btn ${
							menuSelected ? 'isActive' : ''
						}`}
					>
						<FontAwesomeIcon icon={faBars} alt='navigation menu' />
					</button>
				</div>
				{menuSelected && (
					<Navigation
						selectedSection={selectedSection}
						setSelectedSection={setSelectedSection}
					/>
				)}
			</header>
		</>
	);
}

export default Header;
