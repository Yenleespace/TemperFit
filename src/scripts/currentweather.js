const weatherDesc = require('./weathercode.json');

class CurrentWeather {
    constructor(curweather, weatherdata) {
        this.curtemp = curweather.querySelector('.curtemp_html')
        this.curcode = curweather.querySelector('.curcode_html')
        this.curdesc = curweather.querySelector('.curdesc_html')
        this.displayCurTemp(weatherdata['current_weather'])
    }
    displayCurTemp(weatherdata) {
        let weathercode = weatherdata['weathercode']
        this.curtemp.innerHTML = `${weatherdata['temperature']} °F`
        this.curcode.src = `./src/images/weathercode/${weathercode}.png`
        this.curdesc.innerHTML = weatherDesc[weathercode]
    }
}

export default CurrentWeather;