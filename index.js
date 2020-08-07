// variables
const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
    const response = await fetch("https://api.punkapi.com/v2/beers");
    const beerData = await response.json();
    const beerFragment = document.createDocumentFragment();
    for (beer of beerData) {
        const beerPara = document.createElement('p');
        beerPara.textContent = beer.name;
        beerFragment.appendChild(beerPara);
    }
    document.getElementsByClassName('beers')[0].appendChild(beerFragment);
}

getBeers();