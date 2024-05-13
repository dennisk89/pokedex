function createPokemonDataHTML(pokemon) {
    return `
    <div id="pokedex" class="${pokemon.types[0].type.name} bgimg_${pokemon.types[0].type.name}" >
            <div class="dp-center">
                <h1 id="pokemon-name">${firstLetterBig(pokemon)}</h1>
                <div>#${numberFormatter(pokemon)}</div>
            </div>
            <div class="justify-space-between">
            <div class="pokemon-type bg_${pokemon.types[0].type.name}"></div>
            ${pokemon.types[1] ? `<div class="bg_${pokemon.types[1].type.name} pokemon-type"></div>` : ''}
            </div>
        </div>
        <div class="info-container">
            <img src="${pokemon.sprites.other.home.front_default}" id="pokemon-image" alt="">
        </div>
        <div class="navbar">
            <p>About</p>
            <p>Base Stats</p>
            <p>Evolution</p>
            <p>Moves</p>

        </div>
        <div class="about-section">
            <div>
                <p>Type</p>
                <p>Height</p>
                <p>Weight</p>
                <p>Abilities</p>
            </div>
            <div>
                <p id="type">${firstLetterBigType(pokemon)}</p>
                <p id="height">${heightDivide10(pokemon)}m</p>
                <p id="weight">${weightDivide10(pokemon)}kg</p>
                <p id="abilities">${firstLetterBigAbilitie(pokemon)}</p>
            </div>
        </div>`
        ;
}

function create20PokemonHTML(pokemon, i) {
    return `
    <div onclick="createOpenCart(${i})" id="small-info${i}" class="small-info ${pokemon.types[0].type.name}">
    <img src="${pokemon.sprites.other.home.front_default}" alt="${pokemon.name}">
        <div>
        <div class="pokemon-id">#${numberFormatter(pokemon)}</div>
        <div class="pokemon-name">${firstLetterBig(pokemon)}</div>
        </div>
        <div class="justify-space-between padding20px">
        <div class="bg_${pokemon.types[0].type.name} pokemon-type"></div>
        ${pokemon.types[1] ? `<div class="bg_${pokemon.types[1].type.name} pokemon-type"></div>` : ''}
        </div>
    </div>
    `;
}