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