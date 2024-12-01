const oradeaButton = document.querySelector('.oradea');
const bucharestButton = document.querySelector('.bucharest');
const timisoaraButton = document.querySelector('.timisoara');
const aradButton = document.querySelector('.arad');
const sibiuButton = document.querySelector('.sibiu');
const currentLocation = document.querySelector('.current-location');

function handleLocationChange(city) {
  localStorage.setItem('city', city);
  currentLocation.innerHTML = city;
  displayCurrentWeather(city);
  displayForecast(city);
}

oradeaButton.addEventListener('click', function () {
  handleLocationChange('Oradea');
});
bucharestButton.addEventListener('click', function () {
  handleLocationChange('București');
});
timisoaraButton.addEventListener('click', function () {
  handleLocationChange('Timișoara');
});
aradButton.addEventListener('click', function () {
  handleLocationChange('Arad');
});
sibiuButton.addEventListener('click', function () {
  handleLocationChange('Sibiu');
});
