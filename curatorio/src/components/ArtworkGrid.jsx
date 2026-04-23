import ArtworkCard from './ArtworkCard';
import './ArtworkGrid.css';

function ArtworkGrid({ artworks, loading = false }) {
  if (loading) return <p className="no-results">Loading artworks...</p>;
  if (artworks.length === 0) return <p className="no-results">No artworks found.</p>;

  return (
    <div className="artwork-grid">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </div>
  );
}

export default ArtworkGrid;
