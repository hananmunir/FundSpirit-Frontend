import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

function OrgCarousel() {
  const imagesArray = [
    "/Logos/akhuwat.png",
    "/Logos/jdc.png",
    "/Logos/darul.png",
    "/Logos/ansar.png",
    "/Logos/tsf.svg",
    "/Logos/war.png",
  ];

  const renderLogos = () =>
    imagesArray.map((image) => (
      <div className={styles.carouselItemContainer}>
        <img src={image} className={styles.carouselImage} />
      </div>
    ));

  return (
    <div className={styles.carouselContainer}>
      <center>
        <span className={styles.carouselHeading + " fs-1"}>
          Our Tursted Organisations
        </span>
      </center>

      <Slider
        dots={false}
        slidesToShow={4}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderLogos()}
      </Slider>
    </div>
  );
}

export default OrgCarousel;
