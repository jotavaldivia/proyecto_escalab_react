import styled from "styled-components";
import s from "./Search.module.css";

const InputSearch = styled.input`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 80%;
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

const ButtonSearch = styled.button`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 100px;
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
`;

const Search = () => {
  return (
    <div className={s.search}>
      <ButtonSearch> BUSCAR </ButtonSearch>
      <InputSearch placeholder="Ricky Sanchez..." />
    </div>
  );
};

export default Search;
