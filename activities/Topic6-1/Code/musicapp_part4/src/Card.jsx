import React from 'react';

const Card = (props) => {
  const handleClick = () => {
    props.onclick(props.albumId);
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card h-100">
        <img 
          src={props.imgURL} 
          className="card-img-top" 
          alt={props.albumTitle}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.albumTitle}</h5>
          <p className="card-text">{props.albumDescription.substring(0, 100)}...</p>
          <button 
            className="btn btn-primary" 
            onClick={handleClick}
          >
            {props.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;