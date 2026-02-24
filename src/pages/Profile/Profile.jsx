import { Link } from "react-router-dom";
import Book from "../../components/Book/Book";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const Profile = ({ books, setBooks }) => {
  const [filterText, setFilterText] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const filteredFavoriteBooks = books.filter(
    (book) =>
      (book["nom"].toLowerCase().includes(filterText.toLowerCase()) ||
        book["description"].toLowerCase().includes(filterText.toLowerCase())) &&
      (filterCategory === "" ||
        book["genre"].toLowerCase() === filterCategory.toLowerCase()) &&
      book["favorite"],
  );

  useEffect(() => {
    const ids = books.filter((book) => book.favorite).map((book) => book["id"]);

    localStorage.setItem("favoriteBooks", ids.join(","));
  }, [books]);

  return (
    <div>
      <h1>Bienvenue sur la page Profile</h1>

      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        books={books}
      />
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
          books={books}
          setBooks={setBooks}
        />
      ))}
    </div>
  );
};

export default Profile;
