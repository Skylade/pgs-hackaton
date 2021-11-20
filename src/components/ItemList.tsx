import React from "react";
import { List, Typography, Divider } from "antd";
import ItemCard from "./ItemCard";
//import imagePifko from "../images/pifko.jpg";
import imageSerek from "../images/serek.jpg";
import imageChleb from "../images/chleb.png";
import imageCynamonka from "../images/cynamonka.jpg";
import imageJajka from "../images/jajka.jpg";
import imageKabanosy from "../images/kabanosy.png";
import imageKielbasa from "../images/kielbasa.jpg";
import imageBorowiki from "../images/borowiki.jpg";
import imageSokKapusta from "../images/sok-kapusty.jpg";
import imageYerba from "../images/yerba.jpg";
//import data from "./dataStore.js";

function ItemList() {
    const data = [
        {
            name: "Yerba mate od zielonej wrozki",
            price: "9",
            location: "Fabryczna 1a, Wrocław",
            owner: "Krystyna",
            image: imageCynamonka,
            label: "",
        },
        {
            name: "Piwo craftowe",
            price: "16",
            location: "Piękna 23b, Wrocław",
            owner: "Dobre pifko",
            image: imageCynamonka,
            label: "",
        },
        {
            //image: serekImage,
            name: "Ser kozi",
            price: "16",
            location: "Wrocław",
            owner: "Dobre serki",
            imageUrl: imageSerek,
            label: "",
        },
        {
            name: "Piwo craftowe",
            price: "16",
            location: "Wrocław",
            owner: "Dobre pifko",
            image: imageCynamonka,
            label: "",
        },
    ];

    // https://regio-food.pl/wp-content/uploads/yerba-mate-od-zielonej-wrozkii-min.jpg

    return (
        <div className="">
            <List
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <ItemCard item={item} />
                    </List.Item>
                )}
            />
        </div>
    );
}

export default ItemList;
