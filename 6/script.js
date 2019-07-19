
window.onload = () => {

  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  const input = document.getElementById("main-input");
  const output = document.getElementById('output');

  const cities = [];

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

  function findMatches(toMatch, list) {
    return list.filter(place => {
      const regex = new RegExp(toMatch, 'gi');
      return place.city.match(regex);
    });
  }

  let matches;

  input.addEventListener('input', () => {
    output.innerHTML = "";
    matches = findMatches(input.value, cities);
    if (input.value !== '') {
      matches.forEach(place => {
        output.innerHTML += `<p class="text output-text">${place.city} with a population of ${place.population}</p>`;
      })
    } else {
      output.innerHTML = "";
    }
  });

}
