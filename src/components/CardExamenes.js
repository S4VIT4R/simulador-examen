import React from "react";
import './CardExamenes.css'

function CardExamenes({title,imageUrl,body}){
    return(
        <div className="mb-3">
            <div className="card-container">
            <div className="card-title"><h3>{title}</h3></div>
            <div className="image-container"><img src={imageUrl} alt=''/></div>
                <div className="mitad">
                    <div className="card-content">     
                        <div className="card-body"><p>{body}</p></div>
                    </div>

                     <div className="btn"><button><a> Ver mas...</a></button></div>
                </div>
            </div>
        </div>
    )
}

export default CardExamenes