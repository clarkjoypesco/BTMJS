//Init Weather object
const weather = new Weather("Maasin City", "Southern Leyte");

//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather
    .getWeather()
    .then(results => console.log(results))
    .catch(err => console.log(err));
}
