import React, {useState} from 'react';
import Navigation from '../Navigation';
import './style.css';
import logo from '../../assets/images/Logo.png';

function Header(props) {
	const { selectedSection, setSelectedSection } = props;
	const [menuSelected, setMenuSelected] = useState(false)

	return (
		<>
			<div className='logo-container'>
				<img
					src={logo}
					alt='Zachary Q Whiting. Full-Stack Developer'
				></img>
			</div>
			<div className='nav-bar'>
				<div className='nav-menu'>
					<button className='nav-menu-btn' onClick={() => setMenuSelected(!menuSelected)}>
						Nav
					</button>
					{menuSelected && (<div className='nav-menu-content'>
						<Navigation
							selectedSection={selectedSection}
							setSelectedSection={setSelectedSection}
						/>
					</div>)}
				</div>
			</div>
		</>
	);
}

export default Header;
