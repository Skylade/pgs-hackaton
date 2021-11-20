import React from "react";
import { List, Typography, Divider } from "antd";
import ItemCard from "./ItemCard";
import imageSerek from "../images/serek.jpg";
import imageChleb from "../images/chleb.png";
import imageCynamonka from "../images/cynamonka.jpg";
import imageJajka from "../images/jajka.jpg";
import imageKabanosy from "../images/kabanosy.png";
import imageKielbasa from "../images/kielbasa.jpg";
import imageBorowiki from "../images/borowiki.jpg";
import imageSokKapusta from "../images/sok-kapusty.jpg";
import imageYerba from "../images/yerba.jpg";

function ItemList() {
    const data = [
        {
            name: "Yerba mate od zielonej wrozki",
            distance: "2,5",
            price: "9",
            location: "Fabryczna 1a, Wrocław",
            owner: "Krystyna",
            image: 'https://regio-food.pl/wp-content/uploads/yerba-mate-od-zielonej-wrozkii-min.jpg',
            label: "",
        },
        {
            name: "Jaja z chowu na wolnym wybiegu",
            distance: "0,5",
            price: "9,50",
            location: "Piękna 23b, Wrocław",
            owner: "Jadwiga",
            image: 'https://regio-food.pl/wp-content/uploads/jaja-wolny-wybieg-kotlina-natury.png',
            label: "",
        },
        {
            name: "Sos maymango",
            distance: "7,3",
            price: "14,50",
            location: "Skrzydlata 144, Wrocław",
            owner: "Damian",
            image: 'https://regio-food.pl/wp-content/uploads/0005_mymango_2500.jpg',
            label: "",
        },
        {
            name: "Mieszanka herbaciana",
            distance: "4,9",
            price: "13,50",
            location: "Magellana 28, Wrocław",
            owner: "Patryk",
            image: 'https://regio-food.pl/wp-content/uploads/kompot-legalne-ziolka-regiofood.png',
            label: "",
        },
    ];

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
