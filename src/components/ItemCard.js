import React from "react";

function ItemCard(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.item.image} alt="" />
            </div>
            <div className="card-details">
                <div className="card-title"> {props.item.name} </div>{" "}
                <div className="card-location"> {props.item.location}</div>
                <div className="card-owner"> {props.item.owner}</div>
            </div>
            <div className="card-price"> {props.item.price}</div>
        </div>
    );
}

export default ItemCard;
