import React, { useState } from "react";
import ItemList from "./components/ItemList";

import {
    Modal,
    Button,
    Col,
    Divider,
    Row,
    Select,
    Tag,
    Form,
    Input,
} from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import OpenStreetMap from "./OpenStreetMap/OpenStreetMap";
import appLogo from "./images/foodAppLogo.png";
import { UserOutlined } from "@ant-design/icons";
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

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="landing-container">
            <Row className="landing-container__first-row">
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Row>
                        <img
                            src={appLogo}
                            alt="logo"
                            className="landing-container__first-row__logo"
                        />
                    </Row>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Row justify="center">
                        <Select
                            className="landing-container__first-row__search-box"
                            showSearch
                            placeholder="Wybierz lokalizacje"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option?.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="gaj">Gaj</Option>
                            <Option value="borek">Borek</Option>
                            <Option value="kowale">Kowale</Option>
                            <Option value="opor??w">Opor??w</Option>
                            <Option value="tarnogaj">Tarnogaj</Option>
                            <Option value="jagodno">Jagodno</Option>
                        </Select>
                    </Row>
                </Col>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Row justify="end">
                        <Button
                            className="landing-container__first-row__add-new-button"
                            onClick={showModal}
                        >
                            Dodaj og??oszenie
                        </Button>
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
                        <Tag>Nabia??</Tag>
                        <Tag>W??dliny</Tag>
                        <Tag>Pieczywo</Tag>
                        <Tag>Inne</Tag>
                    </Row>

                    <Row className="landing-container__second-row__first-col__number-of-searches">
                        231 wynik??w
                    </Row>

                    <Row className="landing-container__second-row__first-col__heading">
                        Znalezione dla Ciebie
                    </Row>

                    <Row
                        className="landing-container__second-row__first-col__filters-row"
                        justify="start"
                    >
                        <Select
                            className="landing-container__second-row__first-col__filters-row__search-box"
                            showSearch
                            defaultValue="popularnosc"
                            placeholder="Sortowanie"
                        >
                            <Option value="popularnosc">Popularno????</Option>
                            <Option value="Najdrozsze">Najdrozsze</Option>
                            <Option value="Najta??sze">Najta??sze</Option>
                            <Option value="najnowsze">Najnowsze</Option>
                        </Select>

                        <Button className="landing-container__second-row__first-col__filters-row__filter-button">
                            Filtruj
                        </Button>
                    </Row>

                    <Divider />

                    <ItemList />

                    <Row justify="center">
                        <Button className="landing-container__second-row__first-col__load-more">
                            Wi??cej
                        </Button>
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
                        center={[51.0637, 17.0376]}
                        markerPosition={[51.0637, 17.0376]}
                        address={"wroc??aw"}
                        zoom={12}
                    />
                </Col>
            </Row>

            <Modal
                title='Dodaj nowy produkt jako "Pyrex"'
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText={"Dodaj nowy produkt"}
            >
                <Form
                    name="product-form"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Product name"
                        name="product-name"
                        rules={[
                            {
                                required: true,
                                message: "Please input your product name!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Product price"
                        name="product-price"
                        rules={[
                            {
                                required: true,
                                message: "Please input your price!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Product category"
                        name="product-category"
                        rules={[
                            {
                                required: true,
                                message: "Please input your category!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Product description"
                        name="product-description"
                        rules={[
                            {
                                required: true,
                                message: "Please input your description!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Product weight"
                        name="product-weight"
                        rules={[
                            {
                                required: true,
                                message: "Please input your weight!",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item> */}
                </Form>
            </Modal>

            <Row className="landing-container__third-row">
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    <Row>
                        <img
                            src={appLogo}
                            alt="logo"
                            className="landing-container__third-row__logo"
                        />
                    </Row>
                </Col>
                <Col xs={16} sm={16} md={16} lg={16} xl={16}>
                    <Row
                        justify="end"
                        className="landing-container__third-row__label"
                    >
                        <span>O nas</span> <span>Regulamin</span>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default App;
