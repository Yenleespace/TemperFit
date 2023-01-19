class OutFit {
    constructor(outfit_div, weatherdata) {
        this.outfit_div = outfit_div;
        this.hourlytemp = weatherdata['hourly']['temperature_2m']
        this.avgtemp = [];
        this.calavgTemp();
        this.showoutfit();
    }
    calavgTemp = () => {

        for (let i = 0; i < 7; i++) {
            let sum = 0;
            let startTemp = this.hourlytemp.length / 7 * i;
            let endTemp = startTemp + 24;
            let temps = this.hourlytemp.slice(startTemp, endTemp)
            for (var key in temps) {
                sum += temps[key];
            }
            this.avgtemp.push(sum/temps.length)
            // debugger
        }
    }
    
    showoutfit = (i = 0) => {
        let cat;
        let avgtemp = this.avgtemp[i]
        if (avgtemp < 20) {
            cat = 0
        } else if (20 <= avgtemp && avgtemp < 30) {
            cat = 1
        } else if (30 <= avgtemp && avgtemp < 40) {
            cat = 2
        } else if (40 <= avgtemp && avgtemp < 50) {
            cat = 3
        } else if (50 <= avgtemp && avgtemp < 70) {
            cat = 4
        } else {
            cat  = 5
        }
        let outfitImage = this.outfit_div.querySelector(".outfit_html")
        outfitImage.src = `./src/images/dresscode/cat${cat}.png`
    }
}

export default OutFit;