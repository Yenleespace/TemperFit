import LocWeather from './scripts/locweather';
import CurrentWeather from './scripts/currentweather';
import HourlyWeather from './scripts/hourlyweather';
import SevenWeather from './scripts/sevenweather';
import OutFit from './scripts/outfit';

const cityname_div = document.querySelector('.cityName')// select current weather in html class
const curweather_div = document.querySelector('.currentWeather_html')// select current weather in html class
const hourlytemp_div = document.querySelector('.hourlyTemp_html')// select hourly temperature in html class
const sevenweather_div = document.querySelector('.sevenweather_html')
const outfit_div = document.querySelector('.outfit_div')
const selectedDate = document.querySelectorAll('.selectedDate')

var location
var currentweather
var hourlytemp
var sevenweather
var outfit

// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const weatherUpdate = (location) => {
    const weather = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lng}&hourly=temperature_2m&daily=weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
    .then((response) => {return response.json() })
    .then((data) => {
        cityname_div.innerHTML = location.cityname
        currentweather = new CurrentWeather(curweather_div, data)
        hourlytemp = new HourlyWeather(hourlytemp_div, data)
        sevenweather = new SevenWeather(sevenweather_div, data)
        outfit = new OutFit(outfit_div, data)
        hourlytemp.selectedDate();
    });
};

google.maps.event.addDomListener(window, 'load', locationSel);

function locationSel() {

    var input = document.getElementById('autocomplete_search');

    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {

        var place = autocomplete.getPlace();
        
        location.cityname = place['formatted_address']
        location.lat = place.geometry['location'].lat()
        location.lng = place.geometry['location'].lng()
        weatherUpdate(location)

    });
}

window.selDate = (date) => {
    hourlytemp.displayweather(date)
    outfit.showoutfit(date)
    hourlytemp.selectedDate(date);
}

location = new LocWeather()
weatherUpdate(location)
