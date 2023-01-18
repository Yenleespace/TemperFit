class SevenWeather {
    constructor(sevenweather_div,weatherdata) {
        this.hourlytemp = weatherdata['hourly']
        this.daily = weatherdata['daily']
        this.sevenweather_div = sevenweather_div
        this.lowhigh =[]
        this.calTemp()
        // this.showseventemp()
    }

    calTemp = () => {
        for (let i = 0; i < 7; i++) {
            let startTemp = this.hourlytemp['temperature_2m'].length / 7 * i
            let endTemp = startTemp * 24
            let temps = this.hourlytemp['temperature_2m'].slice(startTemp, endTemp)
            this.lowhigh.push([Math.min(...temps), Math.max(...temps)])
        }
    }

}

export default SevenWeather;