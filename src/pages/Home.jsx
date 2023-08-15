import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import s from "./Home.module.css";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fecthDataCharacters = useMemo(() => {
    return async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${page}`
        );
        const data = await response.json();
        setCharacters(data.results);
        setLoading(false);
        setTotalPages(response.data.info.pages);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  }, [page]);

  useEffect(() => {
    console.log("me ejecuta al apretar el boton");
    fecthDataCharacters();
  }, [fecthDataCharacters]);

  const handlePreviousPage = () => {
    setPage(page - 1);
    console.log("pagina - 1");
  };

  const handleNextPage = () => {
    setPage(page + 1);
    console.log("pagina + 1");
  };

  console.log(characters);
  return (
    <div>
      <Navbar />
      <Pagination
        options={{ handleNextPage, handlePreviousPage, page, totalPages }}
      />
      <div className={s.container}>
        {loading ? (
          <h1 className={s.loading}>Cargando...</h1>
        ) : (
          characters.map((character) => (
            <Card key={character.id} data={character} />
          ))
        )}
      </div>
      <Pagination
        options={{ handleNextPage, handlePreviousPage, page, totalPages }}
      />
    </div>
  );
};

export default Home;
