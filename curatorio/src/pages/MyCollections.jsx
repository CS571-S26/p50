import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks.json';
import './MyCollections.css';

function CollectionRow({ col, onDelete }) {
  const [open, setOpen] = useState(false);
  const works = artworks.filter((a) => col.artworkIds.includes(a.id));

  return (
    <div className="mc-collection-row">
      <div className="mc-row-top">
        <button className="mc-col-toggle" onClick={() => setOpen((o) => !o)}>
          <div className="mc-col-info">
            <h3>{col.name}</h3>
          </div>
          <span className="mc-col-count">{works.length} work{works.length !== 1 ? 's' : ''}</span>
          <span className="mc-chevron">{open ? '▲' : '▼'}</span>
        </button>
        <button className="mc-delete-btn" onClick={onDelete}>Remove</button>
      </div>
      {open && (
        works.length === 0 ? (
          <p className="mc-col-empty">No artworks yet — open any artwork and add it to this collection.</p>
        ) : (
          <div className="mc-col-grid">
            {works.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
          </div>
        )
      )}
    </div>
  );
}

function MyCollections() {
  const { user, favorites, collections, addCollection, deleteCollection } = useAuth();
  const [title, setTitle] = useState('');

  if (!user) {
    return (
      <div className="mc-gate">
        <h1>Sign in to view your collections</h1>
        <Link to="/login" className="mc-gate-link">Sign In</Link>
      </div>
    );
  }

  const favoriteArtworks = artworks.filter((a) => favorites.includes(a.id));

  function handleCreate(e) {
    e.preventDefault();
    if (!title.trim()) return;
    addCollection(title.trim());
    setTitle('');
  }

  return (
    <div className="my-collections">
      <h1 className="sr-only">My Curatorio</h1>

      <section className="mc-section">
        <div className="mc-header">
          <p className="section-label">Saved</p>
          <h2 className="section-title">Favorites</h2>
        </div>
        {favoriteArtworks.length === 0 ? (
          <p className="mc-empty">No favorites yet — click ♡ on any artwork to save it here.</p>
        ) : (
          <div className="mc-grid">
            {favoriteArtworks.map((a) => <ArtworkCard key={a.id} artwork={a} />)}
          </div>
        )}
      </section>

      <section className="mc-section">
        <div className="mc-header">
          <p className="section-label">Curated</p>
          <h2 className="section-title">My Collections</h2>
        </div>

        <form className="mc-form" onSubmit={handleCreate}>
          <label htmlFor="new-collection-title" className="sr-only">Collection title</label>
          <input
            id="new-collection-title"
            type="text"
            placeholder="Collection title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <button type="submit" className="mc-create-btn">Create</button>
        </form>

        {collections.length === 0 ? (
          <p className="mc-empty">No collections yet — create one above.</p>
        ) : (
          <div className="mc-collections-list">
            {collections.map((col) => (
              <CollectionRow key={col.id} col={col} onDelete={() => deleteCollection(col.id)} />
            ))}
          </div>
        )}
      </section>

    </div>
  );
}

export default MyCollections;
