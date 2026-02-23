import { useState } from "react";
import Book from "../../components/Book/Book";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const Home = ({ books, setBooks }) => {
  const [filterText, setFilterText] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book["nom"].toLowerCase().includes(filterText.toLowerCase()) &&
      (filterCategory === "" ||
        book["genre"].toLowerCase() === filterCategory.toLowerCase()),
  );

  return (
    <div>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        books={books}
      />
      <Link to="/profile">Profil</Link>

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
        />
      ))}
    </div>
  );
};

export default Home;
