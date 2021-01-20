const trucksContent = {
  title: "Грузоперевозки самосвалами",
  id: "trucks",
  sliderContent: [
    {
      title: "МАЗ 5516",
      description: "20т - 15м3",
      price: [["Цена без НДС"], ["45 BYN/час + 1.2 BYN/км"]],
      image: "./images/5516.jpeg",
    },
    {
      title: "МАЗ 6501е9",
      description: "20м3",
      price: [["Цена без НДС"], ["50 BYN/час"]],
      image: "./images/6501.jpeg",
    },
    {
      title: "DAF CF",
      price: [["Цена без НДС"], ["55 BYN/час или 2 BYN/км круг"]],
      description: "Длинномер, длинна кузова 13.5 м.",
      image: "./images/daf.jpeg",
    },
    {
      title: "Ginaf",
      price: [["Цена без НДС"], ["60 BYN/час"]],
      description: "Колесная формула 8x8, 25м3",
      image: "./images/ginaf.jpeg",
    },
    {
      title: "Scania",
      price: [["Цена без НДС"], ["50 BYN/час"]],
      description: "18м3",
      image: "./images/scania.jpeg",
    },
    {
      title: "MAN TGA",
      price: [["Цена без НДС"], ["50 BYN/час"]],
      description: "15м3. Полный привод",
      image: "./images/man-tga.jpeg",
    },
  ],
};

const rastgruntContent = {
  title: "Продажа растительного грунта",
  id: "rastgrunt",
  sliderContent: [
    {
      title: "Продажа чернозёма",
      image: "./images/rastgrunt.jpeg",
    },
  ],
};

const asphaltogranulatContent = {
  title: "Продажа асфальто и бетоногранулята",
  id: "asphaltogranulat",
  sliderContent: [
    {
      title: "Продажа асфальтогранулята",
      price: [["Цена без НДС"], ["от 10 BYN/т"]],
      image: "./images/asphaltogranulat.jpeg",
    },
    {
      title: "Продажа бетоногранулята",
      price: [["Цена без НДС"], ["от 3 BYN/т"]],
      image: "./images/beton.jpeg",
    },
  ],
};

const shebenContent = {
  title: "Продажа щебня",
  id: "sheben",
  sliderContent: [
    {
      title: "Продажа щебня",
      price: [
        ["Фракция", "Цена без НДС(BYN)", "Цена с НДС(BYN)"],
        ["0.63-5", "27.64", "33.17"],
        ["5-20", "35.89", "43.07"],
        ["20-40", "31.58", "37.89"],
        ["40-70", "32.63", "39.16"],
        ["70-120", "32.63", "39.16"],
        ["10-15", "39.57", "47.48"],
        ["15-20", "39.57", "47.48"],
      ],
      image: "./images/sheben.jpeg",
    },
  ],
};

const pgsContent = {
  title: "Продажа песка и ПГС",
  id: "pgs",
  sliderContent: [
    {
      title: "Продажа песка и ПГС",
      price: [["Цена без НДС"], ["от 6.5 BYN/м3"]],
      image: "./images/pgs.jpeg",
    },
  ],
};

const cornContent = {
  title: "Перевозка кукурузы",
  id: "corn",
  sliderContent: [
    {
      title: "Перевозка кукурузы",
      price: [["Цена без НДС"], ["от 45 BYN/час"]],
      image: "./images/kukuruza.jpeg",
    },
  ],
};

const potatoContent = {
  title: "Перевозка картофеля",
  id: "potato",
  sliderContent: [
    {
      title: "Перевозка картофеля",
      price: [["Цена без НДС"], ["от 45 BYN/час"]],
      image: "./images/potato.jpeg",
    },
  ],
};

const cerealContent = {
  title: "Перевозка зерна и силоса",
  id: "cereal",
  sliderContent: [
    {
      title: "Перевозка зерна",
      price: [["Цена без НДС"], ["от 45 BYN/час или 0.10 BYN т/км"]],
      image: "./images/cereal.jpeg",
    },
    {
      title: "Перевозка силоса",
      price: [["Цена без НДС"], ["от 45 BYN/час"]],
      image: "./images/silos.jpeg",
    },
  ],
};

const snowContent = {
  title: "Вывоз снега",
  id: "snow",
  sliderContent: [
    {
      title: "Вывоз снега",
      price: [["Цена без НДС"], ["от 45 BYN/час"]],
      image: "./images/snow.jpeg",
    },
  ],
};

const kotlovanContent = {
  title: "Разработка котлована",
  id: "kotlovan",
  sliderContent: [
    {
      title: "Разработка котлована",
      image: "./images/kotlovan.jpeg",
    },
  ],
};

const vyvozmusoraContent = {
  title: "Вывоз мусора",
  id: "vyvozmusora",
  sliderContent: [
    {
      title: "Вывоз мусора",
      price: [["Цена без НДС"], ["от 250 BYN/15 м3"]],
      image: "./images/constructionwaste.jpeg",
    },
  ],
};

const specialOffers = {
  title: "Акции",
  id: "specialoffers",
  sliderContent: [
    {
      title: "Песок 2 класса с доставкой по г.Минск",
      id: "specialoffers",
      price: [["Цена c НДС"], ["18 BYN/м3"]],
    },
  ],
};

const data = [
  trucksContent,
  rastgruntContent,
  asphaltogranulatContent,
  shebenContent,
  pgsContent,
  cornContent,
  potatoContent,
  cerealContent,
  snowContent,
  kotlovanContent,
  vyvozmusoraContent,
  specialOffers,
];

export default data;
