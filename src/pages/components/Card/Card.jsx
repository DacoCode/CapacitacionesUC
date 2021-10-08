import React from 'react'
import { useHistory } from 'react-router';
import './Card.css';


const Card = (props) => {
    const history = useHistory();

    function handleSubmit(){
      history.push('./buyCourse');
    }
    return (

        <div className="card-container">
            <img className="card-image" src={props.img} />
            <div className="card-body">
                <h2 className="card-title"> {props.title} </h2>
                <p className="card-description"> {props.description} </p>
                <h3 className="card-price"> {props.price} </h3>
                <button className="card-btn" onClick={handleSubmit}> Comprar cursos</button>

            </div>
        </div>

    );
};

export default Card
