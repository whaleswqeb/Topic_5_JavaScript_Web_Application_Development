import React, { useState } from 'react';
import './OneAlbum.css';

const OneAlbum = (props) => {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const album = props.album;
  
  if (!album) {
    return (
      <div className="loading-state">
        <div className="loading-spinner"></div>
        <p>Loading album details...</p>
      </div>
    );
  }

  const handleTrackClick = (track) => {
    console.log('Selected track:', track);
    setSelectedTrack(track);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className='album-detail'>
      <div className='album-detail-header'>
        <button className='back-button' onClick={handleBackClick}>
          ←
        </button>
        <h1 className='album-detail-title'>{album.title}</h1>
      </div>

      <div className='row g-4'>
        {/* Left Column - Album Info */}
        <div className='col-lg-4'>
          <div className='album-detail-card'>
            <img
              src={album.image}
              className='album-detail-image'
              alt={album.title}
            />
            <div className='album-detail-info'>
              <span className='album-detail-artist'>{album.artist}</span>
              
              <div className='album-detail-meta'>
                <div className='meta-item'>
                  <span>📅</span>
                  <span>Released: {album.year}</span>
                </div>
                <div className='meta-item'>
                  <span>🎵</span>
                  <span>Tracks: {album.tracks?.length || 0}</span>
                </div>
              </div>
              
              <p className='album-detail-description'>
                {album.description}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Tracks and Details */}
        <div className='col-lg-8'>
          {/* Tracks Section */}
          <div className='tracks-section'>
            <div className='tracks-header'>
              <h3 className='tracks-title'>Tracks</h3>
              <span className='track-count'>
                {album.tracks?.length || 0} tracks
              </span>
            </div>

            {album.tracks && album.tracks.length > 0 ? (
              <div className='track-list'>
                {album.tracks.map((track) => (
                  <div
                    key={track.trackId}
                    className={`track-item ${selectedTrack?.trackId === track.trackId ? 'active' : ''}`}
                    onClick={() => handleTrackClick(track)}
                  >
                    <div className='track-number'>{track.number}</div>
                    <div className='track-info'>
                      <div className='track-title'>{track.title}</div>
                      <div className='track-artist'>{album.artist}</div>
                    </div>
                    <div className='track-actions'>
                      {track.video && (
                        <a 
                          href={track.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className='track-action-btn'
                          onClick={(e) => e.stopPropagation()}
                          title="Watch video"
                        >
                          ▶
                        </a>
                      )}
                      <button 
                        className='track-action-btn'
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTrackClick(track);
                        }}
                        title="View lyrics"
                      >
                        📄
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted">No tracks available for this album</p>
            )}
          </div>

          {/* Lyrics Section */}
          {selectedTrack && (
            <div className='lyrics-section'>
              <div className='lyrics-header'>
                <div className='lyrics-icon'>📄</div>
                <h3>Lyrics: {selectedTrack.title}</h3>
              </div>
              <div className='lyrics-content'>
                {selectedTrack.lyrics ? (
                  selectedTrack.lyrics
                ) : (
                  <p className="text-muted">No lyrics available for this track.</p>
                )}
              </div>
            </div>
          )}

          {/* Video Section */}
          {selectedTrack?.video && (
            <div className='video-section'>
              <div className='lyrics-header'>
                <div className='lyrics-icon'>▶</div>
                <h3>Music Video: {selectedTrack.title}</h3>
              </div>
              <a 
                href={selectedTrack.video} 
                target="_blank" 
                rel="noopener noreferrer" 
                className='video-button'
              >
                <span>▶</span>
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneAlbum;