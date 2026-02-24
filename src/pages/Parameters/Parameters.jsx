import { Link } from "react-router-dom";
import "./Parameters.css";

const Parameters = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkmode", !darkMode);
  };

  return (
    <div>
      <Link to="/profile">Profil</Link>
      <Link to="/">Accueil</Link>

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
