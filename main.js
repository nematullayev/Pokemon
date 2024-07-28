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
    id: 1,
    img: "./img/po.png",
    title: "Pokemon",
    text: ["Pokemon", "All"],
    kilo: "6.9 kg",
    age: 39,
    isFavorite: true,
  },
  {
    id: 2,
    img: "./img/muhammad-ali.png",
    title: "Muhamad Ali",
    text: ["Boxers", "All"],
    kilo: "65 kg",
    age: 60,
    isFavorite: false,
  },
  {
    id: 3,
    img: "./img/tyson.png",
    title: "Mike Tyson",
    text: ["Boxers", "All"],
    kilo: "9 kg",
    age: 43,
    isFavorite: false,
  },
  {
    id: 4,
    img: "./img/iphone.png",
    title: "Iphone 15 pro max",
    text: ["Phones", "All"],
    kilo: "3.9 kg",
    age: 17,
    isFavorite: false,
  },
  {
    id: 5,
    img: "./img/samsung.png",
    title: "Samsung S24 Ultra",
    text: ["Phones", "All"],
    kilo: "6 kg",
    age: 9,
    isFavorite: true,
  },
  {
    id: 6,
    img: "./img/ro.png",
    title: "Ronaldo",
    text: ["Footbal", "All"],
    kilo: "7 kg",
    age: 39,
    isFavorite: false,
  },
  {
    id: 7,
    img: "./img/messi.png",
    title: "Messi",
    text: ["Footbal", "All"],
    kilo: "10 kg",
    age: 37,
    isFavorite: true,
  },
  {
    id: 8,
    img: "./img/sho.png",
    title: "Shomurodov",
    text: ["Footbal", "All"],
    kilo: "9.6 kg",
    age: 34,
    isFavorite: false,
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

const categories = ["All", "Phones", "Boxers", "Pokemon", "Footbal"];
const secondCategories = ["All", "Aa-Zz", "Age"];

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
elCategories2.addEventListener("change", () => {
  const sortAge = pokemons.slice().sort((a, b) => b.age - a.age);
  console.log(sortAge);

  const newArr = pokemons
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title));
  if (elCategories2.value == "Age") {
    displayPokemonCard(sortAge);
  } else if (elCategories2.value == "Aa-Zz") {
    displayPokemonCard(newArr);
  } else if (elCategories2.value == "All") {
    displayPokemonCard(pokemons);
  }
});

function displayPokemonCard(pokemons, where = elWrapper) {
  let pokemon = pokemons.map((item) => {
    return (item.innerHTML = `
    <div class="first-shop">
    <img class="po" src=${item.img} alt="Po" />
    <img class="hr" src="./img/Rectangle 6.png" alt="" />
    <div class="first-shop-top">
      <strong class="first-shop-top-s">${item.title}</strong>
      <img class="favorite2" src="./img/heart(1).svg" alt="heart" />
    </div>
    <div class="first-shop-center">
      <p class="first-shop-center">${item.text}</p>
    </div>
    <div class="first-shop-end">
      <strong class="first-shop-center-s">${item.kilo}</strong>
      <strong class="first-shop-center-s2">${item.age} age</strong>
    </div>
  </div>
  `);
  });
  const elbtn = getElement(".favorite2");
  console.log(elbtn);

  pokemon = pokemon.join("");
  where.innerHTML = pokemon;
}
displayPokemonCard(pokemons);
elHeart.addEventListener("click", () => {
  displayPokemonCard(pokemons /*elMenu*/);
});

// const likeBtn = getElement(".favorite2");
// likeBtn.addEventListener("click", () => {
//   console.log("clicked");
//   for (let i = 0; i < pokemons.length; i++) {
//     likeBtn.dataset.id = pokemons[i].id;
//     console.log(pokemons[i]);
//     if (pokemons[i].isFavorite) {
//       likeBtn.src = "./img/favorite.png";
//     }
//   }
// });
