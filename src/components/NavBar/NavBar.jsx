import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./NavBar.css";

const NavBar = ({ filterText, setFilterText, setFilterCategory, books }) => {
  return (
    <nav className="navbar">
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
        books={books}
      />
      <div className="links">
        <Link to="/profile">Profil</Link>
        <Link to="/parameters">Paramètres</Link>
        <Link to="/">Accueil</Link>
      </div>
    </nav>
  );
};

export default NavBar;
