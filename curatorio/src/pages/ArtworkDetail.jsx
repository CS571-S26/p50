import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import artworks from '../data/artworks.json';
import './ArtworkDetail.css';

function ArtworkDetail() {
  const { id } = useParams();
  const { user, isFavorite, toggleFavorite, collections, addCollection, addToCollection, removeFromCollection } = useAuth();
  const navigate = useNavigate();
  const artwork = artworks.find((a) => a.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="detail-not-found">
        <h1>Artwork not found</h1>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
  }

  const favorited = isFavorite(artwork.id);
  const [showNewCol, setShowNewCol] = useState(false);
  const [newColTitle, setNewColTitle] = useState('');

  function handleNewCollection(e) {
    e.preventDefault();
    if (!newColTitle.trim()) return;
    const colId = addCollection(newColTitle.trim());
    addToCollection(colId, artwork.id);
    setNewColTitle('');
    setShowNewCol(false);
  }

  function handleFavorite() {
    if (!user) { navigate('/login'); return; }
    toggleFavorite(artwork.id);
  }

  function handleCollectionToggle(col) {
    const inCol = col.artworkIds.includes(artwork.id);
    if (inCol) removeFromCollection(col.id, artwork.id);
    else addToCollection(col.id, artwork.id);
  }

  return (
    <div className="artwork-detail">
      <Link to="/browse" className="back-link">← Back to Browse</Link>
      <div className="detail-content">
        <div className="detail-image">
          <img src={artwork.image} alt={artwork.title} />
        </div>
        <div className="detail-info">
          <h1>{artwork.title}</h1>
          <h2>{artwork.artist}</h2>
          <table className="detail-table">
            <tbody>
              <tr><td>Year</td><td>{artwork.year}</td></tr>
              <tr><td>Medium</td><td>{artwork.medium}</td></tr>
              <tr><td>Era</td><td>{artwork.era}</td></tr>
              <tr><td>Museum</td><td>{artwork.museum}</td></tr>
            </tbody>
          </table>
          <p className="detail-description">{artwork.description}</p>

          <div className="detail-actions">
            <button
              className={`fav-detail-btn${favorited ? ' favorited' : ''}`}
              onClick={handleFavorite}
            >
              {favorited ? '♥ Saved' : '♡ Save to Favorites'}
            </button>
            <button
              className="share-btn"
              onClick={() => navigator.clipboard.writeText(window.location.href)}
            >
              Copy Link
            </button>
          </div>

          {user && (
            <div className="detail-collections">
              <p className="detail-collections-label">Add to Collection</p>
              <div className="detail-collections-list">
                {collections.map((col) => {
                  const inCol = col.artworkIds.includes(artwork.id);
                  return (
                    <button
                      key={col.id}
                      className={`col-toggle${inCol ? ' in-col' : ''}`}
                      onClick={() => handleCollectionToggle(col)}
                    >
                      {inCol ? '✓ ' : '+ '}{col.name}
                    </button>
                  );
                })}

                {showNewCol ? (
                  <form className="new-col-form" onSubmit={handleNewCollection}>
                    <label htmlFor="new-col-input" className="sr-only">Collection name</label>
                    <input
                      id="new-col-input"
                      autoFocus
                      type="text"
                      placeholder="Collection name"
                      value={newColTitle}
                      onChange={(e) => setNewColTitle(e.target.value)}
                    />
                    <button type="submit">Create</button>
                    <button type="button" className="new-col-cancel" onClick={() => setShowNewCol(false)}>✕</button>
                  </form>
                ) : (
                  <button className="col-toggle new-col-btn" onClick={() => setShowNewCol(true)}>
                    + New collection
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtworkDetail;
