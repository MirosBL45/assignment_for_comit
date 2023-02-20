import BigBox from './BigBox';
import SmallBox from './SmallBox';
import Spinner from './Spinner';

function Content({
  loading,
  light,
  searchedItems,
  bigBoxCurrentPosts,
  smallBoxCurrentPosts,
}) {
  if (loading) {
    return <Spinner />;
  }
  return (
    <main>
      <div className="container">
        <div className="gridContent">
          <BigBox
            light={light}
            bigBoxCurrentPosts={bigBoxCurrentPosts}
            searchedItems={searchedItems}
          />
          <SmallBox
            light={light}
            smallBoxCurrentPosts={smallBoxCurrentPosts}
            searchedItems={searchedItems}
          />
        </div>
      </div>
    </main>
  );
}

export default Content;
