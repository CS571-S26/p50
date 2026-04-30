import './SearchBar.css';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="artwork-search" className="sr-only">Search artworks</label>
      <input
        id="artwork-search"
        type="text"
        placeholder="Search by title, artist, or year..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
