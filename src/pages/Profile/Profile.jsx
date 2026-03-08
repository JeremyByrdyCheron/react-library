import "./Profile.css";
import Book from "../../components/Book/Book";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Profile = ({ books, setBooks, darkMode }) => {
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
    <div className={darkMode ? "dark profile" : "light profile"}>
      <h1>Profil</h1>
      <NavBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        books={books}
      />
      <div className="books">
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
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
