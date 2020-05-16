const data = [
    { name: "Medellín", index2005: 3, index2006: 33 },
    { name: "Cali", index2005: 39, index2006: 45 },
    { name: "Bogotá", index2005: 7, index2006: 31 },
    { name: "Pereira", index2005: 35, index2006: 36 },
    { name: "Bucaramanga", index2005: 16, index2006: 23 },
    { name: "Cúcuta", index2005: 45, index2006: 45 },
    { name: "Armenia", index2005: 6, index2006: 16 }
];
const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px")
    ;
const rectangle = svg.append("rect")
.attr("x", 50)
.attr("y", 50)
.attr("width", 50)
.attr("height", 50)
;

d3.select("#start-button").on("click",()=>{
    rectangle.transition()
        .attr("x",250)
        .attr("width",100)
        .attr("height",100)
        .attr("opacity",0.8)//valor entre 0 y 1 blanco y negro
        .delay(500)//desde que lo pongo hasta que comienza la tansition
        //.duration(2000)//tiempo de transision
        .ease(d3.easeBounce)//https://github.com/d3/d3-ease
        .on("end",()=>{
            d3.select(this)
                .transition()
                .attr("x",150)
                .attr("width",75)
                .attr("height",75)
                ;
        })
        ;
});
d3.select("#reset-button").on("click",()=>{
    rectangle.transition()
        .attr("x",50)
        .attr("width", 50)
        .attr("height", 50)
        .attr("opacity",1)
        ;
})
const width = 700;
const height = 500;
const margin = { top:10, left:50, bottom: 40, right: 10};
const iwidth = width - margin.left - margin.right;
const iheight = height - margin.top -margin.bottom;
const svg2 = d3.select("#canvas2").append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px")
    ;


let g = svg2.append("g").attr("transform",`translate(${margin.left},${margin.top})`)
const y = d3.scaleLinear()
    .domain([0,50])
    .range([iheight,0]);
const x = d3.scaleBand()
    .domain(data.map(d=>d.name))
    .range([0,iwidth])
    .padding(0.1)
const bars = g.selectAll("rect").data(data);

const barras = bars.enter().append("rect")
.attr("class", "bar")
.style("fill", "steelblue")
.attr("x", d => x(d.name))
.attr("y", d => y(d.index2005))
.attr("height", d => iheight - y(d.index2005))
.attr("width", x.bandwidth())  

g.append("g")
.classed("x--axis", true)
.call(d3.axisBottom(x))
.attr("transform", `translate(0, ${iheight})`);  

g.append("g")
.classed("y--axis", true)
.call(d3.axisLeft(y));

d3.select("#index2006-button").on("click",()=>{
    barras.transition()
        .style("fill", "orange")
        .attr("y", d => y(d.index2006))
        .attr("height", d => iheight - y(d.index2006))
    ;
});
d3.select("#index2005-button").on("click",()=>{
    barras.transition()
        .style("fill", "steelblue")
        .attr("y", d => y(d.index2005))
        .attr("height", d => iheight - y(d.index2005))
    ;
});

