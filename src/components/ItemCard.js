import React from "react";
import imageSerek from "../images/serek.jpg";

function ItemCard(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.item.imageUrl} alt="image" />
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
