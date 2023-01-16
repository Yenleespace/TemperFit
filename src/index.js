window.getWeather= function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true&temperature_unit=fahrenheit&timezone=America%2FNew_York')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("temperature").innerHTML = data['current_weather']['temperature']});
}
