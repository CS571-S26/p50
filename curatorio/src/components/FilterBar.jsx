import './FilterBar.css';

function FilterBar({ activeFilter, onFilterChange }) {
  const filters = ['All', 'Renaissance', 'Baroque', 'Impressionism', 'Post-Impressionism', 'Surrealism', 'Cubism', 'Expressionism'];

  return (
    <div className="filter-bar">
      {filters.map((filter) => (
        <button
          key={filter}
          className={activeFilter === filter ? 'filter-btn active' : 'filter-btn'}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
