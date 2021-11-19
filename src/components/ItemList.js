import React from "react";
import { List, Typography, Divider } from "antd";
import ItemCard from "./ItemCard";
//import serekImage from "../images/serek";

function ItemList() {
    const data = [
        {
            //image: serekImage,
            name: "Ser kozi",
            price: "16",
            location: "Wrocław",
            owner: "Dobre serki",
            image: "",
            label: "",
        },
    ];

    return (
        <div className="">
            <Divider orientation="left">Default Size</Divider>
            <List
                bordered
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
