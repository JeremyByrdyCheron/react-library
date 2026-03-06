import Home from "./pages/Home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import { useEffect, useState } from "react";
import Parameters from "./pages/Parameters/Parameters";

function App() {
  const [books, setBooks] = useState([
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
  ]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteBooks");

    if (storedFavorites !== null) {
      const favoriteIds = storedFavorites.split(",");

      setBooks((prevBooks) =>
        prevBooks.map((book) => ({
          ...book,
          favorite: favoriteIds.includes(String(book["id"])),
        })),
      );
    }
  }, []);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") !== null
      ? localStorage.getItem("darkmode")
      : true,
  );

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home books={books} setBooks={setBooks} darkMode={darkMode} />
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile books={books} setBooks={setBooks} darkMode={darkMode} />
          }
        ></Route>
        <Route
          path="/parameters"
          element={<Parameters darkMode={darkMode} setDarkMode={setDarkMode} />}
        ></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
