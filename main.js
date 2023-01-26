"use strict";

import data from "./assets/pokedex.json" assert { type: "json" };
// const pokemonMock = localStorage.setItem('pokedex', JSON.stringify(data));

let x = 12;
let i = 0;
const load = document.querySelector(".load-more");
// counter for making the load more btn load and create 12 more cards.
load.onclick = function () {
  x += 12;
  i += 12;
  showPokemon(i, x);
  createModal(i, x);
  pokeType(data, i, x);
  areLike(i, x);
  return i, x;
};
// create div for each item in the Json file.
function showPokemon(i, x) {
  const gallery =
    document.getElementById("gall"); /*choose the main div for the cards*/
  for (i; i < x; i++) {
    /**iterate 12 time on the Json. */
    const unit = data[i];
    let square = document.createElement("div");
    square.className = "square";
    square.id = unit.id;
    let picture = document.createElement("img");
    picture.className = "picture";
    // picture.id = `${unit.id + 0.5}`;
    picture.src = `${unit.image.hires}`;
    picture.alt = `${unit.name.english}`;
    let serial = document.createElement("p");
    serial.id = `${unit.id}`;
    serial.innerHTML = "#" + `${unit.id}`.padStart(3, "0");
    serial.className = "serial-number";
    let name = document.createElement("p");
    name.className = "pokeName";
    name.innerHTML = `${unit.name.english}`;
    square.appendChild(serial);
    square.appendChild(picture);
    square.appendChild(name);
    gallery.append(square);
  }
}
showPokemon(i, x);

