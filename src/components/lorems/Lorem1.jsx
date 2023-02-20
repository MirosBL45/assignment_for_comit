import { NavLink } from 'react-router-dom';
import { offMainNav } from '../ChangeNav';

function Lorem1() {
  return (
    <div className="loremDiv">
      <p>Lorem1</p>
      <NavLink onClick={offMainNav} className="loremLink" to="/">
        GO HOME
      </NavLink>
    </div>
  );
}

export default Lorem1;
