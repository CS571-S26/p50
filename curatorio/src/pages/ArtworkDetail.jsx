import { useParams, Link } from 'react-router-dom';
import artworks from '../data/artworks.json';
import './ArtworkDetail.css';

function ArtworkDetail() {
  const { id } = useParams();
  const artwork = artworks.find((a) => a.id === parseInt(id));

  if (!artwork) {
    return (
      <div className="detail-not-found">
        <h2>Artwork not found</h2>
        <Link to="/browse">Back to Browse</Link>
      </div>
    );
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
              <tr>
                <td>Year</td>
                <td>{artwork.year}</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>{artwork.medium}</td>
              </tr>
              <tr>
                <td>Era</td>
                <td>{artwork.era}</td>
              </tr>
              <tr>
                <td>Museum</td>
                <td>{artwork.museum}</td>
              </tr>
            </tbody>
          </table>
          <p className="detail-description">{artwork.description}</p>
          <button
            className="share-btn"
            onClick={() => navigator.clipboard.writeText(window.location.href)}
          >
            Copy Link to Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtworkDetail;
