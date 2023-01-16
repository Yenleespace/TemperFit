// class Example {
//     constructor(ele) {        
//         this.ele = ele;
//         this.ele.innerHTML = "<h1>It's ===ALIVE!!!</h1>"      

//         this.handleClick = this.handleClick.bind(this);
//         this.ele.addEventListener('click', this.handleClick)
//     }

//     handleClick(e) {        
//         e.preventDefault();
//         this.ele.children[0].innerText = 'Ouch!'
//     }
// }

// export default Example;

function getWeather() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,visibility&daily=sunrise,sunset&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&past_days=7')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("temperature").innerHTML =
        data['temperature']
    });
}