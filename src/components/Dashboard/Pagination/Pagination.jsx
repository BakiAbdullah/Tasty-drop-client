const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="mt-4 flex justify-center">
      <ul className="flex space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <li key={index}>
            <button
              onClick={() => onPageChange(index + 1)}
              className={`px-3 py-1 rounded-md ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 dark-text"
              }`}>
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
