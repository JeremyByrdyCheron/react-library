import "./SearchBar.css";

const SearchBar = ({ filterText, setFilterText, books, setFilterCategory }) => {
  const bookGenres = [...new Set(books.map((book) => book.genre))];
  return (
    <form>
      <input
        type="text"
        id="searchbar"
        onChange={(e) => setFilterText(e.target.value)}
        value={filterText}
      />

      <select
        name="genrefilter"
        id="genrefilter"
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="">Aucune catégorie</option>

        {bookGenres.map((bookGenres) => (
          <option value={bookGenres}>{bookGenres}</option>
        ))}
      </select>
      <button
        type="button"
        onClick={(e) => {
          setFilterText("");
          setFilterCategory("");
        }}
      >
        Réinitialiser les filtres
      </button>
    </form>
  );
};

export default SearchBar;
