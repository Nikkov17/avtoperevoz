import React, { useState } from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent(props) {
  const [hidden, setHidden] = useState(false);

  const content = props.content;
  const settings = {
    infinite: true,
    speed: 2500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: props.content.length > 1 ? true : false,
    autoplaySpeed: 4000,
    easing: "ease",
    beforeChange: function () {
      setHidden(true);
    },
    afterChange: function () {
      setHidden(false);
    },
  };

  let contentClasses = hidden
    ? "slider-item-content hidden"
    : "slider-item-content";

  return (
    <Slider {...settings} className="slider">
      {content.map((item) => (
        <div className="slider-item">
          <div className="slider-item-image-background">
            <img
              className="slider-item-image"
              src={item.image}
              alt={item.title}
            ></img>
            <div className={contentClasses}>
              <h3>{item.title}</h3>
              <div>{item.description}</div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
