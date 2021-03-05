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
        
        return ``;
    }).join('');
    suggestions.innerHTML = html;
}

//const form = document.querySelector('.field');
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);