let currentPokemon;
let currentIndex = 1;
const pokemonArray = [];


async function getPokemonData() {

    const pokemonPerPage = 20;

    for (let i = currentIndex; i < currentIndex + pokemonPerPage; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push(data);
    }
    render20Pokemon();
    currentIndex += pokemonPerPage;
}

function numberFormatter(pokemon) {
    let id = pokemon['id'];
    if (id < 10) {
        return `00${id}`;
    } else if (id < 100) {
        return `0${id}`;
    } else {
        return `${id}`;
    }
}

function firstLetterBig(pokemon) {
    let name = pokemon['name'];
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function createOpenCart(index) {
    let container = document.getElementById('open-pokemon-cart');
    container.innerHTML = '';
    container.innerHTML = createPokemonDataHTML(pokemonArray[index], index);  
}

console.log(pokemonArray)

function render20Pokemon(){
    let container = document.getElementById('small-cart');
    container.innerHTML = '';
    for (let i = 0; i < pokemonArray.length; i++) {
        container.innerHTML += create20PokemonHTML(pokemonArray[i], i);  
    }
}

function firstLetterBigType(pokemon) {
    let type = pokemon['types'][0]['type']['name'];
    return type.charAt(0).toUpperCase() + type.slice(1);
}

function heightDivide10(pokemon){
    let height = pokemon['height'];
    return height / 10;
}

function weightDivide10(pokemon){
    let weight = pokemon['weight'];
    return weight / 10;
}

function firstLetterBigAbilitie(pokemon){
    let abilitie = pokemon['abilities'][0]['ability']['name'];
    return abilitie.charAt(0).toUpperCase() + abilitie.slice(1);
}

function loadMorePokemon(){
    getPokemonData();
}






// function renderPokemonInfo(){
//     // let pokemonName = currentPokemon['name'];
//     document.getElementById('pokemon-image').src = currentPokemon['sprites']['other']['home']['front_default'];
//     document.getElementById('pokemon-type1').innerHTML = currentPokemon['types']['0']['type']['name'];
//     document.getElementById('type').innerHTML = currentPokemon['types']['0']['type']['name'];
//     document.getElementById('height').innerHTML = currentPokemon['height'];
//     document.getElementById('weight').innerHTML = currentPokemon['weight'];
//     document.getElementById('abilities').innerHTML = currentPokemon
//     if(currentPokemon['types'].length > 1){
//         document.getElementById('pokemon-type2').innerHTML = currentPokemon['types']['1']['type']['name'];
//     } else {
//         document.getElementById('pokemon-type2').classList.add('d-none');
//     }
// }

// function renderAboutSection(){
//     let aboutHTML = document.getElementById('about-section');
//     aboutHTML.innerHTML = '';
//     aboutHTML += ``;
// }

// function renderOpenPokemonCart(pokemonName){
//     let container = document.getElementById('open-pokemon-cart');
//     container.innerHTML = '';
//     container.innerHTML += renderOpenPokemonCartHTML(pokemonName);
// }

// function loadAbilties() {
//     let abilities = [];
//     for (let i = 0; i < currentPokemon['abilities'].length; i++) {
//         let ability = currentPokemon['abilities'][i]['ability']['name'];
//         abilities.push(ability);
//     }
//     return abilities;
// }



// let containerStyle = `background-color: ${typeColor};`;