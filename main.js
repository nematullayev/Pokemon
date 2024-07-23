function getElement(selector) {
  return document.querySelector(selector);
}
const elWrapper = getElement(".shop");
const pokemons = ["nmadir", "yana", "dmaklnd", "sdf"];

pokemons.forEach((item, i) => {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
     <img class="po" src="./img/po.png" alt="Po" />
     <img class="hr" src="./img/Rectangle 6.png" alt="" />
     <div class="first-shop-top">
       <strong class="first-shop-top-s">Pokemons</strong>
       <img class="heart2" src="./img/heart (1).svg" alt="heart" />
     </div>
     <div class="first-shop-center">
       <p class="first-shop-center">${i}</p>
     </div>
     <div class="first-shop-end">
       <strong class="first-shop-center-s">6.9 kg</strong>
       <strong class="first-shop-center-s2">99 age</strong>
     </div>
`;
  newDiv.className = "first-shop";
  elWrapper.appendChild(newDiv);
  debugger;
});
console.log(pokemons);
