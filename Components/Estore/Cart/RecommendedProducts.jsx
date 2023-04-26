import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function RecommendedProducts() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: '/Images/med1.jpeg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/Images/med3.jpeg',
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/Images/med2.jpeg',
    },
    {
        id: 4,
        name: 'Product 4',
        image: '/Images/med1.jpeg',
      },
      {
        id: 5,
        name: 'Product 5',
        image: '/Images/med3.jpeg',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // add autoplay prop
    autoPlaySpeed: "2000",
  };

  return (
    <div style={{height: "30vh"}} >
      <h4 style={{padding: "1rem"}} >Recommended Products</h4>
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <img style={{
                width: "200px"
            }} src={product.image} alt={product.name} />
            <p className='text-center' >{product.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
