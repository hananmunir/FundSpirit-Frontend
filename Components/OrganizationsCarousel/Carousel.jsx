import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousel.module.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const imagesArray = [
  "/Logos/akhuwat.png",
  "/Logos/jdc.png",
  "/Logos/darul.png",
  "/Logos/ansar.png",
  "/Logos/tsf.svg",
  "/Logos/war.png",
];

function OrgCarousel() {
  const [windowWidth, setWindowWidth] = React.useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  });
  const renderLogos = () =>
    imagesArray.map((image, index) => (
      <div key={index} className={styles.carouselItemContainer}>
        <img src={image} className={styles.carouselImage} />
      </div>
    ));

  return (
    <div className={styles.carouselContainer}>
      <center className={styles.carouselHeading + " fs-1"}>
        <span>Our Tursted Organisations</span>
      </center>

      <Slider
        dots={false}
        slidesToShow={
          windowWidth < 480
            ? 1
            : windowWidth < 768
            ? 2
            : windowWidth < 1000
            ? 3
            : 4
        }
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderLogos()}
      </Slider>
    </div>
  );
}

export default OrgCarousel;
