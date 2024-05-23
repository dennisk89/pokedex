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

function firstLetterBigType(pokemon) {
    let type = pokemon['types'][0]['type']['name'];
    return type.charAt(0).toUpperCase() + type.slice(1);
}

function firstLetterBigTypeTwo(pokemon) {
    let type = pokemon['types'][1]['type']['name'];
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