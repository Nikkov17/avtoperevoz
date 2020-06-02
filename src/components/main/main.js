import React from "react";
import "./main.css";
import SliderComponent from "./slider/slider";

function Main() {
  // images size: 1054x575
  const trucksContent = [
    {
      title: "МАЗ 5516",
      description: "Универсальная машина, грузоподъемностью 20т",
      image: "./images/5516.png",
    },
    {
      title: "МАЗ 6501е9",
      description: "Современный самосвал, вместимостью 20 м3",
      image: "./images/6501.png",
    },
    // {
    //   title: "Volvo fm",
    //   description: "Volvo, и этим все сказано",
    //   image: "./images/volvo-fm.png",
    // },
    {
      title: "Scania",
      description: "Старая добрая скамеечка",
      image: "./images/scania.png",
    },
    {
      title: "MAN TGA",
      description: "Полноприводный четырехосный самосвал доставит куда-угодно",
      image: "./images/man-tga.png",
    },
  ];

  const rastgruntContent = [
    {
      title: "Чернозем",
      description: "цены",
      image: "./images/rastgrunt.jpg",
    },
  ];

  const asphaltogranulatContent = [
    {
      title: "Асфальто и бетоно гранулят",
      description: "цены",
      image: "./images/asphaltogranulat.jpg",
    },
  ];

  const shebenContent = [
    {
      title: "Щебень",
      description: "цены",
      image: "./images/sheben.jpg",
    },
  ];

  const pgsContent = [
    {
      title: "Песок и ПГС",
      description: "цены",
      image: "./images/pgs.jpg",
    },
  ];

  const snowContent = [
    {
      title: "Вывоз снега",
      description: "цены",
      image: "./images/snow.jpg",
    },
  ];

  const kotlovanContent = [
    {
      title: "Разработка котлованов",
      description: "цены",
      image: "./images/kotlovan.jpg",
    },
  ];

  return (
    <main className="main">
      <div className="main-start">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          className="video"
          src="./videos/excavator.mp4"
        />
        <div className="main-our-services">
          <p>Наши услуги:</p>
          <ul className="main-our-services-list">
            <li>
              <a href="#trucks">Грузоперевозки самосвалами</a>
            </li>
            <li>
              <a href="#rastgrunt">Доставка растительного грунта</a>
            </li>
            <li>
              <a href="#asphaltogranulat">Продажа асфальто и бетоногранулята</a>
            </li>
            <li>
              <a href="#sheben">Доставка и/или продажа щебня</a>
            </li>
            <li>
              <a href="#pgs">Доставка и/или продажа песка и ПГС</a>
            </li>
            <li>
              <a href="#snow">Уборка снега</a>
            </li>
            <li>
              <a href="#kotlovan">Разработка котлованов</a>
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
      </div>
    </main>
  );
}

export default Main;
