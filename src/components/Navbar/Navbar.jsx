import React, { useEffect, useRef, useContext } from 'react';
import './navbar.scss';
import { useNavigate, Link } from 'react-router-dom';
import { AppContext } from '../../FetchData';
import { ThemeContext } from '../../App';

function Navbar() {
	const { setSearchText } = useContext(AppContext);
	const { theme, toggleTheme } = useContext(ThemeContext);
	const searchRef = useRef('');
	const navigate = useNavigate();

	useEffect(() => searchRef.current.focus(), []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!(searchRef.current.value.trim().length === 0)) {
			setSearchText(searchRef.current.value.trim());
			navigate('/books');
		}
	};

	return (
		<div className='navbar' id={theme}>
			<Link className='link' to='/'>
				<h1 className='logo'>BK</h1>
			</Link>
			<div className='navbarRightSide__wrapper'>
				<form onSubmit={handleSubmit}>
					<input
						type='search'
						name='searchBar'
						placeholder='Search'
						id='searchBar'
						ref={searchRef}
					/>
				</form>
				<div className='hamburger_menu' onClick={toggleTheme}>
					M
				</div>
			</div>
		</div>
	);
}

export default Navbar;
