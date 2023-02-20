import { NavLink } from 'react-router-dom';
import { offMainNav } from '../ChangeNav';

function Lorem4() {
  return (
    <div className="loremDiv">
      <p>Lorem4</p>
      <NavLink onClick={offMainNav} className="loremLink" to="/">
        GO HOME
      </NavLink>
    </div>
  );
}

export default Lorem4;
