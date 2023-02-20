import './styles/css/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Lorem1 from './components/lorems/Lorem1';
import Lorem2 from './components/lorems/Lorem2';
import Lorem3 from './components/lorems/Lorem3';
import Lorem4 from './components/lorems/Lorem4';

function App() {
  //fetch data from server
  const BASE_URL = process.env.REACT_APP_URL;
  const [searchedItems, setSearchedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getSearched() {
    const data = await fetch(BASE_URL + `?limit=40`);
    const items = await data.json();
    setSearchedItems(items);
  }

  useEffect(() => {
    setLoading(false);
    getSearched();
    // eslint-disable-next-line
  }, []);

  //for pagination
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [bigBoxPerPage, setBigBoxPerPag] = useState(6);
  // eslint-disable-next-line
  const [smallBoxPerPage, setSmallBoxPerPage] = useState(2);

  const bigBoxLastPostIndex = currentPage * bigBoxPerPage;
  const smallBoxLastPostIndex = currentPage * smallBoxPerPage;

  const bigBoxFirstPostIndex = bigBoxLastPostIndex - bigBoxPerPage;
  const smallBoxFirstPostIndex = smallBoxLastPostIndex - smallBoxPerPage;

  const bigBoxCurrentPosts = searchedItems.slice(
    bigBoxFirstPostIndex,
    bigBoxLastPostIndex
  );
  const smallBoxCurrentPosts = searchedItems.slice(
    smallBoxFirstPostIndex,
    smallBoxLastPostIndex
  );

  //set light/dark theme
  const [light, setLight] = useState(true);

  useEffect(() => {
    getLocalTheme();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveLocalTheme();
    // eslint-disable-next-line
  }, [light]);

  function onDarkLight() {
    if (light) {
      setLight(false);
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
      setLight(true);
    }
  }

  function saveLocalTheme() {
    localStorage.setItem('lightTheme', JSON.stringify(light));
  }

  function getLocalTheme() {
    if (localStorage.getItem('lightTheme') === null) {
      localStorage.setItem('lightTheme', 'true');
    } else {
      let themeLocal = JSON.parse(localStorage.getItem('lightTheme'));
      setLight(themeLocal);
      if (!themeLocal) {
        document.body.classList.add('darkMode');
      } else {
        document.body.classList.remove('darkMode');
      }
    }
  }

  return (
    <>
      <h1 className="nonVisible">Our Products</h1>
      <Router>
        <Header light={light} onDarkLight={onDarkLight} />
        <Routes>
          <Route
            path="/"
            element={
              <Content
                bigBoxCurrentPosts={bigBoxCurrentPosts}
                smallBoxCurrentPosts={smallBoxCurrentPosts}
                light={light}
                loading={loading}
              />
            }
          />
          <Route path="/lorem1" element={<Lorem1 />} />
          <Route path="/lorem2" element={<Lorem2 />} />
          <Route path="/lorem3" element={<Lorem3 />} />
          <Route path="/lorem4" element={<Lorem4 />} />
        </Routes>
        <Pagination
          totalPosts={searchedItems.length}
          bigBoxPerPage={bigBoxPerPage}
          smallBoxPerPage={smallBoxPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <Footer />
      </Router>
    </>
  );
}

export default App;
