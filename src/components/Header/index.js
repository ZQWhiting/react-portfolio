import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import logo from '../../assets/images/logo.png';
import './style.css';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const [menuSelected, setMenuSelected] = useState(false);

	return (
		<>
			<header
				className='header'
				onClick={() => setMenuSelected(!menuSelected)}
			>
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
