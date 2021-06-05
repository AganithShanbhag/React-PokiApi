import React, { useState, useEffect } from "react";
import axios from "axios";

const Comp1 = () => {
  const [num, setNum] = useState(null);
  const [name, setName] = useState(null);
  const [moves, setMoves] = useState(null);

  useEffect(() => {
    async function getPokemon() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name);
      setMoves(res.data.moves.length);
    }
    getPokemon();
  });

  return (
    <>
      <h1>Pokemon</h1>
      <h2>Choose a Value</h2>

      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="25">25</option>
      </select>
      <br />
      <br />
      <p>
        Your Choice:{" "}
        <span style={{ color: "red", fontWeight: "1000" }}>
          {num} {name}
        </span>
      </p>
      <p>
        No. of Moves: <span>{moves}</span>
      </p>
    </>
  );
};
export default Comp1;
