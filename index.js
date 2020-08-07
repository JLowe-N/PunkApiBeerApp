// variables
const urlBase = "https://api.punkapi.com/v2/beers";
const filterABV = document.getElementById("filterABV");
let optionsABV = "";

// filters
filterABV.addEventListener("change", e => {
    const value = e.target.value;

    switch (value) {
        case "all":
            optionsABV = "";
            break
        case "weak":
            optionsABV = "abv_lt=4.6"; // built-in to Punk API
            break
        case "medium":
            optionsABV = "abv_gt=4.5&abv_lt=7.6"; // gt greater than, lt less than
            break
        case "strong":
            optionsABV = "abv_gt=7.5";
            break
    }

    getBeers();
})

async function getBeers() {
    const url = urlBase + "?" + optionsABV
    // fetch & process
    const beerPromise = await fetch(url);
    const beers = await beerPromise.json();

    // render data
    const beersDiv = document.querySelector('.beers');

    let beerHtml = "";

    beers.forEach(beer => {
        beerHtml += `
        <div class='beer-wrapper card'>
            <div class='beer'>
                <img class='beer__img' src="${beer.image_url}">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${beer.abv}%</span>
                    <span>IBU: ${beer.ibu}</span>
                </span>
            </div>
            <div class='beer__content'>
                <div class='beer__name'>${beer.name}</div>
                <div class='beer__tagline'>${beer.tagline}</div>
                <div class='beer__description'>${beer.description}</div>
                <div class='beer__food-pairing'>
                    Pair with: ${beer.food_pairing.join(', ')}
                </div>
            </div>
        </div>
       `;
    });

    beersDiv.innerHTML = beerHtml;
}

// initial get
getBeers();