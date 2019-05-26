//Init Weather object
const weather = new Weather("Maasin City", "Southern Leyte");

//Init UI
const ui = new UI();
//Get weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);
// weather.changeLocation('Miami', 'FL');

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}
