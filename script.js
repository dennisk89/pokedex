
let currentIndex = 1;
const pokemonArray = [];
let filteredPokemonArray = [];
let currentPokemonIndex = -1;


async function getPokemonData() {
    showLoadingSpinner();
    const pokemonPerPage = 20;
    for (let i = currentIndex; i < currentIndex + pokemonPerPage; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await response.json();
        pokemonArray.push(data);
    }
    currentIndex += pokemonPerPage;
    hideLoadingSpinner();
    render20Pokemon();
}

function render20Pokemon(){
    let container = document.getElementById('small-cart');
    container.innerHTML = '';
    for (let i = 0; i < pokemonArray.length; i++) {
        container.innerHTML += create20PokemonHTML(pokemonArray[i], i);  
    }
}

function createOpenCart(index) {
    currentPokemonIndex = index;
    let container = document.getElementById('open-pokemon-cart');
    let backgroundContent = document.getElementById('main-content');
    let blurrBackground = document.getElementById('background-overlay');
    blurrBackground.classList.remove('d-none')
    document.body.classList.add('no-scroll');
    backgroundContent.classList.add('no-pointer-events');
    container.classList.remove('d-none');
    container.style.display = 'block'; 
    container.innerHTML = '';  
    container.innerHTML = createPokemonDataHTML(pokemonArray[index], index);
}

function loadMorePokemon(){
    getPokemonData();
}

function closeOpenCart(){
    let openCart = document.getElementById('open-pokemon-cart');
    let backgroundContent = document.getElementById('main-content');
    let blurrBackground = document.getElementById('background-overlay');
    blurrBackground.classList.add('d-none')
    backgroundContent.classList.remove('blurred');
    openCart.style.display = 'none';
    backgroundContent.classList.remove('no-pointer-events');
    document.body.classList.remove('no-scroll');
}


function showLoadingSpinner() {
    let spinner = document.getElementById('center-loading-spinner');
    let bg = document.getElementById('loading-spinner');
    let hideContent = document.getElementById('main-content');
    hideContent.classList.add('d-none');
    bg.classList.remove('d-none');
    spinner.style.display = 'flex';
}

function hideLoadingSpinner() {
    let spinner = document.getElementById('center-loading-spinner');
    let bg = document.getElementById('loading-spinner');
    let showContent = document.getElementById('main-content');
    showContent.classList.remove('d-none');
    bg.classList.add('d-none');
    spinner.style.display = 'none';
}

function nextPokemon() { 
    let nextPokemon = currentPokemonIndex + 1; 
    if (nextPokemon >= pokemonArray.length) { 
        nextPokemon = 0;
    }
    createOpenCart(nextPokemon); 
}

function lastPokemon() { 
    let lastPokemon = currentPokemonIndex - 1;  
    if (lastPokemon < 0) {   
        lastPokemon = pokemonArray.length - 1; 
    }
    createOpenCart(lastPokemon); 
}



