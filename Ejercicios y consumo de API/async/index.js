import {
  getCities,
} from './functionjs.js';

// variables
const cityInput = document.getElementById('city');
const nameCity = document.getElementById('name-city');
const nameCountry = document.getElementById('name-country');
const weather = document.getElementById('weather');
const tempCity = document.getElementById('temp-city');
const textoSen = document.getElementById('Texto-Sen');
const senTemp = document.getElementById('sen-temp');
const latitude = document.getElementById('lat');
const long = document.getElementById('long');
const imgIcon = document.getElementById('img-icon');

const loader = document.getElementById('loader');
const buttonSearch = document.getElementById('buttonSearch');




// comienzo de nuestro consumo de API


const showWeather = () => {
  loader.classList.remove('none');
  getCities(cityInput.value)
    .then((response) => {
      if (response) {
        loader.classList.add('none');
        console.log(response);
        nameCity.textContent = response.name + ", " + response.sys.country;
        //nameCountry.textContent = response.sys.country;
        weather.textContent = response.weather[0].main;
        tempCity.textContent = response.main.temp + "°";
        textoSen.textContent = "Sensacion Termica"
        senTemp.textContent = response.main.feels_like + "°";
        latitude.textContent = 'Latitude: ' + response.coord.lat;
        long.textContent = 'Longitude: ' + response.coord.lon;

        let icon = response.weather[0].icon;
        imgIcon.setAttribute('src', `https://openweathermap.org/img/wn/${icon}@2x.png`)
      }
    })
    .catch((err) => console.log(err));
}


buttonSearch.addEventListener('click', showWeather);

// document.addEventListener('keydown', showWeather);