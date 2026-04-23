import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ArtworkGrid from '../components/ArtworkGrid';
import artworks from '../data/artworks.json';
import './Browse.css';

function Browse() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = artworks.filter((artwork) => {
    const matchesSearch =
      !searchTerm ||
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.year.toString().includes(searchTerm);
    const matchesFilter = activeFilter === 'All' || artwork.era === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="browse">
      <div className="browse-header">
        <p className="section-label">Gallery</p>
        <h1 className="browse-title">Browse Artworks</h1>
        <p className="browse-count">{filtered.length} work{filtered.length !== 1 ? 's' : ''}</p>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ArtworkGrid artworks={filtered} />
    </div>
  );
}

export default Browse;
