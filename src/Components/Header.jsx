import { Link } from 'react-router-dom';
import Switch from 'react-switch';
import "../styles/Header.css"
import MyNavbar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
const Header = ({ theme, toggleTheme }) => {
	return (
        <header className='navbar-fixed'>
		<MyNavbar theme={theme} toggleTheme={toggleTheme} />
        
        </header>
	);
};

export default Header;