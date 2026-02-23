import "./FavoriteButton.css";

const FavoriteButton = ({ favorite, onToggle }) => {
  return (
    <div>
      <button onClick={onToggle}>{favorite ? "★" : "☆"}</button>
    </div>
  );
};

export default FavoriteButton;
