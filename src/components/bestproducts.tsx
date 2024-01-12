import React from 'react'
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import GoldenCard from './goldencard';
import Slider from './slider';
import Caard from './Caard';

export default function Bestproducts() {
    const backgroundImageStyle = {
        // backgroundImage: `url("/productsectionbg.webp")`,
        backgroundSize: "cover", // Add other background styles if needed
        minHeight: "96vh", // Set a minimum height for visibility
        color: "#182933", // Text color

    };
    return (
        <>
            <div className='mt-3' style={backgroundImageStyle}>
                <h2 className='text-dark text-center'> Best Products</h2>
                <h5 className='text-dark text-center mt-2 p-1'>Dive into the intensity of flavor with our handpicked range of whole dried seeds and powders.</h5>
                {/* <img src='stars.png' alt='star image' className='' /> */}
                <div className="">
                    {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row className="justify-content-center">
                            <Col sm={3}>
                                <Nav variant="pills" className="flex-row mb-3 align-items-center justify-content-center">
                                    <Nav.Item>
                                        <Nav.Link className="rounded-pill" eventKey="first">Dried Seeds</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className="rounded-pill" eventKey="second">Spicy Masalas</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Row>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <div>
                                            <Row>
                                                <div className='col-md-3 mb-4'>
                                                    <GoldenCard />
                                                </div>
                                                <div className='col-md-3 mb-4'>
                                                    <GoldenCard />
                                                </div>
                                                <div className='col-md-3 mb-4'>
                                                    <GoldenCard />
                                                </div>
                                                <div className='col-md-3 mb-4'>
                                                    <GoldenCard />
                                                </div>
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
                    </Tab.Container> */}
                    <Caard img1="blackcardemon.png" title1="Black Cardemon" 
                        img2="cardemon.jpg" title2="Cardemom " 
                        img3="cumin.jpg" title3="Cumin"/>
                    <Caard img1="cinnamon.png" title1="Cinnamon" 
                        img2="cubebpepper.jpg" title2="Cubeb Pepper " 
                        img3="clove.png" title3="Clove"/>
                </div>
            </div>
        </>
    )
}
