import styled from "styled-components";
import s from "./Search.module.css";
import PropTypes from "prop-types";

const InputSearch = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  margin: 10px;
  font-size: 18px;
  color: #333;
  outline: none;
  transition: 0.3s ease all;

  &:hover {
    border-color: #000;
  }
  &:focus {
    border-color: #000;
    box-shadow: 0 0 5px 0 #000;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Search = ({ data }) => {
  const { hanlderSearch } = data;

  return (
    <div className={s.search}>
      <form className={s.form}>
        <InputSearch
          placeholder="Buscar : Rick Sanchez..."
          onChange={(e) => {
            hanlderSearch(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Search;

Search.propTypes = {
  data: PropTypes.object.isRequired,
};
