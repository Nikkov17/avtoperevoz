import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./slider.css";

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
            <LazyLoadImage
              alt={item.title}
              className={
                item.image ? "slider-item-image" : "slider-item-image opacity"
              }
              width="100%"
              height="100%"
              effect="blur"
              src={item.image}
            />
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
