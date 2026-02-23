import { Link } from "react-router-dom";
import Book from "../../components/Book/Book";

const Profile = ({ books, setBooks }) => {
  const filteredFavoriteBooks = books.filter((book) => book["favorite"]);

  return (
    <div>
      <h1>Bienvenue sur la page Profile</h1>
      <Link to="/">Accueil</Link>
      {filteredFavoriteBooks.map((book) => (
        <Book
          id={book["id"]}
          name={book["nom"]}
          description={book["description"]}
          genre={book["genre"]}
          like={book["like"]}
          favorite={book["favorite"]}
          key={book["id"]}
        />
      ))}
    </div>
  );
};

export default Profile;
