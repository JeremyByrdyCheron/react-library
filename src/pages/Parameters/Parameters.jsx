import { Link } from "react-router-dom";
import "./Parameters.css";

const Parameters = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", !darkMode);
  };

  return (
    <div className={darkMode ? "dark parameters" : "light parameters"}>
      <h1>Paramètres</h1>
      <nav className="links">
        <Link to="/profile">Profil</Link>
        <Link to="/parameters">Paramètres</Link>
        <Link to="/">Accueil</Link>
      </nav>

      <form>
        <label htmlFor="toggleDark">Mode sombre</label>
        <input
          onChange={toggleDarkMode}
          checked={darkMode}
          type="checkbox"
          name="toggleDark"
        />
        <p>Mode sombre {darkMode === true ? "activé" : "désactivé"}</p>
      </form>
    </div>
  );
};

export default Parameters;
