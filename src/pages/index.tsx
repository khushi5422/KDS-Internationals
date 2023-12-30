import Head from "next/head";
import Image from "next/image";
import Tabs from "react-bootstrap/Tabs";
import { Inter } from "next/font/google";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import styles from "@/styles/Home.module.css";
import Navigationbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import GoldenCard from "@/components/goldencard";
import LeftShadowCard from "@/components/leftshadowcard";
import FadeBox from "@/components/fadebox";
import NextJsCarousel from "@/components/carousel";
import Parallax from "@/components/parallax";
import Bestproducts from "@/components/bestproducts";
import Roundbtn from "@/components/roundbtn";
import Accordian from "@/components/accordian";
import Slider from "@/components/slider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <NextJsCarousel />
      <Bestproducts />
      {/* <div className="d-flex justify-content-around">
        <Roundbtn />
        <Roundbtn />
        <Roundbtn />
      </div> */}
      <Parallax />
      <Slider/>
      {/* <Accordian/> */}
      {/* <div className="mt-3">
        <LeftShadowCard />
      </div> */}
      {/* <Row className="container mt-3">
        <Col>
          <img src="category.jpg" alt="Avatar" className="rounded img-fluid" />
        </Col>
        <Col className="d-flex flex-column justify-content-between">
          <Row>
            <Col>
              <img
                src="slider2.jpg"
                alt="Avatar"
                className="rounded img-fluid"
              />
            </Col>
            <Col>
              <img
                src="slider2.jpg"
                alt="Avatar"
                className="rounded img-fluid"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                src="slider2.jpg"
                alt="Avatar"
                className="rounded img-fluid"
              />
            </Col>
            <Col>
              <img
                src="slider2.jpg"
                alt="Avatar"
                className="rounded img-fluid"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="d-flex justify-content-center">

        <FadeBox />
      </div> */}
    </>  );
}
