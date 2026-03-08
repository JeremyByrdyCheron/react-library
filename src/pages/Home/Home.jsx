import "./Home.css";
import { useState } from "react";
import Book from "../../components/Book/Book";
import NavBar from "../../components/NavBar/NavBar";

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
      <h1>Accueil</h1>
      <NavBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        books={books}
      />

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
