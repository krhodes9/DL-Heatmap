var map = L.map('map').setView([20.20, 17], 3);

var OpenTopoMap = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 14,
	ext: 'png'
}).addTo(map);

$.getJSON("https://opendata.arcgis.com/datasets/b3f84bff1c514484be7f4d65098f9372_0.geojson",function(data) {
  var coordinatesOnly = data.features.map(function(feature) {
    return [feature.geometry.coordinates[1], feature.geometry.coordinates[0], 1];
  });

  var heat = L.heatLayer(coordinatesOnly).addTo(map);
});


// make it so the heatmap becomes points at a certain zoom scale
// hint: https://gis.stackexchange.com/questions/258515/show-hide-markers-depending-on-zoom-level

