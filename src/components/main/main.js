import React, { Fragment, Suspense } from "react";
import "./main.css";
import data from "../../data/servicesslidercontent";
const SliderComponent = React.lazy(() => import("./slider/slider"));

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
        <Suspense fallback={<div>Загрузка...</div>}>
          <SliderComponent content={service.sliderContent} />
        </Suspense>
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
          <p className="description">
            Выполняем грузоперевозки любой сложности, от вывоза строительного
            мусора или снега до разработки котлованов. Широкий автопарк и
            профессиональные водители
          </p>
          <ul className="main-our-services-list">{ourServices}</ul>
          <p className="price-info">
            Представленные на сайте цены являются ориентировочными.
          </p>
        </nav>
      </div>
      <div className="main-sliders">{mainSliders}</div>
    </main>
  );
}

export default Main;
