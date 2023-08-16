const BASE_URL = `https://rickandmortyapi.com/api`;

export const getCharacters = async (page) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data = await response.json();
  return data;
};
