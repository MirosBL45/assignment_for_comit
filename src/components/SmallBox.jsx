import { NavLink } from 'react-router-dom';
import arrowIcon from '../assets/arrowIcon.png';
import arrowIconDark from '../assets/arrowIconDark.png';
import { onMainNav } from './ChangeNav';

function SmallBox({ light, smallBoxCurrentPosts }) {
  return (
    <>
      {smallBoxCurrentPosts.map((item) => {
        return (
          <div className="contentBox smallBox" key={item.id}>
            <div className="smallImage">
              <img className="smallImage" src={item.image} alt={item.title} />
            </div>
            <div className="smallBoxText">
              <p className="titlecontentBox">lorem ipsum</p>
              <h2 className="headlinecontentBox">{item.title}</h2>
              <p className="descriptionBox">{item.description}</p>
              <NavLink onClick={onMainNav} className="linkContent" to="/lorem3">
                <span>Lorem Ipsum 3</span>
                <img
                  className="arrowIcon"
                  src={light ? arrowIcon : arrowIconDark}
                  alt="arrowIcon"
                />
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SmallBox;
