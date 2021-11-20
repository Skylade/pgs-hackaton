import { Col, Rate, Row } from "antd";
import React from "react";
import imageSerek from "../images/serek.jpg";
import './ItemCard.scss';

function ItemCard(props: any) {
    return (
        // <div className="card-container">
        //     <div className="card-image">
        //         <img src='https://regio-food.pl/wp-content/uploads/yerba-mate-od-zielonej-wrozkii-min.jpg' alt="" />
        //     </div>
        //     <div className="card-details">
        //         <div className="card-title"> {props.item.name} </div>{" "}
        //         <div className="card-location"> {props.item.location}</div>
        //         <div className="card-owner"> {props.item.owner}</div>
        //     </div>
        //     <div className="card-price"> {props.item.price}</div>
        // </div>
        <Row className='item-card'>
            <Col
                xs={6}
                sm={6}
                md={6}
                lg={6}
                xl={6}
            >
                <Row justify='center'>
                    <img src='https://regio-food.pl/wp-content/uploads/yerba-mate-od-zielonej-wrozkii-min.jpg' className='item-card__image' alt="" />
                </Row>
            </Col>
            <Col
                xs={18}
                sm={18}
                md={18}
                lg={18}
                xl={18}
            >
                <Row className='item-card__title'>
                    Yerba mate od zielonej wrozki
                </Row>
                <Row className='item-card__seller'>
                    Krystyna
                </Row>
                <Row className='item-card__address'>
                    Fabryczna 1b, Wrocław
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
                            15,99 zł <span> sztuka</span>
                        </Row>
                    </Col>
                </Row>

            </Col>

        </Row>
    );
}

export default ItemCard;
