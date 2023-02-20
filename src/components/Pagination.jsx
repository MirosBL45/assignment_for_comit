function Pagination({
  totalPosts,
  bigBoxPerPage,
  smallBoxPerPage,
  setCurrentPage,
  currentPage,
}) {
  let bigPages = [];
  let smallPages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / bigBoxPerPage); i++) {
    bigPages.push(i);
  }

  for (let i = 1; i <= Math.ceil(totalPosts / smallBoxPerPage); i++) {
    smallPages.push(i);
  }

  const nextPage = () => {
    if (currentPage !== bigPages.length) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div className="pagination">
        <button onClick={prevPage} className="prevNext">
          Previous
        </button>
        {bigPages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentPage(page)}
              className={page === currentPage ? 'active' : ''}
            >
              {page}
            </button>
          );
        })}
        <button onClick={nextPage} className="prevNext">
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
