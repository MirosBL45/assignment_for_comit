import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import logo from '../assets/logo.png';
import moonIcon from '../assets/moonIcon.png';
import sunIcon from '../assets/sunIcon.png';
import { onMainNav } from './ChangeNav';
import { offMainNav } from './ChangeNav';

function Header({ light, onDarkLight }) {
  return (
    <header>
      <div className="container">
        <div className="headerContainer">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="themeIcon">
            <img
              onClick={onDarkLight}
              id="themeChange"
              src={light ? moonIcon : sunIcon}
              alt="theme change"
              title="switch dark/light mode"
            />
          </div>
          <div className="topMenu">
            <NavLink
              onClick={offMainNav}
              to="/"
              className={({ isActive }) =>
                isActive ? 'activeLink headerLinkSmall' : 'headerLinkSmall'
              }
            >
              Lorem Ipsum
            </NavLink>
            <NavLink
              onClick={onMainNav}
              to="/lorem3"
              className={({ isActive }) =>
                isActive ? 'activeLink headerLinkSmall' : 'headerLinkSmall'
              }
            >
              Lorem Ipsum3
            </NavLink>
            <NavLink
              onClick={onMainNav}
              to="/lorem4"
              className={({ isActive }) =>
                isActive ? 'activeLink headerLinkSmall' : 'headerLinkSmall'
              }
            >
              Lorem Ipsum4
            </NavLink>
            <NavLink onClick={offMainNav} className="headerLinkSmall" to="/">
              Lorem Ipsum
            </NavLink>
          </div>
        </div>
        <Navbar light={light} />
      </div>
    </header>
  );
}

export default Header;
