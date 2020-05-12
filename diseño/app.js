
const url = "https://gist.githubusercontent.com/josejbocanegra/d3b9e9775ec3a646603f49bc8d3fb90f/raw/3a39300c2a2ff8644a52e22228e900251ec5880a/population.json";
const url2 = "https://gist.githubusercontent.com/josejbocanegra/000e838b77c6ec8e5d5792229c1cdbd0/raw/83cd9161e28e308ef8c5363e217bad2b6166f21a/countries.json";
d3.json(url).then(data => {
    max = 0;
    for(let i = 0; i < data.length ;i++){
        if (data[i].value > max){
            max = data[i].value;  
        }
    }
    console.log(max);
    const canvas = d3.select("#canvas");
    const width = 700;
    const height = 500;
    const margin = { top:10, left:50, bottom: 40, right: 10};
    const iwidth = width - margin.left - margin.right;
    const iheight = height - margin.top -margin.bottom;

    const svg = canvas.append("svg");
    svg.attr("width", width);
    svg.attr("height", height);

    let g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    const y = d3.scaleBand() 
        .domain(data.map(d => d.name))
        .range([iheight, 0])
        .padding(0.1);
    const x = d3.scaleLinear()
        .domain([0,1100000]) 
        .range([0, iwidth]);
     

    const bars = g.selectAll("rect").data(data);

    bars.enter().append("rect")
    .attr("class", "bar")
    .style("fill", "steelblue")
    .attr("y", d => y(d.name))
    .attr("x", d => x(d.value))
    .attr("height", d => iheight - y(d.name))
    .attr("width", y.bandwidth())  

    g.append("g")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  

    g.append("g")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));

    d3.json(url2).then(data2 => {
    var svgContainer = d3.select("#canvas2").append("svg")
        .attr("width", 200)
        .attr("height", 200);
        max = 0;
        for(let i = 0; i < data2.length ;i++){
            if (data2[i].population > max){
                max = data2[i].population;  
            }
        }
        console.log(max);
        for(let i = 0; i < data2.length ;i++){
            
            let circle = svgContainer.append("circle")
                            .attr("cx", data2[i].purchasingpower )
                            .attr("cy", data2[i].lifeexpectancy)
                            .attr("r", (data2[i].population/max)*50);
        }
    });
    
/**
    const canvas2 = d3.select("#canvas2");

    const svg2 = canvas2.append("svg");
    svg2.attr("width", width);
    svg2.attr("height", height);

    let g2 = svg2.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    g2.append("g2")
    .classed("x--axis", true)
    .call(d3.axisBottom(x))
    .attr("transform", `translate(0, ${iheight})`);  
    g2.append("g2")
    .classed("y--axis", true)
    .call(d3.axisLeft(y));
*/
});