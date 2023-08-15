import { useMemo, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import s from "./Home.module.css";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const fecthDataCharacters = useMemo(() => {
    return async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setCharacters(data.results);
        //console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  }, []);

  useState(() => {
    fecthDataCharacters();
  }, []);

  console.log(characters);
  return (
    <div>
      <Navbar />
      <div className={s.container}>
        {loading ? (
          <h1 className={s.loading}>Cargando...</h1>
        ) : (
          characters.map((character) => (
            <Card key={character.id} data={character} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
