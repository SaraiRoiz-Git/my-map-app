// import React, { Component } from 'react';
// import * as am4core from "@amcharts/amcharts4/core";
// import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// am4core.useTheme(am4themes_animated);

// class Map extends Component {
//     // componentDidMount() {
//     //     let chart = am4core.create("chartdiv", am4charts.XYChart);

//     //     am4core.ready(function() {

//     //         // Themes begin
//     //         am4core.useTheme(am4themes_animated);
//     //         // Themes end

//     //         // Create map instance
//     //         var chart = am4core.create("chartdiv", am4maps.MapChart);

//     //         // Set map definition
//     //         chart.geodata = am4geodata_worldLow;

//     //         // Set projection
//     //         chart.projection = new am4maps.projections.Miller();

//     //         // Series for World map
//     //         var worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
//     //         worldSeries.exclude = ["AQ"];
//     //         worldSeries.useGeodata = true;

//     //         var polygonTemplate = worldSeries.mapPolygons.template;
//     //         polygonTemplate.tooltipText = "{name}";
//     //         polygonTemplate.fill = chart.colors.getIndex(0);
//     //         polygonTemplate.nonScalingStroke = true;

//     //         // Hover state
//     //         var hs = polygonTemplate.states.create("hover");
//     //         hs.properties.fill = am4core.color("#367B25");

//     //         // Series for United States map
//     //         var usaSeries = chart.series.push(new am4maps.MapPolygonSeries());
//     //         usaSeries.geodata = am4geodata_usaLow;

//     //         var usPolygonTemplate = usaSeries.mapPolygons.template;
//     //         usPolygonTemplate.tooltipText = "{name}";
//     //         usPolygonTemplate.fill = chart.colors.getIndex(1);
//     //         usPolygonTemplate.nonScalingStroke = true;

//     //         // Hover state
//     //         var hs = usPolygonTemplate .states.create("hover");
//     //         hs.properties.fill = am4core.color("#367B25");

//     //         }); // end am4core.ready()


//     // }

//     // componentWillUnmount() {
//     //     if (this.chart) {
//     //         this.chart.dispose();
//     //     }
//     // }

//     render() {
//         return (
//             <Chart
//             width={'500px'}
//             height={'300px'}
//             chartType="GeoChart"
//             data={[
//               ['Country', 'Popularity'],
//               ['Germany', 200],
//               ['United States', 300],
//               ['Brazil', 400],
//               ['Canada', 500],
//               ['France', 600],
//               ['RU', 700],
//             ]}
//             // Note: you will need to get a mapsApiKey for your project.
//             // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
//             mapsApiKey='AIzaSyAehE6kMUhBdd8FMJ5A-3OVG1q6S3c5h-8'
//             rootProps={{ 'data-testid': '1' }}
//           />
//         );
//     }
// }

// export default Map;