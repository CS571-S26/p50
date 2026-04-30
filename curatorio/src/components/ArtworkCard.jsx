import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './ArtworkCard.css';

function ArtworkCard({ artwork }) {
  const { user, isFavorite, toggleFavorite } = useAuth();
  const navigate = useNavigate();
  const favorited = isFavorite(artwork.id);

  function handleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!user) { navigate('/login'); return; }
    toggleFavorite(artwork.id);
  }

  return (
    <div className="artwork-card">
      <Link to={`/artwork/${artwork.id}`} className="card-link">
        <div className="card-image">
          <img src={artwork.image} alt={artwork.title} />
        </div>
        <div className="card-info">
          <h3>{artwork.title}</h3>
          <p>{artwork.artist} · {artwork.year}</p>
        </div>
      </Link>
      <button
        className={`fav-btn${favorited ? ' favorited' : ''}`}
        onClick={handleFavorite}
        aria-label={favorited ? 'Remove from favorites' : 'Add to favorites'}
      >
        {favorited ? '♥' : '♡'}
      </button>
    </div>
  );
}

export default ArtworkCard;
