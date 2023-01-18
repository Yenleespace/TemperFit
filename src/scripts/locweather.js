class LocWeather {
    constructor(cityname='New York, NY, USA', lat = 40.71, lng = -74.01) {
        this.cityname = cityname;
        this.lat = lat;
        this.lng = lng;
        this.weatherData = {};
    }
}

export default LocWeather;