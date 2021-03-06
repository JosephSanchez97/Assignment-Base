/*async function windowActions() {
    console.log('Window loaded');
    const form = document.querySelector('.field');
    const search = document.querySelector('#search');
    const suggestions = document.querySelector('.suggestions');

    const request = await fetch(endpoint);
    const data = await request.json();
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        console.log('submit fired', search.value);
        const display = data.filter((record) => 
            record.zip === search.value);

            console.log(display);
            console.table(display);
        });

    search.addEventListener('input', (event) => {
        console.log('input', event.target.value)
        const display = data.filter((record) => {
            return record.city.toUpperCase().includes(event.target.value.toUpperCase()) || record.zip.includes(event.target.value);
        });
display.forEach(restaurant => {
    const newItem = document.createElement('li');
    newItem.classList.add('list-item');
    newItem.innerHTML = `
    <strong>${restaurant.name}</strong>
    ${restaurant.category}
    ${restaurant.address_line_1}
    ${restaurant.city}
    ${restaurant.zip}
    `;
    suggestions.append(newItem);
        });
})
};
window.onload = windowActions;

        //const request = await fetch('/api', {
          //  method: 'POST',
            //headers: {
              //  'Content-Type': 'application/json'
        //},
        //body: JSON.stringify({ data: search.value})
  //      });
//        const data = await request.json();
    //    console.log(data);
        //console.table(data);

*/
/* async function windowActions() {
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const zipcodes = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => zipcodes.push(...data))

function findMatches(wordToMatch, zipcodes) {
    return zipcodes.filter(restaurant => {
        const regex = new RegExp(wordToMatch, 'gi');
        return restaurant.zipcode.match(regex)
    });

}

function displayMatches() {
    //console.log(this.value);
    const matchArray = findMatches(this.value, zipcodes);
    //console.log(matchArray)
    const html = matchArray.map(restaurant => {
        const restaurantName = restaurant.name;
        const addressLine1 = restaurant.address_line_1;
        const addressLine2 = restaurant.address_line_2;
        const [category] = restaurant;

        return `
        <div class = "box is-medium"> 
        <li> 
            <div class = "name"> ${restaurantName} </div>
            <div class = "address"> ${addressLine1} </div>
            <div class = "address"> ${addressLine2} </div>
            <div class = "category"> ${category} </div>

        </li>
        </div>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

//const form = document.querySelector('.field');
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('input', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
}

window.onload = windowActions; */

async function windowActions() {
    const search = document.querySelector("#search");
    //const searchByName = document.querySelector("#name");
    //const searchByFoodType = document.querySelector("#foodType");
    //const searchByZipCode = document.querySelector("#zipCode");
    const filteredList = document.querySelector("#filteredList");
  
    let filteredPlaces = [];
    let searchType = "name";
  
    function findMatches(wordToMatch, places) {
      return places.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.name.match(regex);
      });
    }
    function removeChildren(parent) {
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  
    function displayMatch() {
      fetch("/api")
        .then(res => res.json())
        .then(json => {
          filteredPlaces = findMatches(search.value, json);
          removeChildren(filteredList);
          filteredPlaces.forEach(place => {
            filteredList.insertAdjacentHTML(
              "beforeend",
              `<li class='card mt-4'>
                <div class="card-content">
                    <div class="content">
                        <p class="title is-3">${place.name}</p>
                        <p class="subtitle is-5">${place.category}</p>
                        <address>${place.address_line_1}<br/>${place.address_line_2}<br/>
                            ${place.city}, ${place.state}. ${place.zip}</address>
                    </div>
                </div>
                </li>`
            );
          });
        });
    }
  
    search.addEventListener("change", displayMatch);
    search.addEventListener("keyup", displayMatch);
  //  radio.addEventListener("change", displayMatch);
  }
  window.onload = windowActions;