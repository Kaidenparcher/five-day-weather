var userFormEl = document.querySelector('#user-form');
var searchAreaEl = document.querySelector('#city-search');
var weatherContainerEl = document.querySelector('#wather-container');
var weatherResults = document.querySelector('#weather-results');

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var cityName = nameInputEl.value.trim();
  
    if (cityName) {
      getCurrentWeather(cityName);
  
      weatherContainerEl.textContent = '';
      searchAreaEl.value = '';
    } 
}

var getCurrentWeather = function (weather) {
    // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    var apiUrl = 'api.openweathermap.org/data/2.5/forecast?' + searchAreaEl + '&appid={e7061ed9c868477223ac6802888315d2}';
  
    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data, weather);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to OpenWeather');
      });
  };



  userFormEl.addEventListener('submit', formSubmitHandler);






// e7061ed9c868477223ac6802888315d2


// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}