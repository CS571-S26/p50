import { Link } from 'react-router-dom';
import './ArtworkCard.css';

function ArtworkCard({ artwork }) {
  return (
    <Link to={`/artwork/${artwork.id}`} className="artwork-card">
      <div className="artwork-card-img">
        <img src={artwork.image} alt={artwork.title} />
      </div>
      <div className="artwork-card-info">
        <h3>{artwork.title}</h3>
        <p>{artwork.artist}, {artwork.year}</p>
      </div>
    </Link>
  );
}

export default ArtworkCard;
