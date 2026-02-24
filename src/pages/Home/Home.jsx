import "./Home.css";
import { useState } from "react";
import Book from "../../components/Book/Book";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = ({ books, setBooks, darkMode }) => {
  const [filterText, setFilterText] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      (book["nom"].toLowerCase().includes(filterText.toLowerCase()) ||
        book["description"].toLowerCase().includes(filterText.toLowerCase())) &&
      (filterCategory === "" ||
        book["genre"].toLowerCase() === filterCategory.toLowerCase()),
  );

  return (
    <main className={darkMode ? "home dark" : "home light"}>
      <nav>
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
          setFilterCategory={setFilterCategory}
          books={books}
        />
        <Link to="/profile">Profil</Link>
        <Link to="/parameters">Paramètres</Link>
      </nav>

      <div className="books">
        {filteredBooks.map((book) => (
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
    </main>
  );
};

export default Home;
