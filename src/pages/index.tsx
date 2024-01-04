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
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import SquareImageCarousel from "@/components/squareslider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>

      <NextJsCarousel />
      <AboutUs/>
      <SquareImageCarousel/>
      <Services/>
      <Bestproducts />
      <Parallax />
      <Slider/>
      <Owner/>
    </>  );
}
