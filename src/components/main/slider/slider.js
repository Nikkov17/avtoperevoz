import React from "react";
import Slider from "react-slick";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderComponent(props) {
  const content = props.content;
  const settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: props.content.length > 1 ? true : false,
    autoplaySpeed: 5500,
    easing: "ease",
  };

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
            <div className="slider-item-content">
              <h3>{item.title}</h3>
              <div>
                {item.description}
                {item.price ? (
                  <div className="slider-item-content-price">
                    <p>Стоимость(Без учета НДС):</p>
                    <div>{item.price}</div>
                  </div>
                ) : (
                  false
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
