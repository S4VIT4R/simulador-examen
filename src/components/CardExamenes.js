import React from "react";
import { Link } from "react-router-dom";
import './CardExamenes.css'

export var idExamen;


function CardExamenes({id,title,imageUrl,body}){
    
    const recuperar = () => {
            idExamen = id;
    }

    return(
        <div className="mb-3">
            <div className="card-container">
            <div className="card-title"><h3>{title}</h3></div>
            <div className="image-container"><img src={imageUrl} alt=''/></div>
                <div className="mitad">
                    <div className="card-content">     
                        <div className="card-body"><p>{body}</p></div>
                    </div>
                     <div className="btn"><button><Link onClick={recuperar} to='/preguntas'>Ver examen</Link></button></div>
                </div>
            </div>
        </div>
    )
}

export default CardExamenes