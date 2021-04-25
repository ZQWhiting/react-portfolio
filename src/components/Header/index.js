import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import classNames from 'classnames';
import logo from '../../assets/images/logo.png';
import './style.scss';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const [menuSelected, setMenuSelected] = useState(false);

	return (
		<>
			<header
				className={classNames(
					'header',
					menuSelected ? 'grow' : 'shrink'
				)}
				onBlur={() => setMenuSelected(false)}
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
						onClick={() => setMenuSelected(!menuSelected)}
					>
						<FontAwesomeIcon icon={faBars} alt='navigation menu' />
					</button>
				</div>

				<Navigation
					selectedSection={selectedSection}
					setSelectedSection={setSelectedSection}
					menuSelected={menuSelected}
				/>
			</header>
		</>
	);
}

export default Header;
