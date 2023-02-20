import { NavLink } from 'react-router-dom';
import arrowIcon from '../assets/arrowIcon.png';
import arrowIconDark from '../assets/arrowIconDark.png';
import { onMainNav } from './ChangeNav';

function BigBox({ light, bigBoxCurrentPosts }) {
  return (
    <>
      {bigBoxCurrentPosts.map((item) => {
        return (
          <div className="contentBox bigBox" key={item.id}>
            <div className="bigImage">
              <img className="bigImage" src={item.image} alt={item.title} />
            </div>
            <div className="bigBoxText">
              <p className="titlecontentBox">lorem ipsum</p>
              <h2 className="headlinecontentBox">{item.title}</h2>
              <p className="descriptionBox">{item.description}</p>
              <NavLink onClick={onMainNav} className="linkContent" to="/lorem2">
                <span>Lorem Ipsum 2</span>
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

export default BigBox;
