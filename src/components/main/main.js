import React from "react";
import "./main.css";
import SliderComponent from "./slider/slider";

function Main() {
  // 1 час работы самосвала грузоподъемностью 20 т составляет 35р без учета НДС +
  // 1 км пробега самосвала грузоподъемностью 20 т составляет 1.2р без учета НДС
  const trucksContent = [
    {
      title: "МАЗ 5516",
      description: "Грузоподъемность 20т. цены",
      image: "./images/5516.jpg",
    },
    {
      title: "МАЗ 6501е9",
      description: "Вместимость 20м3. цены",
      image: "./images/6501.jpg",
    },
    {
      title: "Ginaf и Volvo fm",
      description: "Вместимость 18м3. цены",
      image: "./images/volvo-fm-ginaf.jpg",
    },
    {
      title: "Daf 85",
      description: "Грузоподъемность 45т. цены",
      image: "./images/daf.jpg",
    },
    {
      title: "Scania",
      description: "Вместимость 18м3. цены",
      image: "./images/scania.jpg",
    },
    {
      title: "MAN TGA",
      description: "Вместимость 15м3, полный привод. цены",
      image: "./images/man-tga.jpg",
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
      title: "Асфальто и Бетоно гранулят",
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

  const vyvozmusoraContent = [
    {
      title: "Вывоз мусора",
      description: "Цена: 250р",
      image: "",
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
