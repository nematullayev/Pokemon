function getElement(selector, parent = document) {
  return parent.querySelector(selector);
}

let pokemonCards = [
  {
    id: 1,
    img: "./img/po.png",
    title: "Pokemon",
    categories: ["Pokemon", "All"],
    weight: "6.9 kg",
    age: 39,
    isFavorite: false,
  },
  {
    id: 2,
    img: "./img/muhammad-ali.png",
    title: "Muhamad Ali",
    categories: ["Boxers", "All"],
    weight: "65 kg",
    age: 60,
    isFavorite: false,
  },
  {
    id: 3,
    img: "./img/tyson.png",
    title: "Mike Tyson",
    categories: ["Boxers", "All"],
    weight: "9 kg",
    age: 43,
    isFavorite: false,
  },
  {
    id: 4,
    img: "./img/iphone.png",
    title: "Iphone 15 pro max",
    categories: ["Phones", "All"],
    weight: "3.9 kg",
    age: 17,
    isFavorite: false,
  },
  {
    id: 5,
    img: "./img/samsung.png",
    title: "Samsung S24 Ultra",
    categories: ["Phones", "All"],
    weight: "6 kg",
    age: 9,
    isFavorite: false,
  },
  {
    id: 6,
    img: "./img/ro.png",
    title: "Ronaldo",
    categories: ["Footbal", "All"],
    weight: "7 kg",
    age: 39,
    isFavorite: false,
  },
  {
    id: 7,
    img: "./img/messi.png",
    title: "Messi",
    categories: ["Footbal", "All"],
    weight: "10 kg",
    age: 37,
    isFavorite: false,
  },
  {
    id: 8,
    img: "./img/sho.png",
    title: "Shomurodov",
    categories: ["Footbal", "All"],
    weight: "9.6 kg",
    age: 34,
    isFavorite: false,
  },
];

const categories = ["All", "Footbal", "Phones", "Boxers", "Pokemon"];
const sectionEl = document.querySelector(".row");

const btns = document.querySelectorAll(".btn");
const template = document.querySelector("template");

const elCategories = getElement("#categories-list");
const elSearchInput = getElement("#search");
const elSubmitBtn = getElement("#submit-btn");
const elOrderSelect = getElement("#order-select");
const menu = getElement(".offcanvas-body");

elOrderSelect.addEventListener("change", () => {
  if (elOrderSelect.value === "age") {
    const sortedArray = pokemonCards.sort((a, b) => a.age - b.age);

    displayPokemonCard(sortedArray);
  }
});

elSubmitBtn.addEventListener("click", () => {
  if (elSearchInput.value.length > 0) {
    const filteredArray = pokemonCards.filter((item) =>
      item.title.toLowerCase().includes(elSearchInput.value.toLowerCase())
    );

    displayPokemonCard(filteredArray);
  } else {
    displayPokemonCard(pokemonCards);
  }
});

window.addEventListener("DOMContentLoaded", function () {
  displayPokemonCard(pokemonCards);

  categories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;

    elCategories.appendChild(newOption);
  });
});

elCategories.addEventListener("change", () => {
  const filteredArray = pokemonCards.filter((item) =>
    item.categories.includes(elCategories.value)
  );

  displayPokemonCard(filteredArray);
});

function displayPokemonCard(menuItems) {
  sectionEl.textContent = null;

  let displayPokemonCard = menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);

    const topImg = getElement(".card-img-top", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);
    const categories = getElement(".categories", newElement);
    const likeBtn = getElement(".card-like", newElement);

    likeBtn.dataset.id = item.id;
    if (item.isFavorite) {
      likeBtn.src = "./images/favorite.png";
    }

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.weight;
    age.textContent = item.age;

    item.categories.map((category, i) => {
      const newLi = document.createElement("li");
      const span = document.createElement("span");

      if (item.categories.length - 1 !== i) {
        span.textContent = ", ";
      }

      newLi.textContent = category;

      categories.appendChild(newLi);
      categories.appendChild(span);
    });

    sectionEl.appendChild(newElement);
  });
}
function PokemonCard(menuItems, where) {
  where.textContent = null;

  let displayPokemonCard = menuItems.map((item) => {
    const newElement = template.content.cloneNode(true);

    const topImg = getElement(".card-img-top", newElement);
    const title = getElement(".card-title", newElement);
    const weight = getElement(".card-weight", newElement);
    const age = getElement(".card-age", newElement);
    const categories = getElement(".categories", newElement);
    const likeBtn = getElement(".card-like", newElement);

    likeBtn.dataset.id = item.id;
    if (item.isFavorite) {
      likeBtn.src = "./images/favorite.png";
    }

    topImg.src = item.img;
    title.textContent = item.title;
    weight.textContent = item.weight;
    age.textContent = item.age;

    item.categories.map((category, i) => {
      const newLi = document.createElement("li");
      const span = document.createElement("span");

      if (item.categories.length - 1 !== i) {
        span.textContent = ", ";
      }

      newLi.textContent = category;

      categories.appendChild(newLi);
      categories.appendChild(span);
    });

    where.appendChild(newElement);
  });
}
const arr = [];
sectionEl.addEventListener("click", (evt) => {
  if (evt.target.className === "card-like") {
    const id = Number(evt.target.dataset.id);

    for (let i = 0; i < pokemonCards.length; i++) {
      if (pokemonCards[i].id === id) {
        pokemonCards[i].isFavorite = !pokemonCards[i].isFavorite;
        arr.push(pokemonCards[i]);
      }
    }
    displayPokemonCard(pokemonCards);
    PokemonCard(arr, menu);
  }
});
console.log(sectionEl);
