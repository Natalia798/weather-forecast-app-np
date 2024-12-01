let cityLocalStorage = localStorage.getItem('city');

if (cityLocalStorage === null) {
  cityLocalStorage = 'București';
}

currentLocation.innerHTML = cityLocalStorage;
displayCurrentWeather(cityLocalStorage);
displayForecast(cityLocalStorage);
