async function windowActions() {
    console.log('Window loaded');
    const form = document.querySelector('.field');
    const search = document.querySelector('#search');
    const request = await fetch('/api');
    const data = await request.json();
    console.table(data);
    form.addEventListener('input', async (event) => {
        console.log('input', event.target.value)
    });
}
/*
const endpoint = https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json

const zip = []

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => zip.push(...data))

function findMatches(zipToMatch, zip) {
    return zip.filter(place => {
        const regex = new RegExp(zipToMatch, 'gi');
        return place.zip.match(regex)
    });
}
*/ 