import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageCarousel.css'; // Import styles
import SlideImage_1 from './assets/img_1.jpeg';
import SlideImage_2 from './assets/img_2.jpeg';
import SlideImage_3 from './assets/img_3.jpeg'

const ImageCarousel = () => {
  const images = [
    SlideImage_1,SlideImage_2,SlideImage_3
  ];

  // Slick carousel settings
  const settings = {
    dots: true, // Enables selector buttons
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide previous/next arrows, we'll just use the selector buttons
    customPaging: i => (
      <button className="custom-dot" />
    ),
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
