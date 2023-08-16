import PropTypes from "prop-types";
import s from "./Pagination.module.css";
const Pagination = ({ options }) => {
  const { page, totalPages, handleNextPage, handlePreviousPage } = options;
  // console.log(options);
  return (
    <div className={s.container}>
      <button onClick={() => handlePreviousPage()} disabled={page === 1}>
        Anterior
      </button>
      <p>{page}</p>
      <button onClick={() => handleNextPage()} disabled={page === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  options: PropTypes.shape({
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handleNextPage: PropTypes.func.isRequired,
    handlePreviousPage: PropTypes.func.isRequired,
  }),
};
