function displayForecast(city) {
  const forecastEndpoint = getForecastEndpoint(city);

  fetch(forecastEndpoint)
    .then((response) => response.json())
    .then((data) => {
      const forecastContainer = document.querySelector('.weather-forecast');
      forecastContainer.innerHTML = '';
      const { list } = data;

      let idealForecastStructure = {};
      list.forEach((forecast) => {
        const { dt } = forecast;
        const day = getDayOfTheWeek(dt);
        if (idealForecastStructure[day] !== undefined) {
          idealForecastStructure[day].push(forecast);
        } else {
          idealForecastStructure[day] = [forecast];
        }
      });

      for (const day in idealForecastStructure) {
        forecastContainer.innerHTML += `<h2>${day}</h2>`;

        const forecastList = idealForecastStructure[day];
        forecastList.forEach((forecast) => {
          const { dt, main, weather } = forecast;
          const hours = getHour(dt);
          const temperature = Math.round(main.temp);
          const realFeel = Math.round(main.feels_like);
          const weatherDescription = weather[0].description;
          const weatherIcon = getWeatherIcon(weather[0].icon);

          const forecastContainer = document.querySelector('.weather-forecast');
          forecastContainer.innerHTML += `
           <div class="weather-forecast-box w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
              <div>${hours}</div>
              <div><img src="${weatherIcon}" alt="" /></div>
              <div class="fs-3"><strong>${temperature}°C</strong></div>
              <div>${weatherDescription}</div>
              <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>
            </div>
         `;
        });
      }
    });
}
