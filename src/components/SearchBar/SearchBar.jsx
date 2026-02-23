import "./SearchBar.css";

const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <input
      type="text"
      id="searchbar"
      onChange={(e) => setFilterText(e.target.value)}
      value={filterText}
    />
  );
};

export default SearchBar;
