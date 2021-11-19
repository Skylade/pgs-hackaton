import React from "react";
import ItemList from "./components/ItemList";

import { Button, Col, Row, Select } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import OpenStreetMap from "./OpenStreetMap/OpenStreetMap";
import appLogo from './images/foodAppLogo.png';
import {
  UserOutlined
} from '@ant-design/icons';
const { Option } = Select;

function App() {
    return (
        <div className="landing-container">

            <Row className="landing-container__first-row">
                <Col
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}
                  >
                    <Row>
                      <img src={appLogo} alt='logo' className="landing-container__first-row__logo" />
                    </Row>
                </Col>
                <Col
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}
                  >
                    <Row justify='center'>
                      <Select
                        className="landing-container__first-row__search-box"
                        showSearch
                        placeholder="Wybierz lokalizacje"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                          option?.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="gaj">Gaj</Option>
                        <Option value="borek">Borek</Option>
                        <Option value="kowale">Kowale</Option>
                        <Option value="oporów">Oporów</Option>
                        <Option value="tarnogaj">Tarnogaj</Option>
                        <Option value="jagodno">Jagodno</Option>
                      </Select>
                    </Row>
                </Col>
                <Col
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}
                  >
                    <Row justify='end'>
                      <Button className="landing-container__first-row__add-new-button">Dodaj ogłoszenie</Button>
                    </Row>
                </Col>
            </Row>

            <Row className="landing-container__second-row">
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="landing-container__second-row__first-col"
                >
                  <ItemList />
                </Col>
                <Col
                    xs={24}
                    sm={24}
                    md={12}
                    lg={12}
                    xl={12}
                    className="landing-container__second-row__second-col"
                >
                  <OpenStreetMap
                    center={[51.06370, 17.03760]}
                    markerPosition={[51.06370, 17.03760]}
                    address={'wrocław'}
                    zoom={12}
                  />
                </Col>
            </Row>

        </div>
    );
}

export default App;
