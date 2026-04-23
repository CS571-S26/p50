import { Link } from 'react-router-dom';
import ArtworkCard from '../components/ArtworkCard';
import artworks from '../data/artworks.json';
import './Home.css';

const HERO_IDS = [1, 6, 5, 3];
const FEATURED_IDS = [8, 7, 4, 2];

function Home() {
  const heroWorks = HERO_IDS.map((id) => artworks.find((a) => a.id === id));
  const featuredWorks = FEATURED_IDS.map((id) => artworks.find((a) => a.id === id));

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <p className="hero-tagline">The World's Art, One Collection</p>
          <h1 className="hero-title">
            Discover.<br />
            Collect.<br />
            <em>Share.</em>
          </h1>
          <p className="hero-subtitle">
            Explore masterpieces from the world's greatest museums. Build collections that tell your story.
          </p>
          <div className="hero-cta">
            <Link to="/browse" className="btn-primary">Browse Gallery</Link>
          </div>
        </div>
        <div className="hero-right">
          <div className="art-mosaic">
            {heroWorks.map((artwork, i) => (
              <Link
                key={artwork.id}
                to={`/artwork/${artwork.id}`}
                className={`mosaic-cell mosaic-cell-${i + 1}`}
              >
                <img src={artwork.image} alt={artwork.title} />
                <div className="mosaic-overlay">
                  <span>{artwork.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-header">
          <p className="section-label">Highlights</p>
          <h2 className="section-title">Featured Works</h2>
        </div>
        <div className="featured-grid">
          {featuredWorks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        <div className="featured-footer">
          <Link to="/browse" className="view-all-link">View all artworks →</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
