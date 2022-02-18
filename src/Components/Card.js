import React from "react";

const Card = ({ id, name, email }) => {
    return (
        <div className="tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img className="robot-img" alt="robot-img" src={`https://robohash.org/${id}test`}/>
            <div>
                <h3>{ name }</h3>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;