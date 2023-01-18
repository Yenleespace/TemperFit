class OutFit {
    constructor(outfit_div, weatherdata) {
        this.outfit_div = outfit_div;
        this.hourlytemp = weatherdata['hourly']['temperature_2m']
    }
}

export default OutFit;