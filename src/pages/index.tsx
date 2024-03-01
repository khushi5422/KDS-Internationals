import NextJsCarousel from "@/components/carousel";
import Parallax from "@/components/parallax";
import Slider from "@/components/slider";
import Owner from "@/components/owner";
import Services from "@/components/services";
import AboutUs from "@/components/aboutus";
import { EmblaOptionsType } from "embla-carousel";
import ThumbnailCarousel from "@/components/thumbnailcarousal";
import Head from "next/head";
import ImageGallery from "@/components/imagegallery";
const OPTIONS2: EmblaOptionsType = {}
const SLIDE_COUNT2 = 10
const SLIDES2 = Array.from(Array(SLIDE_COUNT2).keys())
export default function Home() {
  return (
    <>
     <Head>
        <title>Trusted Source for Quality Organic Herbs and Spices </title>
        <meta name="description" content="Discover the trusted source for quality organic herbs and spices at J K Exports " />
      </Head>
      <NextJsCarousel />
      <AboutUs />
      <ThumbnailCarousel slides={SLIDES2} options={OPTIONS2}/>
      <Services />
      <ImageGallery/>
      <Parallax />
      <Slider />
      <Owner />
    </>);
}
