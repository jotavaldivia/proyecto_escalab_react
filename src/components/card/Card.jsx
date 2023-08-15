import s from "./Card.module.css";
const Card = ({ data }) => {
  const { name, image, species, status } = data;
  console.log(data);
  return (
    <div className={s.card}>
      <img src={image} alt="Rick and Morty" />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{status}</p>
    </div>
  );
};

export default Card;
