import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import ArtworkGrid from '../components/ArtworkGrid';
import artworks from '../data/artworks.json';
import './Home.css';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredArtworks = artworks.filter((artwork) => {
    const matchesSearch =
      artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artwork.year.toString().includes(searchTerm);

    const matchesFilter =
      activeFilter === 'All' || artwork.era === activeFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="home">
      <div className="hero">
        <h1>Discover Famous Artworks</h1>
        <p>Search, explore, and share masterpieces from museums around the world.</p>
      </div>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <ArtworkGrid artworks={filteredArtworks} />
    </div>
  );
}

export default Home;
