import PropTypes from "prop-types";
import s from "./Card.module.css";
const Card = ({ data }) => {
  //console.log(data);
  return (
    <div className={s.card}>
      {data.image === undefined ? (
        <img
          src="https://rickandmortyapi.com/api/character/avatar/19.jpeg"
          alt="Rick and Morty"
        />
      ) : (
        <img src={data.image} alt="Rick and Morty" />
      )}

      <h2>{data.name}</h2>
      <p>{data.species}</p>
      <p>{data.status}</p>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};
