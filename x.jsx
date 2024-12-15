<div className="join my-10">
  <button
    className={`${currentPage === 1 && 'btn-disabled'} join-item btn`}
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Previous page
  </button>
  {
    Array(totalPage).fill().map((_, index) => (
      <input
        key={index}
        className="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label={index + 1}
        checked={currentPage === index + 1}
        onChange={() => setCurrentPage(index + 1)}
      />
    ))
  }
  <button
    className={`${currentPage === totalPage && 'btn-disabled'} join-item btn`}
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPage}
  >
    Next
  </button>
</div>
