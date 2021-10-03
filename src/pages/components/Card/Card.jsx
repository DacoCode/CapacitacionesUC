import React from 'react'
import './Card.css';

const Card = (props) => {
    return (
      
            <div className="card-container">
                <img className="card-image" src={props.img} />
                <div className="card-body">
                    <h2 className="card-title"> {props.title} </h2>
                    <p className="card-description"> {props.description} </p>
                    <h3 className="card-price"> {props.price} </h3>
                    <button className="card-btn"> Comprar curso.</button>

                </div>
            </div>

    );
};

export default Card
