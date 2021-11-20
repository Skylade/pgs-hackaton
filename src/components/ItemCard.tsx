import { Col, Rate, Row } from "antd";
import React from "react";
import imageSerek from "../images/serek.jpg";
import './ItemCard.scss';

function ItemCard(props: any) {
    return (

        <Row className='item-card'>
            <Col
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
            >
                <Row justify='center'>
                    <img src={props.item.image} className='item-card__image' alt="" />
                </Row>
            </Col>
            <Col
                xs={18}
                sm={18}
                md={18}
                lg={18}
                xl={18}
                className='item-card__right-col'
            >
                <Row className='item-card__title'>
                    {props.item.name}
                </Row>
                <Row className='item-card__distance'>
                    {props.item.distance} km od Ciebie
                </Row>
                <Row className='item-card__seller'>
                    {props.item.owner}
                </Row>
                <Row className='item-card__address'>
                    {props.item.location}
                </Row>
                <Row>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <Row>
                            <Rate disabled defaultValue={5} className='item-card__rate' />
                        </Row>
                    </Col>
                    <Col
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        xl={12}
                    >
                        <Row justify='end' className='item-card__price'>
                            {props.item.price} zł <span> sztuka</span>
                        </Row>
                    </Col>
                </Row>

            </Col>

        </Row>
    );
}

export default ItemCard;
