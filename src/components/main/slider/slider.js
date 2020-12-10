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
  const priceView = (price) => {
    return price.map((line, index) => {
      const row = line.map((column, index) => <div key={index}>{column}</div>);

      return (
        <div key={index} className="slider-item-content-price-row">
          {row}
        </div>
      );
    });
  };

  return (
    <Slider {...settings} className="slider">
      {content.map((item) => (
        <div className="slider-item" key={item.title}>
          <div
            className={
              item.id === "specialoffers"
                ? "slider-item-image-background special-offers"
                : "slider-item-image-background"
            }
          >
            <img
              className={
                item.image ? "slider-item-image" : "slider-item-image opacity"
              }
              src={item.image}
              alt={item.title}
            ></img>
            <div className="slider-item-content">
              <h3>{item.title}</h3>
              <div>
                {item.description}
                <div className="slider-item-content-price">
                  {item.price ? priceView(item.price) : false}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SliderComponent;
