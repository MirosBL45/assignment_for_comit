import { NavLink } from 'react-router-dom';
import { offMainNav } from '../ChangeNav';

function Lorem2() {
  return (
    <div className="loremDiv">
      <p>Lorem2</p>
      <NavLink onClick={offMainNav} className="loremLink" to="/">
        GO HOME
      </NavLink>
    </div>
  );
}

export default Lorem2;
