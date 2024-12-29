import React, { useState } from "react";

const Case = ({ valeur, surClic }) => {
  return (
    <button
      className="case"
      onClick={surClic}
      style={{ fontSize: "24px", width: "60px", height: "60px" }}
    >
      {valeur}
    </button>
  );
};

const Morpion = () => {
  const [plateau, setPlateau] = useState(Array(9).fill(null));
  const [tourDeX, setTourDeX] = useState(true);
  const gagnant = calculerGagnant(plateau);

  const gérerClic = (index) => {
    if (plateau[index] || gagnant) return;

    const nouveauPlateau = [...plateau];
    nouveauPlateau[index] = tourDeX ? "X" : "O";
    setPlateau(nouveauPlateau);
    setTourDeX(!tourDeX);
  };

  const réinitialiserPartie = () => {
    setPlateau(Array(9).fill(null));
    setTourDeX(true);
  };

  return (
    <div>
      <h1>Morpion</h1>
      <div className="plateau" style={{ display: "grid", gridTemplateColumns: "repeat(3, 60px)", gap: "5px" }}>
        {plateau.map((valeur, index) => (
          <Case
            key={index}
            valeur={valeur}
            surClic={() => gérerClic(index)}
          />
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        {gagnant ? (
          <h2>Gagnant : {gagnant}</h2>
        ) : plateau.every((case_) => case_ !== null) ? (
          <h2>Égalité !</h2>
        ) : (
          <h2>Prochain tour : {tourDeX ? "X" : "O"}</h2>
        )}
        <button onClick={réinitialiserPartie} style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

const calculerGagnant = (plateau) => {
  const combinaisonsGagnantes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of combinaisonsGagnantes) {
    if (plateau[a] && plateau[a] === plateau[b] && plateau[a] === plateau[c]) {
      return plateau[a];
    }
  }

  return null;
};

export default Morpion;
