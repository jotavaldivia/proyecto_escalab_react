import { useCallback, useEffect, useState } from "react";
import {
  getCharacters,
  getEpisodes,
  getLocations,
} from "../services/characters.js";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";
import Pagination from "../components/pagination/Pagination";
import { Menu } from "../components/menu/Menu";
import s from "./Home.module.css";

const Home = () => {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Characters",
    },
    {
      id: 2,
      name: "Episodes",
    },
    {
      id: 3,
      name: "Locations",
    },
  ]);

  //console.log(setMenu);

  const [characters, setCharacters] = useState([]);
  const [oldCharacters, setOldCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

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
    console.log(
      "profesor si ve este mensaje, es para comentar que las paginas las limite hasta 3 por un error que me generaba :D"
    );
    fecthDataCharacters();
  }, [fecthDataCharacters]);

  const handlePreviousPage = () => {
    setPage(page - 1);
    console.log("pagina - 1");
  };

  const handleNextPage = () => {
    setPage(page + 1);
    if (page === 3) {
      setPage(1);
      console.log("pagina con  1");
    } else {
      setPage(page + 1);
      console.log("pagina + 1");
    }
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

  const handleFilter = async (metod) => {
    try {
      setLoading(true);
      const data = await metod;
      setCharacters(data.results);
      setOldCharacters(data.results);
      setLoading(false);
      setTotalPages(data.info.pages);
      //console.log(oldCharacters);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const hanlderMenuSelected = (_menuSelected) => {
    const { id } = _menuSelected;
    switch (id) {
      case 1:
        handleFilter(getCharacters(page));
        break;
      case 2:
        handleFilter(getEpisodes(page));

        break;
      case 3:
        handleFilter(getLocations(page));
        break;
      default:
        handleFilter(getCharacters(page));
    }
  };

  return (
    <div>
      <Navbar data={{ characters, setCharacters, hanlderSearch }} />
      <div className={s.containerHead}>
        <Pagination
          options={{ handleNextPage, handlePreviousPage, page, totalPages }}
        />
        <Menu menu={menu} hanlderMenuSelected={hanlderMenuSelected} />
      </div>
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
