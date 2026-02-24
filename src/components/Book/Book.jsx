import "./Book.css";
import LikeButton from "../LikeButton/LikeButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Book = ({
  id,
  name,
  description,
  genre,
  like,
  favorite,
  books,
  setBooks,
  darkMode,
}) => {
  const toggleFavorite = () => {
    const updatedBooks = books.map((book) =>
      book["id"] === id ? { ...book, favorite: !book["favorite"] } : book,
    );
    setBooks(updatedBooks);
  };
  return (
    <div className={darkMode ? "book dark" : "book light"} id={id}>
      <h2>{name}</h2>
      <p> {description} </p>
      <p className="genre"> {genre} </p>
      <LikeButton likeAmount={like} />
      <FavoriteButton favorite={favorite} onToggle={toggleFavorite} />
    </div>
  );
};
export default Book;
