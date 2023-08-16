import { useCallback, useEffect, useState } from "react";
import { getCharacters } from "../services/characters.js";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import s from "./Home.module.css";
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [oldCharacters, setOldCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  // const fecthDataCharacters = useMemo(() => {
  //   return async () => {
  //     try {
  //       const response = await fetch(
  //         `https://rickandmortyapi.com/api/character/?page=${page}`
  //       );
  //       const data = await response.json();
  //       setCharacters(data.results);
  //       setOldCharacters(data.results);
  //       setLoading(false);
  //       setTotalPages(response.data.info.pages);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //   };
  // }, [page]);

  const fecthDataCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getCharacters(page);
      setCharacters(data.results);
      setOldCharacters(data.results);
      setLoading(false);
      setTotalPages(data.info.pages);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
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

  const hanlderSearch = (value) => {
    // console.log(value);
    const characterFilter = characters.filter((character) =>
      character.name.toLowerCase().includes(value.toLowerCase())
    );
    setCharacters(characterFilter);
    if (value === "") {
      setCharacters(oldCharacters);
    }
  };

  return (
    <div>
      <Navbar data={{ characters, setCharacters, hanlderSearch }} />
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
        {characters.length === 0 && !loading && (
          <h2 className={s.noResults}>No hay resultados</h2>
        )}
      </div>
      <Pagination
        options={{ handleNextPage, handlePreviousPage, page, totalPages }}
      />
    </div>
  );
};

export default Home;
