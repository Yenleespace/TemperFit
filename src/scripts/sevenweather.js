class SevenWeather {
    constructor(sevenweather_div,weatherdata) {
        this.hourlytemp = weatherdata['hourly']
        this.daily = weatherdata['daily']
        this.sevenweather_div = sevenweather_div
        this.lowhigh =[]
        this.calTemp()
        this.showseventemp()
    }

    calTemp = () => {
        for (let i = 0; i < 7; i++) {
            let startTemp = this.hourlytemp['temperature_2m'].length / 7 * i
            let endTemp = startTemp + 24
            let temps = this.hourlytemp['temperature_2m'].slice(startTemp, endTemp)
            this.lowhigh.push([Math.min(...temps), Math.max(...temps)])
        }
    }

    showseventemp = () => {
        // console.log(this.sevenweather_div)
        var child = this.sevenweather_div.lastElementChild;
        while (child) {
            this.sevenweather_div.removeChild(child);
            child = this.sevenweather_div.lastElementChild;
        }

        for (let i = 0; i < 7; i++) {
            // debugger
            let container = document.createElement('div')
            let date = new Date(this.hourlytemp['time'][24 * i]).toLocaleDateString()
            container.id = 'sevendaysweather'
            container.innerHTML = `
                <p class="date">${date}</p>
                <img class="sweathercode_html" src="./src/images/weathercode/${this.daily['weathercode'][i]}.png"/>
                <p class"low">Low: ${this.lowhigh[i][0]}°F</p>
                <p class"high">High: ${this.lowhigh[i][1]}°F</p>
            `
            this.sevenweather_div.appendChild(container)
            // debugger
        }
    }
}

export default SevenWeather;