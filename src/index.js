
import * as d3 from 'd3';
const city = document.querySelector("#city");
// const weathermessage = document.querySelector("#weather");
const image = document.querySelector("#weatherimage");
const dateDiv = document.querySelector(".dates");
window.globCity = ''
window.weatherData = ''

window.selDate =  (date) => {
    displayWeather(date)
}

const dateButtons = (dates) => {
    for (let i = 0; i <= 6; i++) {
        let date = new Date(dates[24 * i])
        let button = document.querySelector(`#date${i + 1}`);
        button.innerHTML = date.toLocaleDateString();
    }
}

const initialize = () => {
    globCity = 'New York'
    weatherUpdate(40.71, -74.01)
}

const weatherUpdate = (lat, lng) => {
    const weather = fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&hourly=temperature_2m&daily=weathercode&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=auto`)
    .then((response) => {return response.json() })
    .then((data) => {
        weatherData = data
        let dates = weatherData['hourly']['time']
        dateButtons(dates)
        displayWeather()
    });
};
// 데이터 잘 들어왔는지 크롬 확인 후 display


const displayWeather = (date_offset = 0) => {
    let startTemp = weatherData['hourly']['temperature_2m'].length / 7 * date_offset
    let endTemp = startTemp + 24

    let cityName = document.querySelector("#cityName");
    cityName.innerHTML = globCity

    let selTemp = weatherData['hourly']['temperature_2m'].slice(startTemp, endTemp)
    let temp = document.querySelector("#temp");
    temp.innerHTML = `${selTemp} °F` 
    const weathermessage = document.querySelector("#weather");
    // console.log(weathermessage)
    // debugger
    weathermessage.innerHTML = `weather code : should update ${weatherData['current_weather']['weathercode']}`

    d3Draw(selTemp)

}

google.maps.event.addDomListener(window, 'load', locationSel);

function locationSel() {

    var input = document.getElementById('autocomplete_search');

    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {

        var place = autocomplete.getPlace();
        // place variable will have all the information you are looking for.
        // $('#lat').val(place.geometry['location'].lat());
        // $('#long').val(place.geometry['location'].lng());        
        // console.log(place.geometry['location'].lat())
        // console.log(place.geometry['location'].lng())

        globCity = place['vicinity']
        weatherUpdate(place.geometry['location'].lat(), place.geometry['location'].lng())

    });

}

const d3Draw = (data) => {

// debugger
    
    const numPoints = 24;    
    const datas = [];
    for (let i = 0; i < numPoints; i++) {
        datas.push([i, data[i]]);
    }
    
    let margin = 200
    let fullwidth = 600    
    let fullheight = 400 
    let width = fullwidth - margin
    let height = fullheight - margin
    
    d3.select("svg").remove()
    var svg = d3.select(".d3Container").append("svg")
        .attr("width", '80%')
        .attr("height", fullheight)
        

    
    var xScale = d3.scaleLinear().domain([0, 23]).range([0, width]),
        yScale = d3.scaleLinear().domain([d3.min(datas, d => d[1]) - 3, d3.max(datas, d => d[1]) + 3]).range([height, 0]);

    var g = svg.append("g")        
        .attr("transform", "translate(" + 100 + "," + 100 + ")");    

    g.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(xScale).ticks(6))
       
        
        

    g.append("g")
        .call(d3.axisLeft(yScale));

    var Tooltip = d3.select("#dotTemp")
        .append("div")
        .style("opacity", 0)
        .attr("class", "tooltip")
        .style("background-color", "white")
        .style("border", "solid")
        .style("border-width", "2px")
        .style("border-radius", "5px")
        .style("padding", "5px")

    var mouseover = function (d) {
        Tooltip
            .style("opacity", 1)
        d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
    }
    var mousemove = function (d) {
        Tooltip
            .html("The exact value of<br>this cell is: " + d[1])
            .style("left", (d[0] + 70) + "px")
            .style("top", (d[1]+5) + "px")
    }
    var mouseleave = function (d) {
        Tooltip
            .style("opacity", 0)
        d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
    }

    svg.append('g')
        .selectAll("dot")
        .data(datas)        
        .enter()
        .append("circle")
        .attr('id', 'dotTemp')
        .attr("cx", function (d) { return xScale(d[0]); })
        .attr("cy", function (d) { return yScale(d[1]); })        
        .attr("r", 4)        
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)

 

    var line = d3.line()
        .x(function (d) { return xScale(d[0]); })
        .y(function (d) { return yScale(d[1]); })
        .curve(d3.curveMonotoneX)

    svg.append("path")
        .datum(datas)
        .attr("class", "line")
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "#CC0000")
        .style("stroke-width", "2");


        // svg.append('text')
    //     .attr('x', width / 2 + 100)
    //     .attr('y', 100)
    //     .attr('text-anchor', 'middle')
    //     .style('font-family', 'Helvetica')
    //     .style('font-size', 20)
    //     .text('Line Chart');

    
    // svg.append('text')
    //     .attr('x', width / 2 + 100)
    //     .attr('y', height - 15 + 150)
    //     .attr('text-anchor', 'middle')
    //     .style('font-family', 'Helvetica')
    //     .style('font-size', 12)
    //     .text('Independant');

    
    // svg.append('text')
    //     .attr('text-anchor', 'middle')
    //     .attr('transform', 'translate(60,' + height + ')rotate(-90)')
    //     .style('font-family', 'Helvetica')
    //     .style('font-size', 12)
    //     .text('Dependant');

    
}

initialize();

