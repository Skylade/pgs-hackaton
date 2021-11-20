import React, {useState} from "react";
import ItemList from "./components/ItemList";

import { Modal, Button, Col, Divider, Row, Select, Tag } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import OpenStreetMap from "./OpenStreetMap/OpenStreetMap";
import appLogo from './images/foodAppLogo.png';
import {
  UserOutlined
} from '@ant-design/icons';
const { Option } = Select;

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


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
                      <Button className="landing-container__first-row__add-new-button" onClick={showModal}>Dodaj ogłoszenie</Button>
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
                  <Row className="landing-container__second-row__first-col__categories">
                    <Tag>Owoce</Tag>
                    <Tag>Warzywa</Tag>
                    <Tag>Nabiał</Tag>
                    <Tag>Wędliny</Tag>
                    <Tag>Pieczywo</Tag>
                    <Tag>Inne</Tag>
                  </Row>

                  <Row className="landing-container__second-row__first-col__number-of-searches">
                    231 wyników
                  </Row>

                  <Row className="landing-container__second-row__first-col__heading">
                    Znalezione dla Ciebie
                  </Row>

                  <Row className="landing-container__second-row__first-col__filters-row" justify='start'>
                      <Select
                          className="landing-container__second-row__first-col__filters-row__search-box"
                          showSearch
                          defaultValue='popularnosc'
                          placeholder="Sortowanie"
                        >
                          <Option value="popularnosc">Popularność</Option>
                          <Option value="Najdrozsze">Najdrozsze</Option>
                          <Option value="Najtańsze">Najtańsze</Option>
                          <Option value="najnowsze">Najnowsze</Option>
                      </Select>

                      <Button className="landing-container__second-row__first-col__filters-row__filter-button">Filtruj</Button>
                  </Row>

                  <Divider />

                  <ItemList />

                  <Row justify='center'>
                    <Button className="landing-container__second-row__first-col__load-more">Więcej</Button>
                  </Row>

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

            <Modal title="Dodaj nowy produkt" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          
            </Modal>

            <Row className="landing-container__third-row">
                <Col
                      xs={8}
                      sm={8}
                      md={8}
                      lg={8}
                      xl={8}
                  >
                    <Row>
                      <img src={appLogo} alt='logo' className="landing-container__third-row__logo" />
                    </Row>
                </Col>
                <Col
                      xs={16}
                      sm={16}
                      md={16}
                      lg={16}
                      xl={16}
                  >
                    <Row justify='end' className="landing-container__third-row__label" >
                      <span>O nas</span> <span>Regulamin</span>
                    </Row>
                </Col>
            </Row>

        </div>
    );
}

export default App;
