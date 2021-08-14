import { useState, useEffect } from "react";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Characters">
      {characters.map((character) => (
        <h2>{character.name}</h2>
      ))}
    </div>
  );
}

export default Characters;
