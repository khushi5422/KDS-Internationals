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
import Slider from "@/components/slider";
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import EmblaCarousel from "@/components/fadecarousal";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailCarousel from "@/components/thumbnailcarousal";


const inter = Inter({ subsets: ["latin"] });
const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const OPTIONS2: EmblaOptionsType = {}
const SLIDE_COUNT2 = 10
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
export default function Home() {
  return (
    <>
      {/* https://youtube.com/shorts/AT70PVbdfBI?si=gseK1KAj6QbQ9c-E */}
      <NextJsCarousel />
      <AboutUs />
      <ThumbnailCarousel slides={SLIDES2} options={OPTIONS2}/>
      <Services />
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <Parallax />
      <Slider />
      <Owner />
    </>);
}
