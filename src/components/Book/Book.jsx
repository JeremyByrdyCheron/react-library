import "./Book.css";
import LikeButton from "../LikeButton/LikeButton";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const Book = ({ id, name, description, genre, like, favorite }) => {
  return (
    <div className="book" id={id}>
      <h2>{name}</h2>
      <p> {description} </p>
      <p className="genre"> {genre} </p>
      <LikeButton likeAmount={like} />
      <FavoriteButton favorite={favorite} />
    </div>
  );
};
export default Book;
