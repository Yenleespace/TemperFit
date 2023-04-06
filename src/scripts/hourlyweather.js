import * as d3 from 'd3';

class HourlyWeather {
    constructor(hourlytemp_div, weatherdata) {
        this.hourlytemp = weatherdata['hourly']
        this.hourlytemp_div = hourlytemp_div
        this.dates = weatherdata['hourly']['time']
        this.temps = []
        this.displayweather()        
    }

    displayweather = (date = 0) => {
        this.dateButtons()
        this.selTemp(date)
        this.d3Draw(this.temps)
    }

    dateButtons = () => {
        for (let i = 0; i <= 6; i++) {
            let date = new Date(this.dates[24 * i]) // JS built-in Class Date
            let button = this.hourlytemp_div.querySelector(`#date${i + 1}`);
            button.innerHTML = date.toLocaleDateString();            
            // debugger
        }
    }
    selectedDate = (offset = 0) => {        
        const selectedDate = document.querySelector('.selectedDate')
        let seldate = this.hourlytemp_div.querySelector(`#date${offset + 1}`);
        selectedDate.innerHTML=seldate.innerHTML;
    }

    selTemp = (date_offset = 0) => {
        let startTemp = this.hourlytemp['temperature_2m'].length / 7 * date_offset
        let endTemp = startTemp + 24
        this.temps = this.hourlytemp['temperature_2m'].slice(startTemp, endTemp)
    }

    d3Draw = (data) => {
        const numPoints = 24;
        const datas = [];
        for (let i = 0; i < numPoints; i++) {
            datas.push([i, data[i]])
        }

        let margin = 150
        let fullwidth = d3.select("svg").node().getBoundingClientRect().width
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
            .attr('id', 'tooltip')
            .attr('style', 'position: absolute; opacity: 0;');

        var mouseover = function (d) {

            Tooltip.transition().duration(200).style('opacity', 1).text(d[0])

        }
        var mousemove = function (d) {
            Tooltip
                .style('left', event.pageX + 70 + 'px')
                .style('top', event.pageY + 'px')
        }
        var mouseleave = function (d) {
            Tooltip.style('opacity', 0)
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
    }
}

export default HourlyWeather;