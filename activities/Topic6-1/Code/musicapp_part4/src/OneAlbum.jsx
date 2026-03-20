import React from 'react';

const OneAlbum = (props) => {
  const album = props.album;
  
  if (!album) {
    return <div className="container"><p>Loading album details...</p></div>;
  }

  return (
    <div className='container mt-4'>
      <h2>Album Details for {album.title}</h2>
      <div className='row'>
        <div className='col col-sm-4'>
          <div className='card'>
            <img
              src={album.image}
              className='card-img-top'
              alt={album.title}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className='card-body'>
              <h5 className='card-title'>{album.title}</h5>
              <p className='card-text'>
                <strong>Artist:</strong> {album.artist}<br/>
                <strong>Year:</strong> {album.year}<br/>
                <strong>Description:</strong> {album.description}
              </p>
            </div>
          </div>
        </div>
        <div className='col col-sm-8'>
          <div className='card mb-3'>
            <div className='card-header'>
              <h5>Tracks</h5>
            </div>
            <div className='card-body'>
              {album.tracks && album.tracks.length > 0 ? (
                <div className="list-group">
                  {album.tracks.map((track) => (
                    <div key={track.trackId} className="list-group-item">
                      <strong>Track {track.number}:</strong> {track.title}
                      {track.video && (
                        <a href={track.video} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-link">
                          Watch Video
                        </a>
                      )}
                      {track.lyrics && (
                        <p className="mt-2"><small>{track.lyrics}</small></p>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No tracks available for this album</p>
              )}
            </div>
          </div>
          
          <div className='card'>
            <div className='card-body'>
              <p>Show the lyrics of select track here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;