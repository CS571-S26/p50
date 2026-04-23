import './FilterBar.css';

const FILTERS = ['All', 'Renaissance', 'Baroque', 'Impressionism', 'Post-Impressionism', 'Surrealism', 'Cubism', 'Expressionism'];

function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <div className="filter-bar">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          className={`pill${activeFilter === filter ? ' active' : ''}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
