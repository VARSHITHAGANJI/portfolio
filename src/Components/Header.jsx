import { Link } from 'react-router-dom';

import "../styles/Header.css"
import MyNavbar from './NavBar';

const Header = ({ theme, toggleTheme }) => {
	return (
		<MyNavbar theme={theme} toggleTheme={toggleTheme} />
	);
};

export default Header;