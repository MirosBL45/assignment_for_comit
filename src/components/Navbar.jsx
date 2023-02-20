import { NavLink } from 'react-router-dom';
import closeIcon from '../assets/closeIcon.png';
import closeIconDark from '../assets/closeIconDark.png';
import menuIcon from '../assets/menuIcon.png';
import menuIconDark from '../assets/menuIconDark.png';
import { onMainNav } from './ChangeNav';
import { offMainNav } from './ChangeNav';
import { moveMainNav } from './ChangeNav';
import { giveMainNav } from './ChangeNav';

function Navbar({ light }) {
  return (
    <div id="mainNav" className="topNav">
      <nav id="navigation">
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          to="/"
          className={({ isActive }) =>
            isActive ? 'activeLink headerLinkBig' : 'headerLinkBig'
          }
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            onMainNav();
          }}
          className={({ isActive }) =>
            isActive ? 'activeLink headerLinkBig' : 'headerLinkBig'
          }
          to="/lorem1"
        >
          Lorem Ipsum1
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            onMainNav();
          }}
          className={({ isActive }) =>
            isActive ? 'activeLink headerLinkBig' : 'headerLinkBig'
          }
          to="/lorem2"
        >
          Lorem Ipsum2
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <NavLink
          onClick={() => {
            moveMainNav();
            offMainNav();
          }}
          className="headerLinkBig"
          to="/"
        >
          Lorem Ipsum
        </NavLink>
        <button onClick={moveMainNav} className="navBtn navCloseBtn">
          <img src={light ? closeIcon : closeIconDark} alt="closeIcon" />
        </button>
      </nav>
      <button onClick={giveMainNav} className="navBtn">
        <img src={light ? menuIcon : menuIconDark} alt="menuIcon" />
      </button>
    </div>
  );
}

export default Navbar;
