// variables
const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
    // fetch & process
    const beerPromise = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await beerPromise.json();

    // render data
    const beerFragment = document.createDocumentFragment();
    beers.forEach(beer => {
        const beerHeading = document.createElement('h3');
        beerHeading.textContent = beer.name;
        beerFragment.appendChild(beerHeading);
    })
    document.getElementsByClassName('beers')[0].appendChild(beerFragment);
}

// initial get
getBeers();