document.addEventListener("click", (e) => {
  let elementId = e.target.id;
  let test = parseInt(elementId);
  if (test) {
    let modal = document.getElementById(`modal-content-${elementId}`);
    modal.style.display = "flex";
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
});

// create the modal for each pokemon un the Json. iterate 12 times. according to the counter.
function createModal(i, x) {
  for (i; i < x; i++) {
    const unit = data[i];
    let square = document.getElementById(`${unit.id}`);
    /** choosing the specific Div for the modal */

    let modalContent =
      document.createElement("div"); /**create the main page for the modal */
    modalContent.id = `modal-content-${unit.id}`;
    modalContent.className = "modal-content";
    modalContent.innerHTML = `<div id="back-home"><img src="./assets/Vector.png" alt=""><a href="./pokedex.html">Home page</a></div>`;
    /**create the card with the details */

    let modal = document.createElement("div");
    modal.className = "modal";
    let serial = document.createElement("p");
    serial.id = `@${unit.id}`;
    serial.innerHTML = "#" + `${unit.id}`.padStart(3, "0");
    serial.className = "serial-number";
    let picture = document.createElement("img");
    picture.className = "picture";
    picture.src = `${unit.image.hires}`;
    picture.alt = `${unit.name.english}`;
    let name = document.createElement("p");
    name.className = "pokeName";
    name.innerHTML = `${unit.name.english}`;
    let mini = document.createElement("div");
    mini.id = `mini-${unit.id}`;
    mini.className = "square-m";
    let Type = document.createElement("div");
    Type.id = `type-${unit.id}`;
    Type.className = "type";
    let hr = document.createElement("hr");
    let right = document.createElement("div");
    right.className = "right";
    let description = document.createElement("div");
    description.className = "description";
    description.innerHTML = `<h5>Description</h5><p>${unit.description}</p>`;
    let stats = document.createElement("div");
    stats.className = "stats";
    let info = "";
    let total = "";
    let value = 0;
    for (let x in data[i].base) {
      info += `${x}:${data[i].base[x]} `;
      value += data[i].base[x];
      total = `Total: ${value}`;
    }
    value = 0;
    stats.innerHTML = `<h5>Stats</h5>
                            <div id="info">
                                <div id="base">${info}</div>
                                <div id="total">${total}</div>
                            </div> 
                            </div>`;
    let heart = document.createElement("button");
    heart.id = "heart";
    heart.className = "btn";
    let icon = document.createElement("img");
    icon.id = `like-${unit.id}`;
    icon.src = "./assets/heart.png";

    right.appendChild(description);
    right.appendChild(stats);
    mini.appendChild(serial);
    mini.appendChild(picture);
    mini.appendChild(name);
    mini.appendChild(Type);
    modal.appendChild(mini);
    modal.appendChild(hr);
    modal.appendChild(right);
    heart.appendChild(icon);
    modal.appendChild(heart);
    modalContent.appendChild(modal);
    square.appendChild(modalContent);
  }
}
createModal(i, x);

function pokeType(array, i, x) {
  for (i; i < x; i++) {
    const unit = array[i];
    let type = document.getElementById(`type-${unit.id}`);
    for (let j = 0; j < array[i].type.length; j++) {
      let kind = unit.type[j];
      let pokeType = document.createElement("div");
      pokeType.className = kind;
      pokeType.innerHTML = kind;
      type.appendChild(pokeType);
      switch (pokeType.className) {
        case "Normal":
          pokeType.style.background = "#A8A77A";
          break;
        case "Fire":
          pokeType.style.background = "#EE8130";
          break;
        case "Water":
          pokeType.style.background = "#6390F0";
          break;
        case "Electric":
          pokeType.style.background = "#F7D02C";
          break;
        case "Grass":
          pokeType.style.background = "#7AC74C";
          break;
        case "Ice":
          pokeType.style.background = "#96D9D6";
          break;
        case "Fighting":
          pokeType.style.background = "#C22E28";
          break;
        case "Poison":
          pokeType.style.background = "#A33EA1";
          break;
        case "Ground":
          pokeType.style.background = "#E2BF65";
          break;
        case "Flying":
          pokeType.style.background = "#A98FF3";
          break;
        case "Psychic":
          pokeType.style.background = "#F95587";
          break;
        case "Bug":
          pokeType.style.background = "#A6B91A";
          break;
        case "Rock":
          pokeType.style.background = "#B6A136";
          break;
        case "Ghost":
          pokeType.style.background = "#735797";
          break;
        case "Dragon":
          pokeType.style.background = "#6F35FC";
          break;
        case "Dark":
          pokeType.style.background = "#705746";
          break;
        case "Steel":
          pokeType.style.background = "#B7B7CE";
          break;
        case "Fairy":
          pokeType.style.background = "#D685AD";
          break;

        default:
          break;
      }
    }
  }
}

pokeType(data, i, x);
function greenColor() {
  if (window.location.href === "http://127.0.0.1:5501/pokedex.html") {
    document.getElementById("home").style.background = "rgba(148, 217, 126, 1)";
    document.getElementById("a-home").style.color = "rgb(0, 0, 0)";
    document.getElementById("a-favorite").style.color = "rgb(255, 255, 255)";
  } else if (window.location.href === "http://127.0.0.1:5501/favorites.html") {
    document.getElementById("a-home").style.color = "rgb(255, 255, 255)";
    document.getElementById("home").style.background = " rgba(2, 1, 102, 1)";
    document.getElementById("favorite").style.background =
      "rgba(148, 217, 126, 1)";
    document.getElementById("a-favorite").style.color = "rgb(0, 0, 0)";
  }
}
greenColor();

/*create favorite array*/
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let like = false;
function areLike(i, x) {
  for (i; i < x; i++) {
    let unit = data[i];
    let icon = document.getElementById(`like-${unit.id}`); //getting the specific button for the current pokimon
    if (favorites.findIndex((e) => e.id === unit.id) != -1) {
      icon.src = "./assets/heart2.png";
    } else {
      icon.src = "./assets/heart.png";
    }
    icon.onmouseover = () => {
      if (favorites.findIndex((e) => e.id === unit.id) === -1) {
        icon.src = "./assets/heart-hover.png";
      }
    };
    icon.onmouseout = () => {
      if (favorites.findIndex((e) => e.id === unit.id) != -1) {
        icon.src = "./assets/heart2.png";
      } else {
        icon.src = "./assets/heart.png";
      }
    };
    icon.onclick = () => {
      if (favorites.findIndex((e) => e.id === unit.id) === -1) {
        icon.src = "./assets/heart2.png";
        like = !like;
        favorites.push(unit);
        localStorage.setItem("favorites", JSON.stringify(favorites));
      } else if (favorites.findIndex((e) => e.id === unit.id) != -1) {
        icon.src = "./assets/heart.png";
        let itemIndex = favorites.findIndex((e) => e.id === unit.id);
        like = !like;
        if (itemIndex !== -1) {
          favorites.splice(itemIndex, 1);
          localStorage.setItem("favorites", JSON.stringify(favorites));
        }
      }
    };
  }
}
areLike(i, x);

// create pokemons cards in the favorite page.
function showFavorite() {
  let likePokemon = document.getElementById("like-pokemon");
  let favoriteData = JSON.parse(localStorage.getItem("favorites"));
  if (localStorage.getItem("favorites") != null) {
    for (let i = 0; i < favoriteData.length; i++) {
      const unit = favoriteData[i];
      let square = document.createElement("div");
      square.className = "square";
      square.id = unit.id;
      let picture = document.createElement("img");
      picture.className = "picture";
      picture.id = `${unit.id + 0.5}`;
      picture.src = `${unit.image.hires}`;
      picture.alt = `${unit.name.english}`;
      let serial = document.createElement("p");
      serial.id = `${unit.id}`;
      serial.innerHTML = "#" + `${unit.id}`.padStart(3, "0");
      serial.className = "serial-number";
      let name = document.createElement("p");
      name.className = "pokeName";
      name.innerHTML = `${unit.name.english}`;
      square.appendChild(serial);
      square.appendChild(picture);
      square.appendChild(name);
      likePokemon.appendChild(square);
    }
  }
}
showFavorite();
