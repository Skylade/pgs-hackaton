import React from "react";
import ItemList from "./components/ItemList";

import { Col, Row } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
// import OpenStreetMap from './OpenStreetMap/OpenStreetMap';

function App() {
    return (
        <div className="landing-container">
            <Row className="landing-container__second-row">
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="landing-container__second-row__first-col"
                >
                    Content
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="landing-container__second-row__second-col"
                >
                    {/* <OpenStreetMap
            center={[51.06370, 17.03760]}
            markerPosition={[51.06370, 17.03760]}
            address={'pawia 44 wrocław'}
            zoom={30}
          /> */}
                </Col>
            </Row>

            <ItemList />
        </div>
    );
}

export default App;
