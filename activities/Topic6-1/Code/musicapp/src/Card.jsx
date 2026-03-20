
const Card = (props) => {
    return (
    <div>
                <div className="card" style={{width: '18rem'}}>
                    <img src={props.imgURL} className="card-img-top" alt="title"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.albumTitle}</h5>
                        <p className="card-text">{props.albumDescription}</p>
                        <button href="#" className="btn btn-primary">{props.buttonText}</button>
                    </div>
                </div>

            </div>
    );
}

export default Card;
