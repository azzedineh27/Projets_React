import React, { useState } from "react";

import "./Panier.css"; // Assurez-vous de créer ce fichier CSS

const Panier = () => {
  const [panier, setPanier] = useState([]); // Tableau pour stocker les produits
  const [produit, setProduit] = useState(""); // Nom du produit à ajouter
  const [prix, setPrix] = useState(""); // Prix du produit à ajouter

  {/*Toutes les fonctions */ }

  const ajouterAuPanier = () => {
    if (produit.trim() && prix.trim() && !isNaN(prix)) {
      setPanier([...panier, { nom: produit, prix: parseFloat(prix) }]);
      setProduit("");
      setPrix("");
    }
  };

  const supprimerDuPanier = (index) => {
    const panierMisAJour = panier.filter((_, i) => i !== index);
    setPanier(panierMisAJour);
  };

  const calculerTotal = () => {
    return panier.reduce((total, article) => total + article.prix, 0).toFixed(2);
  };


  {/*Affichage et logique du panier */ }
  return (
    <div className="conteneur-panier">
      <h1 className="titre">Panier d'Achat</h1>
      <div className="section-input">
        <input
          type="text"
          value={produit}
          onChange={(e) => setProduit(e.target.value)}
          placeholder="Nom du produit"
          className="champ-saisie"
        />
        <input
          type="text"
          value={prix}
          onChange={(e) => setPrix(e.target.value)}
          placeholder="Prix"
          className="champ-saisie"
        />
        <button onClick={ajouterAuPanier} className="bouton-ajouter">
          Ajouter au panier
        </button>
      </div>
      <ul className="liste-panier">
        {panier.map((article, index) => (
          <li key={index} className="article-panier">
            {article.nom} - {article.prix.toFixed(2)} €
            <button
              onClick={() => supprimerDuPanier(index)}
              className="bouton-supprimer"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
      <h2 className="total">Total : {calculerTotal()} €</h2>
    </div>
  );
};

export default Panier;
