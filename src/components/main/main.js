import React from "react";
import "./main.css";
import SliderComponent from "./slider/slider";

function Main() {
  const trucksContent = [
    {
      title: "МАЗ 5516",
      description: "20т - 15м3",
      price: "45 BYN/час\r\n+\r\n1.2 BYN/км",
      image: "./images/5516.jpg",
    },
    {
      title: "МАЗ 6501е9",
      description: "20м3",
      price: "50 BYN/час",
      image: "./images/6501.jpg",
    },
    {
      title: "Ginaf",
      price: "60 BYN/час",
      description: "25м3",
      image: "./images/volvo-fm-ginaf.jpg",
    },
    {
      title: "Scania",
      price: "50 BYN/час",
      description: "18м3",
      image: "./images/scania.jpg",
    },
    {
      title: "MAN TGA",
      price: "50 BYN/час",
      description: "15м3. Полный привод",
      image: "./images/man-tga.jpg",
    },
    {
      title: "Daf 85",
      price: "0.10 BYN т/км",
      description: "45т",
      image: "./images/daf.jpg",
    },
  ];

  const rastgruntContent = [
    {
      title: "Чернозём",
      image: "./images/rastgrunt.jpg",
    },
  ];

  const asphaltogranulatContent = [
    {
      title: "Асфальтогранулят",
      price: "от 10 BYN/т",
      image: "./images/asphaltogranulat.jpg",
    },
    {
      title: "Бетоногранулят",
      price: "от 3 BYN/т",
      image: "./images/beton.jpg",
    },
  ];

  const shebenContent = [
    {
      title: "Щебень",
      image: "./images/sheben.jpg",
    },
  ];

  const pgsContent = [
    {
      title: "Песок и ПГС",
      price: "от 6.5 BYN/м3",
      image: "./images/pgs.jpg",
    },
  ];

  const snowContent = [
    {
      title: "Вывоз снега",
      image: "./images/snow.jpg",
    },
  ];

  const kotlovanContent = [
    {
      title: "Разработка котлована",
      image: "./images/kotlovan.jpg",
    },
  ];

  const vyvozmusoraContent = [
    {
      title: "Вывоз мусора",
      price: "от 250 BYN/15 м3",
      image: "./images/constructionwaste.jpeg",
    },
  ];

  return (
    <main className="main">
      <div className="main-start">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsinline={true}
          className="video"
          src="./videos/excavator.mp4"
        />
        <div className="main-our-services">
          <p>Наши услуги:</p>
          <p className="price-info">
            Представленные на сайте цены являются ориентировочными.
          </p>
          <ul className="main-our-services-list">
            <li>
              <a href="#trucks">Грузоперевозки самосвалами</a>
            </li>
            <li>
              <a href="#rastgrunt">Продажа растительного грунта</a>
            </li>
            <li>
              <a href="#asphaltogranulat">Продажа асфальто и бетоногранулята</a>
            </li>
            <li>
              <a href="#sheben">Продажа щебня</a>
            </li>
            <li>
              <a href="#pgs">Продажа песка и ПГС</a>
            </li>
            <li>
              <a href="#snow">Вывоз снега</a>
            </li>
            <li>
              <a href="#kotlovan">Разработка котлована</a>
            </li>
            <li>
              <a href="#vyvozmusora">Вывоз мусора</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-sliders">
        <a id="trucks" />
        <SliderComponent content={trucksContent} />
        <a id="rastgrunt" />
        <SliderComponent content={rastgruntContent} />
        <a id="asphaltogranulat" />
        <SliderComponent content={asphaltogranulatContent} />
        <a id="sheben" />
        <SliderComponent content={shebenContent} />
        <a id="pgs" />
        <SliderComponent content={pgsContent} />
        <a id="snow" />
        <SliderComponent content={snowContent} />
        <a id="kotlovan" />
        <SliderComponent content={kotlovanContent} />
        <a id="vyvozmusora" />
        <SliderComponent content={vyvozmusoraContent} />
      </div>
    </main>
  );
}

export default Main;
