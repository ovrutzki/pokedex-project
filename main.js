import data from "./assets/pokedex.json" assert {type: "json"};
const pokemonMock = localStorage.setItem('pokedex', JSON.stringify(data));
let myMock = JSON.parse(localStorage.getItem('pokedex')) || [];
let x = 12;
let i = 0;
const load = document.querySelector('.load-more')
load.onclick = function (){
    x += 12;
    i += 12;
    showPokemon (i, x);
    createModal(i, x);
    pokeType(myMock, i, x);
    return (i , x);
}
function showPokemon (i, x){
    const gallery = document.getElementById('gall');
    for ( i ; i < x; i++) {
        const unit = myMock[i];
        let square = document.createElement('div');
        square.className = 'square'
        square.id = unit.id;
        let picture = document.createElement('img');
        picture.className = 'picture';
        picture.src = `${unit.image.hires}`;
        picture.alt = `${unit.name.english}`;
        let serial = document.createElement('p');
        serial.id=`${unit.id}`;
        serial.innerHTML ='#' + `${unit.id}`.padStart(3, '0');
        serial.className = 'serial-number';
        let name = document.createElement('p');
        name.className = 'pokeName';
        name.innerHTML = `${unit.name.english}`;
        square.appendChild(serial);
        square.appendChild(picture);
        square.appendChild(name);
        gallery.append(square); 
    }
}

            
showPokemon (i, x);  

function createModal (i, x){
    for ( i ; i < x; i++) {
        const unit = myMock[i];
        let square = document.getElementById(`${unit.id}`);
        let modalContent = document.createElement('div');
        modalContent.id = `modal-content-${unit.id}`;
        modalContent.className = 'modal-content';
        let modal = document.createElement('div');
        modal.className = 'modal';
        let serial = document.createElement('p');
        serial.id=`${unit.id}`;
        serial.innerHTML = '#' + `${unit.id}`.padStart(3, '0');
        serial.className = 'serial-number';
        let picture = document.createElement('img');
        picture.className = 'picture';
        picture.src = `${unit.image.hires}`;
        picture.alt = `${unit.name.english}`;
        let name = document.createElement('p');
        name.className = 'pokeName';
        name.innerHTML = `${unit.name.english}`;
        let mini = document.createElement('div');
        mini.id= `mini-${unit.id}`;
        mini.className = 'square-m';
        let Type = document.createElement('div');
        Type.id = `type-${unit.id}`;
        Type.className = 'type';
        let hr = document.createElement('hr');
        let right = document.createElement('div');
        right.className = 'right';
        let description = document.createElement('div');
        description.className = 'description';
        description.innerHTML = `<h5>Description</h5><p>${unit.description}</p>`;
        let stats = document.createElement('div');
        stats.className = 'stats';
        let info ="";
        let total ="";
        let value = 0;
        for (let x in myMock[i].base) {
            value += myMock[i].base[x];
            info += `${x}:${myMock[i].base[x]} `; 
            total = `Total: ${value}`
        }
        value = 0;
        stats.innerHTML = `<h5>Stats</h5>
                            <div id="info">
                                <div id="base">${info}</div>
                                <div id="total">${total}</div>
                            </div> 
                            </div>`;
        let heart = document.createElement('button')
        heart.id = 'heart'
        heart.className = 'btn';
        let icone = document.createElement('i');
        icone.id = `like-${unit.id}`
        icone.className = "fa-regular fa-heart";
        let icone2 = document.createElement('i');
        icone2.id = `like2-${unit.id}`
        icone2.className = "fa-solid fa-heart";
        icone2.favorite = false;
        icone2.style.display = 'none';
        icone.onclick = () => {
            if (icone2.favorite === false) {
                icone2.style.display = 'flex';
                icone2.favorite = !icone2.favorite;
                console.log(icone2.favorite);
            } else if (icone2.favorite === true){
                icone2.style.display = 'none';
                icone2.favorite = !icone2.favorite;
                console.log(icone2.favorite, modalContent.id);
            }
        };
            right.appendChild(description);      
            right.appendChild(stats);
            mini.appendChild(serial);
            mini.appendChild(picture);
            mini.appendChild(name);
            mini.appendChild(Type);
            modal.appendChild(mini);   
            modal.appendChild(hr);   
            modal.appendChild(right);
            heart.appendChild(icone);
            heart.appendChild(icone2);
            modal.appendChild(heart);
            modalContent.appendChild(modal);
            square.appendChild(modalContent);
    }
};
createModal (i, x);

function pokeType(array, i, x){
    for (i ; i < x; i++) {
        const unit = array[i];
        let type = document.getElementById(`type-${unit.id}`);
        for (let j = 0; j < array[i].type.length; j++) {
            let kind = unit.type[j]
            let pokeType = document.createElement('div');
            pokeType.className = kind
            pokeType.innerHTML = kind;
            type.appendChild(pokeType);  
            switch (pokeType.className) {
                case 'Normal':
                        pokeType.style.background = '#A8A77A';
                    break;
                case 'Fire':
                        pokeType.style.background = '#EE8130';
                    break;
                case 'Water':
                        pokeType.style.background = '#6390F0';
                    break;
                case 'Electric':
                        pokeType.style.background = '#F7D02C';
                    break;
                case 'Grass':
                        pokeType.style.background = '#7AC74C';
                    break;
                case 'Ice':
                        pokeType.style.background = '#96D9D6';
                    break;
                case 'Fighting':
                        pokeType.style.background = '#C22E28';
                    break;
                case 'Poison':
                        pokeType.style.background = '#A33EA1';
                    break;
                case 'Ground':
                        pokeType.style.background = '#E2BF65';
                    break;
                case 'Flying':
                        pokeType.style.background = '#A98FF3';
                    break;
                case 'Psychic':
                            pokeType.style.background = '#F95587';
                        break;
                case 'Bug':
                        pokeType.style.background = '#A6B91A';
                    break;
                case 'Rock':
                        pokeType.style.background = '#B6A136';
                    break;
                case 'Ghost':
                        pokeType.style.background = '#735797';
                    break;
                case 'Dragon':
                        pokeType.style.background = '#6F35FC';
                    break;
                case 'Dark':
                        pokeType.style.background = '#705746';
                    break;
                case 'Steel':
                            pokeType.style.background = '#B7B7CE';
                        break;
                case 'Fairy':
                        pokeType.style.background = '#D685AD';
                    break;

            
                default:
                    break;
            }
        } 
    }
};

pokeType(myMock, i, x);

document.addEventListener('click', (e) =>{
    let elementId = e.target.id;
    if (elementId !== '') {
        let modal = document.getElementById(`modal-content-${(elementId)}`); 
        modal.style.display = 'flex';
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
  }
);

function greenColor() {
    let b = document.getElementById('try');
    if (window.location.href === "http://127.0.0.1:5500/pokedex/pokedex.html") {
        document.getElementById('home').style.background = 'rgba(148, 217, 126, 1)';
        document.getElementById('a-home').style.color = 'rgb(0, 0, 0)';
        document.getElementById('a-favorite').style.color = 'rgb(255, 255, 255)';
        console.log('true');
    } else if (window.location.href === 'http://127.0.0.1:5500/pokedex/favorites.html'){
        document.getElementById('a-home').style.color = 'rgb(255, 255, 255)';
        document.getElementById('home').style.background = ' rgba(2, 1, 102, 1)';
        document.getElementById('favorite').style.background = 'rgba(148, 217, 126, 1)';
        document.getElementById('a-favorite').style.color = 'rgb(0, 0, 0)';
        console.log('false');
        console.log(window.location.href);
    }
    
};
greenColor();

