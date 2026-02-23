import "./FavoriteButton.css";
import React, { useState } from "react";

const FavoriteButton = ({ favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
    } else {
      setIsFavorite(true);
    }
  };

  return (
    <div>
      <button onClick={handleFavorite}>{isFavorite ? "★" : "☆"}</button>
    </div>
  );
};

export default FavoriteButton;
