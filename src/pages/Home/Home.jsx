import { useState } from "react";
import Book from "../../components/Book/Book";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const livresInitiaux = [
    {
      id: 1,
      nom: "Le Seigneur des Anneaux",
      description: "Une épopée fantastique en Terre du Milieu",
      genre: "Fantasy",
      like: 150,
      favorite: true,
    },
    {
      id: 2,
      nom: "1984",
      description: "Un roman dystopique sur la surveillance de masse",
      genre: "Science-Fiction",
      like: 89,
      favorite: true,
    },
    {
      id: 3,
      nom: "Orgueil et Préjugés",
      description: "Une histoire d'amour dans l'Angleterre du 19e siècle",
      genre: "Romance",
      like: 67,
      favorite: false,
    },
    {
      id: 4,
      nom: "Dune",
      description: "Une saga de science-fiction sur la planète Arrakis",
      genre: "Science-Fiction",
      like: 120,
      favorite: false,
    },
    {
      id: 5,
      nom: "Harry Potter",
      description: "Les aventures d'un jeune sorcier",
      genre: "Fantasy",
      like: 200,
      favorite: true,
    },
    {
      id: 6,
      nom: "Sherlock Holmes",
      description: "Les enquêtes du célèbre détective",
      genre: "Policier",
      like: 95,
      favorite: false,
    },
    {
      id: 7,
      nom: "Le Petit Prince",
      description: "Un conte poétique et philosophique",
      genre: "Conte",
      like: 180,
      favorite: false,
    },
    {
      id: 8,
      nom: "Fondation",
      description: "Le déclin d'un empire galactique",
      genre: "Science-Fiction",
      like: 75,
      favorite: true,
    },
  ];

  const [filterText, setFilterText] = useState("");

  const [filterCategory, setFilterCategory] = useState("");

  const filteredBooks = livresInitiaux.filter(
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
        books={livresInitiaux}
      />
      {filteredBooks.map((book) => (
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

export default Home;
