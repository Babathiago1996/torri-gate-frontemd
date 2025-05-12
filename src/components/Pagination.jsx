import { MdArrowLeft, MdArrowRight } from "react-icons/md";

const Pagination = ({
  currentPage = 1,
  totalItems = 1000,
  itemsPerPage = 12,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange?.(newPage);
    }
  };

  return (
    <div className="flex items-center justify-between py-4 text-sm text-gray-600 layout">
      <span>
        Showing {itemsPerPage} of {totalItems}
      </span>

      <div className="flex items-center space-x-2">
        <span className="px-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-2 py-1 border rounded disabled:opacity-30"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          <MdArrowLeft size={22} />
        </button>

        <button
          className="px-2 py-1 border rounded disabled:opacity-30"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          <MdArrowRight size={22} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
