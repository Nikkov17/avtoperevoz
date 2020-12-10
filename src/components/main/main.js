import React, { Fragment } from "react";
import "./main.css";
import SliderComponent from "./slider/slider";
import data from "../../data/servicesslidercontent";

function Main() {
  const ourServices = data.map((service) => {
    return (
      <li
        key={service.id}
        className={service.id === "specialoffers" ? "special-offers" : ""}
      >
        <a href={`#${service.id}`}>{service.title}</a>
      </li>
    );
  });
  const mainSliders = data.map((service) => {
    return (
      <Fragment key={service.id}>
        <a id={service.id} href={`#${service.id}`}>
          {service.title}
        </a>
        <SliderComponent content={service.sliderContent} />
      </Fragment>
    );
  });

  return (
    <main className="main">
      <div className="main-start">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="video"
          src="./videos/excavator.mp4"
        />
        <nav className="main-our-services">
          <p>Наши услуги:</p>
          <p className="price-info">
            Представленные на сайте цены являются ориентировочными.
          </p>
          <ul className="main-our-services-list">{ourServices}</ul>
        </nav>
      </div>
      <div className="main-sliders">{mainSliders}</div>
    </main>
  );
}

export default Main;
