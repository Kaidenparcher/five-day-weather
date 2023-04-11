var userFormEl = document.querySelector('#user-form');
var searchAreaEl = document.querySelector('#city-search');
var weatherContainerEl = document.querySelector('#wather-container');
var weatherResults = document.querySelector('#weather-results');
var APIKey = 'e7061ed9c868477223ac6802888315d2';
var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=london&appid=e7061ed9c868477223ac6802888315d2';

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var city = searchAreaEl.value;
  
    if (city) {
      getlocation(city);
  
      weatherContainerEl.textContent = '';
      searchAreaEl.value = '';
    } else {
      alert('Please enter proper City Name');
    }
  };
  var getlocation = function(city){
    var cityUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='+ city + '&appid=e7061ed9c868477223ac6802888315d2';


    fetch(cityUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data)
          getWeather(data, lat, lon);
          var lat = data[0]['lat'];
          var lon = data[0]['lon'];
          console.log(lat)
          console.log(lon)
        });
      } else {
        alert('Error: ' + response.statusText);
      }
    

  var getWeather = function (lat, lon) {
  
    var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon +' &units=imperial&appid=e7061ed9c868477223ac6802888315d2';


    fetch(apiUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data)
            displayWeather(data, );
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect to Weather');
      });
  };
});
  };
  userFormEl.addEventListener('submit', formSubmitHandler);
 