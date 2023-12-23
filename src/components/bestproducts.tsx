import React from 'react'
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import GoldenCard from './goldencard';

export default function Bestproducts() {
    const backgroundImageStyle = {
        backgroundImage: `url("/productsectionbg.webp")`,
        backgroundSize: "cover", // Add other background styles if needed
        minHeight: "1000px", // Set a minimum height for visibility
        color: "#fff", // Text color

    };
    return (
        <>
            <div style={backgroundImageStyle}>
                <h2 className='text-dark text-center'> Best Products</h2>
                <h4 className='text-dark text-center mt-2'>Pellentesque massa placerat duis ultricies lacus sit sed.</h4>
                <img src='stars.png' alt='star image' className='' />
                <div className="">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="justify-content-center">
                            <Col sm={4}>
                                <Nav variant="pills" className="flex-row mb-3 align-items-center justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link className="rounded-pill" eventKey="first">Dried Seeds</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="rounded-pill" eventKey="second">Spicy Masalas</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Row sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div>
                                            <Row>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <div>
                                            <Row>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                                <Col>
                                                    <GoldenCard />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Row>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
        </>
    )
}
