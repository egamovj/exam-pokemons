const main = document.querySelector('.main .row');
const pokemons = [{
        name: 'Charmander',
        title: 'Grass, Poison',
        weight: 6.9,
        age: 99,
        image: './images/004.png'
    },
    {
        name: 'Pikachu',
        title: 'Grass, Poison',
        weight: 6,
        age: 80,
        image: './images/004.png'
    },
    {
        name: 'Squirtle',
        title: 'Grass, Poison',
        weight: 10,
        age: 90,
        image: './images/004.png'
    },
    {
        name: 'Venusaur',
        title: 'Grass, Poison',
        weight: 4,
        age: 72,
        image: './images/004.png'
    },
    {
        name: 'Wartortle',
        title: 'Grass, Poison',
        weight: 15,
        age: 60,
        image: './images/004.png'
    },
    {
        name: 'Blastoise',
        title: 'Grass, Poison',
        weight: 5,
        age: 85,
        image: './images/004.png'
    },
    {
        name: 'Metapod',
        title: 'Grass, Poison',
        weight: 20,
        age: 67,
        image: './images/004.png'
    },
    {
        name: 'Kakuna',
        title: 'Grass, Poison',
        weight: 19,
        age: 75,
        image: './images/004.png'
    },
]

const buttonAtoZ = document.querySelector('.a-z');
const buttonZtoA = document.querySelector('.z-a');
const buttonLowtoHighWeight = document.querySelector('.low-high');
const buttonHightoLowWeight = document.querySelector('.high-low');
const totalWeight = document.getElementById('total-weight');
const totalPokemons = document.getElementById('total-pokemons');

function updateCard() {
    main.innerHTML = '';
    pokemons.forEach((pokemon) => {
        const columns = document.createElement('div');
        columns.classList.add('col-lg-3', 'cards-pokemon');

        const card = document.createElement('div');
        card.classList.add('card');
        columns.appendChild(card);

        const image = document.createElement('img');
        image.src = pokemon.image;
        image.alt = pokemon.name;
        card.appendChild(image);

        const texts = document.createElement('div');
        texts.classList.add('texts');
        card.append(texts);

        const name = document.createElement('h4');
        name.textContent = pokemon.name;
        texts.appendChild(name);

        const title = document.createElement('h5');
        title.textContent = pokemon.title;
        texts.appendChild(title);

        const bottom = document.createElement('div');
        bottom.classList.add('ageAndWeight');
        texts.append(bottom);

        const weight = document.createElement('h4');
        weight.textContent = pokemon.weight + ' kg';
        bottom.appendChild(weight);

        const age = document.createElement('h4');
        age.textContent = pokemon.age + ' age';
        bottom.appendChild(age);

        main.appendChild(columns);
    });
    totalPokemons.textContent = pokemons.length;
    const total = pokemons.reduce((acc, car) => acc + car.weight, 0);
    totalWeight.textContent = total + ' kg';
}

updateCard();

if (buttonAtoZ) {
    buttonAtoZ.addEventListener('click', () => {
        pokemons.sort((a, b) => a.name.localeCompare(b.name));
        updateCard();
    })
}
if (buttonZtoA) {
    buttonZtoA.addEventListener('click', () => {
        pokemons.sort((a, b) => b.name.localeCompare(a.name));
        updateCard();
    })
}

if (buttonLowtoHighWeight) {
    buttonLowtoHighWeight.addEventListener('click', () => {
        pokemons.sort((a, b) => a.weight - b.weight);
        updateCard();
    })
}
if (buttonHightoLowWeight) {
    buttonHightoLowWeight.addEventListener('click', () => {
        pokemons.sort((a, b) => b.weight - a.weight);
        updateCard();
    })
}