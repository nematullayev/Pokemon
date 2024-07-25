function getElement(selector) {
  return document.querySelector(selector);
}
const elInput = getElement("#input");
const elButton = getElement("#btn");
const elCategories = getElement("#categories-list");
const elCategories2 = getElement("#categories");
const elHeart = getElement("#heart");
const elMenu = getElement(".drawer");
const elClose = getElement("#close");
const elBody = getElement("body");

const elWrapper = getElement(".shop");

const pokemons = [
  {
    img: "./img/po.png",
    title: "Pokemon",
    text: ["Pokemon", "All"],
    kilo: "6.9 kg",
    age: "39 age",
  },
  {
    img: "./img/muhammad-ali.png",
    title: "Muhamad Ali",
    text: ["Boxer", "All"],
    kilo: "65 kg",
    age: "60 age",
  },
  {
    img: "./img/tyson.png",
    title: "Mike Tyson",
    text: ["Boxer", "All"],
    kilo: "9 kg",
    age: "43 age",
  },
  {
    img: "./img/iphone.png",
    title: "Iphone 15 pro max",
    text: ["Phones", "All"],
    kilo: "3.9 kg",
    age: "17 age",
  },
  {
    img: "./img/samsung.png",
    title: "Samsunng S24 Ultra",
    text: ["Phones", "All"],
    kilo: "6 kg",
    age: "9 age",
  },
  {
    img: "./img/ro.png",
    title: "Ronaldo",
    text: ["Champion", "Footbal", "All"],
    kilo: "7 kg",
    age: "39 age",
  },
  {
    img: "./img/messi.png",
    title: "Messi",
    text: ["Champion", "Footbal", "All"],
    kilo: "10 kg",
    age: "37 age",
  },
  {
    img: "./img/sho.png",
    title: "Shomurodov",
    text: ["Footbal", "Champion", "All"],
    kilo: "9.6 kg",
    age: " 34 age",
  },
];
// 1-chi
if ((elCategories.value = "All")) {
  displayPokemonCard(pokemons);
}
// 2-chi
if ((elCategories2.value = "All")) {
  displayPokemonCard(pokemons);
}

const categories = ["All", "Phones", "Boxer", "Pokemon", "Footbal"];
const secondCategories = ["All", "Az-Zz", "Age", "KG"];

elInput.addEventListener("change", () => {
  if (elInput.value.length > 0) {
    const filteredArray = pokemons.filter((item) =>
      item.title.toLowerCase().includes(elInput.value.toLowerCase())
    );
    displayPokemonCard(filteredArray);
  } else {
    displayPokemonCard(pokemons);
  }
});
// 1-chi SELECT
window.addEventListener("DOMContentLoaded", function () {
  displayPokemonCard(pokemons);

  categories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;

    elCategories.appendChild(newOption);
  });
});

elCategories.addEventListener("change", () => {
  const filteredObjekt = pokemons.filter((item) =>
    item.text.includes(elCategories.value)
  );

  displayPokemonCard(filteredObjekt);
});
// 2-chi SELECT
window.addEventListener("DOMContentLoaded", function () {
  displayPokemonCard(pokemons);

  secondCategories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;

    elCategories2.appendChild(newOption);
  });
});

function displayPokemonCard(pokemons) {
  let pokemon = pokemons.map((item) => {
    return (item.innerHTML = `
    <div class="first-shop">
    <img class="po" src=${item.img} alt="Po" />
    <img class="hr" src="./img/Rectangle 6.png" alt="" />
    <div class="first-shop-top">
      <strong class="first-shop-top-s">${item.title}</strong>
      <img class="heart2" src="./img/heart (1).svg" alt="heart" />
    </div>
    <div class="first-shop-center">
      <p class="first-shop-center">${item.text}</p>
    </div>
    <div class="first-shop-end">
      <strong class="first-shop-center-s">${item.kilo}</strong>
      <strong class="first-shop-center-s2">${item.age}</strong>
    </div>
  </div>
  `);
  });
  pokemon = pokemon.join("");
  elWrapper.innerHTML = pokemon;
  console.log(pokemons);
}
displayPokemonCard(pokemons);
elHeart.addEventListener("click", () => {
  console.log("clicked");
  elMenu.style.display = "block";
});
elClose.addEventListener("click", () => {
  elMenu.style.display = "none";
  elBody.style.backgroundColor = "#ffd845";
});
